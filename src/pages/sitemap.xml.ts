/* Site haritası: tüm TR/EN sayfalar. Astro.site (astro.config) kök adres olarak kullanılır. */
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { icerik } from '../data/icerik';

export const GET: APIRoute = async ({ site }) => {
  const kok = (site?.href ?? 'https://akarca-sahanturk.github.io/').replace(/\/$/, '');
  const yollar = new Set<string>(['/', '/en/', '/yayinlar/', '/en/publications/', '/kvkk/', '/en/privacy/',
    '/cerez-politikasi/', '/en/cookie-policy/', '/basvuru/', '/en/apply/']);
  icerik.tr.alanlar.liste.forEach((a) => yollar.add('/calisma-alanlari/' + a.slug + '/'));
  icerik.en.alanlar.liste.forEach((a) => yollar.add('/en/practice-areas/' + a.slug + '/'));
  icerik.tr.ekip.liste.forEach((k) => yollar.add('/ekip/' + k.slug + '/'));
  icerik.en.ekip.liste.forEach((k) => yollar.add('/en/team/' + k.slug + '/'));
  const yayinlar = await getCollection('yayinlar');
  yayinlar.forEach((y) => yollar.add((y.data.dil === 'en' ? '/en/publications/' : '/yayinlar/') + y.id.split('/').pop() + '/'));
  const tarih = new Date().toISOString().slice(0, 10);
  const govde = [...yollar].map((y) => `  <url><loc>${kok}${y}</loc><lastmod>${tarih}</lastmod></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${govde}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
