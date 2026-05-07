import type { APIRoute } from 'astro';
import { supabase } from '../../lib/supabase-build';

interface TestimonialPublic {
  id: string;
  nomeCliente: string;
  cidade: string | null;
  texto: string | null;
  estrelas: number;
  formato: 'audio' | 'video' | 'text' | 'screenshot';
  mediaUrl: string | null;
  data: string;
  googlePosted: boolean;
  caseSlug: string | null;
}

function abreviarNome(full: string | null): string {
  if (!full) return 'Cliente';
  const parts = full.trim().split(/\s+/);
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

function jsonResponse(payload: unknown, status = 200) {
  return new Response(JSON.stringify(payload, null, 2), {
    status,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
}

export const GET: APIRoute = async () => {
  if (!supabase) return jsonResponse([]);

  const { data, error } = await supabase
    .from('testimonials')
    .select('id, format, content, media_url, google_posted, sentiment, created_at, lead_id, leads ( nome, cidade )')
    .eq('usable_for_marketing', true)
    .eq('sentiment', 'positivo')
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('[testimonials.json]', error);
    return jsonResponse([]);
  }

  const payload: TestimonialPublic[] = (data ?? []).map((row: any) => {
    const lead = row.leads ?? {};
    return {
      id: row.id,
      nomeCliente: abreviarNome(lead.nome ?? null),
      cidade: lead.cidade ?? null,
      texto: row.content,
      estrelas: 5,
      formato: row.format,
      mediaUrl: row.media_url,
      data: row.created_at,
      googlePosted: row.google_posted,
      caseSlug: null,
    };
  });

  return jsonResponse(payload);
};
