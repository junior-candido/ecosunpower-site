---
title: "Como ler a conta de luz da Neoenergia-DF: tutorial técnico passo a passo"
description: "Tutorial completo para entender cada campo da conta de luz da Neoenergia-DF e Equatorial-GO antes de dimensionar seu sistema fotovoltaico."
pubDate: 2026-05-15
category: tutorial
tags: ["conta de luz","Neoenergia-DF","Equatorial Goiás","bandeira tarifária","dimensionamento solar","Lei 14.300"]
readingTime: 9
sourceAttribution: "Inspirado em comunicados oficiais da ANEEL sobre bandeira tarifária de maio/2026 e reajustes tarifários — https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/bandeira-tarifaria-para-o-mes-de-maio-sera-amarela"
draft: false
---
## Por que entender a conta de luz é o primeiro passo de qualquer projeto solar

Antes de cotar painéis, inversores ou pensar em dimensionamento, qualquer cliente que pretende investir em energia solar precisa saber ler corretamente a fatura mensal de energia. É a partir dela que se extraem os dados que vão alimentar todo o cálculo de retorno do investimento: consumo médio, modalidade tarifária, demanda contratada, ICMS, PIS/COFINS, bandeira vigente e, no caso de quem já tem sistema, os créditos de geração distribuída acumulados.

Na EcoSunPower, recebemos diariamente faturas da Neoenergia Distribuição Brasília e da Equatorial Goiás. A experiência mostra que mais de 70% dos clientes nunca olharam para os campos técnicos da conta — apenas para o valor total a pagar. Este tutorial foi escrito para mudar isso. Ao final, você saberá identificar cada bloco da fatura, calcular sua tarifa real em R$/kWh e estimar com precisão o tamanho do sistema fotovoltaico que faz sentido para o seu perfil de consumo no Distrito Federal ou no Entorno goiano.

## Passo 1: identifique a classe e o subgrupo tarifário

No cabeçalho da fatura, logo abaixo do nome do titular e do número da unidade consumidora, aparece a **classe** (Residencial, Comercial, Industrial, Rural ou Poder Público) e o **subgrupo tarifário** (B1, B2, B3, A4, A3 etc.). Esse é o dado mais importante para o dimensionamento.

- **B1 — Residencial:** maioria das casas e apartamentos. Tarifa única em R$/kWh.
- **B2 — Rural:** propriedades rurais em Goiás, com desconto na TUSD.
- **B3 — Demais classes baixa tensão:** comércios pequenos, escritórios.
- **A4 — Alta tensão (2,3 a 25 kV):** indústrias e comércios médios/grandes com transformador próprio. Tarifa binômia (demanda + consumo).

Clientes do grupo A pagam separadamente pela **demanda contratada** (em kW) e pelo **consumo** (em kWh). Isso muda completamente o cálculo do sistema solar, porque o fotovoltaico tradicional não reduz demanda — apenas consumo. Em projetos comerciais e industriais na DF e em Anápolis, Luziânia ou Águas Lindas, esse detalhe define se vale a pena combinar fotovoltaico com armazenamento ou ajuste de demanda contratada.

## Passo 2: localize o histórico de consumo dos últimos 12 meses

Tanto a Neoenergia-DF quanto a Equatorial-GO trazem em uma das laterais da fatura um gráfico de barras com os últimos 12 meses de consumo em kWh. Esse é o dado de ouro para o projetista.

O que fazer com ele:

1. Some os 12 valores para obter o consumo anual total.
2. Divida por 12 para encontrar a média mensal.
3. Identifique meses de pico (geralmente novembro a fevereiro, por causa do ar-condicionado) e meses de vale (junho a agosto).

Um exemplo real de Águas Claras-DF: cliente residencial com consumo médio de 850 kWh/mês e pico de 1.180 kWh em janeiro. Com HSP de 5,2 h em Brasília e perdas típicas de 18%, o sistema ideal fica em torno de 6,6 kWp — algo como 12 módulos de 565 W. Sem o histórico de 12 meses, é comum subdimensionar pelo consumo de um único mês de vale e deixar o cliente com déficit de geração no verão.

## Passo 3: descubra sua tarifa real em R$/kWh

Este é o cálculo que praticamente ninguém faz, mas que define o retorno do investimento. A tarifa anunciada pela distribuidora (cerca de R$ 0,76/kWh na Neoenergia-DF para B1 em 2026) **não é o que você efetivamente paga**. Para chegar ao valor real:

**Tarifa real = Valor total da fatura ÷ kWh consumidos no mês**

Quando você inclui ICMS (12% no DF, 17% em Goiás), PIS/COFINS variáveis (entre 3% e 9%), bandeira tarifária, contribuição de iluminação pública (CIP/COSIP) e eventuais multas, a tarifa efetiva sobe para uma faixa entre **R$ 1,02 e R$ 1,08/kWh na Neoenergia-DF** e cerca de **R$ 0,95 a R$ 1,00/kWh na Equatorial-GO**. Esses são os números que devem entrar na planilha de payback, e não a tarifa nominal.

### Por que essa diferença importa

Se um vendedor cota seu sistema usando tarifa de R$ 0,76/kWh, ele estará subestimando a economia em quase 30%. O payback aparente fica longo e o cliente desiste do projeto. Com a tarifa real correta, o retorno típico de uma residência B1 em Brasília fica entre **3,5 e 4,5 anos**, conforme padrão de consumo e orientação do telhado.

