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
      { ad: 'Çalışma Alanlarımız', capa: 'calisma-alanlari' },
      { ad: 'Yayınlarımız', capa: 'yayinlar' },
      { ad: 'Ekibimiz', capa: 'ekibimiz' },
      { ad: 'İletişim', capa: 'iletisim' },
      { ad: 'Kariyer', capa: 'kariyer' },
    ],
    hero: {
      etiket: 'İstanbul · Türkiye',
      baslik: 'Vergi ve gümrük hukukunda, uygulanabilir çözümler.',
      // Üst satır 2,5 saniyede bir sırayla değişir; alt satır sabit.
      donen: ['Vergi planlamasında,', 'Vergi incelemelerinde,', 'Gümrük ve dış ticarette,', 'Şirketler hukukunda,', 'Birleşme ve devralmalarda,', 'Uyuşmazlık çözümünde,'],
      sabit: 'uygulanabilir çözümler.',
      metin: 'Bağımsız bir hukuk bürosu olarak yerli ve yabancı müvekkillerimize, yurt içi ve yurt dışındaki faaliyetleri için danışmanlık ve uyuşmazlık çözümü hizmeti veriyoruz.',
    },
    yaklasim: {
      etiket: 'Hakkımızda',
      baslik: 'Her aşamada aynı titizlik, aynı sorumluluk.',
      paragraflar: [
        'Akarca Sahanturk, vergi ve gümrük hukuku başta olmak üzere; birleşme ve devralmalar, şirketler ve ticaret hukuku, varlık ve servet yönetimi, rekabet hukuku, kişisel verilerin korunması, uyum ve kurum içi soruşturmalar ile uyuşmazlık çözümü alanlarında müvekkillerine destek olmaktadır.',
        'Hizmetlerinin odağında müvekkillerinin menfaati olan Akarca Sahanturk, teknik uzmanlık gerektiren ticari süreçlerde ve uyuşmazlıklarda Türkçe ve İngilizce dillerinde sağladığı özgün çözümlerle müvekkillerinin yolculuğunun bir parçası olmaktadır.',
      ],
      baglanti: 'Çalışma alanlarımız',
    },
    alanlar: {
      etiket: 'Çalışma Alanlarımız',
      baslik: 'Derinlemesine uzmanlık, bütüncül bir yaklaşım.',
      metin: 'Danışmanlıktan uyuşmazlık çözümüne, faaliyetlerinizin her aşamasında yanınızdayız.',
      hepsi: 'Tüm çalışma alanları',
      altBaslik: 'Bu kapsamda özellikle',
      liste: [
        {
          slug: 'vergi-planlamasi-ve-danismanligi', ad: 'Vergi Planlaması ve Danışmanlığı',
          ozet: 'Bir ticari işlemin vergisel sonucu, işlemin maliyetini ve uygulanabilirliğini doğrudan etkilemektedir. Yatırım, finansman, kâr dağıtımı, sınır ötesi işlemler ve yeniden yapılandırma seçeneklerini hukuki, mali ve ticari sonuçlarıyla birlikte değerlendiriyor; günlük vergi uygulamalarından transfer fiyatlandırması ve uluslararası vergilendirmeye kadar müvekkillerimize danışmanlık sunuyoruz.',
          paragraflar: [
            'Vergi, bir ticari kararın maliyetini, uygulanabilirliğini ve uzun vadeli sonuçlarını doğrudan etkileyen en önemli unsurlardan biridir. Yatırım, finansman, yeniden yapılandırma veya kâr dağıtımı gibi işlemlerin ve üçüncü kişilerle gerçekleştirilen ticari faaliyetlerin, yalnızca hukuken geçerli şekilde değil, vergisel sonuçları öngörülerek planlanması gerekir. İşlem hayata geçirildikten sonra ortaya çıkan vergi yükü ve riskler, çoğu zaman başlangıçta yapılacak doğru bir planlamayla yönetilebilir.',
            'Vergi mevzuatının karmaşık ve sürekli değişen yapısı, şirketlerin günlük faaliyetlerinde de düzenli hukuki desteğe ihtiyaç duymasına neden olur. Müvekkillerimizin mevcut ve planlanan faaliyetlerini Türk vergi mevzuatı, uluslararası vergi düzenlemeleri ve idarenin güncel uygulamaları çerçevesinde değerlendiriyor; alternatifleri hukuki, mali ve ticari sonuçlarıyla birlikte ortaya koyuyoruz.',
          ],
          kapsam: [
            'Yatırım, finansman, kâr dağıtımı, hizmet ve lisans modellerinin vergisel sonuçlarını değerlendiriyor;',
            'Şirket kuruluşları, pay devirleri, birleşme, bölünme ve yeniden yapılandırma işlemlerine ilişkin vergi planlaması yapıyor;',
            'Kurumlar vergisi, katma değer vergisi, stopaj, damga vergisi, banka ve sigorta muameleleri vergisi ile diğer doğrudan ve dolaylı vergiler konusunda görüş sunuyor;',
            'Sınır ötesi işlemleri, çifte vergilendirmeyi önleme anlaşmaları ve gerçek lehtar uygulamaları bakımından inceliyor;',
            'Transfer fiyatlandırması politikaları, grup içi hizmetler, finansman işlemleri ve peşin fiyatlandırma anlaşmaları konusunda danışmanlık veriyor;',
            'Dijital hizmet vergisi, KDV-3 ve dijital iş modellerine ilişkin diğer vergisel yükümlülükleri değerlendiriyor;',
            'Çalışan hisse opsiyon planları ve çalışanlara sağlanan menfaatlerin vergisel yapısını inceliyor;',
            'Yerel ve küresel asgari tamamlayıcı kurumlar vergisi (Pillar 2) düzenlemelerinin şirket yapıları ile birleşme ve devralma işlemlerine etkisini analiz ediyor;',
            'Ar-Ge merkezleri, teknoloji geliştirme bölgeleri, serbest bölgeler, ihracat destekleri ve yatırım teşviklerinden yararlanma koşullarını vergisel açıdan değerlendiriyor;',
            'Mevzuat değişikliklerinin müvekkillerimizin faaliyetlerine etkisini takip ediyor ve günlük vergi uygulamalarına ilişkin danışmanlık sunuyoruz.',
          ],
        },
        {
          slug: 'vergi-incelemeleri-ve-uyusmazliklari', ad: 'Vergi İncelemeleri ve Uyuşmazlıkları',
          ozet: 'Vergi idaresiyle olan yazışmalarda, izaha davet süreçlerinde ve vergi incelemesinde sunulan bilgi ve belgeler ile benimsenen savunma yaklaşımı, incelemenin ve sonrasında doğabilecek uyuşmazlığın seyrini belirlemektedir. Vergi incelemesi ve karşıt inceleme süreçlerinden izaha davet, uzlaşma ve rapor değerlendirme aşamalarına; vergi mahkemelerinden üst derece başvurularına kadar tüm idari ve yargısal süreçleri bütüncül bir stratejiyle ve titizlikle yönetiyoruz.',
          paragraflar: [
            'Vergi incelemesi, şirketlerin karşılaşabileceği en önemli mali ve hukuki risklerden biridir. Artan inceleme yoğunluğu ve vergi uygulamalarına ilişkin yorum farklılıkları, mükelleflerin yüksek tutarlı tarhiyatlar ve idari para cezalarıyla karşılaşmasına neden olabilmektedir. Her tarhiyatın dayanağını, mevcut idari ve yargısal çözüm yollarını, ispat durumunu ve olası mali sonuçlarını birlikte değerlendiriyor; müvekkilin ticari önceliklerine ve risk profiline uygun stratejiyi geliştiriyoruz.',
            'İnceleme sırasında sunulan bilgi ve belgeler, yapılan açıklamalar ve oluşturulan savunma yaklaşımı, yalnızca incelemenin sonucunu değil, sonrasında doğabilecek idari ve yargısal uyuşmazlıkların seyrini de belirler. Bu nedenle vergi incelemesini, olası bir uyuşmazlığın başlangıç noktası olarak ele alıyor ve buna uygun bir stratejinin geliştirilmesini ve uygulanmasını sağlıyoruz.',
            'Vergi incelemesi sonrasında doğan uyuşmazlıklarda, dava öncesi çözüm yollarından vergi yargısının tüm aşamalarına kadar müvekkillerimizi temsil ediyor; uyuşmazlığın niteliğine göre Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesine bireysel başvuru yollarını da yürütüyoruz. Vergi ziyaı ve usulsüzlük cezalarının yanı sıra vergi kaçakçılığı suçlarına ilişkin soruşturma ve ceza yargılamalarında, idari ve cezai süreçleri bir arada ele alarak danışmanlık ve temsil hizmeti sunuyoruz.',
          ],
          kapsam: [
            'Vergi incelemesi öncesinde mevcut uygulamaları ve potansiyel risk alanlarını değerlendiriyor;',
            'Vergi incelemesi ve karşıt inceleme süreçlerinde bilgi ve belge akışını yönetiyor;',
            'İnceleme tutanaklarını, bilgi taleplerini ve inceleme elemanının değerlendirmelerini hukuki ve teknik açıdan inceliyor;',
            'Transfer fiyatlandırması, gerçek lehtar, dijital iş yeri, daimi temsilci, finansman, istisna ve indirim uygulamaları gibi konularda savunma stratejileri oluşturuyor;',
            'Gönüllü uyum yazısı, izaha davet, tarhiyat öncesi ve sonrası uzlaşma ile rapor değerlendirme komisyonu süreçlerini yürütüyor;',
            'Çifte vergilendirmeyi önleme anlaşmalarından kaynaklanan uyuşmazlıklarda karşılıklı anlaşma usulü dâhil idari çözüm yollarını değerlendiriyor;',
            'Vergi ve ceza ihbarnameleri ile diğer vergisel idari işlemlere karşı dava açıyor;',
            'Vergi mahkemeleri, bölge idare mahkemeleri ve Danıştay önündeki yargılama süreçlerini takip ediyor;',
            'Vergi kaçakçılığı suçlarına ilişkin soruşturma ve ceza yargılamalarında müvekkillerimizi temsil ediyor; idari vergi uyuşmazlığı ile ceza sürecini birbiriyle uyumlu şekilde yürütüyor;',
            'Uygun uyuşmazlıklarda Anayasa Mahkemesi ve Avrupa İnsan Hakları Mahkemesine bireysel başvuru yolunu değerlendiriyor ve takip ediyor;',
            'Vergi affı, yeniden yapılandırma ve varlık barışı gibi geçici düzenlemelerin devam eden inceleme ve uyuşmazlıklara etkisini analiz ediyoruz.',
          ],
        },
        {
          slug: 'uluslararasi-ticaret-ve-gumruk', ad: 'Uluslararası Ticaret ve Gümrük',
          ozet: 'Menşe, gümrük kıymeti ve tarife sınıflandırmasına ilişkin değerlendirmeler, ithalat maliyetlerinin yanı sıra geçmiş dönemlere yönelik önemli riskler doğurabilmektedir. İthalat ve ihracat yapılarını gümrük ve vergi mevzuatı bakımından inceliyor; yatırım teşvik belgesi kapsamındaki ithalat işlemleri, sonradan kontrol, ek tahakkuk, idari para cezası, itiraz ve dava süreçlerinde müvekkillerimize destek oluyoruz.',
          paragraflar: [
            'Gümrük ve dış ticaret düzenlemeleri, ithalat ve ihracat işlemlerinin maliyetini, zamanlamasını ve sürdürülebilirliğini doğrudan etkiler. Eşyanın menşei, gümrük kıymeti veya tarife sınıflandırmasına ilişkin farklı bir değerlendirme, geçmiş dönemlere yönelik yüksek tutarlı ek tahakkuklara ve idari para cezalarına neden olabilir. Bu nedenle gümrük pozisyonunun işlem öncesinde doğru kurulması, uyuşmazlık çıktıktan sonra yürütülecek savunma kadar önemlidir.',
            'İthalat ve ihracat yapılarını, tedarik ve lisans sözleşmelerini, grup içi işlemlerini ve ilgili ödeme akışlarını gümrük ve vergi mevzuatıyla birlikte değerlendiriyoruz. Böylece ticari model ile gümrük beyanları arasında tutarlılık sağlanmasına ve benimsenen pozisyonun olası bir denetimde savunulabilir hâle getirilmesine destek oluyoruz.',
            'Danışmanlık ve uyuşmazlık deneyimimizi birlikte kullanarak, gümrük risklerinin işlem öncesinde tespit edilmesini ve uyuşmazlık hâlinde teknik temeli güçlü bir savunma oluşturulmasını amaçlıyoruz.',
          ],
          kapsam: [
            'Eşyanın gümrük tarife istatistik pozisyonunu değerlendiriyor ve bağlayıcı tarife bilgisi başvurularını hazırlıyor;',
            'Menşe kuralları, tercihli menşe uygulamaları ve menşe belgeleri konusunda danışmanlık sunuyor;',
            'Gümrük kıymetine dâhil edilmesi gereken bedelleri, grup içi ödemeleri, lisans ve royalti ödemelerini inceliyor;',
            'Transfer fiyatlandırması uygulamalarının gümrük kıymeti üzerindeki etkisini değerlendiriyor;',
            'İthalat ve ihracat yapılarının gümrük ve dış ticaret mevzuatına uygunluğunu inceliyor;',
            'Muafiyet, istisna ve özel gümrük rejimlerinden yararlanma koşullarını değerlendiriyor;',
            'Yatırım teşvik belgesi kapsamındaki ithalat işlemlerine ve gümrük vergisi istisnalarına ilişkin destek sunuyor;',
            'Sonradan kontrol ve gümrük incelemelerinde bilgi ve belge sürecini yönetiyor;',
            'Ek gümrük vergileri, ek mali yükümlülükler, gözetim uygulamaları ve diğer dış ticaret önlemlerinin etkisini inceliyor;',
            'Ek tahakkuk ve idari para cezası kararlarına karşı idari itiraz süreçlerini yürütüyor;',
            'Gümrük uyuşmazlıklarında dava açıyor ve yargılama sürecini takip ediyoruz.',
          ],
        },
        {
          slug: 'sirketler-ve-ticaret-hukuku', ad: 'Şirketler ve Ticaret Hukuku',
          ozet: 'Şirketlerin kuruluşundan günlük faaliyetlerine, sermaye yapısından pay sahipleri arasındaki ilişkilere kadar kurumsal hayatın her aşaması sağlam bir hukuki zemine ihtiyaç duyar. Kuruluş, sermaye ve pay yapısı değişiklikleri, genel kurul ve yönetim kurulu süreçleri, pay sahipleri sözleşmeleri, kurumsal yönetim ve ticari sözleşmeler konusunda hukuki, mali ve vergisel sonuçları birlikte gözeterek destek sunuyoruz.',
          paragraflar: [
            'Şirketlerin kuruluşundan günlük faaliyetlerine ve ticari ilişkilerine; sermaye yapısından pay sahipleri arasındaki ilişkilere kadar kurumsal hayatın her aşaması sağlam ve güncel bir hukuki zemine ihtiyaç duyar. Şirketler hukukuna bağlı dokümantasyonun ve imzalanan sözleşmelerin ticari gerçeklik ve hukuki gerekliliklerle uyumlu olmaması; karar alma, yatırım, kâr dağıtımı ve pay devri süreçlerinde ve aynı zamanda şirketlerin ticari ilişkilerinde önemli uyuşmazlıklara ve hak kayıplarına yol açabilir.',
            'Şirket kuruluşu, yönetim ve temsil yapılarının oluşturulması, pay sahipleri arasındaki ilişkilerin düzenlenmesi, günlük ticari faaliyetlerin ve üçüncü kişilerle olan ticari ilişkilerinin yürütülmesi konularında sürekli hukuki destek sunuyoruz. Kurumsal belgeleri ve karar süreçlerini şirketin faaliyetleriyle uyumlu hâle getiriyor; sermaye işlemleri, grup içi düzenlemeler, ticari sözleşmeler ve kâr dağıtımı gibi konuları şirketler hukuku başta olmak üzere ilgili düzenlemelerin bütünü içinde ele alıyoruz.',
          ],
          kapsam: [
            'Şirket kuruluşu, şube ve irtibat bürosu açılışı ile Türkiye\'ye giriş modelleri konusunda danışmanlık veriyor;',
            'Satış, tedarik, distribütörlük, franchise, hizmet, lisans ve diğer ticari sözleşmeleri hazırlıyor ve müzakere ediyor;',
            'Esas sözleşme ve şirket iç düzenlemelerini hazırlıyor ve güncelliyor;',
            'Sermaye artırımı ve azaltımı ile sermaye yapısına ilişkin diğer işlemleri yürütüyor;',
            'Pay devirlerini ve pay sahipliği yapısındaki değişiklikleri hukuki, ticari ve vergisel sonuçlarıyla birlikte değerlendiriyor;',
            'Genel kurul ve yönetim kurulu toplantılarını, kararlarını ve tescil süreçlerini hazırlıyor;',
            'Pay sahipleri sözleşmeleri, ortak girişim sözleşmeleri ve ortaklar arası düzenlemeler hazırlıyor ve müzakere ediyor;',
            'Kurumsal yönetim, temsil ve ilzam yapıları ile imza yetkilerini düzenliyor;',
            'Grup içi hizmet, finansman ve maliyet paylaşım sözleşmelerini şirketler hukuku ve ticari uygulama bakımından inceliyor;',
            'Kâr dağıtımı, yedek akçeler ve ortaklara yapılacak diğer ödemelere ilişkin karar ve uygulama süreçlerinde destek sunuyor;',
            'Ticaret sicili işlemlerini ve kurumsal belge düzenini yönetiyoruz.',
          ],
        },
        {
          slug: 'birlesme-devralma-ve-sirket-yapilandirmalari', ad: 'Birleşme, Devralma ve Şirket Yapılandırmaları',
          ozet: 'Birleşme, devralma ve yeniden yapılandırma işlemlerinde seçilen yol haritası; işlemin vergi yükünü, sorumlulukların dağılımını ve işlem sonrası şirket yapısını belirlemektedir. Alternatif işlem modellerini hukuki ve vergisel sonuçlarıyla karşılaştırıyor; inceleme (due diligence), sözleşme, izin, imza ve kapanış süreçlerini yürütüyor, yatırım teşvikleri ve uluslararası vergi düzenlemelerinin işlem yapısına etkisini değerlendiriyoruz.',
          paragraflar: [
            'Birleşme ve devralma işlemleri; şirketler hukuku, sözleşmeler, finansman, rekabet hukuku, iş hukuku, düzenleyici gereklilikler ve vergi gibi birbiriyle bağlantılı alanların birlikte değerlendirilmesini gerektirir. İşlemin pay devri, varlık devri, birleşme, bölünme veya başka bir yeniden yapılandırma modeliyle gerçekleştirilmesi; sorumlulukların dağılımını, işlem bedeli ve teminat mekanizmalarını, gerekli izinleri, finansman yöntemini ve işlem sonrası şirket yapısını doğrudan etkiler.',
            'Yatırımın veya yeniden yapılandırmanın planlanmasından imza, kapanış ve işlem sonrası entegrasyona kadar destek sunuyoruz. Hukuki inceleme sürecini yürütüyor, riskleri işlem belgelerine yansıtıyor, sözleşmeleri müzakere ediyor ve gerekli izin ve başvuruları koordine ediyoruz. Alternatif işlem modellerini ticari, hukuki ve vergisel sonuçlarıyla karşılaştırarak seçilen yapının uygulanabilir olmasını sağlıyoruz.',
          ],
          kapsam: [
            'Pay devri, varlık devri, birleşme, bölünme ve tür değiştirme alternatiflerini değerlendiriyor;',
            'İşlemin yapısını, takvimini, sorumluluk dağılımını ve gerekli onayları planlıyor;',
            'Yurt içi ve sınır ötesi yatırım ve ortaklık modelleri konusunda danışmanlık sunuyor;',
            'Hukuki durum tespiti yanında vergisel ve mali risk incelemelerini (due diligence) koordine ediyor;',
            'Hukuki inceleme süreçlerini yürütüyor ve belirlenen risklerin işlem belgelerine yansıtılmasını sağlıyor;',
            'Pay alım, pay sahipleri, ortak girişim ve yatırım sözleşmelerini hazırlıyor ve müzakere ediyor;',
            'İşlem bedeli, fiyat uyarlaması, teminat, beyan ve tekeffül ile tazminat mekanizmalarını hukuki ve ticari sonuçlarıyla birlikte değerlendiriyor;',
            'Rekabet Kurumu, ticaret sicili ve diğer yetkili merciler nezdinde gerekli izin, bildirim ve başvuru süreçlerine destek oluyor;',
            'İmza, kapanış ve işlem sonrası entegrasyon adımlarını koordine ediyor;',
            'Hissedar, finansman ve grup yapılarını şirketler hukuku, sözleşmeler ve finansman düzenlemeleri bakımından yeniden yapılandırıyor;',
            'Küresel ve yerel asgari tamamlayıcı kurumlar vergisi (Pillar 2) ve diğer uluslararası vergi düzenlemelerinin işlem yapısına etkisini analiz ediyor;',
            'Yatırım teşvikleri, Ar-Ge merkezleri, teknoloji geliştirme bölgeleri ve serbest bölge uygulamalarını yatırım yapısının bir parçası olarak değerlendiriyor;',
            'Teşvik başvuruları, belge süreçleri ve ilgili kamu kurumlarıyla yürütülen görüşmelerde destek sunuyoruz.',
          ],
        },
        {
          slug: 'varlik-ve-servet-yonetimi', ad: 'Varlık ve Servet Yönetimi',
          ozet: 'Gerçek kişilerin, girişimcilerin ve aile şirketlerinin varlık yapıları özel bir hukuki ve vergisel planlama gerektirir. Özel müvekkillerin Türkiye\'deki ve yurt dışındaki varlık ve gelir yapılarını değerlendiriyor; vergi mukimliği, beyan yükümlülükleri, aile şirketlerinin yönetimi, miras planlaması ve varlıkların nesiller arası devri konularında müvekkillerimize danışmanlık sunuyoruz.',
          paragraflar: [
            'Gerçek kişilerin, girişimcilerin ve aile şirketlerinin varlık yapıları; şirketlerden farklı hukuki, vergisel ve kişisel öncelikler içerir. Varlıkların korunması, gelirlerin doğru yapılandırılması ve sonraki nesillere devri, yalnızca miras hukuku kapsamında değil; şirketler hukuku, vergi hukuku ve uluslararası düzenlemelerle birlikte ele alınmalıdır.',
            'Özel müvekkillerimize ve aile şirketlerine, varlık ve ortaklık yapılarının planlanması, nesiller arası geçişin hazırlanması ve beyan yükümlülüklerinin yönetilmesi konularında danışmanlık sunuyoruz. Aile içi ilişkilerin ve ticari ihtiyaçların hassasiyetini gözeterek, uygulanabilir ve uzun vadeli çözümler geliştiriyoruz.',
          ],
          kapsam: [
            'Türkiye\'deki ve yurt dışındaki varlık ve gelir yapılarını hukuki ve vergisel açıdan değerlendiriyor;',
            'Vergi mukimliği ve sınır ötesi beyan yükümlülükleri konusunda danışmanlık veriyor;',
            'Aile şirketlerinin ortaklık ve yönetim yapısını inceliyor;',
            'Aile üyeleri arasındaki pay devirlerini ve ortaklık ilişkilerini düzenliyor;',
            'Nesiller arası devir ve halefiyet planlaması yapıyor;',
            'Miras, bağış ve karşılıksız intikal işlemlerinin hukuki ve vergisel sonuçlarını değerlendiriyor;',
            'Vasiyetname ve miras planlamasına ilişkin hukuki destek sunuyor;',
            'Kâr dağıtımı, sermaye azaltımı ve ortaklara yapılacak diğer ödemelerin gerçek kişi ortaklar bakımından vergisel sonuçlarını inceliyor;',
            'Yurt dışındaki şirket, ortaklık ve varlık yapılarının ekonomik öz ve gerçek lehtar uygulamaları bakımından değerlendirilmesine destek oluyor;',
            'Taşınmaz edinimi, elde tutulması ve devrinden kaynaklanan vergisel yükümlülükleri inceliyor;',
            'Varlık barışı, vergi affı ve yeniden yapılandırma düzenlemelerinden yararlanma koşullarını değerlendiriyor ve bu düzenlemelerden yararlanma süreçlerini yürütüyor;',
            'Aile şirketlerinde kurumsal yönetim, karar alma ve pay sahipleri arasındaki ilişkilerin düzenlenmesine destek oluyoruz.',
          ],
        },
        {
          slug: 'uyum-ve-kurum-ici-sorusturmalar', ad: 'Uyum ve Kurum İçi Soruşturmalar',
          ozet: 'Mevzuata veya şirket içi politikalara aykırılık şüphesi, hızlı, bağımsız ve gizlilik içinde yürütülecek bir inceleme gerektirir. Şirketlerin uyum yapılarını değerlendiriyor; kurum içi soruşturmaları yürütüyor, sorun ve eksiklikleri belirliyor ve uygulanacak yol haritasını oluşturuyoruz. Rekabet hukuku, kişisel verilerin korunması, vergi ve şirketler hukukundan kaynaklanan riskleri olayın niteliğine göre birlikte ele alıyoruz ve ilgili yükümlülüklere tam uyum için danışmanlık sunuyoruz.',
          paragraflar: [
            'Şirketlerin faaliyet gösterdikleri mevzuata ve kendi iç politika ve prosedürlerine uyumu, hukuki sorumlulukların yerine getirilmesi ile mali ve itibari risklerin yönetilmesi bakımından önem taşır. Etkin bir uyum yapısı; risklerin önceden belirlenmesini, politika ve prosedürlerin şirketin faaliyetlerine göre oluşturulmasını, çalışanların bilgilendirilmesini ve uygulamanın düzenli olarak gözden geçirilmesini gerektirir. Bir ihlal şüphesi ortaya çıktığında ise incelemenin gecikmeden, bağımsız ve usulüne uygun biçimde yürütülmesi gerekir.',
            'Uyum programlarının kurulması ve geliştirilmesi, politika ve prosedürlerin hazırlanması, risk değerlendirmeleri ve şirket içi eğitimler konularında sürekli danışmanlık sunuyoruz. Kurum içi ihbar ve iddiaları inceliyor; tespit edilen sorunlara ilişkin düzeltici önlemleri ve uygulama adımlarını belirliyoruz. Çalışmalarımızda şirketler hukuku, vergi hukuku, rekabet hukuku ve kişisel verilerin korunmasına ilişkin düzenlemeleri olayın niteliğine göre birlikte ele alıyoruz.',
          ],
          kapsam: [
            'Şirket faaliyetleri ve iç süreçleri bakımından hukuki risk değerlendirmesi yapıyor;',
            'Uyum politika ve prosedürlerini hazırlıyor ve güncelliyor;',
            'İhbar, usulsüzlük veya şirket içi politika ihlali iddialarına ilişkin kurum içi soruşturmalar yürütüyor;',
            'Yürütülen kurum içi soruşturmalarda ulaşılan bulguları ve hukuki değerlendirmeleri içeren soruşturma raporları hazırlıyor;',
            'Tespit edilen eksikliklere ilişkin düzeltici önlemler ve uygulama yol haritaları oluşturuyor;',
            'Vergi ve muhasebe kayıtlarından kaynaklanan uyum risklerini değerlendiriyor;',
            'Dağıtım, bayilik, franchise, tedarik ve benzeri ticari ilişkileri; yeniden satış fiyatının belirlenmesi, münhasırlık, rekabet etmeme yükümlülükleri, bölge ve müşteri sınırlamaları ile çevrimiçi satış koşulları bakımından inceliyor;',
            'Rakiplerle bilgi paylaşımı, sektör dernekleri nezdindeki temaslar, ortak satın alma ve satış düzenlemeleri ile diğer yatay iş birliklerini rekabet hukuku bakımından değerlendiriyor;',
            'Hâkim durum, ayrımcı uygulamalar, bağlama, indirim sistemleri ve teşebbüsler arası anlaşmalardan kaynaklanabilecek rekabet hukuku riskleri konusunda danışmanlık sunuyor;',
            'Birleşme, devralma ve ortak girişim işlemlerinin Rekabet Kuruluna bildirim yükümlülüğünü değerlendiriyor ve gerekli izin süreçlerini yürütüyor;',
            'Rekabet Kurumu inceleme ve soruşturmalarında, yerinde incelemelerde ve bilgi taleplerinin yanıtlanmasında müvekkillerimize destek oluyor; rekabet hukukuna uyum programları ve şirket içi eğitimler hazırlıyor;',
            'Kişisel veri işleme faaliyetlerini, aydınlatma metinlerini, açık rıza süreçlerini ve veri işleyenlerle yapılan sözleşmeleri değerlendiriyor;',
            'Kişisel veri ihlali şüphesi bulunan olaylarda hukuki durum tespiti ve müdahale sürecine destek oluyoruz.',
          ],
        },
        {
          slug: 'uyusmazlik-cozumu', ad: 'Uyuşmazlık Çözümü',
          ozet: 'Uyuşmazlıkların sonucu çoğu zaman dava veya tahkim başlamadan önce alınan kararlarla şekillenir. Ticari ve idari uyuşmazlıklarda, yerel ve uluslararası tahkim yargılamalarında müvekkillerimizi temsil ediyor; dava öncesi risk değerlendirmesinden müzakere ve arabuluculuğa, geçici hukuki korumalardan kararların icrasına kadar bütün süreci yönetiyoruz.',
          paragraflar: [
            'Bir uyuşmazlığın sonucu, çoğu zaman dava veya tahkim süreci başlamadan önce verilen kararlarla şekillenir. Delillerin zamanında güvence altına alınması, karşı tarafa yapılacak bildirimlerin içeriği ve gerektiğinde ihtiyati tedbir veya ihtiyati haciz gibi koruyucu önlemlere başvurulması, sonraki aşamalarda müvekkilin pozisyonunu doğrudan belirler. Lehe alınan bir mahkeme veya hakem kararı ise ancak etkin biçimde icra edilebildiği ve alacak fiilen tahsil edilebildiği ölçüde sonuç doğurur.',
            'Bu nedenle uyuşmazlıkları tek bir aşamaya indirgemeden tüm uyuşmazlık çözüm sürecini; dava öncesi değerlendirme ve hazırlıktan alternatif çözüm yollarına, dava ve tahkim süreçlerinden kararın icrası ve alacağın tahsiline kadar bir bütün olarak ele alıyoruz. Her uyuşmazlıkta taraflar arasındaki ilişkinin geleceğini birlikte değerlendiriyor, müvekkilin önceliklerine uygun stratejiyi bu değerlendirme üzerine kuruyoruz.',
            'Ticari ve idari uyuşmazlıklarda; adli ve idari yargı mercileri, yerel ve uluslararası tahkim yargılamaları ile icra ve iflas daireleri önünde müvekkillerimizi temsil ediyoruz. Uyuşmazlığın değindiği farklı hukuk alanlarını aynı strateji içinde değerlendiriyor; dava, tahkim ve icra süreçlerini birbiriyle uyumlu şekilde yürütüyoruz.',
          ],
          kapsam: [
            'Uyuşmazlık öncesi hukuki durum, risk ve tahsil kabiliyeti değerlendirmesi yapıyor;',
            'Dava ve tahkim süreçlerine hazırlık kapsamında delillerin güvence altına alınmasını ve gerekli bildirimlerin yapılmasını sağlıyor;',
            'İhtiyati tedbir, ihtiyati haciz ve diğer geçici hukuki koruma yollarını değerlendiriyor ve yürütüyor;',
            'Müzakere, arabuluculuk ve sulh süreçlerini yürütüyor;',
            'Ticaret mahkemeleri ve diğer adli yargı mercileri önündeki davaları, kanun yolu aşamaları dâhil olmak üzere takip ediyor;',
            'Yerel ve uluslararası, kurumsal ve ad hoc tahkim yargılamalarında müvekkillerimizi temsil ediyor;',
            'Yabancı mahkeme ve hakem kararlarının tanınması ve tenfizi ile hakem kararlarının iptali süreçlerini yürütüyor;',
            'İdari işlemlere karşı idari başvuru ve dava süreçlerini yürütüyor; düzenleyici kurumlar ve diğer kamu otoriteleri nezdinde müvekkillerimizi temsil ediyor;',
            'Mahkeme ve hakem kararlarının icrası ile alacakların tahsili süreçlerini takip ediyor;',
            'İcra ve iflas hukukundan kaynaklanan dava ve itiraz süreçleri ile konkordato ve iflas süreçlerinde müvekkillerimizin haklarını koruyor;',
            'Dava ve icra dosyalarını düzenli olarak raporluyor; uyuşmazlıklardan edinilen tecrübeyi sözleşme ve iç süreçlere yansıtıyoruz.',
          ],
        },
      ],
    },
    yayinlar: {
      etiket: 'Yayınlarımız',
      baslik: 'Bakış açımızı paylaşıyoruz.',
      hepsi: 'Tüm yayınlarımız',
      kok: '/yayinlar/',
      turler: [
        { anahtar: 'duyuru', ad: 'Duyurular', tanim: 'Güncel gelişmeler hakkında özet yayınlar.' },
        { anahtar: 'bulten', ad: 'Bültenler', tanim: 'Güncel gelişmeler hakkında kapsamlı yayınlar.' },
        { anahtar: 'makale', ad: 'Makaleler', tanim: 'Belirli bir konu özelinde yayınlar.' },
      ],
      bos: 'Bu başlıkta henüz yayın yok.',
    },
    ekip: {
      etiket: 'Ekibimiz',
      geri: 'Ekibimiz',
      baslik: 'Bizi tanıyın.',
      metin: 'Dinleyen, anlayan ve daima yanınızda olan bir ekip.',
      hepsi: 'Ekibimiz',
      kok: '/ekip/',
      basliklar: { ozet: 'Kısaca', egitim: 'Eğitim', diger: 'Akademik yayın ve tebliğler' },
      liste: [
        {
          slug: 'eren-akarca', ad: 'Hüseyin Eren Akarca', kisaAd: 'Hüseyin Eren Akarca', rol: 'Ortak',
          eposta: 'eren@akarcasahanturk.com', telefon: '+90 541 584 24 89',
          foto: '/marka/ekip/eren-akarca.jpg', linkedin: 'https://www.linkedin.com/in/hüseyin-eren-akarca/',
          ozet: 'Vergi hukuku, uluslararası vergilendirme, şirketler hukuku ve birleşme-devralmalar alanlarında çalışıyor; çok uluslu şirketlerin Türkiye\'deki yatırım, yeniden yapılandırma, vergi incelemesi ve yargılama süreçlerinde kapsamlı deneyime sahip.',
          paragraflar: ["Hüseyin Eren Akarca, Ankara Üniversitesi Hukuk Fakültesi mezunudur. Bilgi Üniversitesi Hukuk Fakültesinde yüksek lisans eğitimine devam etmektedir. Kariyerine vergi ve gümrük hukuku alanında başlamış ve uzun yıllar bu alanlarda uluslararası çalışan avukatlık ortaklıklarında çalışmaya devam etmiştir. 2026 yılında Akarca Sahanturk'u kurmuştur.", "Uzmanlık alanları arasında vergi ve gümrük hukuku, uluslararası vergilendirme, yatırım teşvikleri, transfer fiyatlandırması, şirketler hukuku, sözleşmeler hukuku, birleşme ve devralmalar ile uyuşmazlık çözümü bulunmaktadır. Rekabet hukuku ve kişisel verilerin korunması hukuku alanlarında da deneyime sahiptir.", "Şirket yeniden yapılandırmaları, kurumsal yönetim, ticari sözleşmelerin hazırlanması, incelenmesi ve müzakeresi, yatırım teşvik mevzuatı ile Türk vergi mevzuatına ve küresel tamamlayıcı kurumlar vergisi (OECD Pillar 2) düzenlemelerine uyum dâhil olmak üzere, çok uluslu ve yerel şirketlere Türkiye'deki yatırım süreçlerinde vergi hukuku, kurumsal yönetim, şirketler hukuku ve sözleşmeler hukuku alanlarında danışmanlık vermektedir. Ayrıca gerçek kişi müvekkillerine varlık yönetimi ve miras planlaması konularında hukuki destek sunmaktadır. Müvekkillerini vergi incelemelerinde, idari başvuru süreçlerinde, idari yargıda ve hukuk yargısında temsil etmektedir.", "Mesleki çalışmalarının yanı sıra ulusal ve uluslararası kurgusal dava yarışmalarında Ankara Üniversitesi öğrencilerine uzun yıllardır koçluk ve mentorluk yapmaktadır."],
          egitim: ["Bilgi Üniversitesi Hukuk Fakültesi — Yüksek Lisans", "Ankara Üniversitesi Hukuk Fakültesi — Lisans"],
          diger: ["Uluslararası Vergilendirmede Bir Reform Aracı Olarak Matrah Aşındırma ve Kâr Kaydırmanın Engellenmesine Yönelik Vergi Anlaşmaları ile İlgili Önlemlerin Uygulanmasına İlişkin Çok Taraflı Sözleşme — Mali Hukukta Güncel Gelişmeler, 21. Yüzyılda Hukukun Dönüşümü Sempozyumu, Ankara Üniversitesi Hukuk Fakültesi", "Gerçek Lehtar: Ortaya Çıkışı, Gelişimi ve Türkiye'deki Vergi İncelemeleri ile Yargı Kararlarında Konuya Bakış — Vergi Dünyası Dergisi, Aralık 2023"],
        },
        {
          slug: 'ata-sahanturk', ad: 'Atahan Şahantürk', kisaAd: 'Atahan Şahantürk', rol: 'Ortak',
          eposta: 'atahan@akarcasahanturk.com', telefon: '+90 532 130 18 99',
          foto: '/marka/ekip/ata-sahanturk.jpg', linkedin: '', // TODO: Ata'nın LinkedIn adresi girilecek
          ozet: 'Uluslararası vergilendirme, dijital ekonominin vergilendirilmesi, transfer fiyatlandırması ve gümrük hukuku alanlarında çalışıyor; çok uluslu dijital şirketlerin vergi uyum süreçleri, vergi incelemeleri ve vergi davalarında kapsamlı deneyime sahip.',
          paragraflar: ["Atahan Şahantürk, Dokuz Eylül Üniversitesi Hukuk Fakültesi mezunudur. Marmara Üniversitesi Hukuk Fakültesinde mali hukuk alanında yüksek lisans programını tamamlamıştır. Kariyerine vergi ve gümrük hukuku alanında başlamış ve uzun yıllar bu alanlarda uluslararası çalışan avukatlık ortaklıklarında çalışmaya devam etmiştir. 2026 yılında Akarca Sahanturk'u kurmuştur.", "Uzmanlık alanları arasında vergi ve gümrük hukuku, uluslararası vergilendirme, dijital ekonominin vergilendirilmesi, transfer fiyatlandırması, şirketler hukuku ve sözleşmeler hukuku bulunmaktadır. Kişisel verilerin korunması hukuku alanında da deneyime sahiptir.", "Başta çok uluslu dijital şirketler olmak üzere müvekkillerine, vergi ve gümrük mevzuatına uyum alanında danışmanlık vermekte, Türkiye'deki faaliyetleriyle bağlantılı şirketler hukuku ve sözleşmeler hukuku konularında da hukuki destek sunmaktadır. Vergi ve gümrük alanındaki çalışmaları, küresel tamamlayıcı kurumlar vergisi (OECD Pillar 2) düzenlemelerine uyumu, vergi ve gümrük idareleriyle yürütülen yazışmaları ve idari başvuruların takibini kapsamaktadır. Şirketler hukuku ve sözleşmeler hukuku alanındaki çalışmaları, kurumsal yönetim süreçlerini ve ticari sözleşmelerin hazırlanması, incelenmesi ve müzakeresini kapsamaktadır. Müvekkillerini vergi incelemelerinde, idari başvuru süreçlerinde, idari yargıda ve hukuk yargısında temsil etmektedir.", "Mesleki çalışmalarının yanı sıra yapay zekâ ve diğer hukuk teknolojilerinin avukatlık pratiğinde kullanımına yönelik projeler yürütmektedir."],
          egitim: ["Marmara Üniversitesi Hukuk Fakültesi — Mali Hukuk Yüksek Lisans", "Dokuz Eylül Üniversitesi Hukuk Fakültesi — Lisans"],
          diger: [],
        },
      ],
    },
    iletisim: {
      etiket: 'İletişim',
      baslik: 'Bize ulaşın.',
      metin: 'Görüşme talepleriniz için formu doldurabilir, bize e-posta gönderebilir veya ofisimizi arayabilirsiniz.',
      alanlar: { eposta: 'E-posta', telefon: 'Telefon', adres: 'Adres' },
      form: { ad: 'Ad Soyad', eposta: 'E-posta', konu: 'Konu', mesaj: 'Mesajınız', gonder: 'Görüşme talebi gönder', dugme: 'Görüşme talebi', gonderiliyor: 'Gönderiliyor…', tesekkur: 'Mesajınız bize ulaştı; en kısa sürede dönüş yapacağız.', hata: 'Mesaj gönderilemedi. Lütfen birkaç dakika sonra tekrar deneyin ya da bizi arayın.', zorunlu: 'Lütfen ad, e-posta ve mesaj alanlarını doldurun.' },
      harita: 'Haritada göster',
    },
    kariyer: {
      etiket: 'Kariyer',
      baslik: 'Birlikte çalışmak ister misiniz?',
      metin: 'Sorumluluk sahibi, öğrenmeye ve paylaşmaya açık meslektaşlarımızı ekibimizin bir parçası olmaya davet ediyoruz.',
      dugme: 'Bize Katılın',
      yol: '/basvuru/',
    },
    basvuru: {
      etiket: 'Kariyer',
      baslik: 'Birlikte çalışmak ister misiniz?',
      metin: 'Formu doldurun, özgeçmişinizi ekleyin. Başvurunuz doğrudan bize ulaşacaktır. Uygun bir pozisyon olduğunda sizinle mutlaka iletişime geçeceğiz.',
      geri: 'Ana sayfaya dön',
      alanlar: {
        ad: 'Ad Soyad', adIpucu: 'Adınız ve soyadınız',
        eposta: 'E-posta', epostaIpucu: 'ad@ornek.com',
        telefon: 'Telefon', telefonIpucu: '05xx xxx xx xx',
        pozisyon: 'Başvurduğunuz pozisyon', pozisyonSec: 'Seçiniz',
        pozisyonlar: ['Avukat', 'Stajyer avukat', 'Yaz stajı / öğrenci', 'Diğer'],
        mesaj: 'Ön yazı', mesajIpucu: 'Kendinizden ve neden bizimle çalışmak istediğinizden kısaca söz edin.',
        cv: 'Özgeçmiş (CV)', cvIpucu: 'PDF, DOC veya DOCX · en fazla 10 MB', cvSec: 'Dosya seç', cvYok: 'Henüz dosya seçilmedi',
        onay: 'Başvurumun değerlendirilmesi amacıyla kişisel verilerimin işlenmesine ilişkin',
        onayBaglanti: 'KVKK Aydınlatma Metni',
        onaySon: "'ni okudum.",
        gonder: 'Başvuruyu gönder', gonderiliyor: 'Gönderiliyor…',
      },
      zorunlu: 'Bu alan zorunludur.',
      hatalar: {
        eposta: 'Geçerli bir e-posta adresi yazın.',
        cvTur: 'Yalnızca PDF, DOC veya DOCX yükleyebilirsiniz.',
        cvBoyut: 'Dosya 10 MB\'tan büyük olamaz.',
        genel: 'Başvuru gönderilemedi. Lütfen birkaç dakika sonra tekrar deneyin.',
      },
      tesekkur: {
        baslik: 'Başvurunuz bize ulaştı.',
        metin: 'İlginiz için teşekkür ederiz. Başvurunuzu inceleyip uygun olduğunda sizinle iletişime geçeceğiz.',
      },
    },
    altbilgi: {
      haklar: '© 2026 Akarca Şahantürk Hukuk Bürosu. Tüm hakları saklıdır.',
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
    "kod": "en",
    "kokYol": "/en/",
    "digerDil": {
      "etiket": "TR",
      "yol": "/"
    },
    "menu": [
      {
        "ad": "About Us",
        "capa": "hakkimizda"
      },
      {
        "ad": "Practice Areas",
        "capa": "calisma-alanlari"
      },
      {
        "ad": "Publications",
        "capa": "yayinlar"
      },
      {
        "ad": "Our Team",
        "capa": "ekibimiz"
      },
      {
        "ad": "Contact",
        "capa": "iletisim"
      },
      {
        "ad": "Careers",
        "capa": "kariyer"
      }
    ],
    "hero": {
      "etiket": "Istanbul · Türkiye",
      "baslik": "In tax and customs law, practical solutions.",
      "donen": [
        "In tax planning,",
        "In tax audits,",
        "In customs and foreign trade,",
        "In corporate law,",
        "In mergers and acquisitions,",
        "In dispute resolution,"
      ],
      "sabit": "practical solutions.",
      "metin": "As an independent law office, we provide advisory and dispute resolution services to Turkish and cross-border clients for their operations in Türkiye and abroad."
    },
    "yaklasim": {
      "etiket": "About Us",
      "baslik": "The same diligence and the same responsibility at every step.",
      "paragraflar": [
        "Akarca Sahanturk supports its clients primarily in tax and customs law, as well as in mergers and acquisitions, corporate and commercial law, asset and wealth management, competition law, personal data protection, compliance and internal investigations, and dispute resolution.",
        "With its clients' interests at the centre of its services, Akarca Sahanturk becomes part of its clients' journey through the tailored solutions it provides, in Turkish and in English, in commercial processes and disputes that require technical expertise."
      ],
      "baglanti": "Our practice areas"
    },
    "alanlar": {
      "etiket": "Practice Areas",
      "baslik": "In-depth expertise, a holistic approach.",
      "metin": "From advisory to dispute resolution, we stand by you at every stage of your activities.",
      "hepsi": "All practice areas",
      "altBaslik": "Our experience especially includes",
      "liste": [
        {
          "slug": "tax-planning-and-advisory",
          "ad": "Tax Planning and Advisory",
          "ozet": "The tax consequences of a commercial transaction directly affect its cost and feasibility. We evaluate investment, financing, profit distribution, cross-border transaction and restructuring options together with their legal, financial and commercial consequences, and advise our clients on matters ranging from day-to-day tax practice to transfer pricing and international taxation.",
          "paragraflar": [
            "Tax is one of the most important factors directly affecting the cost, feasibility and long-term consequences of a commercial decision. Transactions such as investments, financing, restructurings or profit distributions, as well as commercial activities carried out with third parties, must be planned not only in a legally valid manner but also with their tax consequences in mind. The tax burden and risks that emerge after a transaction has been implemented can, in most cases, be managed through proper planning at the outset.",
            "The complex and constantly changing nature of tax legislation also means that companies need regular legal support in their day-to-day operations. We assess our clients' existing and planned activities within the framework of Turkish tax legislation, international tax regulations and the current practice of the tax administration, and set out the alternatives together with their legal, financial and commercial consequences."
          ],
          "kapsam": [
            "Assessing the tax consequences of investment, financing, profit distribution, service and licence models;",
            "Carrying out tax planning for company formations, share transfers, mergers, demergers and restructurings;",
            "Providing opinions on corporate income tax, value added tax, withholding tax, stamp tax, banking and insurance transactions tax and other direct and indirect taxes;",
            "Reviewing cross-border transactions in light of double taxation treaties and beneficial ownership rules;",
            "Advising on transfer pricing policies, intra-group services, financing transactions and advance pricing agreements;",
            "Assessing digital services tax, the VAT regime for electronic services (KDV-3) and other tax obligations relating to digital business models;",
            "Reviewing the tax structure of employee share option plans and employee benefits;",
            "Analysing the impact of the domestic and global minimum top-up corporate tax (Pillar 2) rules on corporate structures and on mergers and acquisitions;",
            "Assessing, from a tax perspective, the conditions for benefiting from R&D centres, technology development zones, free zones, export support schemes and investment incentives;",
            "Monitoring the impact of legislative changes on our clients' activities and advising on day-to-day tax matters."
          ]
        },
        {
          "slug": "tax-audits-and-disputes",
          "ad": "Tax Audits and Disputes",
          "ozet": "In correspondence with the tax administration, in invitation-to-explanation procedures and during a tax audit, the information and documents submitted and the defence approach adopted determine the course of the audit and of any dispute that may follow. We manage all administrative and judicial processes with a holistic strategy and with care, from tax audits and cross-audits to the invitation to explanation, settlement and report evaluation stages, and from the tax courts to higher-instance appeals.",
          "paragraflar": [
            "A tax audit is one of the most significant financial and legal risks a company may face. The increasing intensity of audits and differing interpretations of tax practice may expose taxpayers to high-value assessments and administrative fines. We evaluate the basis of each assessment, the available administrative and judicial remedies, the evidentiary position and the potential financial consequences together, developing strategies suited to the client's commercial priorities and risk profile.",
            "Information and documents submitted during an audit, the explanations provided and the defence approach adopted determine not only the outcome of the audit but also the course of any administrative proceedings or disputes that may follow. We therefore treat the tax audit as the starting point of a potential dispute, and ensure that a strategy suited to this is developed and implemented.",
            "In disputes arising after a tax audit, we represent the clients from pre-litigation remedies through all stages of the tax judiciary and, depending on the nature of the dispute, also pursue individual applications to the Constitutional Court and the European Court of Human Rights. In addition to tax loss and procedural penalties, we provide advisory and representation services in investigations and criminal proceedings concerning tax evasion offences, handling the administrative and criminal processes together."
          ],
          "kapsam": [
            "Assessing existing practices and potential risk areas before a tax audit;",
            "Managing the flow of information and documents during tax audits and cross-audits;",
            "Reviewing audit minutes, information requests and the tax inspector's assessments from a legal and technical perspective;",
            "Developing defence strategies on matters such as transfer pricing, beneficial ownership, digital permanent establishment, permanent representative, financing, exemption and deduction practices;",
            "Conducting voluntary compliance letter, invitation to explanation, pre- and post-assessment settlement and report evaluation commission procedures;",
            "Assessing administrative remedies, including the mutual agreement procedure, in disputes arising from double taxation treaties;",
            "Filing lawsuits against tax and penalty notices and other administrative acts of a tax nature;",
            "Conducting proceedings before the tax courts, the regional administrative courts and the Council of State;",
            "Representing the clients in investigations and criminal proceedings concerning tax evasion offences, and conducting the administrative tax dispute and the criminal process in a coordinated manner;",
            "Assessing and pursuing individual applications to the Constitutional Court and the European Court of Human Rights in suitable disputes;",
            "Analysing the impact of temporary measures such as tax amnesties, restructuring schemes and asset repatriation programmes on ongoing audits and disputes."
          ]
        },
        {
          "slug": "international-trade-and-customs",
          "ad": "International Trade and Customs",
          "ozet": "Assessments of origin, customs value and tariff classification may give rise not only to import costs but also to significant risks for past periods. We review import and export structures under customs and tax legislation, and support our clients in import transactions under investment incentive certificates and in post-clearance control, additional assessment, administrative fine, objection and litigation processes.",
          "paragraflar": [
            "Customs and foreign trade regulations directly affect the cost, timing and sustainability of import and export transactions. A different assessment of the origin, customs value or tariff classification of goods may lead to high-value additional assessments and administrative fines for past periods. Establishing the correct customs position before the transaction is therefore as important as the defence to be conducted once a dispute has arisen.",
            "We evaluate import and export structures, supply and licence agreements, intra-group transactions and the related payment flows together under customs and tax legislation. In this way, we help ensure consistency between the commercial model and the customs declarations, and help make the position adopted defensible in a potential audit.",
            "Drawing on our combined advisory and dispute experience, we aim to identify customs risks before the transaction and, in the event of a dispute, to build a defence with a strong technical foundation."
          ],
          "kapsam": [
            "Assessing the customs tariff statistical position of goods and preparing binding tariff information applications;",
            "Advising on rules of origin, preferential origin arrangements and certificates of origin;",
            "Reviewing the amounts to be included in the customs value, intra-group payments, and licence and royalty payments;",
            "Assessing the impact of transfer pricing practices on customs value;",
            "Reviewing the compliance of import and export structures with customs and foreign trade legislation;",
            "Assessing the conditions for benefiting from reliefs, exemptions and special customs procedures;",
            "Supporting import transactions under investment incentive certificates and customs duty exemptions;",
            "Managing the information and document process in post-clearance controls and customs audits;",
            "Reviewing the impact of additional customs duties, additional financial obligations, surveillance measures and other foreign trade measures;",
            "Conducting administrative objection procedures against additional assessment and administrative fine decisions;",
            "Filing lawsuits in customs disputes and conducting the litigation process."
          ]
        },
        {
          "slug": "corporate-and-commercial-law",
          "ad": "Corporate and Commercial Law",
          "ozet": "From the formation of a company to its day-to-day operations, and from its capital structure to the relationships among its shareholders, every stage of corporate life requires a solid legal foundation. We provide support on formations, changes in capital and share structure, general assembly and board of directors processes, shareholders' agreements, corporate governance and commercial contracts, taking the legal, financial and tax consequences into account together.",
          "paragraflar": [
            "From the formation of a company to its day-to-day operations and commercial relationships, and from its capital structure to the relationships among its shareholders, every stage of corporate life requires a solid and up-to-date legal foundation. Corporate documentation and executed agreements that are not aligned with commercial reality and legal requirements may lead to significant disputes and loss of rights in decision-making, investment, profit distribution and share transfer processes, as well as in the company's commercial relationships.",
            "We provide ongoing legal support on company formation, the establishment of management and representation structures, the regulation of relationships among shareholders, and the conduct of day-to-day commercial activities and commercial relationships with third parties. We align corporate documents and decision-making processes with the company's activities, and address matters such as capital transactions, intra-group arrangements, commercial contracts and profit distribution within the body of applicable regulations, corporate law first and foremost."
          ],
          "kapsam": [
            "Advising on company formation, the opening of branches and liaison offices, and market entry models for Türkiye;",
            "Drafting and negotiating sales, supply, distribution, franchise, service, licence and other commercial agreements;",
            "Drafting and updating articles of association and internal company regulations;",
            "Carrying out capital increases and reductions and other transactions relating to the capital structure;",
            "Assessing share transfers and changes in the shareholding structure together with their legal, commercial and tax consequences;",
            "Preparing general assembly and board of directors meetings, resolutions and registration processes;",
            "Drafting and negotiating shareholders' agreements, joint venture agreements and other arrangements among shareholders;",
            "Structuring corporate governance, representation and binding authority structures, and signing authorities;",
            "Reviewing intra-group service, financing and cost-sharing agreements from a corporate law and commercial practice perspective;",
            "Supporting the decision-making and implementation processes for profit distribution, reserves and other payments to shareholders;",
            "Managing trade registry transactions and corporate record-keeping."
          ]
        },
        {
          "slug": "mergers-acquisitions-and-corporate-restructurings",
          "ad": "Mergers, Acquisitions and Corporate Restructurings",
          "ozet": "In mergers, acquisitions and restructurings, the chosen roadmap determines the tax burden of the transaction, the allocation of liabilities and the post-transaction corporate structure. We compare alternative transaction models with their legal and tax consequences; conduct the due diligence, agreement, approval, signing and closing processes; and assess the impact of investment incentives and international tax rules on the transaction structure.",
          "paragraflar": [
            "Mergers and acquisitions require the joint assessment of interrelated areas such as corporate law, contracts, financing, competition law, employment law, regulatory requirements and tax. Whether the transaction is carried out through a share transfer, an asset transfer, a merger, a demerger or another restructuring model directly affects the allocation of liabilities, the purchase price and security mechanisms, the required approvals, the financing method and the post-transaction corporate structure.",
            "We provide support from the planning of the investment or restructuring through to signing, closing and post-transaction integration. We conduct the legal due diligence process, reflect the risks in the transaction documents, negotiate the agreements and coordinate the necessary approvals and filings. By comparing alternative transaction models with their commercial, legal and tax consequences, we ensure that the chosen structure is workable."
          ],
          "kapsam": [
            "Assessing share transfer, asset transfer, merger, demerger and conversion alternatives;",
            "Planning the structure, timetable, allocation of liabilities and required approvals of the transaction;",
            "Advising on domestic and cross-border investment and partnership models;",
            "Coordinating tax and financial due diligence alongside legal due diligence;",
            "Conducting legal due diligence processes and ensuring that the risks identified are reflected in the transaction documents;",
            "Drafting and negotiating share purchase, shareholders', joint venture and investment agreements;",
            "Assessing purchase price, price adjustment, security, representations and warranties, and indemnification mechanisms together with their legal and commercial consequences;",
            "Supporting the necessary approval, notification and filing processes before the Competition Authority, the trade registry and other competent authorities;",
            "Coordinating signing, closing and post-transaction integration steps;",
            "Restructuring shareholder, financing and group structures from the perspective of corporate law, contracts and financing regulations;",
            "Analysing the impact of the global and domestic minimum top-up corporate tax (Pillar 2) and other international tax rules on the transaction structure;",
            "Assessing investment incentives, R&D centres, technology development zones and free zone arrangements as part of the investment structure;",
            "Supporting incentive applications, certificate processes and discussions with the relevant public authorities."
          ]
        },
        {
          "slug": "asset-and-wealth-management",
          "ad": "Asset and Wealth Management",
          "ozet": "The asset structures of individuals, entrepreneurs and family businesses require specific legal and tax planning. We assess the asset and income structures of private clients in Türkiye and abroad, and advise our clients on tax residency, reporting obligations, the governance of family businesses, succession planning and the transfer of assets between generations.",
          "paragraflar": [
            "The asset structures of individuals, entrepreneurs and family businesses involve legal, tax and personal priorities that differ from those of companies. The protection of assets, the proper structuring of income and the transfer of assets to the next generations must be addressed not only under inheritance law, but together with corporate law, tax law and international regulations.",
            "We advise the private clients and family businesses on the planning of asset and ownership structures, the preparation of the transition between generations and the management of reporting obligations. Mindful of the sensitivity of family relationships and commercial needs, we develop workable and long-term solutions."
          ],
          "kapsam": [
            "Assessing asset and income structures in Türkiye and abroad from a legal and tax perspective;",
            "Advising on tax residency and cross-border reporting obligations;",
            "Reviewing the ownership and governance structure of family businesses;",
            "Structuring share transfers and partnership relationships among family members;",
            "Carrying out intergenerational transfer and succession planning;",
            "Assessing the legal and tax consequences of inheritance, gift and other gratuitous transfers;",
            "Providing legal support on wills and estate planning;",
            "Reviewing the tax consequences, for individual shareholders, of profit distributions, capital reductions and other payments to shareholders;",
            "Supporting the assessment of companies, partnerships and asset structures abroad in light of economic substance and beneficial ownership rules;",
            "Reviewing the tax obligations arising from the acquisition, holding and transfer of real estate;",
            "Assessing the conditions for benefiting from asset repatriation, tax amnesty and restructuring schemes, and conducting the processes for benefiting from them;",
            "Supporting the structuring of corporate governance, decision-making and relationships among shareholders in family businesses."
          ]
        },
        {
          "slug": "compliance-and-internal-investigations",
          "ad": "Compliance and Internal Investigations",
          "ozet": "A suspected breach of legislation or of internal company policies calls for a prompt, independent and confidential investigation. We assess companies' compliance structures, conduct internal investigations, identify issues and deficiencies, and establish the roadmap to be followed. Depending on the nature of the matter, we address together the risks arising from competition law, personal data protection, tax and corporate law, and advise on full compliance with the relevant obligations.",
          "paragraflar": [
            "Companies' compliance with the legislation governing their activities and with their own internal policies and procedures is important for fulfilling legal responsibilities and for managing financial and reputational risks. An effective compliance structure requires risks to be identified in advance, policies and procedures to be designed around the company's activities, employees to be informed, and implementation to be reviewed regularly. Where a suspected breach arises, the investigation must be conducted without delay, independently and in accordance with due process.",
            "We provide ongoing advice on establishing and developing compliance programmes, drafting policies and procedures, risk assessments and in-house training. We examine internal reports and allegations, and determine the corrective measures and implementation steps for the issues identified. In our work, we address corporate law, tax law, competition law and personal data protection regulations together, depending on the nature of the matter."
          ],
          "kapsam": [
            "Conducting legal risk assessments of company activities and internal processes;",
            "Drafting and updating compliance policies and procedures;",
            "Conducting internal investigations into whistleblower reports, irregularities or alleged breaches of internal company policies;",
            "Preparing investigation reports setting out the findings and legal assessments reached in internal investigations;",
            "Developing corrective measures and implementation roadmaps for the deficiencies identified;",
            "Assessing compliance risks arising from tax and accounting records;",
            "Reviewing distribution, dealership, franchise, supply and similar commercial relationships with regard to resale price maintenance, exclusivity, non-compete obligations, territorial and customer restrictions, and online sales conditions;",
            "Assessing information exchange with competitors, contacts within trade associations, joint purchasing and selling arrangements and other horizontal cooperation under competition law;",
            "Advising on competition law risks that may arise from dominant position, discriminatory practices, tying, rebate schemes and agreements between undertakings;",
            "Assessing the obligation to notify mergers, acquisitions and joint ventures to the Competition Board, and conducting the necessary clearance processes;",
            "Supporting the clients in Competition Authority inquiries and investigations, on-site inspections and responses to information requests, and preparing competition law compliance programmes and in-house training;",
            "Assessing personal data processing activities, privacy notices, explicit consent processes and agreements with data processors;",
            "Supporting the legal fact-finding and response process in incidents involving a suspected personal data breach."
          ]
        },
        {
          "slug": "dispute-resolution",
          "ad": "Dispute Resolution",
          "ozet": "The outcome of a dispute is often shaped by decisions taken before litigation or arbitration begins. We represent our clients in commercial and administrative disputes and in domestic and international arbitration proceedings, and manage the entire process, from pre-litigation risk assessment to negotiation and mediation, and from interim relief to the enforcement of judgments and awards.",
          "paragraflar": [
            "The outcome of a dispute is often shaped by decisions taken before the litigation or arbitration process begins. Securing evidence in time, the content of the notices to be served on the counterparty and, where necessary, recourse to protective measures such as preliminary injunctions or precautionary attachments directly determine the client's position at later stages. A favourable court judgment or arbitral award, in turn, produces results only to the extent that it can be effectively enforced and the receivable actually collected.",
            "We therefore do not reduce disputes to a single stage, but address the entire dispute resolution process as a whole: from pre-litigation assessment and preparation to alternative dispute resolution methods, and from litigation and arbitration proceedings to the enforcement of the decision and the collection of the receivable. In every dispute, we also evaluate the future of the relationship between the parties, and build the strategy suited to the client's priorities on that assessment.",
            "In commercial and administrative disputes, we represent the clients before the civil and administrative courts, in domestic and international arbitration proceedings, and before the enforcement and bankruptcy offices. We evaluate the different areas of law touched upon by the dispute within the same strategy, and conduct the litigation, arbitration and enforcement processes in a coordinated manner."
          ],
          "kapsam": [
            "Assessing the legal position, risks and prospects of recovery before a dispute;",
            "Securing evidence and serving the necessary notices in preparation for litigation and arbitration;",
            "Assessing and pursuing preliminary injunctions, precautionary attachments and other interim relief measures;",
            "Conducting negotiation, mediation and settlement processes;",
            "Handling cases before the commercial courts and other civil courts, including the appellate stages;",
            "Representing the clients in domestic and international, institutional and ad hoc arbitration proceedings;",
            "Conducting proceedings for the recognition and enforcement of foreign court judgments and arbitral awards, and for the setting aside of arbitral awards;",
            "Conducting administrative applications and lawsuits against administrative acts, and representing the clients before regulatory bodies and other public authorities;",
            "Pursuing the enforcement of court judgments and arbitral awards, and the collection of receivables;",
            "Protecting the clients' rights in lawsuits and objection proceedings arising from enforcement and bankruptcy law, and in concordat and bankruptcy proceedings;",
            "Reporting regularly on litigation and enforcement files, and reflecting the experience gained from disputes in contracts and internal processes."
          ]
        }
      ]
    },
    "yayinlar": {
      "etiket": "Publications",
      "baslik": "We share our perspective.",
      "hepsi": "All our publications",
      "kok": "/en/publications/",
      "turler": [
        {
          "anahtar": "duyuru",
          "ad": "Announcements",
          "tanim": "Brief publications on current developments."
        },
        {
          "anahtar": "bulten",
          "ad": "Newsletters",
          "tanim": "Comprehensive publications on current developments."
        },
        {
          "anahtar": "makale",
          "ad": "Articles",
          "tanim": "Publications on a specific topic."
        }
      ],
      "bos": "There are no publications under this heading yet."
    },
    "ekip": {
      "etiket": "Our Team",
      "geri": "Team",
      "baslik": "Get to know us.",
      "metin": "A team that listens, understands and is always by your side.",
      "hepsi": "Our Team",
      "kok": "/en/team/",
      "basliklar": {
        "ozet": "In brief",
        "egitim": "Education",
        "diger": "Academic publications and papers"
      },
      "liste": [
        {
          "slug": "eren-akarca",
          "ad": "Hüseyin Eren Akarca",
          "kisaAd": "Hüseyin Eren Akarca",
          "rol": "Partner",
          "eposta": "eren@akarcasahanturk.com",
          "telefon": "+90 541 584 24 89",
          "foto": "/marka/ekip/eren-akarca.jpg",
          "linkedin": "https://www.linkedin.com/in/hüseyin-eren-akarca/",
          "ozet": "Works in tax law, international taxation, corporate law and mergers and acquisitions; has extensive experience in the investment, restructuring, tax audit and litigation processes of multinational companies in Türkiye.",
          "paragraflar": ["Hüseyin Eren Akarca is a graduate of Ankara University Faculty of Law and is pursuing a master's degree at Istanbul Bilgi University Faculty of Law. He began his career in tax and customs law and continued to practise in these fields for many years at internationally active attorney partnerships. He founded Akarca Sahanturk in 2026.", "His areas of expertise include tax and customs law, international taxation, investment incentives, transfer pricing, corporate law, contract law, mergers and acquisitions, and dispute resolution. He also has experience in competition law and personal data protection law.", "He advises multinational and domestic companies on tax law, corporate governance, corporate law and contract law in their investment processes in Türkiye, including corporate restructurings, corporate governance, the drafting, review and negotiation of commercial agreements, investment incentive legislation, and compliance with Turkish tax legislation and the global minimum top-up corporate tax (OECD Pillar 2) rules. He also provides legal support to individual clients on wealth management and succession planning. He represents clients in tax audits, administrative application processes, and before the administrative and civil courts.", "Alongside his professional work, he has for many years coached and mentored Ankara University students in national and international moot court competitions."],
          "egitim": ["Istanbul Bilgi University Faculty of Law — Master's degree", "Ankara University Faculty of Law — Bachelor's degree"],
          "diger": ["The Multilateral Convention to Implement Tax Treaty Related Measures to Prevent Base Erosion and Profit Shifting as a Reform Instrument in International Taxation — Current Developments in Fiscal Law, Symposium on the Transformation of Law in the 21st Century, Ankara University Faculty of Law", "Beneficial Ownership: Its Emergence, Development and Treatment in Tax Audits and Court Decisions in Türkiye — Vergi Dünyası, December 2023"]
        },
        {
          "slug": "ata-sahanturk",
          "ad": "Atahan Şahantürk",
          "kisaAd": "Atahan Şahantürk",
          "rol": "Partner",
          "eposta": "atahan@akarcasahanturk.com",
          "telefon": "+90 532 130 18 99",
          "foto": "/marka/ekip/ata-sahanturk.jpg",
          "linkedin": "",
          "ozet": "Works in international taxation, taxation of the digital economy, transfer pricing and customs law; has extensive experience in the tax compliance processes, tax audits and tax litigation of multinational digital companies.",
          "paragraflar": ["Atahan Şahantürk is a graduate of Dokuz Eylül University Faculty of Law and holds a master's degree in fiscal law from Marmara University Faculty of Law. He began his career in tax and customs law and continued to practise in these fields for many years at internationally active attorney partnerships. He founded Akarca Sahanturk in 2026.", "His areas of expertise include tax and customs law, international taxation, taxation of the digital economy, transfer pricing, corporate law and contract law. He also has experience in personal data protection law.", "He advises clients, multinational digital companies in particular, on compliance with tax and customs legislation, and also provides legal support on corporate law and contract law matters connected with their activities in Türkiye. His work in tax and customs covers compliance with the global minimum top-up corporate tax (OECD Pillar 2) rules, correspondence with the tax and customs authorities, and the follow-up of administrative applications. His work in corporate law and contract law covers corporate governance processes and the drafting, review and negotiation of commercial agreements. He represents clients in tax audits, administrative application processes, and before the administrative and civil courts.", "Alongside his professional work, he runs projects on the use of artificial intelligence and other legal technologies in legal practice."],
          "egitim": ["Marmara University Faculty of Law — Master's degree in Fiscal Law", "Dokuz Eylül University Faculty of Law — Bachelor's degree"],
          "diger": []
        }
      ]
    },
    "iletisim": {
      "etiket": "Contact",
      "baslik": "Get in touch.",
      "metin": "To request a meeting, you can fill in the form, send us an e-mail or call our office.",
      "alanlar": {
        "eposta": "E-mail",
        "telefon": "Telephone",
        "adres": "Address"
      },
      "form": {
        "ad": "Full name",
        "eposta": "E-mail",
        "konu": "Subject",
        "mesaj": "Your message",
        "gonder": "Send meeting request",
        "dugme": "Meeting request",
        "gonderiliyor": "Sending…",
        "tesekkur": "We have received your message and will get back to you as soon as possible.",
        "hata": "Your message could not be sent. Please try again in a few minutes or call us.",
        "zorunlu": "Please fill in the name, e-mail and message fields."
      },
      "harita": "Show on map"
    },
    "kariyer": {
      "etiket": "Careers",
      "baslik": "Would you mind working with us?",
      "metin": "We invite responsible colleagues who are open to learning and sharing to become part of our team.",
      "dugme": "Join Us",
      "yol": "/en/apply/"
    },
    "basvuru": {
      "etiket": "Careers",
      "baslik": "Would you mind working with us?",
      "metin": "Fill in the form and attach your CV. Your application will reach us directly. When there is a suitable position, we will be sure to contact you.",
      "geri": "Back to home page",
      "alanlar": {
        "ad": "Full name",
        "adIpucu": "Your first and last name",
        "eposta": "E-mail",
        "epostaIpucu": "name@example.com",
        "telefon": "Telephone",
        "telefonIpucu": "05xx xxx xx xx",
        "pozisyon": "Position you are applying for",
        "pozisyonSec": "Select",
        "pozisyonlar": [
          "Lawyer",
          "Trainee lawyer",
          "Summer internship / student",
          "Other"
        ],
        "mesaj": "Cover letter",
        "mesajIpucu": "Tell us briefly about yourself and why you would like to work with us.",
        "cv": "Curriculum vitae (CV)",
        "cvIpucu": "PDF, DOC or DOCX · up to 10 MB",
        "cvSec": "Choose file",
        "cvYok": "No file selected yet",
        "onay": "I have read the",
        "onayBaglanti": "Privacy Notice",
        "onaySon": " regarding the processing of my personal data for the purpose of evaluating my application.",
        "gonder": "Submit application",
        "gonderiliyor": "Sending…"
      },
      "zorunlu": "This field is required.",
      "hatalar": {
        "eposta": "Enter a valid e-mail address.",
        "cvTur": "Only PDF, DOC or DOCX files can be uploaded.",
        "cvBoyut": "The file cannot be larger than 10 MB.",
        "genel": "The application could not be sent. Please try again in a few minutes."
      },
      "tesekkur": {
        "baslik": "We have received your application.",
        "metin": "Thank you for your interest. We will review your application and contact you when appropriate."
      }
    },
    "altbilgi": {
      "haklar": "© 2026 Akarca Şahantürk Law Office. All rights reserved.",
      "baglantilar": [
        {
          "ad": "Careers",
          "yol": "/en/#kariyer"
        },
        {
          "ad": "Privacy Notice",
          "yol": "/en/privacy/"
        },
        {
          "ad": "Cookie Policy",
          "yol": "/en/cookie-policy/"
        }
      ],
      "linkedin": "LinkedIn"
    },
    "cerezUyari": {
      "metin": "This site uses only the cookies required for it to function.",
      "kabul": "Understood",
      "detay": "Cookie Policy"
    },
    "geri": "Go back"
  },
} as const;

// Büro bilgileri — tek yerde. Kaynak: Tanıtım Özeti künyesi.
export const buro = {
  ad: 'Akarca Şahantürk Hukuk Bürosu',
  telefon: '+90 212 366 57 19',
  eposta: 'info@akarcasahanturk.com',
  adresSatirlari: ['Ferko Signature, Büyükdere Caddesi No: 175/7', '34394 Şişli / İstanbul'],
  haritaSorgu: 'Ferko Signature, Büyükdere Caddesi No:175, 34394 Şişli, İstanbul',
  linkedin: 'https://www.linkedin.com/',
  alanAdi: 'https://akarcasahanturk.com',
  basvuruApi: 'https://as-basvuru.akarca-sahanturk.workers.dev', // Cloudflare Worker adresi (başvuru formu)
  aramaMotorlarinaAcik: false, // false: Google vb. siteyi listelemez (robots + noindex). Final hazır olunca true yapılacak.
};
