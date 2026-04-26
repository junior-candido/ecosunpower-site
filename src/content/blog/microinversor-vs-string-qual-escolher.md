---
title: "Microinversor ou inversor string: qual escolher pro seu sistema solar?"
description: "Comparativo técnico entre microinversores e inversores string em sistemas residenciais e comerciais, com prós, contras e quando cada um faz mais sentido."
pubDate: 2026-04-17
category: tecnico
tags: ["microinversor", "string", "Hoymiles", "Sungrow", "SolarEdge", "dimensionamento"]
readingTime: 8
---

Uma das decisões mais importantes na hora de projetar um sistema solar é a **topologia do inversor**: string (centralizado), microinversor (distribuído) ou solução híbrida com otimizadores (SolarEdge). Cada um tem cenários onde brilha — e cenários onde é a escolha errada. Como engenheiro responsável da EcoSunPower com 600+ projetos executados em Brasília-DF e Goiás, vou mostrar como decidimos isso na prática.

## Os três tipos em uma frase

**Inversor string:** um único inversor centralizado conecta vários painéis em série (uma "string"). É a topologia clássica, mais barata, e ainda dominante em sistemas grandes.

**Microinversor:** cada painel tem seu próprio mini-inversor acoplado embaixo. Cada painel opera independente. Mais caro, mais robusto.

**Otimizadores (SolarEdge):** híbrido. Um inversor central + pequenos "otimizadores" embaixo de cada painel. Melhor de ambos os mundos, com complexidade própria.

## Quando faz mais sentido cada um

### Inversor string brilha quando:

**1. Telhado limpo e sem sombra.** Se todos os painéis recebem o mesmo nível de irradiação ao longo do dia, o string entrega 95-98% da geração teórica. Sem perda.

**2. Sistema acima de 5-10 kWp.** Quanto maior o sistema, mais favorável o string fica em custo por kWp. Em comercial e industrial (>20 kWp), é praticamente padrão.

**3. Orçamento apertado.** Inversor string custa 30-50% menos que microinversor pro mesmo kWp.

**4. Telhado de uma única orientação.** Quando todos os painéis ficam alinhados (mesma face, mesma inclinação), o string vai bem.

Marcas que a EcoSunPower trabalha em string: **Sungrow** (1-100kW), **GoodWe** (3-50kW), **Huawei SUN2000** (3-100kW), **Solis**. Todos tier 1 com 5-12 anos de garantia.

### Microinversor brilha quando:

**1. Telhado com sombra parcial.** Galho de árvore, chaminé, prédio vizinho, antena — qualquer sombreamento parcial em um painel string degrada a geração de **toda a string**. Microinversor isola o problema: só o painel sombreado perde, os outros seguem 100%.

**2. Telhado com múltiplas orientações.** Casas em "L" ou com águas em direções diferentes (Norte + Leste, por exemplo). Cada microinversor opera com seu MPPT próprio, otimizando cada painel.

**3. Sistemas pequenos (até 5 kWp).** Diferença de custo é menor em sistemas pequenos, e o microinversor adiciona mais valor proporcionalmente.

**4. Foco em segurança e monitoramento por painel.** Cada painel tem dados individuais (geração, temperatura, eficiência). Identifica problema em 1 painel sem precisar testar a string toda.

**5. Telhado com risco de ampliação futura.** Microinversor permite adicionar painéis sem trocar inversor central — só pluga mais um.

Marcas: **Hoymiles** (séries HMS-DW e HMT-MS), **Enphase** (IQ8 e IQ8P), **Deye SUN-Sxx-G4** (microinversores recentes), **NEP** (BDM-800), **APsystems**. Garantia 12-25 anos.

### SolarEdge brilha quando:

**1. Sombreamento crítico em painéis específicos.** Sistema teria que ser total microinversor pra resolver sombra, mas o cliente quer manter inversor central.

**2. Cliente premium quer monitoramento por painel + custo intermediário.** SolarEdge custa ~15-25% a mais que string puro, mas menos que microinversor total.

**3. Sistemas grandes onde performance individual importa.** Comercial/industrial com clientes B2B exigentes.

**4. Cliente quer expansão futura.** Adicionar painéis com SolarEdge é simples (adiciona otimizador + ajusta inversor).

**5. Casa com sistema híbrido (solar + bateria).** SolarEdge Home Hub e Genesis integram bateria com gestão inteligente da geração.

## Comparativo direto: residência 5 kWp em Brasília

Vamos a um caso real. Telhado misto (parte cerâmico, parte fibrocimento), sombra parcial à tarde de uma árvore vizinha:

