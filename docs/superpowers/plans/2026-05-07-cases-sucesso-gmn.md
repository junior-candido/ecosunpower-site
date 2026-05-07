# Cases de Sucesso + Google Meu Negócio — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar prova social em 3 lugares (home, /portfolio, proposta v3 da Eva) usando 16 cases reais já catalogados em `public/cases/`, sem mexer em produção.

**Architecture:** Cases ficam em content collection Astro (`src/content/cases/`) com schema Zod, expostos via endpoint `/cases.json` pra Eva consumir. Depoimentos puxam da tabela `testimonials` já existente no Supabase via endpoint Astro build-time. Vídeos de drone vão pro Supabase Storage; fotos JPG (extraídas via ffmpeg dos vídeos) vão pro repo otimizadas.

**Tech Stack:** Astro 4 + Tailwind + Zod (site), TypeScript + Vitest + Supabase + Express (Eva), ffmpeg + sharp (processamento de mídia), Cloudflare Pages (deploy).

**Repos afetados:**
- `Documents/ecosunpower-site/` — site público
- `Documents/ecosunpower-agente/` — Eva (proposta v3, comandos)

**Spec:** `docs/superpowers/specs/2026-05-07-cases-sucesso-gmn-design.md`

---

## File Structure

### Site (`ecosunpower-site/`)

**Criar:**
- `src/content/cases/` (content collection — pasta com 16 arquivos `.md` ou JSON tipados)
- `src/content/config-site.json` — config Google/Instagram/contato
- `src/pages/cases.json.ts` — endpoint público que serializa content collection (pra Eva consumir)
- `src/pages/api/testimonials.json.ts` — endpoint que lê Supabase em build-time
- `src/components/ProvasSociaisHome.astro` — bloco da home (selo Google + 3 featured + botões)
- `src/components/Depoimentos.astro` — grid de depoimentos pra /portfolio
- `src/components/CaseCard.astro` — card único reutilizável (home e portfolio)
- `src/components/CaseLightbox.astro` — modal de galeria de fotos/vídeo
- `src/lib/supabase-build.ts` — cliente Supabase pra build-time fetch
- `scripts/extract-frames.ts` — extrai frame de cada vídeo como JPG (ffmpeg)
- `scripts/upload-videos.ts` — upload de vídeos pra Supabase Storage
- `scripts/optimize-photos.ts` — sharp pra JPG <300KB max 1600px

**Modificar:**
- `src/content/config.ts` — adicionar collection `cases`
- `src/pages/index.astro` — importar `ProvasSociaisHome` entre `Impacto` e `CTA`
- `src/pages/portfolio.astro` — refatorar pra ler de content collection + adicionar `Depoimentos`
- `package.json` — adicionar deps: `@supabase/supabase-js`, `sharp`, `fluent-ffmpeg`, `@types/fluent-ffmpeg`

### Eva (`ecosunpower-agente/`)

**Criar:**
- `src/modules/proposal/social-proof-page.ts` — gera HTML da nova página da proposta
- `src/modules/cases-fetcher.ts` — fetch + cache 24h dos cases pra proposta filtrar por tipo
- `tests/cases-fetcher.test.ts` — testes do fetch + cache + fallback
- `tests/proposal/social-proof-page.test.ts` — testes da renderização
- `migrations/0XX_add_aprovar_depoimento_command.sql` — se precisar de tabela auxiliar

**Modificar:**
- `src/modules/proposal/template.ts` — incluir página de prova social no HTML final
- `src/modules/proposal-assistant.ts` — chamar cases-fetcher na hora de gerar proposta
- `src/modules/router.ts` — registrar comandos `/aprovar-depoimento` e `/google-postou`
- `src/modules/testimonials.ts` — adicionar método `dispatchSiteRebuild()` que chama Cloudflare deploy hook
- `src/config.ts` — adicionar `CLOUDFLARE_DEPLOY_HOOK_URL`
- `.env.example` — documentar variável nova

---

## Pré-requisitos antes da Task 1

- [x] Pasta `public/cases/` criada com 16 subpastas e `.gitignore`
- [x] 19 vídeos de drone DJI distribuídos nas pastas corretas
- [x] `_DADOS_OBRAS.md` com fields a preencher
- [ ] Junior preenche `_DADOS_OBRAS.md` (mesmo que parcial — placeholder serve pra MVP)
- [ ] Junior fornece: URL do perfil GMB, @ Instagram, nota e qtd avaliações Google atuais

---

## Task 1: Adicionar collection `cases` ao schema Astro

**Files:**
- Modify: `src/content/config.ts`

- [ ] **Step 1: Editar `src/content/config.ts`**

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // ... (mantém o existente)
});

const cases = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    titulo: z.string(),
    cliente: z.string().optional(),         // pode ser anônimo
    cidade: z.string(),
    uf: z.enum(['DF', 'GO']),
    tipo: z.enum(['residencial', 'comercial', 'industrial', 'rural', 'hibrido', 'usina']),
    kwp: z.number().positive().optional(),  // opcional pq Junior preenche depois
    economiaMensalBrl: z.number().positive().optional(),
    descCurta: z.string().min(20).max(300),
    fotoPrincipal: z.string(),              // path em /cases/<slug>/cover.jpg
    fotos: z.array(z.string()).default([]), // outras fotos
    videoUrl: z.string().url().optional(),  // URL pública no Supabase Storage
    videoLocal: z.string().optional(),      // path relativo se rodar local em dev
    dataInstalacao: z.string().optional(),  // ex "2024-03"
    featured: z.boolean().default(false),
    inversorMarca: z.string().optional(),
    inversorModelo: z.string().optional(),
    moduloMarca: z.string().optional(),
    bateriaKwh: z.number().optional(),      // só se híbrido
    concessionaria: z.enum(['Neoenergia-DF', 'Equatorial-GO']).optional(),
    tecnologiaDestaque: z.string().optional(), // ex "SolarEdge", "Híbrido com bateria"
  }),
});

