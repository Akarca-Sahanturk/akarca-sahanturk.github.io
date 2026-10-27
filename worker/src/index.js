/* BAŞVURU SERVİSİ (Cloudflare Worker)
   Sitedeki başvuru formunu alır, CV ile birlikte kurucu ortaklara e-posta gönderir (Resend),
   yedek olarak başvuruyu KV'de 180 gün saklar.

   Ayarlar (wrangler.jsonc / secrets):
     ALICILAR        : başvuru alıcıları (virgülle ayrılmış)
     ILETISIM_ALICILAR: iletişim formu alıcıları (info@)
     ILETISIM_GONDEREN: iletişim e-postalarının gönderen adı
     GONDEREN        : Resend'de doğrulanmış alan adından gönderen adres
     IZINLI_KAYNAKLAR: formun bulunduğu site adresleri (CORS)
     RESEND_API_KEY  : secret — wrangler secret put RESEND_API_KEY
     BASVURULAR      : KV namespace bağlaması */

const AZAMI_BOYUT = 10 * 1024 * 1024;
const UZANTI = /\.(pdf|docx?)$/i;
const SAKLAMA_GUN = 180;

export default {
  async fetch(istek, env) {
    const kaynak = istek.headers.get('Origin') || '';
    const cors = corsBasliklari(kaynak, env);

    if (istek.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
    if (istek.method !== 'POST') return cevap({ ok: false, hata: 'yontem' }, 405, cors);
    if (!kaynakIzinli(kaynak, env)) return cevap({ ok: false, hata: 'kaynak' }, 403, cors);

    let fd;
    try { fd = await istek.formData(); } catch { return cevap({ ok: false, hata: 'bicim' }, 400, cors); }

    // bal küpü: botlar doldurur, insanlar görmez
    if ((fd.get('web') || '').toString().trim()) return cevap({ ok: true }, 200, cors);

    // İLETİŞİM FORMU (tur=iletisim): CV yok, konu var, alıcı info@
    if (temiz(fd.get('tur'), 20) === 'iletisim') return iletisim(fd, env, cors);

    const ad = temiz(fd.get('ad'), 120);
    const eposta = temiz(fd.get('eposta'), 160);
    const telefon = temiz(fd.get('telefon'), 40);
    const pozisyon = temiz(fd.get('pozisyon'), 60);
    const mesaj = temiz(fd.get('mesaj'), 4000);
    const dil = temiz(fd.get('dil'), 2) || 'tr';
    const cv = fd.get('cv');

    if (!ad || !eposta || !pozisyon) return cevap({ ok: false, hata: 'eksik' }, 400, cors);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) return cevap({ ok: false, hata: 'eposta' }, 400, cors);
    if (!(cv instanceof File) || !cv.size) return cevap({ ok: false, hata: 'cv' }, 400, cors);
    if (!UZANTI.test(cv.name)) return cevap({ ok: false, hata: 'cvTur' }, 400, cors);
    if (cv.size > AZAMI_BOYUT) return cevap({ ok: false, hata: 'cvBoyut' }, 400, cors);

    const zaman = new Date();
    const kimlik = zaman.toISOString().replace(/[:.]/g, '-') + '-' + kisalt(ad);
    const cvBayt = await cv.arrayBuffer();
    const cvAd = guvenliDosyaAdi(cv.name, ad);

    // 1) yedek kayıt (KV): meta + dosya
    if (env.BASVURULAR) {
      const ttl = SAKLAMA_GUN * 24 * 3600;
      await env.BASVURULAR.put('cv:' + kimlik, cvBayt, { expirationTtl: ttl, metadata: { ad: cvAd, tur: cv.type } });
      await env.BASVURULAR.put('basvuru:' + kimlik, JSON.stringify({ ad, eposta, telefon, pozisyon, mesaj, dil, zaman: zaman.toISOString(), cv: cvAd }), { expirationTtl: ttl });
    }

    // 2) e-posta (Resend)
    if (!env.RESEND_API_KEY) return cevap({ ok: true, not: 'eposta-ayarli-degil' }, 200, cors);

    const konu = (dil === 'en' ? 'Job application — ' : 'İş başvurusu — ') + ad + ' (' + pozisyon + ')';
    const govde = [
      'Ad Soyad: ' + ad,
      'E-posta: ' + eposta,
      'Telefon: ' + (telefon || '—'),
      'Pozisyon: ' + pozisyon,
      'Dil: ' + dil.toUpperCase(),
      'Tarih: ' + zaman.toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
      '',
      'Ön yazı:',
      mesaj || '—',
      '',
      'CV ektedir. Kayıt no: ' + kimlik,
    ].join('\n');

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.GONDEREN,
        to: env.ALICILAR.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: eposta,
        subject: konu,
        text: govde,
        attachments: [{ filename: cvAd, content: base64(cvBayt) }],
      }),
    });
    if (!r.ok) {
      const ayrinti = await r.text().catch(() => '');
      console.log('Resend hatası', r.status, ayrinti);
      return cevap({ ok: false, hata: 'eposta-gonderilemedi' }, 502, cors);
    }
    return cevap({ ok: true }, 200, cors);
  },
};

