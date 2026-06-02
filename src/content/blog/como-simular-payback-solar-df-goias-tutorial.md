---
title: "Como simular o payback solar no DF e Goiás: tutorial passo a passo"
description: "Tutorial técnico para calcular o retorno do investimento em energia solar fotovoltaica no DF e Goiás, considerando Fio B, bandeira amarela e tarifas 2026."
pubDate: 2026-06-02
category: tutorial
tags: ["payback solar","dimensionamento","Lei 14.300","Brasília","Goiás","Fio B"]
readingTime: 9
sourceAttribution: "Inspirado em análises do Canal Solar sobre tarifas e bandeiras (junho/2026) — https://canalsolar.com.br/aneel-bandeira-tarifaria-amarela-conta-de-luz-junho/ — e em comunicados oficiais da ANEEL sobre bandeira tarifária amarela de junho/2026 — https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/bandeira-tarifaria-em-junho-permanece-amarela"
draft: false
---
## Por que calcular o payback antes de assinar o contrato

O payback é o indicador mais usado pelo consumidor para decidir se vale a pena investir em energia solar fotovoltaica. No Distrito Federal e em Goiás, com a tarifa da Neoenergia-DF rondando R$ 1,05/kWh e a Equatorial-GO próxima de R$ 0,98/kWh, o retorno tem ficado entre 3,5 e 5 anos para sistemas residenciais bem dimensionados. Mas esse número só faz sentido quando o cálculo considera o cenário regulatório atual: cobrança progressiva do Fio B pela Lei 14.300/2022, bandeira tarifária amarela acionada em maio e mantida em junho de 2026 (custo adicional de R$ 1,885 a cada 100 kWh) e os reajustes anuais homologados pela ANEEL.

Este tutorial mostra, passo a passo, como você mesmo pode estimar o payback do seu sistema antes mesmo de receber uma proposta comercial. O objetivo não é substituir a engenharia, mas evitar que o cliente seja enganado por planilhas otimistas que projetam retornos de 2 anos ignorando custos reais.

## Passo 1: Levante o consumo médio dos últimos 12 meses

Abra as 12 últimas contas da Neoenergia-DF ou Equatorial-GO e anote o consumo em kWh de cada mês. Some os valores e divida por 12. Esse é o seu consumo médio mensal, base de todo o dimensionamento.

Por que 12 meses? Porque o consumo varia bastante entre o período seco (junho a setembro, com mais uso de ar-condicionado e chuveiro elétrico) e o chuvoso. Em Brasília, é comum a conta de julho ser 30% maior que a de abril. Calcular pelo pico leva ao superdimensionamento; calcular pelo vale leva ao sistema subdimensionado.

**Exemplo prático:** uma residência no Lago Sul com consumo médio de 850 kWh/mês. Considerando a disponibilidade mínima trifásica de 100 kWh (que sempre será cobrada pela concessionária), o consumo a ser compensado é de 750 kWh/mês.

Se quiser aprofundar a leitura da fatura, veja nosso tutorial específico em /blog/como-ler-conta-luz-neoenergia-df.

## Passo 2: Calcule a geração necessária e a potência do sistema

A fórmula básica para estimar a potência (kWp) é:

**Potência (kWp) = Consumo mensal (kWh) ÷ (HSP × 30 × PR)**

Onde HSP é a Hora de Sol Pleno da região (5,2 h em Brasília, 5,3 h em Goiás) e PR é a Performance Ratio do sistema, tipicamente 0,80 para projetos bem instalados em telhado.

Para o exemplo dos 750 kWh/mês a compensar em Brasília:

750 ÷ (5,2 × 30 × 0,80) = **6,01 kWp**

Na prática, arredondamos para 6,15 kWp ou 6,60 kWp, dependendo da modulação dos painéis disponíveis. Com módulos de 615 W, são 10 a 11 painéis e um inversor de 5 a 6 kW.

## Passo 3: Estime o investimento usando o preço médio Greener

O Estudo Estratégico Greener de janeiro de 2026 aponta os seguintes valores médios de venda no varejo:

| Segmento | R$/kWp (turn-key) |
|---|---|
| Residencial até 10 kWp | R$ 3.400 |
| Comercial 10-75 kWp | R$ 2.800 |
| Rural | R$ 3.600 |
| Industrial acima de 500 kWp | R$ 2.200 |

Para o sistema de 6,15 kWp residencial: 6,15 × R$ 3.400 = **R$ 20.910**. Esse valor já inclui módulos, inversor, estrutura, cabeamento, proteção CC/CA, projeto, ART e homologação na concessionária.

Desconfie de propostas muito abaixo desse patamar: normalmente cortam custo em estrutura (perfis subdimensionados que falham sob vento de 100 km/h em Brasília), inversores de marcas sem rede de assistência ou ausência de string box adequada.

## Passo 4: Projete a economia mensal real (com Fio B)

Aqui mora o erro mais comum das simulações amadoras: multiplicar a geração pela tarifa cheia e pronto. A Lei 14.300/2022 estabeleceu o pagamento gradual do Fio B sobre a energia injetada na rede. Em **2026, paga-se 60%** do componente Fio B da TUSD; em **2027, sobe para 75%**; e em 2029 atinge 100%.

Na Neoenergia-DF, o Fio B representa aproximadamente R$ 0,30/kWh injetado. Logo, em 2026, o sistema paga cerca de R$ 0,18/kWh injetado de pedágio.

