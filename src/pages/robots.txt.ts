/* robots.txt: icerik.ts'teki buro.aramaMotorlarinaAcik kapalıyken tüm arama motorlarını engeller. */
import type { APIRoute } from 'astro';
import { buro } from '../data/icerik';

export const GET: APIRoute = ({ site }) => {
  const kok = (site?.href ?? 'https://akarca-sahanturk.github.io/').replace(/\/$/, '');
  const metin = buro.aramaMotorlarinaAcik
    ? `User-agent: *\nAllow: /\nSitemap: ${kok}/sitemap.xml\n`
    : `User-agent: *\nDisallow: /\n`;
  return new Response(metin, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
