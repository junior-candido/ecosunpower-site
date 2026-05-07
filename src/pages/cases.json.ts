import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const all = await getCollection('cases');
  const payload = all
    .sort((a, b) => a.id.localeCompare(b.id))
    .map(c => ({ id: c.id, ...c.data }));

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