## Passo 4: entenda o impacto da bandeira tarifária

A ANEEL confirmou que **maio de 2026 opera sob bandeira amarela**, com adicional de R$ 1,885 a cada 100 kWh consumidos. De janeiro a abril deste ano, a bandeira foi verde — reflexo das boas condições hidrológicas. Com a transição para o período seco, o acionamento de termelétricas encarece a geração e ativa a bandeira.

Para quem já tem sistema fotovoltaico, a bandeira amarela aumenta a economia mensal, porque cada kWh injetado evita também o custo adicional da bandeira sobre aquele consumo. Para quem ainda está avaliando, a bandeira amarela é mais um argumento a favor: períodos longos sob bandeira vermelha 2, como em 2021, podem adicionar R$ 9,50 a cada 100 kWh — uma sangria invisível na fatura.

No bloco de itens faturados da conta, procure a linha **"Adicional Bandeira Amarela"** ou **"Bandeira Tarifária"**. Esse valor entra no cálculo da tarifa real do passo 3.

## Passo 5: confira a leitura, a data e o ciclo de faturamento

No quadro de leituras, a fatura mostra a leitura anterior, a leitura atual e a diferença em kWh. Confira se o ciclo é de aproximadamente 30 dias. Ciclos muito longos (35+ dias) inflam o consumo e podem empurrar o cliente para faixas tributárias maiores.

Para unidades com sistema fotovoltaico já instalado, esse quadro vai trazer **dois conjuntos de leituras**: energia consumida da rede e energia injetada na rede. A diferença entre elas, mês a mês, gera os créditos de geração distribuída. Veja nosso outro post sobre [créditos vencidos de GD e a Consulta Pública 011/2026](/blog/creditos-vencidos-gd-consulta-publica-011-2026) para entender como esses créditos se comportam ao longo de 60 meses.

## Passo 6: identifique TUSD, TE e o Fio B

Na fatura detalhada (quadro de composição da tarifa), aparecem duas siglas fundamentais:

- **TUSD — Tarifa de Uso do Sistema de Distribuição:** remunera o uso da rede.
- **TE — Tarifa de Energia:** paga a energia consumida.

O **Fio B** é a parcela da TUSD que, pela **Lei 14.300/2022**, passou a ser cobrada gradualmente sobre a energia compensada por sistemas de microgeração e minigeração distribuída instalados após 07/01/2023. Em **2026, o Fio B incide em 60%**; em 2027 sobe para 75%; em 2028 para 90%; e em 2029 atinge 100%.

O que isso significa na prática: a economia de quem instalou em 2024 ou 2025 é levemente menor do que a de quem instalou antes de janeiro de 2023 (sistemas GD1, com direito adquirido até 31/12/2045). Ainda assim, com tarifa real próxima de R$ 1,05/kWh em Brasília, o payback continua na faixa de 4 anos — extremamente competitivo.

## Passo 7: dimensione seu sistema com os dados extraídos

Com os dados dos passos anteriores em mãos, o dimensionamento fica direto:

**Potência do sistema (kWp) = Consumo médio mensal (kWh) ÷ (HSP × 30 × eficiência)**

Usando HSP de 5,2 h para Brasília e eficiência líquida de 0,82 (após perdas por temperatura, sujidade, cabeamento e inversor):

| Consumo médio | Potência indicada | Investimento estimado |
|---|---|---|
| 350 kWh/mês | 2,7 kWp | R$ 9.200 |
| 600 kWh/mês | 4,7 kWp | R$ 16.000 |
| 900 kWh/mês | 7,0 kWp | R$ 23.800 |
| 1.500 kWh/mês | 11,7 kWp | R$ 39.800 |
| 3.000 kWh/mês (comercial) | 23,5 kWp | R$ 65.800 |

Valores baseados em R$ 3.400/kWp residencial e R$ 2.800/kWp comercial (Greener, janeiro/2026), instalados e homologados.

Projetos acima de 75 kW entram em **minigeração**. Para fonte solar fotovoltaica, o teto pela Lei 14.300/2022 é de **3 MW (3.000 kWp)** — atenção a materiais antigos online que ainda citam 5 MW como regra geral; esse limite só vale para sistemas GD1 com direito adquirido. Para indústrias com demanda acima desse patamar, a alternativa é migrar para o Ambiente de Contratação Livre (ACL).

## Próximos passos

Ler corretamente a conta de luz é o pré-requisito para qualquer decisão técnica e financeira em energia solar. Se você quer um projeto sob medida para sua residência, comércio ou indústria em Brasília, no Entorno ou em municípios goianos a até 100 km da capital, a equipe da **EcoSunPower Energia Solar** faz a análise gratuita da sua fatura, projeta o sistema com software profissional e entrega proposta com payback real — sem promessas infladas.

Envie sua conta de luz pelo nosso WhatsApp e receba um diagnóstico técnico em até 24 horas úteis.

---

*Inspirado em comunicados oficiais da ANEEL sobre bandeira tarifária amarela de maio/2026 e reajustes tarifários do primeiro semestre — [agência reguladora ANEEL](https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/bandeira-tarifaria-para-o-mes-de-maio-sera-amarela).*