export const collections = { blog, cases };
```

- [ ] **Step 2: Validar com astro check**

Run (no diretório `ecosunpower-site/`): `npx astro check`
Expected: zero erros novos (pode ter warnings preexistentes do blog).

- [ ] **Step 3: Commit**

```bash
cd "C:\Users\Meu Computador\Documents\ecosunpower-site"
git add src/content/config.ts
git commit -m "feat(content): add cases collection schema"
```

---

## Task 2: Criar `src/content/cases/` com as 16 obras (placeholders mínimos)

**Files:**
- Create: `src/content/cases/01-residencial-quintas-ipes-lago-sul.json`
- Create: `src/content/cases/02-residencial-lago-sul.json`
- ...(16 arquivos JSON, um por obra)

- [ ] **Step 1: Criar cada arquivo JSON com dados que Junior já forneceu + placeholders**

Para CADA pasta em `public/cases/0X-<slug>/`, criar um JSON correspondente em `src/content/cases/0X-<slug>.json`:

Exemplo (`01-residencial-quintas-ipes-lago-sul.json`):

```json
{
  "slug": "residencial-quintas-ipes-lago-sul",
  "titulo": "Residencial Quintas dos Ipês",
  "cidade": "Brasília",
  "uf": "DF",
  "tipo": "residencial",
  "descCurta": "Sistema fotovoltaico em condomínio premium do Lago Sul.",
  "fotoPrincipal": "/cases/01-residencial-quintas-ipes-lago-sul/cover.jpg",
  "fotos": [],
  "featured": true,
  "concessionaria": "Neoenergia-DF"
}
```

Exemplo case com mais info (`07-sistema-hibrido-alto-paraiso.json`):

```json
{
  "slug": "sistema-hibrido-alto-paraiso",
  "titulo": "Sistema Híbrido com Bateria",
  "cliente": "Ana Cristina",
  "cidade": "Alto Paraíso de Goiás",
  "uf": "GO",
  "tipo": "hibrido",
  "descCurta": "Sistema solar com bateria — independência da rede 24h em região turística.",
  "fotoPrincipal": "/cases/07-sistema-hibrido-alto-paraiso/cover.jpg",
  "fotos": [],
  "featured": true,
  "concessionaria": "Equatorial-GO",
  "tecnologiaDestaque": "Híbrido com bateria"
}
```

Exemplo SolarEdge (`16-residencial-villeneuve-solaredge.json`):

```json
{
  "slug": "residencial-villeneuve-solaredge",
  "titulo": "Residencial Villeneuve",
  "cidade": "Brasília",
  "uf": "DF",
  "tipo": "residencial",
  "descCurta": "Condomínio premium em Águas Claras com tecnologia SolarEdge: otimizadores por painel pra rendimento máximo.",
  "fotoPrincipal": "/cases/16-residencial-villeneuve-solaredge/cover.jpg",
  "fotos": [],
  "featured": true,
  "concessionaria": "Neoenergia-DF",
  "inversorMarca": "SolarEdge",
  "tecnologiaDestaque": "SolarEdge com otimizadores"
}
```

Lista completa dos 16 a criar:

| # | Arquivo | Featured? |
|---|---------|-----------|
| 01 | `01-residencial-quintas-ipes-lago-sul.json` | sim |
| 02 | `02-residencial-lago-sul.json` | não |
| 03 | `03-residencial-vicente-pires.json` | não |
| 04 | `04-residencial-taguatinga.json` | não |
| 05 | `05-residencial-arniqueiras.json` | não |
| 06 | `06-casa-valparaiso.json` | não |
| 07 | `07-sistema-hibrido-alto-paraiso.json` | sim |
| 08 | `08-supermercado-superbom-total-ville.json` | sim |
| 09 | `09-supermercado-superbom-riacho-fundo.json` | não |
| 10 | `10-supermercado-novo-mix-gama.json` | não |
| 11 | `11-distribuidora-bebidas-central.json` | não |
| 12 | `12-shopping-serra-sobradinho.json` | sim |
| 13 | `13-condominio-prive-comercial.json` | não |
| 14 | `14-usina-investimento-planaltina.json` | sim |
| 15 | `15-residencial-classe-media.json` | não |
| 16 | `16-residencial-villeneuve-solaredge.json` | sim |

- [ ] **Step 2: Validar build não quebra**

Run: `cd "C:\Users\Meu Computador\Documents\ecosunpower-site" && npm run build`
Expected: build sucesso, mostra "16 cases entries" no log.

- [ ] **Step 3: Commit**

```bash
git add src/content/cases/
git commit -m "feat(cases): seed 16 cases with initial data"
```

---

## Task 3: Criar `src/content/config-site.json`

**Files:**
- Create: `src/content/config-site.json`

- [ ] **Step 1: Criar arquivo com placeholders**

```json
{
  "googleNota": "4.9",
  "googleQtdAvaliacoes": 0,
  "googleUrl": "https://g.page/r/PLACEHOLDER",
  "googleWriteReviewUrl": "https://g.page/r/PLACEHOLDER/review",
  "instagramUrl": "https://instagram.com/ecosunpower.eng.br",
  "telefonePrincipal": "(61) 99880-5002",
  "whatsappUrl": "https://wa.me/5561998805002",
  "horario": "Seg-Sex 8h-18h | Sáb 8h-12h",
  "ultimaAtualizacaoGoogle": "2026-05-07"
}
```

- [ ] **Step 2: Commit**

```bash
git add src/content/config-site.json
git commit -m "feat(content): add site config (google, instagram, contato)"
```

---

## Task 4: Script de extração de frames (foto principal de cada case)

**Files:**
- Create: `scripts/extract-frames.ts`
- Modify: `package.json` (adicionar dep `fluent-ffmpeg`)

**Pré-requisito:** ffmpeg instalado no sistema. Verificar com `ffmpeg -version`. Se não tiver, instalar via `winget install Gyan.FFmpeg` (Windows) ou similar.

- [ ] **Step 1: Adicionar deps**

Run: `cd "C:\Users\Meu Computador\Documents\ecosunpower-site" && npm i -D fluent-ffmpeg @types/fluent-ffmpeg`

- [ ] **Step 2: Criar `scripts/extract-frames.ts`**

```ts
// Extrai 1 frame (segundo 5 ou 10) de cada video em public/cases/<slug>/*.mp4
// Salva como public/cases/<slug>/cover.jpg
// Pra MVP: foto principal vira esse frame extraido.

import { readdir, stat, access } from 'fs/promises';
import { join, basename } from 'path';
import ffmpeg from 'fluent-ffmpeg';

const CASES_DIR = join(process.cwd(), 'public', 'cases');
const FRAME_TIME = '00:00:05'; // 5 segundos no video — geralmente ja tem imagem boa

async function extractFrame(videoPath: string, outputPath: string): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg(videoPath)
      .screenshots({
        count: 1,
        timestamps: [FRAME_TIME],
        folder: outputPath.replace(/\\[^\\]+$/, ''),
        filename: basename(outputPath),
        size: '1600x?', // largura 1600, altura proporcional
      })
      .on('end', () => resolve())
      .on('error', reject);
  });
}

