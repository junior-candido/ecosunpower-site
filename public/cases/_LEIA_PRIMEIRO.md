# Cases EcoSunPower — pasta de fotos e vídeos

Pode jogar **tudo aqui**: fotos do celular, fotos profissionais, vídeos de drone, prints. **Não precisa se preocupar com tamanho** — o `.gitignore` já bloqueia vídeos pesados de irem pro git.

## Pra cada case

| Pasta | Case | kWp | Cidade |
|-------|------|-----|--------|
| `01-wash-box/` | Wash Box Serviços Automotivos | 14,4 | Brasília-DF |
| `02-industria-goiania/` | Indústria de Médio Porte | 85,5 | Goiânia-GO |
| `03-residencial-premium/` | Residencial Premium (com bateria) | 11,2 | Brasília-DF |
| `04-fazenda-anapolis/` | Fazenda Agronegócio | 32,4 | Anápolis-GO |
| `05-restaurante/` | Restaurante / Franquia | 18,7 | Brasília-DF |
| `06-condominio/` | Condomínio Vertical | 52,8 | Goiânia-GO |
| `depoimentos/` | Prints de avaliações Google | — | — |
| `_geral/` | Fotos sem case definido (eu organizo depois) | — | — |

## Como o sistema vai tratar cada arquivo

| Tipo | O que acontece |
|------|----------------|
| **Foto JPG/PNG** | Vai pro repo, otimizo pra max 1600px (~300KB cada). Aparece no site e proposta. |
| **Vídeo MP4/MOV (drone)** | NÃO vai pro git. Eu faço upload pro Supabase Storage e uso a URL pública. Aparece no site como vídeo embed. |
| **HEIC/RAW/DNG** | Convertido pra JPG antes de subir. Você não precisa converter manualmente. |

## Fluxo de coleta (anti-trava)

1. Você joga TUDO nas pastas (foto, vídeo, do jeito que tá)
2. Você me chama "fotos prontas" no chat
3. Eu rodo um script que:
   - Otimiza fotos pra web
   - Faz upload dos vídeos pro Supabase Storage
   - Atualiza o `cases.json` com URLs corretas
   - Comita só o que pode ir pro git
4. Site rebuilda automático no Cloudflare

## O que dá problema (evitar)

- ❌ Tentar comitar vídeo direto (git rejeita > 100MB no GitHub) — `.gitignore` já protege
- ❌ Foto de celular sem otimizar (fica 4-8MB cada, repo incha) — eu otimizo
- ❌ Mover fotos manualmente entre pastas depois que comitar (quebra link no site) — me avisa antes

## Quando terminar

Me avisa "fotos prontas" no chat e eu já implemento o site + proposta com fotos e vídeos no lugar certo.
