import { createClient, type SupabaseClient } from '@supabase/supabase-js';

// Tenta as 2 convencoes: PUBLIC_* (acessivel client-side, ja configurado pra /avaliar)
// e sem prefixo (build-time only). PUBLIC_* tem precedencia.
const url = import.meta.env.PUBLIC_SUPABASE_URL ?? import.meta.env.SUPABASE_URL;
const anon = import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? import.meta.env.SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

if (url && anon) {
  client = createClient(url, anon);
} else if (import.meta.env.PROD) {
  console.warn('[supabase-build] PUBLIC_SUPABASE_URL/SUPABASE_URL ausente — endpoints retornarao vazio.');
}

export const supabase = client;
