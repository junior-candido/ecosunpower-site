-- Tabela de avaliacoes publicas — clientes deixam review SEM precisar
-- de conta Google. Junior depois aprova manualmente via WhatsApp ("/aprovar-review <id>").
-- Apos aprovacao, opcionalmente promove pra `testimonials` (que ja existe).
--
-- Aplicar via Supabase Dashboard > SQL Editor > New query > colar este arquivo > Run.

CREATE TABLE IF NOT EXISTS public_reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  -- De qual obra (case_slug do site). Opcional — review pode ser geral.
  case_slug text,

  -- Identificacao do avaliador (nada obrigatorio em telefone/email — preserva LGPD).
  cliente_nome text NOT NULL CHECK (length(cliente_nome) BETWEEN 2 AND 80),
  cliente_cidade text CHECK (length(cliente_cidade) <= 60),
  cliente_telefone text CHECK (length(cliente_telefone) <= 20),

  -- Conteudo
  estrelas int NOT NULL CHECK (estrelas BETWEEN 1 AND 5),
  texto text CHECK (length(texto) <= 1500),
  foto_url text,

  -- Metadados pra anti-spam / auditoria
  ip_hash text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now(),

  -- Flow de aprovacao
  approved_for_marketing boolean NOT NULL DEFAULT false,
  approved_at timestamptz,
  promoted_testimonials_id uuid,
  notes text
);

-- Index pra Eva listar reviews pendentes (nao aprovadas) ordenadas por mais recentes
CREATE INDEX IF NOT EXISTS idx_public_reviews_pending
  ON public_reviews (approved_for_marketing, created_at DESC)
  WHERE approved_for_marketing = false;

-- Index pra site listar reviews aprovadas
CREATE INDEX IF NOT EXISTS idx_public_reviews_approved
  ON public_reviews (approved_for_marketing, created_at DESC)
  WHERE approved_for_marketing = true;

-- Anti-spam basico: maximo 3 reviews por hora do mesmo IP hash
CREATE OR REPLACE FUNCTION check_review_rate_limit() RETURNS trigger AS $$
DECLARE
  recent_count int;
BEGIN
  IF NEW.ip_hash IS NOT NULL THEN
    SELECT count(*) INTO recent_count
    FROM public_reviews
    WHERE ip_hash = NEW.ip_hash
      AND created_at > now() - interval '1 hour';
    IF recent_count >= 3 THEN
      RAISE EXCEPTION 'Rate limit exceeded';
    END IF;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tg_public_reviews_rate_limit
  BEFORE INSERT ON public_reviews
  FOR EACH ROW EXECUTE FUNCTION check_review_rate_limit();

-- RLS — anon pode INSERT mas nao pode SELECT (privacidade dos avaliadores
-- entre si). Service_role tem tudo.
ALTER TABLE public_reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY anon_insert_only
  ON public_reviews FOR INSERT
  TO anon
  WITH CHECK (
    -- valida que cliente nao esta tentando aprovar a propria review
    approved_for_marketing = false
    AND approved_at IS NULL
    AND promoted_testimonials_id IS NULL
  );

CREATE POLICY service_full_access
  ON public_reviews FOR ALL
  TO service_role
  USING (true) WITH CHECK (true);

-- Adicionar colunas pra anon poder ler reviews aprovadas (vai ser usado pelo /portfolio)
CREATE POLICY anon_read_approved
  ON public_reviews FOR SELECT
  TO anon
  USING (approved_for_marketing = true);
