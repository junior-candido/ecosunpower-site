import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    category: z.enum(['tecnico', 'tecnologia', 'mercado', 'regulacao', 'casos', 'tutorial']),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Junior Candido Rodrigues'),
    authorRole: z.string().default('Engenheiro responsável EcoSunPower'),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
    sourceAttribution: z.string().optional(),
  }),
});

const cases = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    titulo: z.string(),
    cliente: z.string().optional(),
    cidade: z.string(),
    uf: z.enum(['DF', 'GO']),
    tipo: z.enum(['residencial', 'comercial', 'industrial', 'rural', 'hibrido', 'usina']),
    kwp: z.number().positive().optional(),
    economiaMensalBrl: z.number().positive().optional(),
    descCurta: z.string().min(20).max(300),
    fotoPrincipal: z.string(),
    fotos: z.array(z.string()).default([]),
    videoUrl: z.string().url().optional(),
    videoLocal: z.string().optional(),
    dataInstalacao: z.string().optional(),
    featured: z.boolean().default(false),
    inversorMarca: z.string().optional(),
    inversorModelo: z.string().optional(),
    moduloMarca: z.string().optional(),
    bateriaKwh: z.number().optional(),
    concessionaria: z.enum(['Neoenergia-DF', 'Equatorial-GO']).optional(),
    tecnologiaDestaque: z.string().optional(),
  }),
});

export const collections = { blog, cases };