**Cálculo da economia mensal (Brasília, 2026):**
- Geração estimada: 750 kWh × R$ 1,05 (tarifa cheia) = R$ 787,50
- Custo Fio B 60% sobre injetado: 750 kWh × R$ 0,18 = R$ 135,00
- Bandeira amarela média (assumindo 6 meses/ano): R$ 1,885/100 kWh × 750 × 0,5 = R$ 7,07
- **Economia líquida mensal: aproximadamente R$ 645**

Observe que a bandeira tarifária na verdade favorece quem tem solar, porque você deixa de pagar o adicional sobre a energia compensada.

## Passo 5: Calcule o payback simples e o descontado

**Payback simples = Investimento ÷ Economia anual**

R$ 20.910 ÷ (R$ 645 × 12) = R$ 20.910 ÷ R$ 7.740 = **2,70 anos**

Mas esse número é otimista demais. O payback descontado considera:

1. **Aumento do Fio B** ano a ano até 2029.
2. **Reajustes tarifários** anuais homologados pela ANEEL (média histórica de 6 a 8% ao ano para distribuidoras do porte da Neoenergia e Equatorial).
3. **Degradação dos módulos** (cerca de 0,5% ao ano para tecnologias TOPCon e back contact).
4. **Custo de oportunidade** do dinheiro (taxa Selic ou CDI como referência).
5. **Custo de manutenção** (limpeza anual e eventual troca de inversor no ano 12).

Quando aplicamos esses fatores, o payback realista do exemplo sobe para **3,8 a 4,2 anos**, o que ainda é um excelente investimento frente a qualquer aplicação financeira de renda fixa.

## Passo 6: Verifique se o projeto está no enquadramento correto

Para sistemas residenciais e comerciais até 75 kW, o enquadramento é **microgeração distribuída**, com processo de homologação mais simples. Entre 75 kW e 3 MW solar fotovoltaico, é **minigeração distribuída**, conforme limite atualizado pela Lei 14.300/2022.

Atenção a uma confusão recorrente: muitos materiais antigos ainda citam o teto de 5 MW para solar. Esse limite era da REN 482/2012 e só vale, hoje, como direito adquirido para sistemas que solicitaram acesso até 07/01/2023 (chamados GD1), válido até 31/12/2045. Projetos novos solar fotovoltaicos têm teto de 3 MW; acima disso, o caminho é o Ambiente de Contratação Livre.

Para aprofundar, veja nosso post /blog/dimensionar-minigeracao-solar-3mw-df-goias.

## Passo 7: Ajustes finos por perfil de cliente

**Residencial premium (consumo acima de 1.500 kWh/mês):** considere a tarifa branca, que pode aumentar a vantagem do solar nos horários intermediários e fora de ponta. Avalie também bateria de lítio para autoconsumo no horário de ponta (18h às 21h), quando a tarifa convencional não compensa pelo solar.

**Comércio em horário comercial:** o payback costuma ser ainda menor (3 a 3,5 anos), porque o consumo coincide com a geração. Sistemas de 30 a 75 kWp em padarias, clínicas e escritórios em Brasília têm performance financeira excelente.

**Indústria e agronegócio em Goiás:** com Equatorial-GO a R$ 0,98/kWh e custo de R$ 2.200 a R$ 2.800/kWp, o payback para sistemas acima de 500 kWp fica entre 3,2 e 4 anos. Aqui é fundamental analisar a modalidade tarifária (verde ou azul) e o contrato de demanda.

**Propriedade rural:** apesar do R$/kWp mais alto (R$ 3.600 pela maior complexidade logística), a tarifa rural com desconto e a possibilidade de geração compartilhada entre matrículas viabilizam projetos com payback de 4 a 5 anos.

## Checklist final antes de fechar negócio

- A proposta apresenta o cálculo separado de Fio B 2026, 2027, 2028 e 2029?
- A geração estimada usa HSP real da localidade (não da capital genérica)?
- O orçamento inclui ART do CREA, projeto elétrico assinado e homologação na concessionária?
- A estrutura é dimensionada para vento de pelo menos 120 km/h (norma para o DF)?
- O inversor tem garantia mínima de 10 anos e assistência técnica no Centro-Oeste?
- Os módulos têm garantia de performance de 25 a 30 anos?
- A empresa apresenta seguro de responsabilidade civil?

Se qualquer item ficar em aberto, peça revisão por escrito. Energia solar é um ativo de 25 anos; vale a pena escolher quem entrega documentação completa.

## Quer uma simulação personalizada?

A EcoSunPower atende Brasília, todo o DF e cidades do Entorno num raio de até 100 km em Goiás (Luziânia, Valparaíso, Cidade Ocidental, Águas Lindas, Formosa, Planaltina-GO e demais municípios). Fazemos visita técnica, análise tarifária das últimas 12 contas e projeto elétrico assinado por engenheiro responsável.

Chame no WhatsApp para receber uma simulação de payback feita com os parâmetros reais da sua unidade consumidora, considerando Fio B, bandeira tarifária e o melhor enquadramento para o seu perfil.

---

Inspirado em análises do Canal Solar e comunicados oficiais da ANEEL sobre bandeira tarifária e reajustes tarifários de 2026. Links: https://canalsolar.com.br/aneel-bandeira-tarifaria-amarela-conta-de-luz-junho/ e https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/bandeira-tarifaria-em-junho-permanece-amarela