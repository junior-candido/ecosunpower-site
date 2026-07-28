---
title: "Como simular a economia do solar antes de contratar: tutorial completo"
description: "Tutorial passo a passo para simular a economia real do sistema solar: tarifa, HSP, Fio B, dimensionamento e payback. Aprenda a validar propostas."
pubDate: 2026-07-28
category: tutorial
heroImage: /blog/como-simular-economia-sistema-solar-passo-a-passo.jpg
heroImageAlt: "Manutenção de painel solar"
tags: ["simulação solar","payback","dimensionamento","Lei 14.300","Fio B","economia de energia"]
readingTime: 9
sourceAttribution: "Conteúdo original EcoSunPower, com base em dados de mercado Greener (jan/2026), Lei 14.300/2022 e análises setoriais publicadas em ABSOLAR e Canal Solar (julho/2026) — https://canalsolar.com.br e https://www.absolar.org.br"
draft: false
---
## Por que simular antes de assinar qualquer proposta

Muita gente chega à decisão de instalar energia solar depois de receber uma proposta comercial pronta, com um número redondo de economia mensal e um payback simpático estampado na primeira página. O problema é que boa parte dessas simulações usa premissas otimistas: tarifa cheia sem considerar bandeiras futuras, produção baseada em irradiação máxima anual, zero perdas e, o mais grave em 2026, muitas vezes ignoram o desconto do Fio B da Lei 14.300/2022.

Este tutorial mostra, passo a passo, como você mesmo pode montar uma simulação realista da economia de um sistema solar em qualquer região do Brasil, seja para residência, comércio, indústria ou propriedade rural. O objetivo não é substituir um projeto de engenharia — isso exige responsável técnico —, mas dar a você ferramentas para comparar propostas, questionar números e evitar surpresas nos primeiros anos de operação.

Ao final, você saberá calcular consumo médio, potência necessária, geração esperada, economia líquida (já com Fio B) e payback com margem de segurança.

## Passo 1: extraia o consumo real dos últimos 12 meses

O primeiro erro comum é dimensionar com base em um único mês. Consumo residencial e comercial varia com estação, férias e hábitos. O correto é somar os kWh consumidos nos últimos 12 meses da fatura e dividir por 12, obtendo a média mensal.

Onde encontrar na conta de luz:

- **Histórico de consumo:** todas as distribuidoras publicam um gráfico ou tabela de 12 meses.
- **Unidade correta:** trabalhe sempre em kWh, não em reais.
- **Contas com posto tarifário (verde/azul):** some ponta e fora ponta se for comércio ou indústria no grupo A.

Depois, subtraia o **custo de disponibilidade**, que é o consumo mínimo cobrado pela distribuidora mesmo sem gerar nenhum kWh a mais:

- Monofásico: 30 kWh/mês
- Bifásico: 50 kWh/mês
- Trifásico: 100 kWh/mês

Exemplo: um consumidor trifásico com média de 700 kWh/mês deve dimensionar para compensar cerca de 600 kWh, porque os 100 kWh mínimos serão pagos de qualquer forma.

Se você quiser aprofundar essa etapa, veja nosso tutorial detalhado em [/blog/como-ler-conta-de-luz-dimensionar-solar](/blog/como-ler-conta-de-luz-dimensionar-solar).

## Passo 2: descubra a HSP (horas de sol pleno) da sua região

A HSP representa quantas horas por dia, em média anual, o sol equivale à irradiação padrão de 1.000 W/m². É o número mágico do dimensionamento. No Brasil, a variação vai de aproximadamente **4,5 h no Sul** até cerca de **5,8 h no Nordeste e Centro-Oeste**, com regiões intermediárias em torno de 5,0 a 5,4 h.

Fontes confiáveis para consultar a HSP do seu município:

- Atlas Brasileiro de Energia Solar (INPE/LABREN) — gratuito.
- Base CRESESB (Cepel/Eletrobras) — permite buscar por cidade.
- Software PVGIS (Comissão Europeia) — dados mensais e por inclinação.

Dica prática: se a proposta que você recebeu não informa qual HSP foi usada, desconfie. Uma diferença entre 5,8 e 4,7 muda a geração em quase 25%.

## Passo 3: calcule a potência necessária do sistema

Com consumo mensal a compensar (kWh) e HSP, a fórmula básica é:

**Potência (kWp) = Consumo mensal (kWh) ÷ (HSP × 30 × Fator de desempenho)**

O fator de desempenho (Performance Ratio, PR) contempla perdas de temperatura, sujeira, cabeamento, mismatch entre módulos e eficiência do inversor. Valores realistas ficam entre **0,75 e 0,82**. Use 0,78 como padrão conservador.

Exemplo: 600 kWh/mês a compensar, HSP de 5,2 h, PR de 0,78:

600 ÷ (5,2 × 30 × 0,78) = 600 ÷ 121,7 ≈ **4,93 kWp**

Ou seja, um sistema de aproximadamente 5 kWp. Considerando módulos atuais de 600 a 630 W, isso resulta em 8 a 9 painéis.

## Passo 4: estime a geração mensal esperada

Invertendo a fórmula, você projeta a geração:

**Geração (kWh/mês) = Potência (kWp) × HSP × 30 × PR**

Para o exemplo acima: 5 × 5,2 × 30 × 0,78 = **608 kWh/mês**

