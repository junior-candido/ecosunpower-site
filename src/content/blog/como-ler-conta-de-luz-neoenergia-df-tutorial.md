---
title: "Como ler a conta de luz da Neoenergia-DF: tutorial passo a passo"
description: "Aprenda a interpretar cada item da fatura da Neoenergia-DF e Equatorial-GO para dimensionar corretamente seu sistema solar fotovoltaico em 2026."
pubDate: 2026-06-18
category: tutorial
tags: ["conta de luz","Neoenergia DF","Equatorial Goiás","dimensionamento solar","Lei 14.300"]
readingTime: 9
sourceAttribution: "Inspirado no boletim InfoTarifas 2026 da ANEEL (12/06/2026) — https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/aneel-divulga-segunda-edicao-de-2026-do-boletim-infotarifas e em análises do Canal Solar."
draft: false
---
## Por que saber ler a fatura é o primeiro passo de um bom projeto solar

Antes de pedir orçamento, antes de escolher módulo, antes mesmo de pensar em inversor, existe um documento que define tudo: a sua conta de luz. É a partir dela que se calcula o consumo médio, o porte do sistema, o payback e até a viabilidade de baterias. Um erro de leitura nessa etapa propaga-se por todo o projeto e pode resultar em um sistema 20% subdimensionado ou superdimensionado, comprometendo o retorno financeiro.

Com o boletim InfoTarifas 2026 da ANEEL projetando reajuste médio nacional de 8,6%, acima do IPCA e do IGP-M, e com a bandeira amarela mantida em junho (R$ 1,885 a cada 100 kWh), entender cada linha da fatura ficou ainda mais relevante. Este tutorial mostra, passo a passo, como interpretar uma conta da Neoenergia Distribuição Brasília e da Equatorial Goiás, identificar os números corretos e transformá-los em premissas de projeto.

## Passo 1: identifique a classe e o subgrupo tarifário

No cabeçalho da fatura, geralmente próximo ao nome do titular, aparecem dois códigos essenciais: a **classe de consumo** (residencial, comercial, industrial, rural, poder público) e o **subgrupo tarifário** (B1, B2, B3, A4, etc.).

- **B1 residencial:** maioria dos clientes da Neoenergia-DF. Tarifa convencional ou branca.
- **B2 rural:** propriedades em Planaltina, Brazlândia, Padre Bernardo, Formosa. Tem desconto na TUSD.
- **B3 demais classes:** pequenos comércios e indústrias em baixa tensão.
- **A4:** indústrias e grandes comércios atendidos em média tensão (2,3 a 25 kV). Tarifa horosazonal verde ou azul, com demanda contratada.

A classe define o regime de compensação na Lei 14.300/2022 e o custo do Fio B em 2026 (60% para sistemas novos). Para clientes A4 em Brasília, o dimensionamento é diferente: precisamos analisar consumo ponta x fora ponta e demanda registrada, não apenas kWh.

## Passo 2: extraia o histórico de consumo dos últimos 12 meses

Na segunda página da fatura da Neoenergia-DF (ou no app), há um gráfico de barras com os últimos 12 a 13 meses de consumo em kWh. Esse é o dado mais importante de todo o projeto.

**O que fazer:**

1. Anote os 12 valores mensais.
2. Some tudo e divida por 12 para obter o **consumo médio mensal**.
3. Identifique o **mês de pico** (geralmente outubro a fevereiro no DF, por causa do ar-condicionado) e o **mês de vale** (junho a agosto).
4. Calcule a razão pico/vale. Se for maior que 1,8, considere baterias ou sistema com leve sobredimensionamento.

Não use um único mês como referência. Já vimos clientes pedirem orçamento na conta de janeiro (mês quente, 850 kWh) quando a média real era 520 kWh. O sistema sairia 60% maior que o necessário, gerando crédito que se perde após 60 meses.

## Passo 3: separe consumo, TUSD, TE e tributos

A fatura traz uma tabela com a composição do valor cobrado. Os itens-chave são:

- **Consumo em kWh** — energia efetivamente medida.
- **TUSD (Tarifa de Uso do Sistema de Distribuição)** — paga pelo uso da rede. É aqui que mora o Fio B.
- **TE (Tarifa de Energia)** — paga pela energia em si.
- **Bandeira tarifária** — amarela, vermelha 1 ou 2. Adicional sobre o kWh consumido.
- **ICMS, PIS, COFINS, CIP** — tributos e contribuição de iluminação pública.

Na Neoenergia-DF, em 2026, a tarifa cheia residencial B1 com tributos fica em torno de **R$ 1,05/kWh**. Na Equatorial Goiás, gira em torno de **R$ 0,98/kWh**. Esses valores são a base do cálculo de economia.

### Atenção ao Fio B na compensação

Desde a Lei 14.300/2022, a energia injetada compensa apenas parcialmente a TUSD. Em 2026, o cliente paga **60% do Fio B** sobre cada kWh injetado, e em 2027 passa a 75%. Na prática, isso significa que o kWh compensado vale algo entre R$ 0,88 e R$ 0,95 em Brasília, não os R$ 1,05 cheios. Esse detalhe muda o payback em meses.

