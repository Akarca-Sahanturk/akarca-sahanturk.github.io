# Siteyi kendin yönetme rehberi

Bu rehber, siteyi bana sormadan değiştirebilmen için yazıldı.
Hiçbir adımda kod bilmen gerekmiyor.

---

## 1. Siteyi bilgisayarında açmak

Terminal'i aç (Spotlight → "Terminal"), şunu yapıştır ve Enter'a bas:

```
cd ~/Documents/Claude/Projects/AS\ Web\ Sitesi && npm run dev
```

Birkaç saniye sonra ekranda bir adres çıkar: `http://localhost:4321`
Onu tarayıcıya yapıştır. Artık site karşında.

**Bir dosyayı kaydettiğin anda tarayıcı kendiliğinden güncellenir.** Yenilemene gerek yok.

Bitirince terminalde `Ctrl + C` yap.

---

## 2. Metinleri değiştirmek

Sitedeki neredeyse bütün yazılar **tek bir dosyada**:

```
src/data/icerik.ts
```

Bu dosyayı herhangi bir metin editörüyle aç. İçinde iki bölüm var: `tr` (Türkçe)
ve `en` (İngilizce). Yazıları tırnak işaretlerinin arasında bulur, değiştirir,
kaydedersin. Tırnakları ve virgülleri silme — sadece aradaki yazıyı değiştir.

**Örnek.** Ana sayfadaki büyük başlığı değiştirmek için `hero` bölümünü bul:

```
baslik: 'Vergi ve gümrük hukukunda, uygulanabilir çözümler.',
```

Tırnak içindeki cümleyi yaz, kaydet. Bitti.

### İletişim bilgileri

Aynı dosyanın en altında `buro` diye bir bölüm var. E-posta, telefon, adres ve
alan adı orada. Bir kez değiştirince sitenin her yerinde güncellenir.

---

## 3. Yeni yayın eklemek

Şu klasöre git:

```
src/content/yayinlar/tr/
```

İçindeki dosyalardan birini kopyala, adını değiştir (örneğin
`yeni-yazinin-adi.md`). Dosya adı aynı zamanda internet adresi olacak, o yüzden
Türkçe karakter ve boşluk kullanma — kelimeleri tire ile ayır.

Dosyayı aç, en üstteki bölümü doldur:

```
---
baslik: "Yazının başlığı"
ozet: "Bir iki cümlelik özet. Liste sayfasında bu görünür."
tarih: 2026-10-15
tur: makale
dil: tr
---
```

`tur` şunlardan biri olabilir: `duyuru`, `bulten`, `makale`.

Çizgilerin altına yazının kendisini yaz. Kaydet — **liste sayfası kendiliğinden
güncellenir**, başka hiçbir şey yapman gerekmez.

İngilizce yayın için aynısını `src/content/yayinlar/en/` klasöründe yap.

---

## 4. Renk veya yazı tipi değiştirmek

```
src/styles/tokens.css
```

Renkler ve yazı tipleri burada. Örneğin vurgu rengini değiştirmek için
`--renk-lacivert` satırındaki kodu değiştirmen yeterli — sitenin her yerinde
o renk güncellenir.

Tipografi şu an **Seçenek A** (Libre Baskerville + DM Sans). B seçeneğine
(Space Grotesk + Inter) geçmek istersen `--yazi-baslik` ve `--yazi-govde`
satırlarını değiştirmek yetiyor.

---

## 5. "Hazırlanıyor" yazan yerler

Metni henüz yazılmamış bölümler kesik çizgili bir kutu içinde duruyor. Bunlar
bilerek konuldu — sayfa boş görünmesin, ama neyin eksik olduğu da belli olsun diye.

Metin hazır olunca o kutuyu silip yerine yazıyı koymak yeterli.

Şu an "hazırlanıyor" olan yerler:

- Hakkımızda sayfasının tam metni
- Beş çalışma alanının ayrıntılı anlatımı
- Eren ve Ata'nın özgeçmişleri
- Kariyer sayfasındaki açık pozisyonlar
- KVKK Aydınlatma Metni
- Çerez Politikası
- Yayınların tam metinleri

---

## 6. Siteyi yayına almak

Site Cloudflare'de yayında: **https://akarca-sahanturk.pages.dev**

Bir değişiklik yapıp yayındaki siteyi güncellemek için Terminal'de:

```
cd ~/Documents/Claude/Projects/AS\ Web\ Sitesi && npm run yayinla
```

Yaklaşık 30 saniye sürer; bitince adres aynı kalır, içerik yenilenir.
(Cloudflare hesabına bir kez giriş yapıldı; tekrar sormaz.)

Gerçek alan adını (akarcasahanturk.com gibi) bağlamak istediğinde söyle,
Cloudflare panelinden beş dakikalık bir iş.

---

## Bozarsam ne olur?

Hiçbir şey. Bütün dosyalar metin dosyası; yanlış bir şey yaparsan Cmd+Z ile geri
alırsın. Site kendiliğinden bozulmaz, sadece senin değiştirdiğin kadar değişir.

Bir şey ters giderse bana ne yaptığını söyle, birlikte geri alırız.
