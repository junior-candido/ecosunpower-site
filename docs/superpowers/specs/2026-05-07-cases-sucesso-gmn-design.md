# Cases de Sucesso + Google Meu Negócio — Design

**Data:** 2026-05-07
**Repos afetados:** `ecosunpower-site` (principal) + `ecosunpower-agente` (proposta v3)
**Status:** Aguardando review

## O que adicionar

Prova social (cases reais + Google Meu Negócio) em três lugares:

1. **Bloco novo na home** (entre `Impacto` e `CTA`)
2. **Página `/portfolio` reformulada** (cases com fotos reais + depoimentos do Google + mapa do escritório)
3. **Página nova de prova social na proposta v3** (final do PDF, antes do CTA "fechar")

Hoje: home não tem prova social, `/portfolio` tem 6 cases placeholder, proposta não tem prova social.

## Princípios

- **Adições only.** Não alterar tabelas, prompts, fluxos existentes da Eva, nem estrutura atual do site.
- **Fonte única.** Cases ficam em arquivo único versionado em git, consumido por site E Eva.
- **Atualização sem deploy de código.** Cadastrar case = editar JSON + jogar foto na pasta + git push. Cloudflare faz auto-deploy.
- **Sem API Google Business Profile.** Dados manuais (nota, qtd avaliações). Sem OAuth, sem cota.

## Arquitetura

### Fonte de dados

| Tipo | Onde vive | Como o site consome |
|------|-----------|---------------------|
| **Cases (obras)** | `src/content/cases/` content collection (a definir formato no Ponto 2) | Build-time, tipado |
| **Depoimentos** | Tabela `testimonials` no Supabase **(já existe)** | Endpoint Astro `src/pages/api/testimonials.json.ts` puxa em build-time, filtrando `usable_for_marketing=true` |
| **Config site** | `src/content/config-site.json` (chave/valor) | Build-time |
| **Fotos** | `public/cases/<slug>/` (após otimização <300KB cada) | URLs estáticas |
| **Vídeos** | Supabase Storage bucket `cases-videos` **(reusar bucket que Eva já usa pra proposta)** | URLs públicas no JSON do case |

**Por que reusar `testimonials`:** Eva já tem `TestimonialService` (`src/modules/testimonials.ts`) com `listUsable()`, `markGooglePosted()`, `setUsableForMarketing()`. Coleta automática via WhatsApp já existe. Criar JSON paralelo seria duplicação.

**Fluxo automatizado depoimento → site:**
```
Cliente termina obra → Eva pede feedback no WhatsApp →
Eva salva testimonials → Junior aprova com comando WhatsApp
→ Eva chama deploy hook Cloudflare → site rebuilda em ~30s →
depoimento aparece no /portfolio
```

### Schemas

```jsonc
// src/content/cases.json
[
  {
    "slug": "wash-box",
    "titulo": "Wash Box Serviços Automotivos",
    "cidade": "Brasília",
    "uf": "DF",
    "tipo": "comercial",  // residencial | comercial | industrial | rural | hibrido
    "kwp": 14.4,
    "economia_mensal_brl": 2300,
    "desc_curta": "Sistema com inversor Sungrow + monitoramento. ROI 4 anos.",
    "fotos": ["/cases/01-wash-box/foto1.jpg", "/cases/01-wash-box/foto2.jpg"],
    "data_instalacao": "2024-03",
    "featured": true,  // aparece no teaser da home
    "inversor_marca": "Sungrow",
    "modulo_marca": "LONGi"
  }
]
```

```ts
// src/pages/api/testimonials.json.ts (endpoint Astro estático)
// Lê tabela testimonials do Supabase no build, filtra usable_for_marketing=true,
// retorna JSON tipado pro componente Depoimentos.astro consumir.
//
// Formato de saída:
[
  {
    "id": "uuid",
    "nome_cliente": "Carlos E.",      // derivado do leads.nome (privacidade: só primeiro nome + inicial)
    "cidade": "Brasília-DF",          // derivado do leads.cidade
    "texto": "Atendimento excelente, equipe técnica explicou tudo.",
    "estrelas": 5,                    // derivado de sentiment + manual
    "origem": "google",               // baseado em google_posted=true
    "format": "text",                 // audio | video | text | screenshot
    "media_url": null,                // se format=video|audio, URL pro player
    "data": "2025-08-15",
    "case_slug": "wash-box",          // se lead tiver proposta vinculada a um case
    "google_posted": true             // mostra selo "Verificado no Google"
  }
]
```

```jsonc
// src/content/config-site.json
{
  "google_nota": "4.9",
  "google_qtd_avaliacoes": 47,
  "google_url": "https://g.page/r/...",  // a preencher
  "google_maps_embed_src": "https://www.google.com/maps/embed?pb=...",
  "instagram_url": "https://instagram.com/...",  // a preencher
  "endereco_completo": "...",
  "telefone_principal": "(61) 99880-5002",
  "horario": "Seg-Sex 8h-18h | Sáb 8h-12h",
  "ultima_atualizacao_google": "2026-05-07"
}
```

