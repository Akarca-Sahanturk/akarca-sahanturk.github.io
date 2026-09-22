// Tarihleri iki dilde yazıya çevirir.
const aylarTr = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran',
  'Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];

export function tarihYaz(t: Date, dil: 'tr' | 'en' = 'tr'): string {
  if (dil === 'tr') return t.getDate() + ' ' + aylarTr[t.getMonth()] + ' ' + t.getFullYear();
  return t.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}
