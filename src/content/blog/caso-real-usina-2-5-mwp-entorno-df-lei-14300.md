---
title: "Caso real: usina de 2,5 MWp no Entorno do DF e os limites da Lei 14.300"
description: "Análise técnica de um projeto de minigeração solar próximo a Brasília: dimensionamento, custos Greener 2026, payback e os tetos da Lei 14.300/2022."
pubDate: 2026-06-22
category: casos
tags: ["minigeração distribuída","Lei 14.300","caso real","Brasília","Goiás","usina solar"]
readingTime: 9
sourceAttribution: "Inspirado em conteúdo do Canal Solar sobre economia anual de quase R$ 1 milhão com solar em Tribunal de Justiça (19/06/2026) — https://canalsolar.com.br/solar-economia-anual-quase-1-milhao-tribunal/ — e em deliberações da ANEEL sobre constrained-off e armazenamento (junho/2026)."
draft: false
---
## O contexto do caso

Um grupo empresarial do setor de logística, com galpões em Brasília-DF e centros de distribuição em Luziânia e Valparaíso de Goiás, procurou nossa engenharia em 2025 com um pedido aparentemente simples: zerar a fatura de energia de todas as unidades, com uma única usina remota. O consumo agregado das três contas chegava a 312 MWh/mês — algo equivalente a 3.700 residências de classe média no DF.

O que parecia ser um projeto convencional de geração compartilhada se transformou em um estudo de caso completo sobre os **novos tetos da Lei 14.300/2022**, sobre o impacto do Fio B em 60% durante 2026 e sobre as recentes regras de **constrained-off** aprovadas pela ANEEL em 02/06/2026. Este post descreve o raciocínio técnico aplicado, com números reais e regionalizados, para que outros consumidores empresariais do DF e do Entorno entendam as armadilhas e oportunidades de uma usina dessa escala.

## Por que não foi possível projetar 5 MW

A primeira pergunta do cliente foi direta: "podemos fazer uma única usina de 4 ou 5 MW e abater tudo?" A resposta técnica é não — e essa é uma confusão comum, porque muito material disponível na internet ainda repete os limites da antiga **REN 482/2012**.

Desde a entrada em vigor da Lei 14.300/2022, os tetos para Geração Distribuída são:

- **Microgeração:** até 75 kW (qualquer fonte)
- **Minigeração solar fotovoltaica:** até **3 MW (3.000 kWp)** — por ser fonte não-despachável
- **Minigeração despachável** (biomassa, cogeração qualificada): até 5 MW
- **Sistemas GD1** (que protocolaram acesso até 07/01/2023): mantêm o direito adquirido ao limite antigo de 5 MW, válido até 31/12/2045

O projeto do cliente é novo (pós-2023). Portanto, **uma única usina solar de GD não pode ultrapassar 3 MW de potência instalada**. Acima desse teto, o empreendimento sai do regime de compensação (SCEE) e migra para o **Ambiente de Contratação Livre (ACL)** — outro modelo de negócio, com PPA, contratação na CCEE e exigências bem diferentes.

A solução adotada foi dimensionar **uma usina principal de 2,5 MWp** em terreno arrendado próximo a Luziânia, dentro da área de concessão da Equatorial-GO, com folga regulatória para futuras expansões dentro do mesmo CNPJ até o teto de 3 MW.

## Dimensionamento técnico da usina de 2,5 MWp

Com HSP de 5,3 h em Goiás e perdas globais de 17% (sujeira, cabeamento, temperatura, inversor, mismatch), o cálculo de geração esperada ficou assim:

| Parâmetro | Valor |
|---|---|
| Potência CC instalada | 2.500 kWp |
| Potência CA dos inversores | 2.000 kW (oversizing 1,25) |
| HSP médio anual (Luziânia) | 5,3 h |
| Performance Ratio estimado | 0,83 |
| Geração mensal média | 327 MWh |
| Geração anual estimada | 3.924 MWh |

A geração mensal de 327 MWh cobre o consumo agregado de 312 MWh/mês com folga de aproximadamente 5% — margem importante porque o Fio B incidente sobre a energia injetada exige sobredimensionar levemente para manter a economia líquida no patamar contratado.

O arranjo elétrico usou módulos de 615 Wp bifaciais TOPCon, com 4.066 unidades distribuídas em 28 strings por inversor central, totalizando **8 inversores de 250 kW** em topologia descentralizada. Essa escolha — em vez de um único central de 2 MW — foi feita pensando em redundância, na facilidade de O&M e na possibilidade de cortes parciais em eventual situação de constrained-off.

## O fator Fio B em 2026: 60% e subindo

Um dos pontos mais subestimados em projetos de minigeração no DF e Goiás é o impacto progressivo do **Fio B** sobre a energia injetada na rede. Em 2026, o consumidor paga 60% da TUSD-Fio B sobre cada kWh injetado e compensado posteriormente. Em 2027 será 75%, e em 2028, 90%.

No caso analisado, traduzimos isso para fluxo de caixa:

- Tarifa cheia Equatorial-GO (grupo A4, ponta + fora ponta médio ponderado): ~R$ 0,71/kWh
- TUSD-Fio B aplicável: ~R$ 0,12/kWh
- Em 2026, o cliente paga 60% desse Fio B sobre energia injetada → R$ 0,072/kWh
- Custo de injeção mensal: 327.000 kWh × R$ 0,072 = **R$ 23.544/mês**
- Em 2027 esse mesmo custo sobe para R$ 29.430/mês

Isso significa que **adiar o projeto custa caro**: cada ano de espera empurra o cliente para uma faixa pior do cronograma da Lei 14.300. Veja nosso outro post sobre [como simular o payback solar no DF e Goiás](/blog/como-simular-payback-solar-df-goias) para entender a lógica de antecipação.

## Custo de capital com a referência Greener jan/2026

Usando os preços médios do Estudo Estratégico Greener de janeiro/2026 para a faixa industrial acima de 1 MWp (R$ 2.200/kWp), o CAPEX da usina ficou em:

- 2.500 kWp × R$ 2.200/kWp = **R$ 5.500.000** (kit, projeto, instalação)
- Adicionais: terreno arrendado, transformador de 2.500 kVA, ramal de média tensão de 1,8 km, SCADA, cercamento e CFTV: R$ 1.350.000
- **CAPEX total: R$ 6.850.000**

A economia bruta anual estimada (já descontados Fio B 2026, O&M de R$ 38/kWp/ano e seguro):

- Energia compensada: 3.924 MWh × R$ 0,71 = R$ 2.786.000
- Custo Fio B 2026 (média ponderada considerando rampa): R$ 295.000
- O&M + seguro: R$ 135.000
- **Economia líquida ano 1: R$ 2.356.000**

**Payback simples: 2,9 anos.** Mesmo com o agravamento do Fio B nos anos seguintes, o payback descontado a TMA de 12% a.a. fica em torno de **4,1 anos**, dentro da faixa de 3,5 a 5 anos típica de projetos bem dimensionados na nossa região.

## Constrained-off: o novo risco que entrou no radar

Em 02/06/2026, a ANEEL aprovou regras detalhadas de **compensação financeira por redução de produção (constrained-off)** para usinas fotovoltaicas. Isso afeta principalmente usinas centralizadas conectadas em alta tensão e no ACL — mas o sinal é claro: **a rede do Sudeste/Centro-Oeste está saturada em horários de alta irradiância**, e o ONS já criou "segunda linha de defesa" para preservar a estabilidade.

Para o caso prático em Luziânia, a conexão em 13,8 kV na rede da Equatorial-GO não está exposta diretamente ao constrained-off do ONS, mas pode sofrer **limitações de injeção locais** definidas pela distribuidora durante o parecer de acesso. No projeto do cliente, a Equatorial sinalizou possibilidade de cap de injeção em 1,8 MW em determinado alimentador rural — o que nos levou a projetar **gerenciamento ativo de potência via inversor** (curtailment automático), preservando 90% da energia anual mesmo com o teto.

Veja nosso post sobre [constrained-off solar e ROI no DF e Goiás](/blog/constrained-off-solar-roi-df-goias) para o detalhe regulatório.

## Geração compartilhada entre as três unidades

A usina foi registrada como **geração compartilhada via consórcio entre as três filiais do mesmo grupo econômico** (todas com o mesmo CNPJ raiz). Os créditos foram distribuídos por rateio fixo:

- Unidade Brasília (Neoenergia-DF, tarifa A4 ~R$ 0,68/kWh): 42% dos créditos
- Unidade Luziânia (Equatorial-GO): 33%
- Unidade Valparaíso (Equatorial-GO): 25%

Um cuidado técnico essencial: créditos de Geração Distribuída **só compensam dentro da mesma área de concessão**. Por isso, a unidade do DF precisaria de uma usina separada, dentro da concessão da Neoenergia. No projeto final, definimos uma segunda usina menor (480 kWp) em Sobradinho-DF apenas para atender Brasília, evitando perda de créditos entre concessionárias.

## Lições para clientes empresariais do DF e Goiás

1. **Confirme o teto correto antes de prometer escala.** Solar GD novo = 3 MW, não 5 MW.
2. **Respeite a área de concessão.** Créditos não cruzam fronteira entre Neoenergia-DF e Equatorial-GO.
3. **Antecipe o cronograma da Lei 14.300.** Cada ano de atraso encarece o Fio B em 15 pontos percentuais.
4. **Considere curtailment no projeto.** O parecer de acesso pode limitar injeção em alimentadores rurais.
5. **Acima de 3 MW, estude o ACL.** Para grandes consumidores, a migração para o Mercado Livre pode ser mais vantajosa que tentar fragmentar usinas.

---

A EcoSunPower projeta e executa usinas de minigeração distribuída em todo o Distrito Federal e em cidades de Goiás até cerca de 100 km de Brasília — Águas Lindas, Valparaíso, Luziânia, Anápolis e Goiânia. Se sua empresa consome acima de 30 MWh/mês e quer um estudo de viabilidade técnico-financeiro com a mesma profundidade descrita aqui, fale com nossa equipe pelo WhatsApp do site.

Inspirado em conteúdo do Canal Solar sobre economia de quase R$ 1 milhão/ano com solar no Judiciário (19/06/2026) e em decisões da ANEEL sobre constrained-off e armazenamento de junho/2026.