### Componentes Astro novos

| Componente | Lugar | Função |
|------------|-------|--------|
| `ProvasSociaisHome.astro` | `src/components/` | Bloco da home: selo Google + 3 cases featured + botões |
| `Depoimentos.astro` | `src/components/` | Grid de depoimentos pra `/portfolio` |
| `MapaContato.astro` | `src/components/` | Mapa Google embed + endereço + telefone + horário |

### Páginas tocadas

| Página | Mudança |
|--------|---------|
| `src/pages/index.astro` | Importa e usa `ProvasSociaisHome` entre `Impacto` e `CTA` |
| `src/pages/portfolio.astro` | Refatora pra ler `cases.json`, adiciona `Depoimentos` + `MapaContato` |

### Integração com Eva (proposta v3)

Repo `ecosunpower-agente`:

- `proposal-assistant.ts` (ou template HTML do PDF) ganha **uma nova página** no final, antes do CTA fechar
- Eva faz `fetch('https://ecosunpower.eng.br/cases.json')` no momento de gerar a proposta
- Filtra cases por `tipoCliente` da proposta (já existe na v3) e pega 3 do mesmo tipo + featured
- Pega 1 depoimento featured (rotaciona ou aleatório)
- Renderiza no template HTML que vira PDF
- Cache local com TTL 24h pra não depender de site online

## Mockups

### Bloco da home (entre Impacto e CTA)

```
┌────────────────────────────────────────────────────────────┐
│         600+ obras entregues. Veja quem já confiou.        │
│                                                            │
│   ┌──────────────┐    ⭐⭐⭐⭐⭐  4,9 no Google              │
│   │ logo Google  │    47 avaliações de clientes reais      │
│   │  Verificado  │    [Ver perfil no Google →]             │
│   └──────────────┘                                         │
│                                                            │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│   │ [foto]   │  │ [foto]   │  │ [foto]   │                │
│   │ Wash Box │  │ Indústria│  │ Residenc.│                │
│   │ 14kWp    │  │ 85kWp    │  │ 11kWp    │                │
│   │ -R$2.300 │  │ -R$18mil │  │ -R$1.450 │                │
│   │ Brasília │  │ Goiânia  │  │ Brasília │                │
│   └──────────┘  └──────────┘  └──────────┘                │
│                                                            │
│            [ Veja mais casos de sucesso → ]                │
│                                                            │
│            Acompanhe também:                               │
│            [🔍 Google Meu Negócio]  [📷 Instagram]         │
└────────────────────────────────────────────────────────────┘
```

### Página `/portfolio` reformulada

```
┌──────────────────────────────────────────────────────────┐
│  HERO (mantém atual)                                     │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  Grid de cases (refator: lê cases.json em vez do array   │
│  hardcoded). Cada card com FOTO real no lugar do emoji.  │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  NOVO: "O que nossos clientes dizem"                     │
│  ⭐ 4,9 no Google • 47 avaliações                         │
│  [3 cards de depoimentos featured]                       │
│  [Ver todas no Google] [Avalie a gente]                  │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  NOVO: Mapa + endereço + telefone + horário              │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│  CTA WhatsApp (mantém atual)                             │
└──────────────────────────────────────────────────────────┘
```

### Página de prova social na proposta v3

```
┌──────────────────────────────────────────────────────────┐
│  Logo EcoSunPower (topo)                                 │
│                                                          │
│  "Você não está sozinho. 600+ clientes já economizam."  │
│                                                          │
│  ┌─────────────────┐                                     │
│  │ ⭐ 4,9 Google   │   "Atendimento nota 10. Equipe     │
│  │ 47 avaliações   │    técnica explicou tudo."          │
│  │ Verificado      │   — Cliente real, Brasília-DF      │
│  └─────────────────┘                                     │
│                                                          │
│  Outros clientes parecidos com o seu projeto:            │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                │
│  │ [foto]   │  │ [foto]   │  │ [foto]   │                │
│  │ XkWp     │  │ XkWp     │  │ XkWp     │                │
│  │ Cidade   │  │ Cidade   │  │ Cidade   │                │
│  └──────────┘  └──────────┘  └──────────┘                │
│                                                          │
│  Linha do Sol™ · Responsável Técnico CREA/CFT (rodapé)   │
└──────────────────────────────────────────────────────────┘
```

## Fluxos de uso

### Cadastrar case novo (Junior)
1. Tira fotos da obra
2. Joga em `public/cases/0X-nome-do-case/`
3. Adiciona entry em `src/content/cases.json`
4. Git push → Cloudflare auto-deploy
5. Site atualizado, Eva já lê próxima vez que gerar proposta