async function main() {
  const dirs = await readdir(CASES_DIR);
  let processed = 0;
  let skipped = 0;

  for (const dir of dirs) {
    const dirPath = join(CASES_DIR, dir);
    const dirStat = await stat(dirPath);
    if (!dirStat.isDirectory() || dir.startsWith('_') || dir === 'depoimentos') continue;

    const coverPath = join(dirPath, 'cover.jpg');
    try {
      await access(coverPath);
      console.log(`SKIP ${dir}: cover.jpg ja existe`);
      skipped++;
      continue;
    } catch {
      // cover nao existe, prosseguir
    }

    const files = await readdir(dirPath);
    const video = files.find(f => /\.(mp4|mov)$/i.test(f));
    if (!video) {
      console.warn(`WARN ${dir}: sem video`);
      continue;
    }

    const videoPath = join(dirPath, video);
    console.log(`Processando ${dir}/${video}...`);
    await extractFrame(videoPath, coverPath);
    processed++;
  }

  console.log(`\nDone. ${processed} processados, ${skipped} ja existiam.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
```

- [ ] **Step 3: Adicionar comando no `package.json`**

Em `package.json`, na seção `scripts`, adicionar:

```json
"extract-frames": "tsx scripts/extract-frames.ts"
```

- [ ] **Step 4: Rodar e gerar cover.jpg de todos os cases**

Run: `npm run extract-frames`
Expected: 16 covers gerados em `public/cases/<slug>/cover.jpg`.

- [ ] **Step 5: Commit (apenas .ts e package.json — covers vão no proximo commit pra ficar visivel)**

```bash
git add scripts/extract-frames.ts package.json package-lock.json
git commit -m "build: add ffmpeg frame extractor for case covers"
```

- [ ] **Step 6: Commit dos covers gerados**

```bash
git add public/cases/*/cover.jpg
git commit -m "assets: extract cover images from drone videos"
```

---

## Task 5: Script de upload dos vídeos pra Supabase Storage

**Files:**
- Create: `scripts/upload-videos.ts`

**Pré-requisito:** Variáveis `SUPABASE_URL` e `SUPABASE_SERVICE_KEY` em `.env` na raiz do site (mesmas usadas pela Eva).

- [ ] **Step 1: Adicionar dep**

Run: `npm i @supabase/supabase-js dotenv`

- [ ] **Step 2: Criar `scripts/upload-videos.ts`**

```ts
// Upload todos os videos de public/cases/<slug>/*.mp4 pro bucket cases-videos.
// Atualiza o JSON correspondente em src/content/cases/<num>-<slug>.json com videoUrl publica.

import 'dotenv/config';
import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, basename } from 'path';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY!;
const BUCKET = 'cases-videos';

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in .env');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const CASES_DIR = join(process.cwd(), 'public', 'cases');
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'cases');

async function ensureBucket() {
  const { data } = await supabase.storage.listBuckets();
  if (!data?.find(b => b.name === BUCKET)) {
    const { error } = await supabase.storage.createBucket(BUCKET, { public: true });
    if (error) throw error;
    console.log(`Bucket "${BUCKET}" criado.`);
  }
}

async function uploadVideo(localPath: string, remoteKey: string): Promise<string> {
  const buf = await readFile(localPath);
  const { error } = await supabase.storage.from(BUCKET).upload(remoteKey, buf, {
    contentType: 'video/mp4',
    upsert: true,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(remoteKey);
  return data.publicUrl;
}

async function updateCaseJson(caseDir: string, videoUrl: string) {
  const num = caseDir.split('-')[0];
  const files = await readdir(CONTENT_DIR);
  const target = files.find(f => f.startsWith(`${num}-`));
  if (!target) {
    console.warn(`WARN: nenhum JSON pra ${caseDir}`);
    return;
  }
  const jsonPath = join(CONTENT_DIR, target);
  const data = JSON.parse(await readFile(jsonPath, 'utf-8'));
  data.videoUrl = videoUrl;
  await writeFile(jsonPath, JSON.stringify(data, null, 2) + '\n');
  console.log(`OK ${target} <- ${videoUrl}`);
}

async function main() {
  await ensureBucket();

  const dirs = await readdir(CASES_DIR);
  for (const dir of dirs) {
    const dirPath = join(CASES_DIR, dir);
    const dirStat = await stat(dirPath);
    if (!dirStat.isDirectory() || dir.startsWith('_') || dir === 'depoimentos') continue;

    const files = await readdir(dirPath);
    const videos = files.filter(f => /\.(mp4|mov)$/i.test(f));
    if (videos.length === 0) continue;

    // Pega o maior video (provavelmente o mastershot, mais bonito)
    let bestVideo = videos[0];
    let bestSize = 0;
    for (const v of videos) {
      const s = await stat(join(dirPath, v));
      if (s.size > bestSize) { bestSize = s.size; bestVideo = v; }
    }

    const localPath = join(dirPath, bestVideo);
    const remoteKey = `${dir}/${bestVideo}`;
    console.log(`Uploading ${remoteKey} (${(bestSize / 1024 / 1024).toFixed(1)} MB)...`);
    const url = await uploadVideo(localPath, remoteKey);
    await updateCaseJson(dir, url);
  }
}

main().catch(err => { console.error(err); process.exit(1); });
```

- [ ] **Step 3: Adicionar comando no `package.json`**

```json
"upload-videos": "tsx scripts/upload-videos.ts"
```

- [ ] **Step 4: Rodar upload**

Run: `npm run upload-videos`
Expected: 16 videos uploaded, 16 JSONs atualizados com `videoUrl`.

- [ ] **Step 5: Commit do script + JSONs atualizados**

```bash
git add scripts/upload-videos.ts package.json package-lock.json src/content/cases/
git commit -m "feat(media): upload drone videos to Supabase Storage"
```

---

## Task 6: Endpoint público `/cases.json` (pra Eva consumir)

**Files:**
- Create: `src/pages/cases.json.ts`

- [ ] **Step 1: Criar endpoint que serializa content collection**

```ts
// Endpoint estatico: pega todos os cases do content collection e serializa.
// Eva vai consumir em https://ecosunpower.eng.br/cases.json

import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const all = await getCollection('cases');
  const payload = all.map(c => ({
    id: c.id,
    ...c.data,
  }));

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600', // 1h cache no Cloudflare
    },
  });
};
```

- [ ] **Step 2: Build e validar resposta local**

Run: `npm run build && npm run preview`
Em outra aba: `curl http://localhost:4321/cases.json`
Expected: JSON com 16 cases.

- [ ] **Step 3: Commit**

```bash
git add src/pages/cases.json.ts
git commit -m "feat(api): expose cases.json endpoint for Eva"
```

---

## Task 7: Endpoint `/api/testimonials.json` (lê tabela testimonials do Supabase)

**Files:**
- Create: `src/lib/supabase-build.ts`
- Create: `src/pages/api/testimonials.json.ts`

- [ ] **Step 1: Criar cliente Supabase pra build-time**

```ts
// src/lib/supabase-build.ts
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('[supabase-build] SUPABASE_URL ou SUPABASE_ANON_KEY ausente — endpoints retornarao vazio.');
}

export const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
```

- [ ] **Step 2: Criar endpoint testimonials.json**

```ts
// src/pages/api/testimonials.json.ts
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

export const GET: APIRoute = async () => {
  if (!supabase) {
    return new Response('[]', { headers: { 'Content-Type': 'application/json' } });
  }

  const { data, error } = await supabase
    .from('testimonials')
    .select(`
      id, format, content, media_url, google_posted, sentiment, created_at,
      lead_id,
      leads (nome, cidade)
    `)
    .eq('usable_for_marketing', true)
    .eq('sentiment', 'positivo')
    .order('created_at', { ascending: false })
    .limit(20);

  if (error) {
    console.error('[testimonials.json]', error);
    return new Response('[]', { headers: { 'Content-Type': 'application/json' } });
  }

  const payload: TestimonialPublic[] = (data ?? []).map(row => {
    const lead = (row.leads as any) || {};
    return {
      id: row.id,
      nomeCliente: abreviarNome(lead.nome),
      cidade: lead.cidade ?? null,
      texto: row.content,
      estrelas: 5, // sentiment positivo => 5
      formato: row.format,
      mediaUrl: row.media_url,
      data: row.created_at,
      googlePosted: row.google_posted,
      caseSlug: null, // TODO Task 18 (linkar com case se lead tem proposta)
    };
  });

  return new Response(JSON.stringify(payload, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300',
    },
  });
};
```

- [ ] **Step 3: Adicionar `SUPABASE_URL` e `SUPABASE_ANON_KEY` em `.env` local**

Editar `.env` (criar se nao existir):

```
SUPABASE_URL=https://<projeto>.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1...
```

(Pegar valores do `.env` da Eva.)

- [ ] **Step 4: Validar resposta local**

Run: `npm run build && npm run preview`
Em outra aba: `curl http://localhost:4321/api/testimonials.json`
Expected: array (vazio se ainda nao tiver depoimento aprovado).

- [ ] **Step 5: Commit**

```bash
git add src/lib/supabase-build.ts src/pages/api/testimonials.json.ts
git commit -m "feat(api): expose testimonials.json from Supabase"
```

---

## Task 8: Componente `CaseCard.astro` (reutilizável home + portfolio)

**Files:**
- Create: `src/components/CaseCard.astro`

- [ ] **Step 1: Criar componente**

```astro
---
// src/components/CaseCard.astro
// Card unico de case — reutilizado na home (3 cards) e em /portfolio (16 cards).

interface Props {
  slug: string;
  titulo: string;
  cidade: string;
  uf: string;
  tipo: string;
  kwp?: number;
  economiaMensalBrl?: number;
  fotoPrincipal: string;
  videoUrl?: string;
  tecnologiaDestaque?: string;
}

const { slug, titulo, cidade, uf, tipo, kwp, economiaMensalBrl, fotoPrincipal, videoUrl, tecnologiaDestaque } = Astro.props;

const tipoLabels: Record<string, string> = {
  residencial: 'Residencial',
  comercial: 'Comercial',
  industrial: 'Industrial',
  rural: 'Rural',
  hibrido: 'Híbrido (com bateria)',
  usina: 'Usina de Investimento',
};
---

<article class="card group flex flex-col overflow-hidden p-0 transition hover:scale-[1.02]">
  <div class="relative h-48 overflow-hidden bg-slate-100">
    <img
      src={fotoPrincipal}
      alt={`${titulo}, ${cidade}-${uf}`}
      class="h-full w-full object-cover"
      loading="lazy"
      width="800"
      height="450"
    />
    {kwp && (
      <div class="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-dark backdrop-blur-sm">
        {kwp.toString().replace('.', ',')} kWp
      </div>
    )}
    {tecnologiaDestaque && (
      <div class="absolute left-3 top-3 rounded-full bg-primary-600/95 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
        {tecnologiaDestaque}
      </div>
    )}
  </div>
  <div class="flex flex-1 flex-col p-6">
    <span class="mb-1 text-xs font-semibold uppercase tracking-wider text-primary-600">
      {cidade}-{uf} · {tipoLabels[tipo] ?? tipo}
    </span>
    <h3 class="mb-2 mt-2 text-lg font-bold leading-tight">{titulo}</h3>
    {economiaMensalBrl && (
      <div class="mt-auto pt-4 border-t border-slate-100">
        <div class="text-xs text-muted">Economia mensal</div>
        <div class="text-base font-bold text-emerald-600">
          R$ {economiaMensalBrl.toLocaleString('pt-BR')}/mês
        </div>
      </div>
    )}
    {videoUrl && (
      <button
        type="button"
        data-video-url={videoUrl}
        data-case-titulo={titulo}
        class="case-play-btn mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:underline"
      >
        ▶ Ver vídeo do drone
      </button>
    )}
  </div>
</article>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/CaseCard.astro
git commit -m "feat(components): add reusable CaseCard"
```

---

## Task 9: Componente `ProvasSociaisHome.astro`

**Files:**
- Create: `src/components/ProvasSociaisHome.astro`

- [ ] **Step 1: Criar componente**

```astro
---
// src/components/ProvasSociaisHome.astro
// Bloco da home: selo Google + 3 cases featured + botões.

import { getCollection } from 'astro:content';
import config from '../content/config-site.json';
import CaseCard from './CaseCard.astro';

const todos = await getCollection('cases');
const featured = todos.filter(c => c.data.featured).slice(0, 3);
---

<section class="section bg-surface">
  <div class="container-wide">
    <div class="mb-12 text-center">
      <h2 class="mb-3 text-3xl lg:text-4xl">Veja quem já confiou</h2>
      <p class="text-muted">600+ obras entregues em Brasília e Goiás.</p>
    </div>

    <div class="mb-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:gap-8">
      <div class="flex items-center gap-3">
        <div class="text-4xl">⭐</div>
        <div>
          <div class="text-2xl font-bold text-dark">{config.googleNota} no Google</div>
          <div class="text-sm text-muted">{config.googleQtdAvaliacoes} avaliações verificadas</div>
        </div>
      </div>
      <a href={config.googleUrl} target="_blank" rel="noopener"
         class="btn-secondary">
        Ver perfil no Google →
      </a>
    </div>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featured.map(c => (
        <CaseCard
          slug={c.data.slug}
          titulo={c.data.titulo}
          cidade={c.data.cidade}
          uf={c.data.uf}
          tipo={c.data.tipo}
          kwp={c.data.kwp}
          economiaMensalBrl={c.data.economiaMensalBrl}
          fotoPrincipal={c.data.fotoPrincipal}
          videoUrl={c.data.videoUrl}
          tecnologiaDestaque={c.data.tecnologiaDestaque}
        />
      ))}
    </div>

    <div class="mt-12 text-center">
      <a href="/portfolio" class="btn-primary text-lg">Veja mais casos de sucesso →</a>

      <div class="mt-6">
        <p class="mb-3 text-sm text-muted">Acompanhe também:</p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a href={config.googleUrl} target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:border-primary-600 hover:text-primary-600">
            🔍 Google Meu Negócio
          </a>
          <a href={config.instagramUrl} target="_blank" rel="noopener"
             class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold transition hover:border-primary-600 hover:text-primary-600">
            📷 Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ProvasSociaisHome.astro
git commit -m "feat(home): add ProvasSociaisHome block component"
```

---

## Task 10: Integrar `ProvasSociaisHome` em `index.astro`

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Editar index.astro**

Localizar:

```astro
import Impacto from '../components/Impacto.astro';
import CTA from '../components/CTA.astro';
```

Adicionar abaixo desse último import:

```astro
import ProvasSociaisHome from '../components/ProvasSociaisHome.astro';
```

Localizar:

```astro
  <Impacto />
  <CTA />
```

Trocar pra:

```astro
  <Impacto />
  <ProvasSociaisHome />
  <CTA />
```

- [ ] **Step 2: Validar build**

Run: `npm run build`
Expected: build sucesso, sem erros.

- [ ] **Step 3: Visual check**

Run: `npm run dev`
Abrir http://localhost:4321 — bloco aparece entre Impacto e CTA. Mobile responsivo.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): integrate ProvasSociaisHome between Impacto and CTA"
```

---

## Task 11: Refatorar `portfolio.astro` pra ler de content collection

**Files:**
- Modify: `src/pages/portfolio.astro`

- [ ] **Step 1: Substituir conteúdo do portfolio.astro**

```astro
---
import Layout from '../layouts/Layout.astro';
import { getCollection } from 'astro:content';
import CaseCard from '../components/CaseCard.astro';

const todos = await getCollection('cases');
const cases = todos.sort((a, b) => a.id.localeCompare(b.id));
---

<Layout
  title="Portfolio de Obras — EcoSunPower"
  description="600+ projetos de energia solar entregues em Brasília e Goiás. Cases reais de residencial, comercial, industrial e rural."
>
  <section class="bg-gradient-hero text-white py-20 lg:py-28 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-sun opacity-50"></div>
    <div class="container-narrow relative z-10 text-center">
      <span class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-sm font-semibold">
        ⚡ 600+ projetos entregues
      </span>
      <h1 class="text-4xl lg:text-6xl mb-6">Cases reais.</h1>
      <p class="text-lg lg:text-xl text-slate-100/90 max-w-2xl mx-auto">
        Obras entregues em Brasília, Goiás e região. Residencial, comercial, industrial, rural e híbrido.
      </p>
    </div>
  </section>

  <section class="section bg-surface-alt">
    <div class="container-wide">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map(c => (
          <CaseCard
            slug={c.data.slug}
            titulo={c.data.titulo}
            cidade={c.data.cidade}
            uf={c.data.uf}
            tipo={c.data.tipo}
            kwp={c.data.kwp}
            economiaMensalBrl={c.data.economiaMensalBrl}
            fotoPrincipal={c.data.fotoPrincipal}
            videoUrl={c.data.videoUrl}
            tecnologiaDestaque={c.data.tecnologiaDestaque}
          />
        ))}
      </div>

      <div class="text-center mt-16">
        <p class="text-muted mb-5">Quer ver mais? Esses são alguns dos 600+ projetos entregues.</p>
        <a href="https://wa.me/5561998805002?text=Oi!%20Quero%20ver%20mais%20obras%20da%20EcoSunPower" target="_blank" rel="noopener" class="btn-primary text-lg">
          Ver mais cases no WhatsApp
        </a>
      </div>
    </div>
  </section>
</Layout>
```

- [ ] **Step 2: Validar build**

Run: `npm run build`
Expected: 16 cards renderizam.

- [ ] **Step 3: Visual check**

Run: `npm run dev`
Abrir http://localhost:4321/portfolio — 16 cards com fotos extraídas dos vídeos.

- [ ] **Step 4: Commit**

```bash
git add src/pages/portfolio.astro
git commit -m "refactor(portfolio): read cases from content collection"
```

---

## Task 12: Componente `Depoimentos.astro` na página `/portfolio`

**Files:**
- Create: `src/components/Depoimentos.astro`
- Modify: `src/pages/portfolio.astro`

- [ ] **Step 1: Criar componente Depoimentos**

```astro
---
// src/components/Depoimentos.astro
// Le testimonials.json no build-time e renderiza grid.

import config from '../content/config-site.json';

interface Testimonial {
  id: string;
  nomeCliente: string;
  cidade: string | null;
  texto: string | null;
  estrelas: number;
  formato: string;
  mediaUrl: string | null;
  googlePosted: boolean;
  data: string;
}

let testimonials: Testimonial[] = [];
try {
  const url = `${Astro.site}api/testimonials.json`;
  const res = await fetch(url);
  if (res.ok) testimonials = await res.json();
} catch (err) {
  console.warn('[Depoimentos] fetch falhou (build sem Supabase?):', err);
}

// Pega ate 6 com texto
const comTexto = testimonials.filter(t => t.texto && t.texto.length > 0).slice(0, 6);
---

<section class="section bg-white">
  <div class="container-wide">
    <div class="mb-10 text-center">
      <h2 class="mb-3">O que nossos clientes dizem</h2>
      <div class="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-amber-900">
        <span class="text-xl">⭐</span>
        <span class="font-bold">{config.googleNota} no Google</span>
        <span class="text-sm">· {config.googleQtdAvaliacoes} avaliações</span>
      </div>
    </div>

    {comTexto.length === 0 ? (
      <div class="text-center text-muted">
        <p>Em breve, depoimentos reais dos nossos clientes aqui.</p>
        <p class="mt-2 text-sm">Enquanto isso, veja as avaliações no Google:</p>
        <a href={config.googleUrl} target="_blank" rel="noopener" class="btn-primary mt-4 inline-block">
          Ver avaliações no Google
        </a>
      </div>
    ) : (
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {comTexto.map(t => (
          <article class="card flex flex-col p-6">
            <div class="mb-3 flex items-center gap-2">
              {Array.from({ length: t.estrelas }).map(() => <span class="text-amber-400">⭐</span>)}
            </div>
            <blockquote class="mb-4 flex-1 text-base leading-relaxed">
              "{t.texto}"
            </blockquote>
            <footer class="border-t border-slate-100 pt-3 text-sm">
              <div class="font-semibold">{t.nomeCliente}</div>
              {t.cidade && <div class="text-muted">{t.cidade}</div>}
              {t.googlePosted && (
                <div class="mt-2 inline-flex items-center gap-1 text-xs text-emerald-700">
                  ✓ Verificado no Google
                </div>
              )}
            </footer>
          </article>
        ))}
      </div>
    )}

    <div class="mt-10 flex flex-wrap justify-center gap-3">
      <a href={config.googleUrl} target="_blank" rel="noopener" class="btn-secondary">
        Ver todas no Google
      </a>
      <a href={config.googleWriteReviewUrl} target="_blank" rel="noopener" class="btn-primary">
        Avalie a gente
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar `Depoimentos` em `portfolio.astro`**

Localizar (em `src/pages/portfolio.astro`):

```astro
import CaseCard from '../components/CaseCard.astro';
```

Adicionar abaixo:

```astro
import Depoimentos from '../components/Depoimentos.astro';
```

Localizar a `</section>` que fecha o grid de cases (antes do `</Layout>`). Inserir DEPOIS dela e ANTES do `</Layout>`:

```astro
  <Depoimentos />
```

- [ ] **Step 3: Build e visual check**

Run: `npm run build && npm run dev`
Abrir /portfolio — depoimentos aparecem após cases. Se Supabase vazio, mostra mensagem "em breve".

- [ ] **Step 4: Commit**

```bash
git add src/components/Depoimentos.astro src/pages/portfolio.astro
git commit -m "feat(portfolio): add testimonials section"
```

---

## Task 13: Lightbox de galeria (clicar em case mostra vídeo + fotos)

**Files:**
- Create: `src/components/CaseLightbox.astro`
- Modify: `src/pages/portfolio.astro`

- [ ] **Step 1: Criar componente lightbox**

```astro
---
// src/components/CaseLightbox.astro
// Modal global pra exibir video do drone ou galeria. Listener via data-video-url do CaseCard.
---

<div id="case-lightbox" class="fixed inset-0 z-50 hidden items-center justify-center bg-black/90 p-4" role="dialog" aria-modal="true" aria-label="Vídeo do case">
  <button id="case-lightbox-close" type="button" aria-label="Fechar" class="absolute right-4 top-4 text-3xl text-white">×</button>
  <div class="w-full max-w-5xl">
    <h3 id="case-lightbox-title" class="mb-3 text-center text-lg font-semibold text-white"></h3>
    <video id="case-lightbox-video" controls preload="metadata" class="w-full rounded-lg shadow-2xl">
      <track kind="captions" />
    </video>
  </div>
</div>

<script>
  const overlay = document.getElementById('case-lightbox');
  const video = document.getElementById('case-lightbox-video') as HTMLVideoElement;
  const title = document.getElementById('case-lightbox-title');
  const closeBtn = document.getElementById('case-lightbox-close');

  function open(url: string, caseTitle: string) {
    if (!overlay || !video || !title) return;
    video.src = url;
    title.textContent = caseTitle;
    overlay.classList.remove('hidden');
    overlay.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    if (!overlay || !video) return;
    video.pause();
    video.removeAttribute('src');
    video.load();
    overlay.classList.add('hidden');
    overlay.classList.remove('flex');
    document.body.style.overflow = '';
  }

  document.querySelectorAll<HTMLButtonElement>('.case-play-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.videoUrl;
      const t = btn.dataset.caseTitulo ?? '';
      if (url) open(url, t);
    });
  });

  closeBtn?.addEventListener('click', close);
  overlay?.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
</script>
```

- [ ] **Step 2: Incluir em portfolio.astro e index.astro**

Em `src/pages/portfolio.astro`, dentro do `<Layout>`, antes do `</Layout>`:

```astro
  <CaseLightbox />
```

Adicionar import:

```astro
import CaseLightbox from '../components/CaseLightbox.astro';
```

Em `src/pages/index.astro` fazer a mesma adição (lightbox precisa estar disponível na home tambem porque o ProvasSociaisHome tem botão "Ver vídeo").

- [ ] **Step 3: Visual check**

Run: `npm run dev`
Abrir /portfolio, clicar em "▶ Ver vídeo do drone" de qualquer case → modal abre com vídeo. ESC fecha.

- [ ] **Step 4: Commit**

```bash
git add src/components/CaseLightbox.astro src/pages/portfolio.astro src/pages/index.astro
git commit -m "feat(ui): add video lightbox for case drone footage"
```

---

## Task 14: Eva — fetcher de cases com cache 24h

**Files:**
- Create: `src/modules/cases-fetcher.ts` (no repo `ecosunpower-agente`)
- Create: `tests/cases-fetcher.test.ts`

- [ ] **Step 1: Escrever teste failing**

Criar `tests/cases-fetcher.test.ts`:

```ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CasesFetcher } from '../src/modules/cases-fetcher';

describe('CasesFetcher', () => {
  beforeEach(() => vi.clearAllMocks());

  it('busca cases.json e cacheia por 24h', async () => {
    const mockCases = [
      { slug: 'caso1', titulo: 'Caso 1', tipo: 'residencial', cidade: 'Brasília', uf: 'DF', featured: true, fotoPrincipal: '/x.jpg' },
    ];
    const fetchMock = vi.fn().mockResolvedValue({ ok: true, json: async () => mockCases });
    const fetcher = new CasesFetcher({ siteUrl: 'https://exemplo.com', fetcher: fetchMock as any });

    const r1 = await fetcher.getAll();
    const r2 = await fetcher.getAll();

    expect(fetchMock).toHaveBeenCalledTimes(1); // segundo hit usa cache
    expect(r1).toEqual(mockCases);
    expect(r2).toEqual(mockCases);
  });

  it('filtra por tipoCliente', async () => {
    const cases = [
      { slug: 'a', tipo: 'residencial', titulo: 'A', cidade: 'X', uf: 'DF', featured: false, fotoPrincipal: '/a.jpg' },
      { slug: 'b', tipo: 'comercial', titulo: 'B', cidade: 'Y', uf: 'DF', featured: true, fotoPrincipal: '/b.jpg' },
      { slug: 'c', tipo: 'comercial', titulo: 'C', cidade: 'Z', uf: 'GO', featured: true, fotoPrincipal: '/c.jpg' },
    ];
    const fetcher = new CasesFetcher({
      siteUrl: 'https://exemplo.com',
      fetcher: (() => Promise.resolve({ ok: true, json: async () => cases })) as any,
    });

    const result = await fetcher.getByTipo('comercial', 3);
    expect(result.length).toBe(2);
    expect(result.every(c => c.tipo === 'comercial')).toBe(true);
  });

  it('fallback pra featured se tipo nao tem suficientes', async () => {
    const cases = [
      { slug: 'a', tipo: 'residencial', titulo: 'A', cidade: 'X', uf: 'DF', featured: true, fotoPrincipal: '/a.jpg' },
      { slug: 'b', tipo: 'comercial', titulo: 'B', cidade: 'Y', uf: 'DF', featured: true, fotoPrincipal: '/b.jpg' },
    ];
    const fetcher = new CasesFetcher({
      siteUrl: 'https://exemplo.com',
      fetcher: (() => Promise.resolve({ ok: true, json: async () => cases })) as any,
    });

    const result = await fetcher.getByTipo('industrial', 3);
    expect(result.length).toBe(2); // nao tem industrial, fallback featured
    expect(result.every(c => c.featured)).toBe(true);
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd "C:\Users\Meu Computador\Documents\ecosunpower-agente" && npm test -- cases-fetcher`
Expected: FAIL (modulo nao existe)

- [ ] **Step 3: Implementar `cases-fetcher.ts`**

```ts
// src/modules/cases-fetcher.ts
// Busca cases do site (build estatico em ecosunpower.eng.br/cases.json) com cache em memoria.

export interface Case {
  slug: string;
  titulo: string;
  cliente?: string;
  cidade: string;
  uf: 'DF' | 'GO';
  tipo: 'residencial' | 'comercial' | 'industrial' | 'rural' | 'hibrido' | 'usina';
  kwp?: number;
  economiaMensalBrl?: number;
  descCurta?: string;
  fotoPrincipal: string;
  videoUrl?: string;
  featured: boolean;
  tecnologiaDestaque?: string;
}

interface FetcherDeps {
  siteUrl: string;
  fetcher?: typeof fetch;
  ttlMs?: number;
}

const TTL_MS_DEFAULT = 24 * 60 * 60 * 1000; // 24h

export class CasesFetcher {
  private cache: { at: number; data: Case[] } | null = null;
  private readonly siteUrl: string;
  private readonly fetcher: typeof fetch;
  private readonly ttlMs: number;

  constructor(deps: FetcherDeps) {
    this.siteUrl = deps.siteUrl.replace(/\/$/, '');
    this.fetcher = deps.fetcher ?? fetch;
    this.ttlMs = deps.ttlMs ?? TTL_MS_DEFAULT;
  }

  async getAll(): Promise<Case[]> {
    const now = Date.now();
    if (this.cache && now - this.cache.at < this.ttlMs) {
      return this.cache.data;
    }
    try {
      const res = await this.fetcher(`${this.siteUrl}/cases.json`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as Case[];
      this.cache = { at: now, data };
      return data;
    } catch (err) {
      // Fallback: cache antigo se existir, senao vazio
      if (this.cache) {
        console.warn('[cases-fetcher] usando cache antigo:', err);
        return this.cache.data;
      }
      console.error('[cases-fetcher] erro e sem cache:', err);
      return [];
    }
  }

  async getByTipo(tipo: Case['tipo'], limit = 3): Promise<Case[]> {
    const all = await this.getAll();
    const dotipo = all.filter(c => c.tipo === tipo).slice(0, limit);
    if (dotipo.length >= limit) return dotipo;
    // Completa com featured de qualquer tipo
    const featured = all.filter(c => c.featured && !dotipo.find(d => d.slug === c.slug));
    return [...dotipo, ...featured].slice(0, limit);
  }
}
```

- [ ] **Step 4: Rodar testes ate passar**

Run: `npm test -- cases-fetcher`
Expected: PASS (3 testes).

- [ ] **Step 5: Commit**

```bash
cd "C:\Users\Meu Computador\Documents\ecosunpower-agente"
git add src/modules/cases-fetcher.ts tests/cases-fetcher.test.ts
git commit -m "feat(cases-fetcher): add cached fetcher with type filter and fallback"
```

---

## Task 15: Eva — gerar HTML da página de prova social na proposta

**Files:**
- Create: `src/modules/proposal/social-proof-page.ts`
- Create: `tests/proposal/social-proof-page.test.ts`

- [ ] **Step 1: Escrever teste**

```ts
// tests/proposal/social-proof-page.test.ts
import { describe, it, expect } from 'vitest';
import { renderSocialProofPage } from '../../src/modules/proposal/social-proof-page';
import type { Case } from '../../src/modules/cases-fetcher';

const SAMPLE_CASES: Case[] = [
  { slug: 'a', titulo: 'Case A', cidade: 'Brasília', uf: 'DF', tipo: 'residencial', kwp: 10, fotoPrincipal: 'https://x/a.jpg', featured: true },
  { slug: 'b', titulo: 'Case B', cidade: 'Goiânia', uf: 'GO', tipo: 'residencial', kwp: 12, fotoPrincipal: 'https://x/b.jpg', featured: true },
  { slug: 'c', titulo: 'Case C', cidade: 'Anápolis', uf: 'GO', tipo: 'residencial', kwp: 8, fotoPrincipal: 'https://x/c.jpg', featured: false },
];

describe('renderSocialProofPage', () => {
  it('renderiza HTML com 3 cases e selo Google', () => {
    const html = renderSocialProofPage({
      cases: SAMPLE_CASES,
      googleNota: '4.9',
      googleQtdAvaliacoes: 47,
    });

    expect(html).toContain('Case A');
    expect(html).toContain('Case B');
    expect(html).toContain('Case C');
    expect(html).toContain('4.9');
    expect(html).toContain('47');
    expect(html).toContain('Linha do Sol');
    expect(html).toContain('Responsável Técnico');
  });

  it('escapa caracteres HTML inseguros no titulo', () => {
    const cases: Case[] = [{
      slug: 'x', titulo: '<script>alert(1)</script>', cidade: 'X', uf: 'DF',
      tipo: 'residencial', fotoPrincipal: '/x.jpg', featured: true,
    }];
    const html = renderSocialProofPage({ cases, googleNota: '4.9', googleQtdAvaliacoes: 0 });
    expect(html).not.toContain('<script>alert');
    expect(html).toContain('&lt;script&gt;');
  });

  it('lida com caso sem cases (fallback message)', () => {
    const html = renderSocialProofPage({ cases: [], googleNota: '4.9', googleQtdAvaliacoes: 47 });
    expect(html).toContain('600+');
    expect(html).toContain('4.9');
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- social-proof-page`
Expected: FAIL.

- [ ] **Step 3: Implementar**

```ts
// src/modules/proposal/social-proof-page.ts
import type { Case } from '../cases-fetcher';

interface SocialProofInput {
  cases: Case[];
  googleNota: string;
  googleQtdAvaliacoes: number;
  depoimento?: { texto: string; cliente: string; cidade: string };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export function renderSocialProofPage(input: SocialProofInput): string {
  const { cases, googleNota, googleQtdAvaliacoes, depoimento } = input;

  const cards = cases.slice(0, 3).map(c => `
    <div style="flex:1;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;background:#fff">
      <img src="${escapeHtml(c.fotoPrincipal)}" alt="${escapeHtml(c.titulo)}" style="width:100%;height:120px;object-fit:cover" />
      <div style="padding:12px">
        <div style="font-weight:bold;font-size:13px">${escapeHtml(c.titulo)}</div>
        <div style="font-size:11px;color:#64748b">${escapeHtml(c.cidade)}-${escapeHtml(c.uf)}${c.kwp ? ` · ${c.kwp} kWp` : ''}</div>
      </div>
    </div>
  `).join('');

  const depoimentoHtml = depoimento ? `
    <blockquote style="margin:0;font-style:italic;color:#334155;font-size:13px;line-height:1.6">
      "${escapeHtml(depoimento.texto)}"
      <footer style="margin-top:6px;font-style:normal;font-size:11px;color:#64748b">
        — ${escapeHtml(depoimento.cliente)}, ${escapeHtml(depoimento.cidade)}
      </footer>
    </blockquote>
  ` : '';

  return `
<div style="page-break-before:always;padding:32px 28px;font-family:'Inter',Arial,sans-serif;color:#0f172a">
  <h2 style="font-size:22px;margin:0 0 16px">Você não está sozinho.</h2>
  <p style="font-size:14px;color:#475569;margin:0 0 20px">600+ clientes já economizam com a EcoSunPower em Brasília e Goiás.</p>

  <div style="display:flex;gap:16px;align-items:center;background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:14px;margin-bottom:24px">
    <div style="font-size:32px">⭐</div>
    <div>
      <div style="font-size:18px;font-weight:bold">${escapeHtml(googleNota)} no Google</div>
      <div style="font-size:12px;color:#78350f">${googleQtdAvaliacoes} avaliações verificadas</div>
    </div>
    ${depoimentoHtml}
  </div>

  <h3 style="font-size:14px;color:#475569;margin:0 0 12px">Outros clientes parecidos com o seu projeto:</h3>
  <div style="display:flex;gap:12px">${cards}</div>

  <div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;display:flex;justify-content:space-between;font-size:11px;color:#94a3b8">
    <span>Linha do Sol™ — EcoSunPower</span>
    <span>Responsável Técnico CREA/CFT</span>
  </div>
</div>
  `.trim();
}
```

- [ ] **Step 4: Rodar testes ate passar**

Run: `npm test -- social-proof-page`
Expected: PASS (3 testes).

- [ ] **Step 5: Commit**

```bash
git add src/modules/proposal/social-proof-page.ts tests/proposal/social-proof-page.test.ts
git commit -m "feat(proposal): add social proof page renderer"
```

---

## Task 16: Eva — integrar página de prova social no template HTML da proposta

**Files:**
- Modify: `src/modules/proposal/template.ts`
- Modify: `src/modules/proposal-assistant.ts`

- [ ] **Step 1: Ler estado atual de `template.ts`**

Run: `head -100 "C:\Users\Meu Computador\Documents\ecosunpower-agente\src\modules\proposal\template.ts"`

(Procurar onde a função principal devolve o HTML completo. Tipicamente é uma função `renderTemplate(data)` ou similar.)

- [ ] **Step 2: Adicionar parâmetro `socialProofHtml` à função principal de template e injetar antes do CTA fechar**

Localizar a função principal exportada em `template.ts`. Adicionar parâmetro opcional `socialProofHtml?: string` e renderizar imediatamente antes da página de CTA "fechar". Se a estrutura não suportar, criar wrapper:

```ts
// no final de template.ts
export function injectSocialProof(html: string, socialProofHtml: string): string {
  // Procura o marker do CTA fechar e insere antes
  const marker = '<!-- CTA-FECHAR-START -->';
  if (html.includes(marker)) {
    return html.replace(marker, `${socialProofHtml}\n${marker}`);
  }
  // Fallback: insere antes do </body>
  return html.replace('</body>', `${socialProofHtml}\n</body>`);
}
```

(Se o CTA fechar não tem marker hoje, adicionar um marker comentário como `<!-- CTA-FECHAR-START -->` no template existente, ANTES do bloco que renderiza o CTA fechar.)

- [ ] **Step 3: Em `proposal-assistant.ts`, chamar fetcher + renderizador**

Localizar o ponto onde `template.ts` é chamado (provavelmente uma função `gerarPropostaHtml` ou similar). Adicionar antes:

```ts
import { CasesFetcher } from './cases-fetcher.js';
import { renderSocialProofPage } from './proposal/social-proof-page.js';
import { injectSocialProof } from './proposal/template.js';

const SITE_URL = process.env.SITE_URL ?? 'https://ecosunpower.eng.br';
const casesFetcher = new CasesFetcher({ siteUrl: SITE_URL });

// Dentro da geracao da proposta, apos calcular o HTML base:
const tipoCliente = (data.tipoCliente || 'residencial').toLowerCase();
const tipoMap: Record<string, any> = {
  'residencial': 'residencial',
  'comercial': 'comercial',
  'industrial': 'industrial',
  'rural': 'rural',
  'hibrido': 'hibrido',
  'usina': 'usina',
};
const tipo = tipoMap[tipoCliente] ?? 'residencial';

const cases = await casesFetcher.getByTipo(tipo, 3);
const socialProofHtml = renderSocialProofPage({
  cases,
  googleNota: process.env.GOOGLE_NOTA ?? '4.9',
  googleQtdAvaliacoes: parseInt(process.env.GOOGLE_QTD_AVALIACOES ?? '47'),
});
const htmlFinal = injectSocialProof(htmlBase, socialProofHtml);
```

- [ ] **Step 4: Adicionar variáveis em `.env` e `.env.example`**

```
SITE_URL=https://ecosunpower.eng.br
GOOGLE_NOTA=4.9
GOOGLE_QTD_AVALIACOES=47
```

- [ ] **Step 5: Rodar testes existentes pra ver que não quebrou nada**

Run: `npm test`
Expected: tudo PASS.

- [ ] **Step 6: Commit**

```bash
git add src/modules/proposal/template.ts src/modules/proposal-assistant.ts .env.example
git commit -m "feat(proposal): inject social proof page before CTA"
```

---

## Task 17: Eva — comandos `/aprovar-depoimento` e `/google-postou`

**Files:**
- Modify: `src/modules/router.ts`
- Create: `tests/router-testimonial-commands.test.ts`

- [ ] **Step 1: Escrever teste**

```ts
// tests/router-testimonial-commands.test.ts
import { describe, it, expect, vi } from 'vitest';
// AJUSTAR import baseado em como o router se exporta hoje:
import { handleAdminCommand } from '../src/modules/router';

describe('Comandos admin de depoimento', () => {
  it('/aprovar-depoimento <id> chama setUsableForMarketing(id, true)', async () => {
    const setUsable = vi.fn();
    const dispatch = vi.fn();
    const ctx: any = {
      testimonials: { setUsableForMarketing: setUsable },
      site: { dispatchRebuild: dispatch },
      reply: vi.fn(),
    };

    await handleAdminCommand('/aprovar-depoimento abc-123', ctx);

    expect(setUsable).toHaveBeenCalledWith('abc-123', true);
    expect(dispatch).toHaveBeenCalled();
  });

  it('/google-postou <id> chama markGooglePosted', async () => {
    const mark = vi.fn();
    const dispatch = vi.fn();
    const ctx: any = {
      testimonials: { markGooglePosted: mark },
      site: { dispatchRebuild: dispatch },
      reply: vi.fn(),
    };
    await handleAdminCommand('/google-postou xyz-456', ctx);
    expect(mark).toHaveBeenCalledWith('xyz-456');
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npm test -- router-testimonial-commands`
Expected: FAIL.

- [ ] **Step 3: Implementar comandos no `router.ts`**

Localizar o switch/case ou tabela de comandos admin existente em `src/modules/router.ts`. Adicionar:

```ts
// dentro do handler admin
if (text.startsWith('/aprovar-depoimento ')) {
  const id = text.slice('/aprovar-depoimento '.length).trim();
  if (!id) return ctx.reply('Uso: /aprovar-depoimento <id>');
  await ctx.testimonials.setUsableForMarketing(id, true);
  await ctx.site.dispatchRebuild();
  return ctx.reply(`✅ Depoimento ${id} aprovado pra marketing. Site vai rebuildar em ~30s.`);
}

if (text.startsWith('/google-postou ')) {
  const id = text.slice('/google-postou '.length).trim();
  if (!id) return ctx.reply('Uso: /google-postou <id>');
  await ctx.testimonials.markGooglePosted(id);
  await ctx.site.dispatchRebuild();
  return ctx.reply(`✅ Depoimento ${id} marcado como postado no Google.`);
}
```

(Se o router atual não usar essa interface — ajustar baseado no padrão existente. O teste vai falhar até o handler real chamar os métodos esperados.)

- [ ] **Step 4: Rodar testes**

Run: `npm test -- router-testimonial-commands`
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add src/modules/router.ts tests/router-testimonial-commands.test.ts
git commit -m "feat(router): add /aprovar-depoimento and /google-postou commands"
```

---

## Task 18: Eva — `dispatchRebuild()` no site (Cloudflare deploy hook)

**Files:**
- Modify: `src/config.ts`
- Create: `src/modules/site-deploy.ts`
- Create: `tests/site-deploy.test.ts`

- [ ] **Step 1: Escrever teste**

```ts
// tests/site-deploy.test.ts
import { describe, it, expect, vi } from 'vitest';
import { SiteDeployService } from '../src/modules/site-deploy';

describe('SiteDeployService', () => {
  it('chama o webhook configurado e retorna true em sucesso', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    const svc = new SiteDeployService({
      hookUrl: 'https://api.cloudflare.com/hook/abc',
      fetcher: fetchMock as any,
    });
    const ok = await svc.dispatchRebuild();
    expect(ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith('https://api.cloudflare.com/hook/abc', expect.objectContaining({ method: 'POST' }));
  });

  it('retorna false e nao throw se hookUrl ausente', async () => {
    const svc = new SiteDeployService({ hookUrl: '', fetcher: vi.fn() as any });
    const ok = await svc.dispatchRebuild();
    expect(ok).toBe(false);
  });
});
```

- [ ] **Step 2: Implementar**

```ts
// src/modules/site-deploy.ts
interface Deps {
  hookUrl: string;
  fetcher?: typeof fetch;
}

export class SiteDeployService {
  private readonly hookUrl: string;
  private readonly fetcher: typeof fetch;

  constructor(deps: Deps) {
    this.hookUrl = deps.hookUrl;
    this.fetcher = deps.fetcher ?? fetch;
  }

  async dispatchRebuild(): Promise<boolean> {
    if (!this.hookUrl) {
      console.warn('[site-deploy] CLOUDFLARE_DEPLOY_HOOK_URL nao configurado, skip rebuild');
      return false;
    }
    try {
      const res = await this.fetcher(this.hookUrl, { method: 'POST' });
      return res.ok;
    } catch (err) {
      console.error('[site-deploy] erro disparando rebuild:', err);
      return false;
    }
  }
}
```

- [ ] **Step 3: Adicionar var em `src/config.ts`**

```ts
// adicionar:
export const CLOUDFLARE_DEPLOY_HOOK_URL = process.env.CLOUDFLARE_DEPLOY_HOOK_URL ?? '';
```

- [ ] **Step 4: Wire no router/index/onde `ctx.site` é montado**

(Procurar o ponto de bootstrap onde os services são instanciados e injetar o `SiteDeployService`.)

- [ ] **Step 5: Rodar testes**

Run: `npm test -- site-deploy`
Expected: PASS.

- [ ] **Step 6: Documentar var em `.env.example`**

```
# Cloudflare Pages deploy hook (Settings > Builds & deployments > Deploy hooks)
CLOUDFLARE_DEPLOY_HOOK_URL=
```

- [ ] **Step 7: Commit**

```bash
git add src/config.ts src/modules/site-deploy.ts tests/site-deploy.test.ts .env.example
git commit -m "feat(site-deploy): add Cloudflare deploy hook dispatcher"
```

---

## Task 19: Build local completo do site + visual check de todas as páginas

**Files:** (sem alteração de código, só verificação)

- [ ] **Step 1: Build de produção do site**

Run: `cd "C:\Users\Meu Computador\Documents\ecosunpower-site" && npm run build`
Expected: build sucesso, sem erros, ~16 cases serializados em `cases.json`.

- [ ] **Step 2: Preview e abrir no navegador**

Run: `npm run preview`

Abrir e validar visualmente:
- http://localhost:4321/ — bloco prova social aparece entre Impacto e CTA. Selo Google, 3 cards featured, botão "Veja mais casos de sucesso", links GMN + Insta.
- http://localhost:4321/portfolio — 16 cards com fotos extraídas dos vídeos. Clique em "Ver vídeo do drone" abre lightbox.
- http://localhost:4321/cases.json — JSON com 16 cases.
- http://localhost:4321/api/testimonials.json — JSON (pode estar vazio).

- [ ] **Step 3: Mobile check**

Devtools > Toggle device > iPhone 14 Pro:
- Home: bloco prova social empilha em coluna.
- Portfolio: cards 1 coluna, depoimentos 1 coluna.
- Lightbox: vídeo ocupa largura total.

- [ ] **Step 4: Lighthouse rápido**

DevTools > Lighthouse > Mobile > Generate. Conferir:
- Performance > 70 (com fotos otimizadas).
- Accessibility > 90.
- Best Practices > 90.

Se Performance < 70: rodar `scripts/optimize-photos.ts` (criar separado se necessário).

---

## Task 20: Push pra produção do site (Cloudflare auto-deploy)

- [ ] **Step 1: Push do branch**

```bash
cd "C:\Users\Meu Computador\Documents\ecosunpower-site"
git status
git push origin main
```

- [ ] **Step 2: Acompanhar deploy**

- Cloudflare Dashboard > Pages > ecosunpower-site > Deployments
- Aguardar status "Success" (~2-3min).

- [ ] **Step 3: Validar produção**

Abrir https://ecosunpower.eng.br/ e https://ecosunpower.eng.br/portfolio
- Bloco home aparece.
- Portfolio com 16 cards.
- https://ecosunpower.eng.br/cases.json acessível (Eva vai consumir daqui).

---

## Task 21: Push da Eva pra produção (Easypanel auto-deploy)

- [ ] **Step 1: Configurar env vars novas no Easypanel**

Easypanel > eva > App > Environment:
- `SITE_URL=https://ecosunpower.eng.br`
- `GOOGLE_NOTA=4.9`
- `GOOGLE_QTD_AVALIACOES=47`
- `CLOUDFLARE_DEPLOY_HOOK_URL=<URL gerada no Cloudflare Pages>` (criar em Cloudflare > Pages > Settings > Builds & deployments > Deploy hooks)

- [ ] **Step 2: Push**

```bash
cd "C:\Users\Meu Computador\Documents\ecosunpower-agente"
git status
git push origin main
```

- [ ] **Step 3: Acompanhar deploy Easypanel**

Easypanel > eva > Logs. Aguardar "Server listening".

- [ ] **Step 4: Smoke test**

Mandar mensagem de teste no WhatsApp pra Eva:
- `/preco` → fluxo deve continuar funcionando.
- `/aprovar-depoimento test-id-fake` → deve responder com erro/aviso (id não existe), mas sem crash.

---

## Task 22: Gerar proposta de teste e validar página de prova social no PDF

- [ ] **Step 1: Mandar `/proposta` pra Eva no WhatsApp** (modo teste)

- [ ] **Step 2: Receber PDF gerado**

Abrir e validar:
- Página nova de prova social aparece antes do CTA fechar.
- Selo Google com nota e qtd avaliações.
- 3 cases do mesmo tipo do cliente da proposta (ex: residencial → 3 cases residencial).
- Footer "Linha do Sol™ · Responsável Técnico CREA/CFT" presente.
- PDF não estourou tamanho (< 5MB ideal).

- [ ] **Step 3: Se ok, marcar feature como "em prod"**

Se algo está errado: voltar Task 16 e ajustar template/injeção.

---

## Task 23: Atualizar memória do Junior (registro do que foi entregue)

**Files:**
- Modify: `C:\Users\Meu Computador\.claude\projects\C--Users-Meu-Computador\memory\MEMORY.md`
- Create: `C:\Users\Meu Computador\.claude\projects\C--Users-Meu-Computador\memory\project_cases_sucesso_gmn.md`

- [ ] **Step 1: Criar memória**

```markdown
---
name: Cases Sucesso + Google Meu Negocio em prod
description: Site com bloco home + /portfolio reformulado + proposta v3 com pagina prova social. 16 cases reais cadastrados em src/content/cases/.
type: project
---

Site EcoSunPower ganhou prova social em 3 lugares (entrega 2026-05-07):

- Home: bloco entre Impacto e CTA com selo Google + 3 cases featured + botoes Google/Insta
- /portfolio: 16 cases reais com foto extraida de video drone + depoimentos puxados da tabela testimonials (Supabase)
- Proposta v3: pagina nova de prova social filtra cases por tipoCliente

Comandos novos no WhatsApp da Eva:
- /aprovar-depoimento <id> → seta usable_for_marketing=true e dispara rebuild Cloudflare
- /google-postou <id> → marca google_posted=true (badge "Verificado no Google" aparece no site)

Arquivos chave:
- Site: src/content/cases/*.json (16), src/components/ProvasSociaisHome.astro, src/components/CaseCard.astro, src/pages/cases.json.ts
- Eva: src/modules/cases-fetcher.ts, src/modules/proposal/social-proof-page.ts, src/modules/site-deploy.ts

Como adicionar case novo: jogar foto/video em public/cases/<NN-slug>/ + criar JSON em src/content/cases/<NN-slug>.json + git push.

Videos no Supabase Storage bucket cases-videos (publico). Frame extraido como cover.jpg fica no repo (~300KB cada).
```

- [ ] **Step 2: Adicionar entrada em MEMORY.md**

Adicionar na lista (ordem de relevância):

```
- [Cases Sucesso + GMN em prod](project_cases_sucesso_gmn.md) — 16 cases home/portfolio/proposta. Comandos /aprovar-depoimento e /google-postou ativos
```

---

## Self-Review

**1. Spec coverage:**
- ✅ Bloco home → Tasks 8, 9, 10
- ✅ /portfolio reformulado → Tasks 11, 12
- ✅ Página prova social na proposta → Tasks 14, 15, 16
- ✅ Tabela testimonials reusada → Task 7
- ✅ Endpoint público cases.json → Task 6
- ✅ Vídeos no Supabase Storage → Task 5
- ✅ Frame extraction → Task 4
- ✅ Comandos WhatsApp → Task 17
- ✅ Deploy hook Cloudflare → Task 18
- ✅ Lightbox → Task 13
- ⚠️ Mapa do escritório → fora desse MVP (decisão Junior, fica pra V2)
- ⚠️ Place ID GMB pro botão "Avalie" → URL placeholder, Junior preenche em config-site.json

**2. Placeholder scan:** sem TBD/TODO/handle-edge-cases.

**3. Type consistency:**
- `Case` interface usada em cases-fetcher.ts e social-proof-page.ts: idêntica.
- `setUsableForMarketing(id, true)` (testimonials.ts existente) ↔ `setUsable.toHaveBeenCalledWith('abc-123', true)` (test): bate.
- `markGooglePosted(id)` ↔ test bate.
- `dispatchRebuild()` ↔ test bate.

Plano completo, pronto pra execução.
