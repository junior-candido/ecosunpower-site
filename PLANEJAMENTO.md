# EcoSunPower Site Institucional

Criado em 24/04/2026.

## Stack decidida (a confirmar com Junior segunda)

- **Framework:** Astro (SEO top, performance, fácil de manter)
- **Estilo:** Tailwind CSS
- **Deploy:** Easypanel (mesmo onde roda o agente-whatsapp) ou Vercel (gratuito)
- **Domínio:** ecosunpower.com.br (verificar disponibilidade)

## Estrutura de páginas (MVP)

- `/` — Home (hero + serviços + CTA pra WhatsApp)
- `/servicos` — Descrição dos serviços (instalação, bateria, Grid Zero, híbrido, Grupo A)
- `/portfolio` — Obras realizadas (fotos, kWp, depoimentos)
- `/blog` — Conteúdo SEO sobre energia solar
- `/blog/[slug]` — Artigos individuais
- `/contato` — Formulário de contato (cai direto no webhook da Eva)
- `/politica-de-privacidade` — já existe no agente
- `/termos` — já existe no agente
- `/exclusao-dados` — já existe no agente

## Integração com o agente Eva

Formulário de contato no site → POST pro webhook `agente-whatsapp.oigz6g.easypanel.host/webhook/site-lead` (criar)
→ cai na fila de leads do Eva, mesma lógica do Lead Ads

## Estratégia SEO (foco Brasília)

### Keywords prioritárias (long-tail):
- "energia solar em brasilia preço"
- "painel solar para comercio brasilia"
- "bateria para sistema solar df"
- "instalação energia solar distrito federal"
- "grid zero empresa brasilia"
- "energia solar grupo a brasilia"

### Primeiros 10 artigos do blog (ideias):
1. "Quanto custa um sistema de energia solar em Brasília em 2026?"
2. "Lei 14.300: Como fica quem instalar solar até 2028 em Brasília"
3. "Bateria solar em 2026: Vale a pena? Comparativo de preços"
4. "Grid Zero: O que é e por que a EcoSunPower está instalando mais"
5. "Solar para empresas (Grupo A): Guia completo pra indústria em Brasília"
6. "Sistema híbrido solar: Bateria + rede + solar explicado"
7. "Cálculo de payback solar: planilha grátis"
8. "CEB, Equatorial: Como funciona a compensação de créditos de energia"
9. "Rateio de energia solar: Como 1 usina atende várias unidades"
10. "Energia solar em condomínio: Como instalar corretamente"

## TODO pra segunda

- [ ] Inicializar projeto Astro: `npm create astro@latest`
- [ ] Configurar Tailwind
- [ ] Importar logo da EcoSunPower (já em pdfs-eva/logo-ecosunpower-1024-transparente.png)
- [ ] Escolher paleta de cores (premium, não genérico)
- [ ] Criar Hero visual (foto de obra real + CTA forte)
- [ ] Integrar formulário de contato com webhook do Eva
- [ ] Redirect do chat widget pra WhatsApp business (61 99880-5002 — enquanto WABA não migrou)
- [ ] Depois que WABA rodar: redirect pra número novo automaticamente
