# Marka Kimliği — Figma "A|S 3" dosyasından çıkarıldı

Dosya: figma.com/design/puAEW5WDc6XXtSAIzL4llQ (sahibi: Elif Hoşkeser)
Not: Bu dosya **marka kimliği** dosyası — logo, renk, tipografi ve kurumsal
materyaller. İçinde web sitesi sayfa tasarımı yok.

- Sayfa 1: Logo, renk paleti, tipografi (13 pano)
- Sayfa 2: Kurumsal materyaller (antetli kağıt, kartvizit, dosya, zarf)
- Sayfa 3: 15 sayfalık marka sunumu

---

## Logo

- Kelime logosu: **AKARCA SAHANTURK** — geniş, geometrik sans-serif, harf araları açık.
- İkincil işaret: köşeli ayraç (bracket) sembolü. İki kullanımı var:
  - Kelimeler arasında ayraç: `AKARCA ⌐┘ SAHANTURK`
  - Tek başına ikon olarak (favicon ve sosyal medya için uygun)
- Dikey kullanım: iki satır, sağa hizalı.
- Hem beyaz zemin üzerine siyah, hem siyah zemin üzerine beyaz versiyon var.

## Renk paleti

**V1 — Black**

| Renk | Kod | Kullanım önerisi |
|---|---|---|
| Siyah | `#040404` | Ana zemin / metin |
| Koyu gri | `#131313` | İkincil zemin |
| Orta gri | `#474747` | Ayraç, ikincil metin |
| Açık gri | `#E5E5E5` | Açık zemin |

**V2 — Black & Midnight**

| Renk | Kod | Kullanım önerisi |
|---|---|---|
| Siyah | `#040404` | Ana zemin / metin |
| Gece lacivert | `#131936` | Vurgu rengi |
| Koyu gri | `#232323` | İkincil zemin |
| Kırık beyaz | `#FCF9F3` | Açık zemin |

> Eren'in notunda "altta lacivert bir imleç" dediği renk büyük olasılıkla `#131936`.

## Tipografi — iki seçenek var, karar verilmedi

**Seçenek A — Libre Baskerville + DM Sans**
"Gelenekten gelen ama modern konuşan" eşleşme.

- Başlıklar: Libre Baskerville Medium 500 — 28-36px
- Alt başlıklar: Libre Baskerville Regular 400 — 20-24px
- Gövde metin: DM Sans Regular 400 — 16-18px, satır aralığı 1.6
- Küçük metin / etiket: DM Sans Light 300 — 12-14px
- Vurgu: DM Sans Medium 500

**Seçenek B — Space Grotesk + Inter**
"Eşit çizgi kalınlığı" mantığıyla logoya daha yakın; ekran için optimize.

- Başlıklar: Space Grotesk Medium 500 — 28-36px, harf aralığı +0.01em
- Alt başlıklar: Space Grotesk Regular 400 — 20-24px
- Gövde metin: Inter Regular 400 — 16px, satır aralığı 1.6
- UI / web: Inter Medium 500 — 14px
- Küçük metin: Inter Light 300 — 12px

> Panoda B seçeneği için ayrıca "UI/web" satırı var; yani ekran kullanımı
> düşünülerek hazırlanmış. Dört yazı tipi de Google Fonts'ta ücretsiz.

## Logo — çözüldü, dosya elimizde

Figma'daki logo hareketli olduğu için SVG dışa aktarımı boş çıkıyordu.
Mevcut taslak site (tahsinozyer.workers.dev) aynı logoyu ve animasyonu
kodla çalıştırıyor; oradan birebir alındı.

- `public/marka/logo-tam.svg` — kelime logosu + iki ayraç, tek parça vektör.
  viewBox 850x93. `fill="currentColor"` olduğu için rengi CSS'ten belirleniyor:
  siyah zeminde beyaz, beyaz zeminde siyah — ayrı dosya gerekmiyor.
- `src/components/Acilis.astro` — açılış animasyonunun bileşeni.

### Animasyonun ayarları (taslak siteden birebir)

| Öğe | Hareket | Süre | Gecikme | Eğri |
|---|---|---|---|---|
| Sağ üst ayraç | Soldan 402px kayarak gelir | 0.8sn | 0.1sn | cubic-bezier(.2,.7,.1,1) |
| Sol alt ayraç | Sağdan 402px kayarak gelir | 0.8sn | 0.1sn | cubic-bezier(.2,.7,.1,1) |
| Harfler | Görünürlük 0 → 1 | 0.5sn | 0.65sn | ease |
| Ekran | Kararır, site görünür | 0.5sn | 2.4sn | ease |

Toplam 2.9 saniye. `prefers-reduced-motion` açık olan kullanıcıda animasyon
kapanıyor, ekran 0.8sn'de geçiyor — erişilebilirlik için gerekli.

## Not: taslak site A seçeneğini kullanmış

Mevcut taslak sitede gövde yazı tipi **DM Sans** (17px), başlıklar
**Libre Baskerville**. Yani tipografi Seçenek A ile kurulmuş.
Karar hâlâ açık — B seçeneği (Space Grotesk + Inter) denenebilir.

## Elif'ten istenecek (isteğe bağlı)

- Logoda kullanılan yazı tipinin adı (vektöre çevrilmiş, artık zorunlu değil)