Importante: essa é a média anual. Nos meses de inverno em regiões Sul e Sudeste, a produção pode cair 20 a 30% em relação à média. No verão, sobe na mesma proporção. Por isso o sistema de compensação da GD funciona anualmente: o excedente vira crédito válido por 60 meses.

## Passo 5: aplique a tarifa correta (e o Fio B)

Aqui está o ponto onde muitas propostas maquiam o payback. A economia mensal **não é** simplesmente geração × tarifa cheia.

A tarifa residencial no Brasil varia entre **R$ 0,85 e R$ 1,15/kWh**, dependendo da concessionária, da bandeira tarifária e da faixa de consumo. Ela é composta por duas parcelas principais:

- **TE (Tarifa de Energia):** custo da energia em si.
- **TUSD (Tarifa de Uso do Sistema de Distribuição):** onde mora o famoso **Fio B**.

A Lei 14.300/2022 estabeleceu cronograma de cobrança gradual do Fio B para novos sistemas conectados após janeiro de 2023:

| Ano | % do Fio B cobrado |
|-----|--------------------|
| 2026 | 60% |
| 2027 | 75% |
| 2028 | 90% |
| 2029 em diante | Definição ANEEL |

Na prática, isso significa que cada kWh injetado na rede é compensado com um pequeno desconto. Em média, em 2026, a economia efetiva por kWh gerado fica entre **85% e 92%** da tarifa cheia, dependendo da distribuidora.

Regra de bolso para simulação: multiplique a geração pela tarifa cheia e reduza 10 a 12% para chegar à economia realista de 2026. Para 2027, use redução de 13 a 15%.

Sistemas antigos (GD1, conectados até 07/01/2023) mantêm a regra anterior até 2045.

## Passo 6: calcule o investimento com base em preços de mercado

O relatório Greener de janeiro/2026 traz preços médios nacionais por kWp instalado, incluindo material e mão de obra:

- **Residencial:** R$ 3.400/kWp
- **Comercial:** R$ 2.800/kWp
- **Rural:** R$ 3.600/kWp (estruturas específicas, distâncias)
- **Industrial (grande porte):** R$ 2.200/kWp

Para o exemplo residencial de 5 kWp: 5 × R$ 3.400 = **R$ 17.000** de investimento total.

Atenção às armadilhas de preço muito baixo:

- Módulos sem certificação Inmetro atualizada.
- Inversor de marca sem suporte técnico no Brasil.
- Estrutura de alumínio com espessura inadequada para vento.
- Ausência de projeto elétrico assinado por responsável técnico.

Um sistema barato demais costuma custar caro no longo prazo. Veja mais em [/blog/como-avaliar-qualidade-proposta-solar](/blog/como-avaliar-qualidade-proposta-solar).

## Passo 7: calcule o payback com margem de segurança

Com todos os números em mãos, o payback simples é:

**Payback (anos) = Investimento ÷ Economia anual**

Continuando o exemplo:

- Investimento: R$ 17.000
- Geração: 608 kWh/mês → 7.296 kWh/ano
- Tarifa média: R$ 0,95/kWh
- Economia bruta: 7.296 × 0,95 = R$ 6.931
- Ajuste Fio B 2026 (–11%): R$ 6.169/ano

Payback simples: 17.000 ÷ 6.169 ≈ **2,75 anos**

Mas o payback simples ignora inflação de tarifa (histórico de 6 a 9% ao ano), degradação dos módulos (0,5% ao ano) e custo de manutenção. Uma análise mais séria usa o **payback descontado**, considerando taxa de desconto de 8 a 10% ao ano. Nesse cenário mais conservador, projetos residenciais no Brasil ficam com payback entre **3,5 e 6 anos**, e a vida útil do sistema é de 25 anos ou mais.

## Passo 8: valide a proposta comercial contra sua simulação

Com sua simulação pronta, compare linha a linha com a proposta que recebeu. Perguntas obrigatórias:

- Qual HSP foi utilizada e de qual fonte?
- Qual o PR (performance ratio) considerado?
- A economia mostrada já contempla o Fio B do ano corrente e dos próximos?
- O sistema respeita o custo de disponibilidade da sua ligação?
- A potência está dentro do limite da GD (75 kW micro / 3 MW mini solar)? Para projetos maiores, o caminho é o Ambiente de Contratação Livre.
- O inversor tem monitoramento remoto e garantia mínima de 10 anos?
- Há projeto elétrico assinado por engenheiro ou técnico responsável?

Se qualquer resposta for evasiva, peça esclarecimentos por escrito. Uma proposta técnica bem feita não tem medo de mostrar as premissas.

## Fechando: simulação é meio, não fim

A simulação serve para você entrar na negociação sabendo o que perguntar e ter certeza de que os números fazem sentido para a sua realidade. Ela não substitui o projeto executivo, o levantamento no local (sombreamento, estrutura do telhado, quadro elétrico) nem a homologação junto à distribuidora, que hoje tem prazos regulados pela ANEEL.

Se você quer que a EcoSunPower faça uma simulação personalizada, com dados reais da sua concessionária e da irradiação exata do seu endereço, fale com a gente pelo WhatsApp. Analisamos sua conta de luz, montamos o dimensionamento e apresentamos uma proposta com todas as premissas abertas — sem números mágicos.

Inspirado em análises setoriais publicadas em julho/2026 no Canal Solar (https://canalsolar.com.br) e em dados de mercado do relatório Greener e da ABSOLAR.