import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Blog EcoSunPower',
    description: 'Insights técnicos sobre energia solar, baterias e mercado em Brasília-DF e Goiás.',
    site: context.site ?? 'https://ecosunpower.eng.br',
    items: posts
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${post.slug}/`,
        categories: [post.data.category, ...post.data.tags],
        author: post.data.author,
      })),
    customData: '<language>pt-BR</language>',
  });
}