## Passo 4: confira a demanda contratada (clientes A4)

Se a fatura é do grupo A (média tensão), aparece uma seção chamada **Demanda Contratada (kW)** e **Demanda Medida (kW)**. Isso vale para indústrias em Santa Maria, comércios grandes em Águas Claras, hotéis em Goiânia, etc.

- Demanda medida acima da contratada gera multa de ultrapassagem.
- Demanda medida muito abaixo gera desperdício (você paga pela contratada).
- A geração solar **não reduz demanda** automaticamente. Para isso, precisa de bateria ou ajuste do perfil de consumo.

Em projetos comerciais e industriais, sempre pedimos as últimas 12 faturas com a curva horária quando disponível. É o que diferencia um projeto técnico de uma proposta improvisada.

## Passo 5: calcule o sistema ideal em kWp

Com o consumo médio mensal em mãos, aplique a fórmula simplificada:

**Potência (kWp) = Consumo médio mensal (kWh) ÷ (HSP × 30 × PR)**

Onde:
- **HSP** (horas de sol pleno) = 5,2 h em Brasília, 5,3 h em Goiás.
- **PR** (performance ratio) = 0,80 para sistemas bem projetados.

**Exemplo prático — residência em Sudoeste, Brasília:**

Consumo médio: 620 kWh/mês. Disponibilidade mínima (50 kWh trifásico) descontada: 570 kWh a compensar.

Potência = 570 ÷ (5,2 × 30 × 0,80) = **4,57 kWp**

Com módulos de 605 W, seriam 8 módulos (4,84 kWp). Investimento estimado pelo Greener jan/2026 (R$ 3.400/kWp residencial): cerca de **R$ 16.450**.

**Exemplo comercial — padaria em Valparaíso (GO):**

Consumo: 2.800 kWh/mês. Tarifa Equatorial ~R$ 0,98/kWh.

Potência = 2.800 ÷ (5,3 × 30 × 0,80) = **22,0 kWp**

Investimento: 22 × R$ 2.800 = **R$ 61.600**. Economia anual estimada com Fio B 60%: cerca de R$ 28.000. Payback aproximado de **2,2 anos**.

## Passo 6: confira disponibilidade mínima e tipo de ligação

A Lei 14.300 manteve a regra da disponibilidade mínima, que é o valor que você paga mesmo que a geração zere a fatura:

- **Monofásico:** 30 kWh
- **Bifásico:** 50 kWh
- **Trifásico:** 100 kWh

Em Brasília, a maioria das residências de alto padrão é trifásica, então 100 kWh por mês continuam sendo cobrados (cerca de R$ 105). Dimensionar o sistema para zerar 100% da conta não faz sentido econômico, pois esses 100 kWh você paga de qualquer forma.

Para contornar, há duas estratégias: sobredimensionar e usar o crédito em outra unidade consumidora via autoconsumo remoto, ou instalar bateria para evitar injeção e consumo simultâneos. Em nosso post sobre [baterias LFP residenciais](/blog/baterias-lfp-residenciais-df-goias-guia-tecnico-2026) detalhamos quando vale a pena.

## Passo 7: confira a bandeira tarifária e os reajustes anuais

A bandeira aparece como uma linha separada na fatura. Em junho de 2026, a ANEEL manteve a bandeira amarela (R$ 1,885/100 kWh adicionais). Esse custo não é compensado integralmente pelos créditos solares — incide sobre o consumo bruto.

O reajuste anual da Neoenergia-DF costuma ocorrer em outubro. O da Equatorial Goiás, em outubro também. Ao projetar economia para 25 anos, considere reajuste médio anual de **7% a 9%** sobre a tarifa. Isso melhora o retorno do investimento solar, porque a economia cresce com o tempo enquanto a parcela do financiamento, se houver, é fixa.

## Checklist final antes de pedir orçamento

Leve essas informações para o seu integrador:

1. Classe e subgrupo tarifário (B1, B3, A4, etc.).
2. Tipo de ligação (mono, bi ou trifásico).
3. Consumo dos últimos 12 meses (kWh mês a mês).
4. Consumo médio mensal calculado.
5. Mês de pico e mês de vale.
6. Tarifa atual em R$/kWh (valor total da fatura dividido pelo kWh consumido).
7. Demanda contratada e medida, se grupo A.
8. Endereço completo para verificação de HSP e orientação do telhado.

Com esses oito dados, qualquer projeto sai do achismo e entra no terreno da engenharia.

## Atendimento técnico EcoSunPower

Se quiser que a leitura da fatura e o dimensionamento sejam feitos por engenheiro responsável, com ART registrada no CREA, fale com a EcoSunPower pelo WhatsApp. Atendemos Brasília, todo o Entorno do DF e cidades de Goiás até cerca de 100 km — incluindo Águas Lindas, Valparaíso, Luziânia, Anápolis e Goiânia. Enviamos um estudo personalizado com base nas suas 12 últimas faturas, sem custo e sem compromisso.

Fonte de referência: boletim InfoTarifas 2026 da ANEEL, publicado em 12/06/2026.