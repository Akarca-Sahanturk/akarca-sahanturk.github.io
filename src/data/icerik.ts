// Sitenin bütün metinleri burada.
// Bir yazıyı değiştirmek için sadece bu dosyayı düzenlemen yeterli.
// Kaynak: Tanıtım Özeti (v-1), ortakların özgeçmişleri.

export const diller = ['tr', 'en'] as const;
export type Dil = (typeof diller)[number];

export const icerik = {
  tr: {
    kod: 'tr',
    kokYol: '/',
    digerDil: { etiket: 'EN', yol: '/en/' },
    menu: [
      { ad: 'Hakkımızda', capa: 'hakkimizda' },
      { ad: 'Çalışma Alanları', capa: 'calisma-alanlari' },
      { ad: 'Yayınlar', capa: 'yayinlar' },
      { ad: 'Ekibimiz', capa: 'ekibimiz' },
      { ad: 'Kariyer', capa: 'kariyer' },
      { ad: 'İletişim', capa: 'iletisim' },
    ],
    hero: {
      etiket: 'İstanbul · Türkiye',
      baslik: 'Vergi ve gümrük hukukunda, uygulanabilir çözümler.',
      metin: 'Yerli ve yabancı müvekkillerimize, yurt içi ve yurt dışındaki faaliyetleri için danışmanlık ve uyuşmazlık çözümü hizmeti veriyoruz.',
      seritler: ['Türkçe ve İngilizce', 'Kurucu ortaklar doğrudan dahil', 'Şişli, İstanbul'],
    },
    yaklasim: {
      etiket: 'Hakkımızda',
      baslik: 'Karmaşık meselelerde net bir bakış. Her adımda aynı özen.',
      paragraflar: [
        'Akarca Şahantürk, vergi ve gümrük hukukuna odaklanan bir avukatlık ortaklığıdır. Her iki ortağı da mesleki geçmişini Türkiye\'nin en üst sıralarda derecelendirilen vergi hukuku ekiplerinde, uluslararası hukuk bürosu standardında çalışarak edindi.',
        'Vergi ve gümrük hukuku başta olmak üzere şirketler hukuku, ticaret hukuku, birleşme ve devralmalar, yatırım hukuku ve uyuşmazlık çözümü alanlarında müvekkillerimize destek oluyoruz.',
        'Hizmetlerimizin odağında müvekkilin menfaati var. Teknik uzmanlık gerektiren ticari süreçlerde ve uyuşmazlıklarda, Türkçe ve İngilizce olarak aynı derinlikte çözüm sunuyoruz.',
      ],
      baglanti: 'Çalışma alanlarımız',
    },
    alanlar: {
      etiket: 'Çalışma Alanları',
      baslik: 'Derinlemesine uzmanlık, bütüncül bir yaklaşım.',
      metin: 'Danışmanlıktan uyuşmazlık çözümüne, işinizin her aşamasında.',
      hepsi: 'Tüm çalışma alanları',
      altBaslik: 'Bu alanda yaptıklarımız',
      liste: [
        {
          slug: 'vergi-hukuku', ad: 'Vergi Hukuku',
          ozet: 'Vergi planlaması, inceleme ve uyum danışmanlığı, varlık yönetimi ve vergi uyuşmazlıklarının idari ve yargısal aşamaları.',
          giris: 'Bir ticari kararın vergisel sonucu, çoğu zaman kararın kendisi kadar belirleyicidir. Planlamadan uyuşmazlığa, sürecin her aşamasında yanınızdayız.',
          alt: [
            { ad: 'Vergi planlaması', metin: 'Planlanan işlemin vergisel etkisini önceden ortaya koyar, mevzuatın sunduğu imkânları müvekkilin risk tercihine uygun şekilde yapılandırırız.' },
            { ad: 'Vergi uyum ve inceleme danışmanlığı', metin: 'Vergi incelemesi, çoğu şirketin karşılaştığı en yüksek tutarlı finansal risktir ve sonucu büyük ölçüde süreç içindeki tercihlerle belirlenir. İnceleme ve karşıt inceleme süreçlerini yönetir, savunma stratejisini kurar, izaha davet ve uzlaşma aşamalarını yürütürüz.' },
            { ad: 'Varlık yönetimi', metin: 'Gerçek kişilerin ve aile şirketlerinin varlık yapısı, gelir ve devir işlemleri bakımından şirketlerden farklı bir vergisel planlama gerektirir. Varlık ve gelir yapısını vergisel açıdan planlar, nesiller arası devir ile beyan yükümlülüklerini yönetiriz.' },
            { ad: 'Vergi uyuşmazlıklarının çözümü', metin: 'Tarhiyat ve cezalara karşı yürütülen süreç, idari başvurudan Danıştay aşamasına uzanan teknik bir alandır. İdari başvuruları, vergi mahkemesi ve Danıştay süreçlerini ve vergi kaynaklı ceza dosyalarını yürütürüz.' },
          ],
        },
        {
          slug: 'gumruk-hukuku', ad: 'Gümrük Hukuku',
          ozet: 'Gümrük kıymeti, tarife sınıflandırması ve menşe konularında danışmanlık; tarhiyat ve cezalara karşı itiraz ve dava süreçleri.',
          giris: 'Menşe, gümrük kıymeti ve tarife sınıflandırması, geçmişe dönük yüksek tutarlı tarhiyatların en sık kaynağıdır. Uyuşmazlık doğmadan önce pozisyon kurar, doğduğunda savunuruz.',
          alt: [
            { ad: 'Gümrük danışmanlığı', metin: 'İthalat yapısının gümrük mevzuatına uygunluğu, uyuşmazlık doğmadan önce kurulabilecek bir pozisyondur. İthalat yapılarını uyum bakımından değerlendirir; kıymet, menşe ve sınıflandırma pozisyonlarını önceden savunulabilir hale getiririz.' },
            { ad: 'Gümrük uyuşmazlıklarının çözümü', metin: 'Menşe, gümrük kıymeti ve tarife sınıflandırmasına dayanan tarhiyatlara ve idari para cezalarına karşı itiraz ve dava süreçlerini yürütürüz.' },
          ],
        },
        {
          slug: 'yatirim-tesvikleri', ad: 'Yatırım Teşvikleri',
          ozet: 'Ar-Ge, teknopark, yatırım ve ihracat teşviklerinde yararlanma koşulları, belge süreçleri ve teşvik kaynaklı uyuşmazlıklar.',
          giris: 'Ar-Ge, teknopark, yatırım ve ihracat teşvikleri, yararlanma koşulları hatalı kurgulandığında sonradan geri alınabilen desteklerdir.',
          alt: [
            { ad: 'Yararlanma koşullarının değerlendirilmesi', metin: 'Planlanan yatırım veya faaliyetin hangi teşviklerden, hangi koşullarla yararlanabileceğini baştan ortaya koyarız.' },
            { ad: 'Belge süreçleri', metin: 'Yatırım teşvik belgesi, Ar-Ge merkezi ve teknopark başvurularını ve bunların yürütülmesini üstleniriz.' },
            { ad: 'Teşvik kaynaklı uyuşmazlıklar', metin: 'Teşvikin geri alınması veya koşullarının ihlali iddialarına karşı idari ve yargısal süreçleri yürütürüz.' },
          ],
        },
        {
          slug: 'sirketler-hukuku', ad: 'Şirketler Hukuku',
          ozet: 'Kuruluş, pay ve sermaye yapısı, genel kurul süreçleri; birleşme, devir ve bölünmelerin vergisel tasarımı; uyum denetimi.',
          giris: 'Kuruluştan pay devrine, genel kuruldan ortaklar arası ilişkilere kadar kurumsal hayatın her aşaması sağlam bir hukuki zemin gerektirir.',
          alt: [
            { ad: 'Şirketler hukuku', metin: 'Kuruluş, sermaye ve pay yapısı değişiklikleri, genel kurul süreçleri ile ortaklık ve hissedarlık sözleşmelerinde müvekkillerimize destek oluruz.' },
            { ad: 'Şirket yapılandırmaları ve yatırım danışmanlığı', metin: 'Birleşme, devir ve bölünme işlemlerinde vergi hem en önemli maliyet kalemlerinden biri hem de işlemin yapısını belirleyen unsurdur. Seçenekleri vergi sonuçlarıyla birlikte ortaya koyar, işlemin yapısını ve adım sırasını bu sonuçlara göre kurgular, uygulamasında da yanınızda oluruz.' },
            { ad: 'Uyum denetimi', metin: 'Şirket içinde mevzuata veya şirket politikalarına aykırı bir durumdan şüphelenilmesi, hızlı ve doğru yürütülmesi gereken bir inceleme gerektirir. Şirket içi denetim faaliyetlerini yürütür, sorun ve eksiklikleri tespit eder, yol haritasının çıkarılmasında ve hayata geçirilmesinde destek oluruz.' },
          ],
        },
        {
          slug: 'ticari-uyusmazliklar-ve-tahkim', ad: 'Ticari Uyuşmazlıklar ve Tahkim',
          ozet: 'Ticari ve idari uyuşmazlıklarda dava ve tahkim süreçleri; uyuşmazlık doğmadan önce strateji ve risk değerlendirmesi.',
          giris: 'Ticari uyuşmazlıkların çoğu, dava açılmadan önce alınan kararlarla kazanılır ya da kaybedilir.',
          alt: [
            { ad: 'Dava ve tahkim', metin: 'Ticari ve idari uyuşmazlıklarda dava ve tahkim süreçlerini yürütürüz; ticari ve yatırım tahkimi dahil.' },
            { ad: 'Uyuşmazlık öncesi strateji', metin: 'Uyuşmazlık doğmadan önce strateji ve risk değerlendirmesi sunar, müzakere ve sulh seçeneklerini değerlendiririz.' },
          ],
        },
      ],
    },
    yayinlar: {
      etiket: 'Yayınlar',
      baslik: 'Gelişmeleri izliyor, bakış açımızı paylaşıyoruz.',
      hepsi: 'Tüm yayınlar',
      kok: '/yayinlar/',
      turler: [
        { anahtar: 'duyuru', ad: 'Duyurular', tanim: 'Mevzuattaki değişikliklerin kısa bildirimleri.' },
        { anahtar: 'bulten', ad: 'Bültenler', tanim: 'Dönemsel derlemeler ve gündem özetleri.' },
        { anahtar: 'makale', ad: 'Makaleler', tanim: 'Bir konuyu derinlemesine ele alan yazılar.' },
      ],
      bos: 'Bu başlıkta henüz yayın yok.',
    },
    ekip: {
      etiket: 'Ekibimiz',
      baslik: 'Uzmanlığın arkasındaki insanlar.',
      metin: 'Sizi dinleyen, işinizi anlayan ve sürecin her aşamasında doğrudan yanınızda olan bir ekip.',
      hepsi: 'Ekibimiz',
      kok: '/ekip/',
      basliklar: { ozet: 'Kısaca', kariyer: 'Kariyer', egitim: 'Eğitim', diger: 'Yayınlar ve diğer', diller: 'Diller' },
      liste: [
        {
          slug: 'eren-akarca', ad: 'Hüseyin Eren Akarca', kisaAd: 'Eren Akarca', rol: 'Kurucu Ortak',
          eposta: 'eren@akarcasahanturk.com', telefon: '+90 541 584 24 89',
          foto: '/marka/ekip/eren-akarca.jpg', linkedin: 'https://www.linkedin.com/in/hüseyin-eren-akarca/',
          ozet: 'Vergi ve gümrük uyuşmazlıkları ile uluslararası vergi danışmanlığı alanlarında çalışıyor. Çok uluslu şirketleri dijital iş yeri, gerçek lehtar, transfer fiyatlandırması ve dijital hizmet vergisi uyuşmazlıklarında idari yargının tüm dereceleri, Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesi önünde temsil etti.',
          kariyer: [
            'Esin Avukatlık Ortaklığı (Baker McKenzie International üyesi) — Avukat, vergi uyuşmazlıkları ve danışmanlık',
            'PwC Türkiye / GSG Avukatlık Ortaklığı — Avukat ve stajyer avukat, vergi uyuşmazlıkları',
          ],
          egitim: [
            'İstanbul Bilgi Üniversitesi — İşletme Hukuku yüksek lisansı (LL.M.)',
            'Anadolu Üniversitesi — Uluslararası İlişkiler',
            'Ankara Üniversitesi Hukuk Fakültesi',
          ],
          diger: [
            'Gerçek Lehtar: Ortaya Çıkışı, Gelişimi ve Türkiye\'deki Vergi İncelemeleri ile Yargı Kararlarında Konuya Bakış — Vergi Dünyası, Aralık 2023',
            'Aile Şirketi Hisselerinin Yatırım Fonuna Devri — Nisan 2023',
            'Willem C. Vis Uluslararası Ticari Tahkim Yarışması — Ankara Üniversitesi takım koçu (2021–2025), yarışmacı (2016–2018)',
            'ISTAC Geleceğin Tahkim Avukatı Yarışması — takım koçu (2019–2022)',
          ],
          diller: 'Türkçe (ana dil), İngilizce (ileri)',
        },
        {
          slug: 'ata-sahanturk', ad: 'Atahan Şahantürk', kisaAd: 'Ata Şahantürk', rol: 'Kurucu Ortak',
          eposta: 'atahan@akarcasahanturk.com', telefon: '+90 532 130 18 99',
          foto: '/marka/ekip/ata-sahanturk.jpg', linkedin: '',
          ozet: 'Dijital ekonominin vergilendirilmesi, transfer fiyatlandırması ve vergi incelemeleri alanlarında çalışıyor. Küresel teknoloji şirketlerini dijital hizmet vergisi, KDV-3 ve sanal iş yeri iddialarına dayanan tarhiyatlara karşı temsil etti; peşin fiyatlandırma anlaşması süreçleri ve OECD Pillar II düzenlemeleri konusunda danışmanlık verdi.',
          kariyer: [
            'PwC Türkiye / GSG Avukatlık Ortaklığı — Kıdemli Avukat, Uyuşmazlık Çözümü (2023–)',
            'PwC Türkiye / GSG Avukatlık Ortaklığı — Avukat, Vergi Uyuşmazlıkları (2021–2023)',
            'PwC Türkiye / GSG Avukatlık Ortaklığı — Stajyer Avukat (2020–2021)',
          ],
          egitim: [
            'Marmara Üniversitesi — Mali Hukuk yüksek lisansı (2021)',
            'Dokuz Eylül Üniversitesi Hukuk Fakültesi (2018)',
            'London School of English — Hukuk İngilizcesi programı',
          ],
          diger: [
            'PwC Türkiye Xpedition Programı — seçilen dokuz kıdemli avukattan biri',
          ],
          diller: 'Türkçe (ana dil), İngilizce (ileri)',
        },
      ],
    },
    iletisim: {
      etiket: 'İletişim',
      baslik: 'Bir konuyu birlikte ele alalım.',
      metin: 'Görüşme talepleri için formu doldurabilir, ortaklarımıza doğrudan e-posta gönderebilir veya ofisimizi arayabilirsiniz.',
      alanlar: { eposta: 'E-posta', telefon: 'Telefon', adres: 'Adres' },
      form: { ad: 'Ad Soyad', eposta: 'E-posta', konu: 'Konu', mesaj: 'Kısaca konunuz', gonder: 'Görüşme talebi gönder' },
      harita: 'Haritada göster',
    },
    kariyer: {
      etiket: 'Kariyer',
      baslik: 'Birlikte çalışmak ister misiniz?',
      metin: 'Açık pozisyonlar ve staj başvuruları için bize yazabilirsiniz.',
    },
    altbilgi: {
      haklar: '© 2026 Akarca Şahantürk Avukatlık Ortaklığı. Tüm hakları saklıdır.',
      baglantilar: [
        { ad: 'Kariyer', yol: '/#kariyer' },
        { ad: 'KVKK Aydınlatma Metni', yol: '/kvkk/' },
        { ad: 'Çerez Politikası', yol: '/cerez-politikasi/' },
      ],
      linkedin: 'LinkedIn',
    },
    cerezUyari: {
      metin: 'Bu sitede yalnızca sitenin çalışması için gerekli çerezleri kullanıyoruz.',
      kabul: 'Anladım',
      detay: 'Çerez Politikası',
    },
    geri: 'Geri dön',
  },

  en: {
    kod: 'en',
    kokYol: '/en/',
    digerDil: { etiket: 'TR', yol: '/' },
    menu: [
      { ad: 'About', capa: 'hakkimizda' },
      { ad: 'Practice Areas', capa: 'calisma-alanlari' },
      { ad: 'Publications', capa: 'yayinlar' },
      { ad: 'Our Team', capa: 'ekibimiz' },
      { ad: 'Careers', capa: 'kariyer' },
      { ad: 'Contact', capa: 'iletisim' },
    ],
    hero: {
      etiket: 'Istanbul · Türkiye',
      baslik: 'Practical solutions in tax and customs law.',
      metin: 'We advise domestic and international clients on their operations in Türkiye and abroad, and represent them in disputes.',
      seritler: ['Turkish and English', 'Founding partners directly involved', 'Şişli, Istanbul'],
    },
    yaklasim: {
      etiket: 'About',
      baslik: 'A clear view on complex matters. The same care at every step.',
      paragraflar: [
        'Akarca Şahantürk is a law partnership focused on tax and customs law. Both partners built their careers in Türkiye\'s top-ranked tax practices, working to the standard of international law firms.',
        'Beyond tax and customs, we support clients in corporate and commercial law, mergers and acquisitions, investment law and dispute resolution.',
        'Our work is organised around the client\'s interest. In technically demanding commercial matters and disputes, we deliver the same depth in Turkish and in English.',
      ],
      baglanti: 'Our practice areas',
    },
    alanlar: {
      etiket: 'Practice Areas',
      baslik: 'Deep expertise, an integrated approach.',
      metin: 'From advisory work to dispute resolution, at every stage of your business.',
      hepsi: 'All practice areas',
      altBaslik: 'What we do in this area',
      liste: [
        {
          slug: 'tax-law', ad: 'Tax Law',
          ozet: 'Tax planning, audit and compliance advisory, wealth management, and the administrative and judicial stages of tax disputes.',
          giris: 'The tax consequence of a commercial decision is often as decisive as the decision itself. We stay involved from planning through to dispute.',
          alt: [
            { ad: 'Tax planning', metin: 'We set out the tax effect of a planned transaction in advance and structure the options the legislation offers in line with the client\'s appetite for risk.' },
            { ad: 'Tax compliance and audit advisory', metin: 'A tax audit is the largest financial risk most companies face, and its outcome is largely shaped by choices made during the process. We manage audits and cross-audits, build the defence strategy and handle invitation-to-explain and settlement stages.' },
            { ad: 'Wealth management', metin: 'The assets of individuals and family businesses call for a different kind of tax planning from that of companies. We plan asset and income structures, and manage intergenerational transfers and filing obligations.' },
            { ad: 'Tax dispute resolution', metin: 'Challenging assessments and penalties is a technical process running from administrative applications to the Council of State. We handle administrative applications, tax court and Council of State proceedings, and tax-related criminal files.' },
          ],
        },
        {
          slug: 'customs-law', ad: 'Customs Law',
          ozet: 'Advisory on customs valuation, tariff classification and origin; objections and litigation against assessments and penalties.',
          giris: 'Origin, customs value and tariff classification are the most frequent sources of large retrospective assessments. We build the position before a dispute arises, and defend it when one does.',
          alt: [
            { ad: 'Customs advisory', metin: 'Whether an import structure complies with customs legislation is a position that can be established before any dispute. We review import structures for compliance and make valuation, origin and classification positions defensible in advance.' },
            { ad: 'Customs dispute resolution', metin: 'We handle objections and litigation against assessments and administrative fines based on origin, customs value and tariff classification.' },
          ],
        },
        {
          slug: 'investment-incentives', ad: 'Investment Incentives',
          ozet: 'Eligibility, certification processes and incentive-related disputes for R&D, technopark, investment and export incentives.',
          giris: 'R&D, technopark, investment and export incentives can be clawed back later when the conditions of eligibility are set up incorrectly.',
          alt: [
            { ad: 'Eligibility assessment', metin: 'We establish at the outset which incentives a planned investment or activity can benefit from, and on what conditions.' },
            { ad: 'Certification processes', metin: 'We prepare and run investment incentive certificate, R&D centre and technopark applications.' },
            { ad: 'Incentive-related disputes', metin: 'We handle administrative and judicial proceedings against claw-back claims and alleged breaches of incentive conditions.' },
          ],
        },
        {
          slug: 'corporate-law', ad: 'Corporate Law',
          ozet: 'Incorporation, share and capital structure, general assemblies; the tax design of mergers, transfers and spin-offs; internal investigations.',
          giris: 'From incorporation to share transfers, from general assemblies to shareholder relations, every stage of corporate life needs a sound legal footing.',
          alt: [
            { ad: 'Corporate law', metin: 'We support clients in incorporation, changes to capital and share structure, general assembly processes, and partnership and shareholder agreements.' },
            { ad: 'Restructuring and investment advisory', metin: 'In mergers, transfers and spin-offs, tax is both a major cost item and a factor that shapes the transaction itself. We set out the options with their tax consequences, design the structure and sequence of steps accordingly, and stay involved in implementation.' },
            { ad: 'Internal investigations', metin: 'A suspected breach of legislation or company policy calls for a fast and well-run investigation. We conduct internal reviews, identify issues and gaps, and help design and implement the way forward.' },
          ],
        },
        {
          slug: 'commercial-disputes-and-arbitration', ad: 'Commercial Disputes and Arbitration',
          ozet: 'Litigation and arbitration in commercial and administrative disputes; strategy and risk assessment before a dispute arises.',
          giris: 'Most commercial disputes are won or lost by decisions taken before proceedings begin.',
          alt: [
            { ad: 'Litigation and arbitration', metin: 'We conduct litigation and arbitration in commercial and administrative disputes, including commercial and investment arbitration.' },
            { ad: 'Pre-dispute strategy', metin: 'We provide strategy and risk assessment before a dispute arises, and evaluate negotiation and settlement options.' },
          ],
        },
      ],
    },
    yayinlar: {
      etiket: 'Publications',
      baslik: 'We follow developments and share our perspective.',
      hepsi: 'All publications',
      kok: '/en/publications/',
      turler: [
        { anahtar: 'duyuru', ad: 'Announcements', tanim: 'Short notices on legislative changes.' },
        { anahtar: 'bulten', ad: 'Newsletters', tanim: 'Periodic round-ups and agenda summaries.' },
        { anahtar: 'makale', ad: 'Articles', tanim: 'In-depth pieces on a single subject.' },
      ],
      bos: 'No publications under this heading yet.',
    },
    ekip: {
      etiket: 'Our Team',
      baslik: 'The people behind the expertise.',
      metin: 'A team that listens, understands your business and stays directly involved at every stage.',
      hepsi: 'Our team',
      kok: '/en/team/',
      basliklar: { ozet: 'In brief', kariyer: 'Career', egitim: 'Education', diger: 'Publications and other', diller: 'Languages' },
      liste: [
        {
          slug: 'eren-akarca', ad: 'Hüseyin Eren Akarca', kisaAd: 'Eren Akarca', rol: 'Founding Partner',
          eposta: 'eren@akarcasahanturk.com', telefon: '+90 541 584 24 89',
          foto: '/marka/ekip/eren-akarca.jpg', linkedin: 'https://www.linkedin.com/in/hüseyin-eren-akarca/',
          ozet: 'Works on tax and customs disputes and international tax advisory. He has represented multinational companies in digital permanent establishment, beneficial ownership, transfer pricing and digital services tax disputes before all levels of the administrative judiciary, the Constitutional Court and the European Court of Human Rights.',
          kariyer: [
            'Esin Attorney Partnership (member firm of Baker McKenzie International) — Associate, tax disputes and advisory',
            'PwC Türkiye / GSG Attorneys at Law — Associate and legal intern, tax disputes',
          ],
          egitim: [
            'Istanbul Bilgi University — LL.M. in Business Law',
            'Anadolu University — International Relations',
            'Ankara University Faculty of Law',
          ],
          diger: [
            'Beneficial Ownership: Its Emergence, Development and an Overview in Tax Inspections and Judicial Decisions in Türkiye — Vergi Dünyası, December 2023',
            'Next Generation Management: Transfer of Family Company Shares to an Investment Fund — April 2023',
            'Willem C. Vis International Commercial Arbitration Moot — coach of the Ankara University team (2021–2025), team member (2016–2018)',
            'ISTAC Future Arbitration Counsel Moot — team coach (2019–2022)',
          ],
          diller: 'Turkish (native), English (fluent)',
        },
        {
          slug: 'ata-sahanturk', ad: 'Atahan Şahantürk', kisaAd: 'Ata Şahantürk', rol: 'Founding Partner',
          eposta: 'atahan@akarcasahanturk.com', telefon: '+90 532 130 18 99',
          foto: '/marka/ekip/ata-sahanturk.jpg', linkedin: '',
          ozet: 'Works on the taxation of the digital economy, transfer pricing and tax audits. He has represented global technology companies against assessments based on digital services tax, VAT-3 and virtual permanent establishment claims, and advised on advance pricing agreement procedures and OECD Pillar II rules.',
          kariyer: [
            'PwC Türkiye / GSG Attorneys at Law — Senior Associate, Dispute Resolution (2023–)',
            'PwC Türkiye / GSG Attorneys at Law — Associate, Tax Disputes (2021–2023)',
            'PwC Türkiye / GSG Attorneys at Law — Legal Intern (2020–2021)',
          ],
          egitim: [
            'Marmara University — Master\'s in Financial Law (2021)',
            'Dokuz Eylül University Faculty of Law (2018)',
            'London School of English — Legal English programme',
          ],
          diger: [
            'PwC Türkiye Xpedition Programme — one of nine senior associates selected',
          ],
          diller: 'Turkish (native), English (fluent)',
        },
      ],
    },
    iletisim: {
      etiket: 'Contact',
      baslik: 'Let us look at the matter together.',
      metin: 'Use the form, email a partner directly, or call the office.',
      alanlar: { eposta: 'Email', telefon: 'Telephone', adres: 'Address' },
      form: { ad: 'Full name', eposta: 'Email', konu: 'Subject', mesaj: 'Briefly, your matter', gonder: 'Request a meeting' },
      harita: 'Show on map',
    },
    kariyer: {
      etiket: 'Careers',
      baslik: 'Would you like to work with us?',
      metin: 'Write to us about open positions and internship applications.',
    },
    altbilgi: {
      haklar: '© 2026 Akarca Şahantürk Attorney Partnership. All rights reserved.',
      baglantilar: [
        { ad: 'Careers', yol: '/en/#kariyer' },
        { ad: 'Privacy Notice', yol: '/en/privacy/' },
        { ad: 'Cookie Policy', yol: '/en/cookie-policy/' },
      ],
      linkedin: 'LinkedIn',
    },
    cerezUyari: {
      metin: 'This site uses only the cookies required for it to function.',
      kabul: 'Understood',
      detay: 'Cookie Policy',
    },
    geri: 'Go back',
  },
} as const;

// Büro bilgileri — tek yerde. Kaynak: Tanıtım Özeti künyesi.
export const buro = {
  ad: 'Akarca Şahantürk Avukatlık Ortaklığı',
  telefon: '+90 212 366 57 19',
  adresSatirlari: ['Ferko Signature, Büyükdere Caddesi No: 175/7', '34394 Şişli / İstanbul'],
  haritaSorgu: 'Ferko Signature, Büyükdere Caddesi No:175, 34394 Şişli, İstanbul',
  linkedin: 'https://www.linkedin.com/',
  alanAdi: 'https://akarcasahanturk.com',
};
