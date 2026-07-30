# Coletas de Homologação — como funciona e como evoluir

Páginas que o Junior manda no WhatsApp pros **integradores** (instaladores pra
quem ele faz projeto). O integrador preenche os dados do projeto, anexa os
documentos, e a própria página monta um **dossiê em PDF** e abre o WhatsApp já
endereçado pro número da engenharia (campo "Enviar para", pré-preenchido).

## Estrutura (uma pasta por concessionária = um link limpo)

```
public/coleta/
├── index.html                  → lista das coletas (achar/copiar os links)
├── equatorial-go/index.html    → ecosunpower.eng.br/coleta/equatorial-go
└── neoenergia-df/index.html    → ecosunpower.eng.br/coleta/neoenergia-df
```

Cada página é **um HTML só, auto-contido** (CSS+JS inline, sem servidor — o
PDF é montado no navegador do integrador). Origem: geradas em sessão do
Claude em 29/07/2026; a fonte da verdade é ESTE repositório.

## Como melhorar uma coleta existente

1. Editar o `index.html` da pasta da concessionária (campos, textos, checklist).
2. Manter o bloco de `og:` tags no `<head>` (é o cartão de prévia do WhatsApp).
3. Commit + push na main → o Cloudflare Pages publica sozinho (~1 min).
4. Testar o link no navegador do celular (o fluxo de anexos + PDF é mobile-first).

## Como criar pra uma NOVA concessionária

1. Copiar a pasta da mais parecida (ex: `neoenergia-df/` → `equatorial-pa/`).
2. Ajustar no `index.html` novo:
   - `<title>` e as tags `og:title` (nome da concessionária);
   - o checklist de documentos exigidos (cada concessionária tem o seu — ver
     normas em `Documents/EcoSunPower/Normas-Tecnicas/` e memória
     `reference_concessionarias`);
   - textos que citem a concessionária.
3. Adicionar o link novo na lista do `public/coleta/index.html`.
4. Commit + push na main.

## Melhorias de 29/07 (à noite)

- **ZIP dos arquivos no envio**: o "Enviar pro WhatsApp" agora manda DOIS
  arquivos — o dossiê PDF + um `..._arquivos.zip` com todas as fotos (jpg) e
  PDFs anexados, nomes numerados por item (`04-foto-do-padrao.jpg`). O ZIP
  chega como documento no zap → Junior salva no PC (WhatsApp Web) e extrai.
  Empacotador ZIP próprio dentro da página (store-only, sem biblioteca externa).
- **Localização**: o obrigatório é o LINK do Google Maps (colado — vale
  encurtado maps.app.goo.gl); o botão GPS é atalho opcional pra quem está no
  local. (A Neoenergia já era assim; a Equatorial exigia coordenada e foi
  ajustada — coordenada colada também continua valendo e vira UTM no dossiê.)

## Detalhes de manutenção

- O número do WhatsApp de destino fica **pré-preenchido no campo** `f_zap`
  (editável pelo integrador). Trocar o padrão = editar o `value` do input.
- `noindex,nofollow`: essas páginas não devem aparecer no Google (link direto).
- Rascunho do integrador fica salvo no navegador dele (localStorage) — reabrir
  o link recupera o preenchimento.
