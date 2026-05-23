# 🎬 Vídeos da landing /cotacao

Pasta destinada aos vídeos usados na landing dedicada de campanhas pagas.

## Como subir um vídeo novo

### Pelo VS Code (mais simples)
1. Arrasta o arquivo `.mp4` direto pra dentro dessa pasta `public/videos/`
2. Renomeia pro nome esperado (ver tabela abaixo)
3. Commit + push → Cloudflare auto-deploya em ~2min

### Pelo GitHub Web
1. Abre [github.com/junior-candido/ecosunpower-site/tree/main/public/videos](https://github.com/junior-candido/ecosunpower-site/tree/main/public/videos)
2. Botão **"Add file" → "Upload files"**
3. Arrasta o arquivo
4. **Commit changes** direto na branch main

## Slots disponíveis (nomes esperados)

| Arquivo | Onde aparece | Status atual |
|---|---|---|
| `cotacao-hero.mp4` | Vídeo de fundo do Hero (autoplay muted loop) | ❌ Não existe (landing usa vídeo do case Ailson por padrão) |
| `cotacao-instalacao.mp4` | Bloco "Veja em ação" entre form e cases | ❌ Não existe (bloco não renderiza se arquivo faltar) |
| `cotacao-depoimento-1.mp4` | Depoimento de cliente em vídeo | ❌ Não existe |

## Especificações ideais

- **Formato:** MP4 (codec H.264) ou WebM
- **Duração Hero:** 10-30 segundos (vai ficar em loop)
- **Duração Depoimento:** 30-90 segundos
- **Tamanho:** <10MB pra carregar rápido
- **Resolução:** 1280×720 (HD) — não precisa 4K, fica em background ou pequeno
- **Áudio:** vídeos Hero tocam MUTED por padrão (browsers exigem). Se o áudio é essencial, considere legenda visual sobreposta.

## Trocar o vídeo do Hero

Depois de subir `cotacao-hero.mp4`, **me avisa** ("tem novo vídeo hero") que eu mudo a referência no `cotacao.astro` em 30s. Não mexa no `.astro` direto se não tiver certeza — quebra parsing.

## Por que esse fluxo?

Vídeos maiores não devem ir pro repo Git (pesa clone). Idealmente, vídeos pesados vão pro **Supabase Storage** (bucket `cases-videos`, projeto `kupnsoyymulbdzakqlqc`). Esse repo é só pra vídeos curtos (<10MB) que ficam embutidos na landing.
