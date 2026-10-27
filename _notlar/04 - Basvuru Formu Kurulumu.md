# Başvuru formu — nasıl çalışır, ne kaldı

**Sayfa:** `/basvuru/` (TR) ve `/en/apply/` (EN). Ana sayfadaki Kariyer bölümündeki "Bize Katılın" düğmesi buraya gider.
**Servis:** Cloudflare Worker `as-basvuru` → https://as-basvuru.akarca-sahanturk.workers.dev (kod: `worker/`).

Form gönderilince:
1. Worker başvuruyu ve CV'yi Cloudflare KV'de 180 gün saklar (yedek).
2. Resend üzerinden CV ekli e-postayı eren@ ve atahan@ adreslerine gönderir.

## Kurulum durumu (27.10.2026)
Tamamlandı: Resend hesabı (atahan@…), alan adı doğrulandı (İsimtescil DNS'ine `resend._domainkey` TXT, `rsend` ve `send` CNAME eklendi), API anahtarı worker'a secret olarak yüklendi, canlı test başvurusu ikinize de ulaştı.
Gönderen adres: basvuru@akarcasahanturk.com (sadece gönderir; cevaplar başvurucunun adresine gider — "yanıtla" doğrudan ona yazar).

## Başvuruları görmek (yedek kayıt)
```
cd "/Users/ata/Documents/Claude/Projects/AS Web Sitesi/worker"
npx wrangler kv key list --binding BASVURULAR --remote
npx wrangler kv key get --binding BASVURULAR --remote "basvuru:..."           # bilgiler
npx wrangler kv key get --binding BASVURULAR --remote "cv:..." > cv.pdf      # dosya
```

## Değişiklik yapınca
- Site: `sh .tools/gonder.sh` (GitHub) ve `npm run yayinla:cloudflare`
- Worker: `npm run yayinla:basvuru`
- Alıcı adresleri / izinli site adresleri: `worker/wrangler.jsonc` içindeki `vars`
