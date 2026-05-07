import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.SUPABASE_URL;
const anon = import.meta.env.SUPABASE_ANON_KEY;

let client: SupabaseClient | null = null;

if (url && anon) {
  client = createClient(url, anon);
} else if (import.meta.env.PROD) {
  console.warn('[supabase-build] SUPABASE_URL ou SUPABASE_ANON_KEY ausente — endpoints retornarao vazio.');
}

export const supabase = client;
