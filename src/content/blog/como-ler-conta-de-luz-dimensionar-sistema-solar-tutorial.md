---
title: "Como ler a conta de luz para dimensionar seu sistema solar: tutorial passo a passo"
description: "Tutorial técnico completo para interpretar cada campo da conta de luz e usar os dados corretos no dimensionamento do seu sistema fotovoltaico em 2026."
pubDate: 2026-07-10
category: tutorial
heroImage: /blog/como-ler-conta-de-luz-dimensionar-sistema-solar-tutorial.jpg
heroImageAlt: "Engenheiro planejando energia solar"
tags: ["conta de luz","dimensionamento solar","tutorial energia solar","TUSD Fio B","Lei 14.300"]
readingTime: 9
sourceAttribution: "Inspirado em conteúdos técnicos do Canal Solar e nos dados da ANEEL sobre bandeiras tarifárias (julho/2026): https://www.gov.br/aneel/pt-br/assuntos/noticias/2026-defeso-eleitoral/bandeira-tarifaria-em-julho-permanece-amarela"
draft: false
---
## Por que a conta de luz é o documento mais importante do projeto solar

Antes de qualquer visita técnica, catálogo de módulo ou simulação de payback, existe um documento que define praticamente todas as decisões do projeto fotovoltaico: a fatura de energia elétrica. É nela que estão o histórico de consumo real, o grupo tarifário, a modalidade, a demanda contratada (quando houver), a classificação da unidade e os tributos aplicados. Um sistema mal dimensionado quase sempre nasce de uma leitura superficial da conta.

Este tutorial mostra, passo a passo, como interpretar cada bloco da fatura — de qualquer concessionária do Brasil — e como transformar esses dados em premissas de projeto. Vale para residências, comércios, indústrias e propriedades rurais. Ao final, você terá um checklist prático para levar à consultoria técnica.

## Passo 1: identifique o grupo tarifário e a modalidade

A primeira informação a procurar é o **grupo tarifário**. Ele aparece geralmente no cabeçalho ou na tabela de dados da unidade consumidora. No Brasil, existem dois grupos principais:

- **Grupo B (baixa tensão):** residências, pequenos comércios e a maioria das propriedades rurais. Tarifa em R$/kWh, sem cobrança separada de demanda. Subdivide-se em B1 (residencial), B2 (rural), B3 (demais classes) e B4 (iluminação pública).
- **Grupo A (alta tensão, 2,3 kV ou mais):** indústrias e comércios de maior porte. Tarifas separadas para demanda (kW) e consumo (kWh), com subgrupos A2, A3, A3a, A4 e AS.

Dentro do Grupo B, ainda é possível estar na **tarifa convencional** ou na **tarifa branca**, com preços diferentes por horário (ponta, intermediário e fora de ponta). No Grupo A, as modalidades são **verde** (uma única tarifa de demanda) ou **azul** (demanda diferenciada entre ponta e fora de ponta).

Essa classificação muda completamente o cálculo. Um cliente na tarifa branca tem economia solar diferente de um cliente na convencional, porque o sistema gera majoritariamente no período fora de ponta. Já no Grupo A, o solar reduz consumo mas **não reduz demanda contratada** — detalhe que exige análise separada.

## Passo 2: extraia o histórico de consumo de 12 meses

Quase toda fatura traz um gráfico ou tabela com o consumo dos últimos 12 meses, em kWh. Esse é o dado mais valioso do projeto. Anote todos os meses e some.

- **Consumo médio mensal** = soma dos 12 meses ÷ 12
- **Consumo anual** = soma dos 12 meses

Por que 12 meses? Porque o Brasil tem sazonalidade forte de irradiação (HSP entre 4,5 e 5,8 horas conforme a região) e também de consumo. Uma casa com ar-condicionado tem picos no verão; uma propriedade rural com irrigação pode ter picos concentrados em poucos meses; um comércio pode variar conforme sazonalidade de vendas.

**Erro comum:** dimensionar pelo consumo de um único mês (normalmente o mais alto, para não faltar energia). Isso gera sobredimensionamento, injeção excessiva de crédito e payback pior, especialmente com o Fio B em 60% em 2026 e 75% em 2027 pela Lei 14.300/2022.

**Regra prática:** o sistema deve mirar entre 95% e 100% do consumo médio anual, descontado o **custo de disponibilidade** (veja adiante).

## Passo 3: entenda o custo de disponibilidade

Mesmo quem gera 100% da energia que consome continua pagando um valor mínimo mensal — o custo de disponibilidade — porque a rede da concessionária está à disposição da unidade. Os valores são fixados pela ANEEL:

- **Monofásico:** 30 kWh/mês
- **Bifásico:** 50 kWh/mês
- **Trifásico:** 100 kWh/mês

Esse é o piso que a conta nunca vai abaixar. Dimensionar o sistema para cobrir 100% inclusive desses kWh é jogar dinheiro fora, porque eles serão cobrados independentemente. O correto é **subtrair o custo de disponibilidade × 12** do consumo anual antes de calcular a potência necessária.

## Passo 4: leia a tarifa efetiva (e não só a tarifa da bandeira)

Aqui mora o erro que mais distorce simulações. A tarifa que realmente conta para o cálculo de economia não é a "tarifa base" que aparece isolada, mas a **tarifa efetiva** — o valor que você paga por kWh depois de somados todos os componentes:

