# Başvuru formu — nasıl çalışır, ne kaldı

**Sayfa:** `/basvuru/` (TR) ve `/en/apply/` (EN). Ana sayfadaki Kariyer bölümündeki "Bize Katılın" düğmesi buraya gider.
**Servis:** Cloudflare Worker `as-basvuru` → https://as-basvuru.akarca-sahanturk.workers.dev (kod: `worker/`).

Form gönderilince:
1. Worker başvuruyu ve CV'yi Cloudflare KV'de 180 gün saklar (yedek).
2. Resend üzerinden CV ekli e-postayı eren@ ve atahan@ adreslerine gönderir.

## Kalan kurulum (bir kez, ~15 dk)
E-posta gönderimi için Resend hesabı ve alan adı doğrulaması gerekiyor. Yapılana kadar form çalışır, başvurular KV'ye düşer ama e-posta gitmez.

1. https://resend.com → ücretsiz üye ol (atahan@akarcasahanturk.com ile).
2. Resend'de **Domains → Add domain → akarcasahanturk.com**. Çıkan 3 DNS kaydını (1 MX, 2 TXT; `send.` ve `resend._domainkey` alt alan adlarında) alan adının DNS paneline ekle. Mevcut e-postanı etkilemez. Doğrulama birkaç dakika sürer.
3. Resend'de **API Keys → Create** (Sending access yeterli). Anahtarı kopyala.
4. Terminal'de:
   ```
   cd "/Users/ata/Documents/Claude/Projects/AS Web Sitesi/worker"
   npx wrangler secret put RESEND_API_KEY
   ```
   Anahtarı yapıştır, Enter. Bu kadar.

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