| Critério | String (Sungrow SG5K) | Micro (Hoymiles HMS) | SolarEdge SE5K + Otimizadores |
|---|---|---|---|
| Custo equipamento | R$ 4.200 | R$ 8.000 | R$ 6.500 |
| Custo total sistema | R$ 17.000 | R$ 21.500 | R$ 19.500 |
| Geração estimada | 720 kWh/mês | 760 kWh/mês | 750 kWh/mês |
| Perda por sombra | 8-12% | 1-2% | 2-3% |
| Garantia inversor | 7 anos | 12-25 anos | 12 anos |
| Monitoramento | String agregada | Por painel | Por painel |
| Upgrade futuro | Limitado pelo string | Plug-and-play | Plug-and-play |
| ROI/payback | 32 meses | 36 meses | 34 meses |

A diferença de custo é compensada pela maior geração e durabilidade do micro/SolarEdge ao longo dos 25 anos. Em payback puro, string ainda ganha. Em **valor total sobre 25 anos**, microinversor vence em 2-3% — dependendo do nível de sombra.

## Erros comuns que vemos no mercado

**1. "É micro-inversor, é melhor sempre."** Falso. Em telhado limpo e sistema grande, é dinheiro jogado fora.

**2. "String é mais barato, é sempre a melhor escolha."** Falso. Sombra ou múltiplas orientações detonam a economia inicial.

**3. "Vou comprar inversor menor pra economizar."** Erro grave. Inversor subdimensionado limita o sistema. Padrão correto é DC/AC ratio entre 1.0 e 1.3.

**4. "Não preciso de monitoramento por painel."** Em sistemas que vão durar 25 anos, isolar uma falha em 1 painel é a diferença entre 30 minutos de diagnóstico e 4 horas testando string inteira.

**5. "Vou misturar microinversor de marcas diferentes."** Não dá. Microinversores precisam de gateway compatível. Hoymiles, Deye, Enphase têm sistemas isolados.

## Como a EcoSunPower decide na prática

Nosso fluxograma simplificado:

1. **Cliente tem sombra significativa em algum painel?** Sim → microinversor ou SolarEdge.
2. **Telhado tem múltiplas orientações?** Sim → microinversor ou SolarEdge.
3. **Sistema acima de 15 kWp?** Sim → string (custo-benefício imbatível).
4. **Cliente quer expansão futura provável?** Sim → micro ou SolarEdge (mais flexível).
5. **Cliente prioriza monitoramento por painel?** Sim → micro.
6. **Orçamento apertado?** String, com cuidado no projeto pra evitar sombras.
7. **Caso normal residencial 5-10 kWp?** Análise técnica do telhado decide. ~60% vão pra string, 30% pra micro, 10% pra SolarEdge.

Nunca decidimos "no escuro". Sempre vai engenheiro ou técnico fazer **visita técnica** com leitura de sombra (StringMeter ou drone), análise estrutural e levantamento de orientações. A decisão sai dali.

## FAQ

**Microinversor falha mais que string?**
Não. Estatisticamente, microinversores têm taxa de falha menor (cada um é menor e mais simples). Mas se um falhar, o painel correspondente para — e geralmente 1 falha em 25 anos de operação.

**Se chover muito, o microinversor estraga?**
Não. Todos têm IP67 (à prova d'água). A maioria fica embaixo do painel, protegida do sol direto também.

**Preciso trocar inversor string em quanto tempo?**
Vida útil típica é 10-15 anos. Garantia de fábrica varia 5-12 anos. No 12º-15º ano, é normal trocar (custo R$ 4.000-8.000).

**SolarEdge é confiável? Ouvi falar de problemas.**
A marca passou por reestruturação em 2024-2025. Em 2026 é estável de novo, com novas linhas (Genesis, Home Hub) que substituíram as anteriores. Garantia padrão 12 anos. EcoSunPower trabalha com SolarEdge ativamente.

**Posso começar com string e migrar depois pra microinversor?**
Tecnicamente possível, mas custoso (precisa trocar tudo: inversor, cabos DC, configuração). Melhor decidir certo no início.

## Conclusão

Não existe "melhor inversor". Existe o inversor **certo pro seu telhado, seu consumo e seu orçamento**. String é provado, simples, barato. Microinversor é robusto, flexível, durável. SolarEdge é o meio-termo premium.

A engenharia do projeto é o que faz a diferença. Em sistema mal projetado, o melhor inversor do mundo perde performance. Em sistema bem projetado, qualquer um deles entrega décadas de geração.

Pra avaliar qual faz sentido pro seu caso específico, fale com a EcoSunPower no WhatsApp. Fazemos visita técnica gratuita em Brasília-DF e Entorno até 100 km de Goiás, com análise de sombra, orientações e estrutura.