- TUSD (Tarifa de Uso do Sistema de Distribuição)
- TE (Tarifa de Energia)
- Bandeira tarifária vigente (em julho/2026, amarela, com adicional de R$ 1,885 a cada 100 kWh)
- ICMS, PIS e COFINS
- Contribuição de iluminação pública (CIP), quando aplicável

Cálculo simples: pegue o **valor total da fatura**, subtraia a CIP e divida pelo consumo em kWh. O resultado é a sua tarifa efetiva real, geralmente entre R$ 0,85 e R$ 1,15/kWh no Brasil, com variação forte por concessionária.

É essa tarifa que deve ser usada nas contas de payback. Usar apenas a TE (a parte de "energia") subestima a economia em 40% ou mais.

## Passo 5: identifique demanda contratada (Grupo A)

Se a unidade é do Grupo A, procure na fatura os campos:

- **Demanda contratada (kW)**
- **Demanda medida (kW)**
- **Demanda de ultrapassagem**, se houver

O sistema fotovoltaico **não elimina a demanda contratada** — ele reduz o consumo em kWh, mas a demanda em kW continua sendo faturada. Para clientes A4 industriais (a R$ 2.200/kWp de referência Greener), essa distinção é fundamental: o payback é calculado sobre a parcela de consumo, não sobre a fatura inteira.

Em alguns casos, faz sentido revisar a demanda contratada após a instalação solar, principalmente se a operação da planta reduziu picos. Isso é assunto de estudo tarifário específico.

## Passo 6: verifique se há geração distribuída registrada

Se a unidade já tem sistema solar (ou faz parte de autoconsumo remoto/geração compartilhada), a fatura mostrará campos como:

- **Energia injetada (kWh)** — o que o sistema exportou para a rede
- **Energia compensada (kWh)** — quanto do injetado foi abatido
- **Saldo de créditos (kWh)** — o "banco" acumulado, válido por 60 meses
- **TUSD Fio B faturada** — o percentual cobrado sobre a energia injetada

Saber ler esses campos é essencial para diagnosticar se um sistema existente está performando como projetado. Um sistema bem dimensionado tende a operar com saldo pequeno e constante — nunca com créditos gigantes acumulados (sinal de sobredimensionamento) nem com contas altas (sinal de subdimensionamento ou problema técnico).

Se você está avaliando um sistema já instalado, veja também nosso post sobre [como calcular o impacto do Fio B em 2026](/blog/bandeira-amarela-2026-impacto-payback-solar).

## Passo 7: calcule a potência necessária

Com os dados anteriores em mãos, o cálculo básico é:

**Potência (kWp) = (Consumo anual − Custo de disponibilidade anual) ÷ (HSP média × 365 × PR)**

Onde:
- **HSP** = horas de sol pleno da região (consulte o Atlas Solarimétrico ou dados do CRESESB)
- **PR** = Performance Ratio, tipicamente entre 0,75 e 0,82 para sistemas bem projetados no Brasil

Exemplo nacional: uma residência com consumo anual líquido de 4.800 kWh, em uma região com HSP de 5,0 h e PR de 0,80:

Potência = 4.800 ÷ (5,0 × 365 × 0,80) = **3,29 kWp**

A R$ 3.400/kWp (referência Greener residencial jan/2026), o investimento seria da ordem de R$ 11.200. Com tarifa efetiva média entre R$ 0,90 e R$ 1,00/kWh, o payback fica na faixa de 4 a 5 anos na maioria das concessionárias.

## Passo 8: checklist final antes da consultoria

Antes de pedir orçamento, tenha em mãos:

1. Últimos **12 meses de faturas** (ou histórico consolidado)
2. Grupo tarifário e modalidade confirmados
3. Tipo de ligação (monofásica, bifásica ou trifásica)
4. Endereço completo com CEP (para simulação de irradiação real)
5. Foto do padrão de entrada e do disjuntor geral
6. Área disponível para instalação (telhado ou solo), com orientação aproximada
7. Previsão de aumento de consumo (carro elétrico, ampliação, novos equipamentos)

Esse último item é frequentemente ignorado e é o que mais causa retrabalho. Se você planeja instalar um carregador veicular ou expandir a operação em 12 a 24 meses, o dimensionamento precisa incorporar esse crescimento — respeitando os tetos da Lei 14.300/2022 (75 kW para microgeração, 3 MW para minigeração solar fotovoltaica).

## Fale com a EcoSunPower

A EcoSunPower analisa sua conta de luz e monta o projeto sob medida, considerando concessionária, sazonalidade e planos de expansão. Envie sua fatura pelo WhatsApp e receba uma simulação técnica sem custo, com projeção de geração mês a mês, retorno financeiro real e ART do responsável técnico. Atendemos clientes em todo o Brasil, com foco em projetos residenciais, comerciais, rurais e industriais.

---

*Inspirado em conteúdos técnicos do Canal Solar e nos dados da ANEEL sobre bandeiras tarifárias vigentes em julho/2026: [ANEEL — Bandeira tarifária julho/2026](https://www.gov.br/aneel/pt-br/assuntos/noticias/2026-defeso-eleitoral/bandeira-tarifaria-em-julho-permanece-amarela).*