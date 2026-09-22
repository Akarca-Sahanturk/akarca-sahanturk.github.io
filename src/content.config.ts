import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Yeni yayın eklemek için: src/content/yayinlar/tr/ içine bir .md dosyası koy.
// Liste sayfası kendiliğinden güncellenir.
const yayinlar = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/yayinlar' }),
  schema: z.object({
    baslik: z.string(),
    ozet: z.string(),
    tarih: z.date(),
    tur: z.enum(['duyuru', 'bulten', 'makale']),
    dil: z.enum(['tr', 'en']),
  }),
});

export const collections = { yayinlar };