async function iletisim(fd, env, cors) {
  const ad = temiz(fd.get('ad'), 120);
  const eposta = temiz(fd.get('eposta'), 160);
  const konu = temiz(fd.get('konu'), 160);
  const mesaj = temiz(fd.get('mesaj'), 6000);
  const dil = temiz(fd.get('dil'), 2) || 'tr';
  if (!ad || !eposta || !mesaj) return cevap({ ok: false, hata: 'eksik' }, 400, cors);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(eposta)) return cevap({ ok: false, hata: 'eposta' }, 400, cors);

  const zaman = new Date();
  const kimlik = zaman.toISOString().replace(/[:.]/g, '-') + '-' + kisalt(ad);
  if (env.BASVURULAR) {
    await env.BASVURULAR.put('iletisim:' + kimlik, JSON.stringify({ ad, eposta, konu, mesaj, dil, zaman: zaman.toISOString() }), { expirationTtl: 90 * 24 * 3600 });
  }
  if (!env.RESEND_API_KEY) return cevap({ ok: true, not: 'eposta-ayarli-degil' }, 200, cors);

  const baslik = (dil === 'en' ? 'Website enquiry — ' : 'Görüşme talebi — ') + ad + (konu ? ' (' + konu + ')' : '');
  const govde = [
    'Ad Soyad: ' + ad,
    'E-posta: ' + eposta,
    'Konu: ' + (konu || '—'),
    'Dil: ' + dil.toUpperCase(),
    'Tarih: ' + zaman.toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
    '',
    'Mesaj:',
    mesaj,
    '',
    'Kayıt no: ' + kimlik,
  ].join('\n');
  const alicilar = (env.ILETISIM_ALICILAR || env.ALICILAR).split(',').map((s) => s.trim()).filter(Boolean);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + env.RESEND_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: env.ILETISIM_GONDEREN || env.GONDEREN, to: alicilar, reply_to: eposta, subject: baslik, text: govde }),
  });
  if (!r.ok) {
    console.log('Resend hatası (iletişim)', r.status, await r.text().catch(() => ''));
    return cevap({ ok: false, hata: 'eposta-gonderilemedi' }, 502, cors);
  }
  return cevap({ ok: true }, 200, cors);
}

function corsBasliklari(kaynak, env) {
  const h = { 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Max-Age': '86400', Vary: 'Origin' };
  if (kaynakIzinli(kaynak, env)) h['Access-Control-Allow-Origin'] = kaynak;
  return h;
}
function kaynakIzinli(kaynak, env) {
  if (!kaynak) return false;
  return (env.IZINLI_KAYNAKLAR || '').split(',').map((s) => s.trim()).filter(Boolean)
    .some((k) => k === kaynak || (k.startsWith('*.') && kaynak.endsWith(k.slice(1))));
}
function cevap(veri, durum, basliklar) {
  return new Response(JSON.stringify(veri), { status: durum, headers: { 'Content-Type': 'application/json; charset=utf-8', ...basliklar } });
}
function temiz(v, azami) { return (v == null ? '' : String(v)).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, azami); }
function kisalt(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 40) || 'basvuru';
}
function guvenliDosyaAdi(orijinal, ad) {
  const uz = (orijinal.match(/\.(pdf|docx?)$/i) || ['.pdf'])[0].toLowerCase();
  return 'CV-' + kisalt(ad) + uz;
}
function base64(buf) {
  const b = new Uint8Array(buf); let s = '';
  for (let i = 0; i < b.length; i += 0x8000) s += String.fromCharCode.apply(null, b.subarray(i, i + 0x8000));
  return btoa(s);
}