### Atualizar nota do Google
1. Vai em `src/content/config-site.json`
2. Atualiza `google_nota`, `google_qtd_avaliacoes`, `ultima_atualizacao_google`
3. Git push

### Adicionar depoimento (automatizado via Eva)
1. Cliente termina obra
2. Eva pede feedback no WhatsApp (texto/áudio/vídeo/print)
3. Cliente responde → Eva salva em `testimonials` automaticamente
4. Junior aprova: comando WhatsApp `/aprovar-depoimento <id>` → seta `usable_for_marketing=true`
5. Eva dispara deploy hook do Cloudflare → site rebuilda em ~30s
6. Depoimento aparece no /portfolio

### Marcar depoimento como "verificado no Google"
1. Cliente posta review no Google
2. Junior comando WhatsApp `/google-postou <id>` → seta `google_posted=true`
3. Próxima build → depoimento ganha selo "✓ Verificado no Google"

## Não-objetivos (escopo fora)

- Integração com Google Business Profile API (manual por enquanto, simples e suficiente)
- Dashboard de gerenciamento (Junior edita JSON direto, sem fricção)
- Carrossel/animações fancy de cases (estático é suficiente, mais leve)
- Filtro/busca de cases na `/portfolio` (6 cases não justifica)
- Reorganização da pasta `_a-categorizar` em `Documents/EcoSunPower/Fotos-de-obra/` (escopo separado)
- Migration Supabase, tabelas novas, alteração de schema (mantém JSON em git)

## Estratégia de mídia (anti-trava)

| Tipo | Destino | Motivo |
|------|---------|--------|
| Foto JPG/PNG | Repo `public/cases/<slug>/` após otimização (max 1600px, ~300KB) | Servida estática pelo Cloudflare, rápida |
| Vídeo MP4/MOV (drone) | Supabase Storage bucket `cases-videos`, URL pública | Repo travaria com >100MB, GitHub rejeita |
| HEIC/RAW/DNG | Convertido pra JPG antes de subir | Browser não renderiza HEIC, RAW é gigante |

**`.gitignore` em `public/cases/`** (já criado) bloqueia automaticamente: `*.mp4`, `*.mov`, `*.heic`, `*.dng`, `*.raw`, `*.cr2`, `*.nef`, etc. Mesmo se Junior esquecer, git não engasga.

**Script de processamento** (a criar): `scripts/process-cases-media.ts` que:
1. Detecta vídeos nas pastas → upload pro Supabase Storage → recebe URL pública
2. Detecta HEIC/RAW → converte pra JPG via `sharp`
3. Detecta JPGs > 500KB → redimensiona pra max 1600px e re-comprime
4. Atualiza entry do case em `cases.json` com paths/URLs corretos
5. Comita só o que tá ok pro git

Junior workflow: jogar tudo nas pastas → me avisar "fotos prontas" → eu rodo o script → push → site atualiza.

## Riscos e mitigações

| Risco | Mitigação |
|-------|-----------|
| Eva offline pra buscar `cases.json` durante geração de proposta | Cache local com TTL 24h, fallback pra depoimento padrão hardcoded |
| Junior esquece de atualizar nota Google ao longo do tempo | Campo `ultima_atualizacao_google` visível no config-site.json |
| Foto pesada deixar site lento | Usar Astro `<Image />` que otimiza automaticamente, max 1200px largura |
| Tipo de cliente sem case cadastrado (ex: industrial sem industrial cadastrado) | Fallback pra cases featured genéricos, não trava a geração |

## Métricas de sucesso

- **Conversão home:** taxa de clique no CTA WhatsApp antes vs depois (analytics Cloudflare ou GA)
- **Conversão proposta:** feedback do Junior em 30 dias — sentiu diferença no fechamento?
- **Manutenção:** Junior consegue cadastrar case novo sozinho em < 5 min sem pedir ajuda?

## Ordem de implementação (alto nível)

1. Criar JSONs vazios + exemplo (cases, depoimentos, config-site)
2. Criar componente `ProvasSociaisHome` + integrar em `index.astro`
3. Refatorar `portfolio.astro` pra ler de `cases.json` (mantém visual atual + adiciona fotos)
4. Criar componentes `Depoimentos` + `MapaContato` na `/portfolio`
5. Preencher dados reais (cases + depoimentos + config Google)
6. Eva: nova página de prova social na proposta + lógica de filtro por tipo
7. Teste em dev → push site → validar em prod
8. Push Eva → Easypanel auto-deploy → testar geração de proposta

## Dados pendentes (Junior fornece)

- [ ] Link completo do perfil Google Meu Negócio
- [ ] Nota e quantidade de avaliações atual no Google
- [ ] @ do Instagram
- [ ] Fotos das obras (em andamento — pasta `public/cases/` já criada)
- [ ] Prints de 3 avaliações Google em destaque
- [ ] Texto completo dessas 3 avaliações + nome dos clientes (ou iniciais)
- [ ] Endereço completo do escritório + horário de atendimento
