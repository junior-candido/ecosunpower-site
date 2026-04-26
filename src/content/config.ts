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

export const collections = { blog };
