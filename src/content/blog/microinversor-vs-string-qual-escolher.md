---
title: "Microinversor ou inversor string em 2026: o que mudou com NBR 17193 e Corpo de Bombeiros"
description: "Comparativo técnico entre microinversores, otimizadores SolarEdge e inversores string considerando segurança, NBR 17193:2025, AFCI, rapid shutdown e exigências do Corpo de Bombeiros."
pubDate: 2026-04-17
updatedDate: 2026-04-26
category: tecnico
tags: ["microinversor", "string", "Hoymiles", "Enphase", "Deye", "SolarEdge", "NBR 17193", "rapid shutdown", "AFCI", "segurança"]
readingTime: 10
---

A escolha entre microinversor, otimizador SolarEdge ou inversor string deixou de ser apenas técnica/financeira em 2026. Com a publicação da **NBR 17193:2025 — Segurança contra incêndios em instalações fotovoltaicas** e a expansão das normas estaduais de Corpo de Bombeiros, a topologia do inversor agora envolve diretamente questões de **segurança contra incêndio, choque elétrico e proteção da equipe de emergência**. Como engenheiro responsável da EcoSunPower com 600+ projetos executados em Brasília-DF e Goiás, vou mostrar como esse cenário mudou e por que a balança tem pendido cada vez mais para o lado das soluções com **rapid shutdown nativo**.

## O que mudou em 2026

A grande virada é a **NBR 17193:2025**, publicada pela ABNT em fevereiro de 2025. Pela primeira vez, o Brasil tem uma norma específica de segurança contra incêndios em sistemas fotovoltaicos, que exige:

- **Função de Rapid Shutdown (RSD)** obrigatória em todo o sistema
- Capacidade de reduzir a tensão DC do arranjo a **menos de 80V em até 30 segundos** após acionamento do dispositivo de emergência
- Proteção contra arco elétrico (AFCI) em série, em fase de incorporação na NBR 16690 revisada

Em paralelo, **vários estados publicaram normas de Corpo de Bombeiros** específicas pra sistemas fotovoltaicos. Goiás foi um dos primeiros (norma técnica do CBMGO). Outros estados estão seguindo. Em todos, a exigência base é a mesma: **o sistema precisa permitir desligamento seguro pra equipe de bombeiros operar em emergências**.

A consequência prática: sistema sem rapid shutdown está **fora da norma vigente**, e em comercial/industrial não passa em vistoria do Bombeiros. Em residencial, vai ser questão de tempo até virar exigência também.

## Os três tipos em uma frase

**Inversor string:** um único inversor centralizado conecta vários painéis em série (uma "string"). Tensão DC entre painéis e inversor pode chegar a **1.000-1.500V**. Topologia clássica, mais barata, mas precisa de **dispositivo RSD adicional** pra atender a NBR 17193:2025.

**Microinversor:** cada painel tem seu próprio mini-inversor acoplado embaixo. Cada painel opera em **~60V**, abaixo do limite de 80V exigido pela norma. **Atende RSD nativamente**, sem dispositivo adicional.

**Otimizadores (SolarEdge):** híbrido. Um inversor central + pequenos otimizadores embaixo de cada painel. Otimizadores derrubam a tensão pra ~1V quando acionado o RSD. **Atende RSD nativamente** via comunicação PLC entre otimizadores e inversor central.

**Tradução prática:** microinversor e SolarEdge cumprem a norma de segurança automaticamente. String só atende com investimento adicional em dispositivo RSD certificado.

## Quando faz mais sentido cada um — em 2026

### Microinversor brilha quando:

**1. Comercial e industrial** (a regra que mudou). Aqui virtualmente **não há mais escolha**. Vistoria de Corpo de Bombeiros exige rapid shutdown. Sistema string + RSD adicional sai mais caro e mais complexo que microinversor já-com-RSD-nativo. Hoje na EcoSunPower, **a maior parte dos comerciais que entregamos usa microinversor**.

**2. Telhado com qualquer sombreamento parcial.** Galho de árvore, chaminé, prédio vizinho, antena, caixa d'água — qualquer sombra em um painel string degrada a geração de **toda a string**. Microinversor isola: só o painel sombreado perde, os outros seguem 100%.

**3. Telhado com múltiplas orientações.** Casas em "L" ou com águas em direções diferentes (Norte + Leste, por exemplo). Cada microinversor tem seu MPPT próprio.

**4. Residências de alto padrão.** Cliente premium valoriza segurança, monitoramento por painel e durabilidade. Microinversor entrega tudo isso. Em 2026, com preços mais competitivos (diferença caiu de 50% pra ~25-30%), o ROI total se equipara ao string.

**5. Sistemas com risco de ampliação futura.** Plug-and-play: adiciona painel + microinversor sem trocar inversor central.

**Marcas que a EcoSunPower trabalha em microinversor:** **Hoymiles** (séries HMS-DW e HMT-MS, líderes globais), **Enphase** (IQ8/IQ8P, referência americana), **Deye SUN-Sxx-G4** (recentes, ótimo custo-benefício), **NEP** (BDM-800, focado segurança AFCI), **APsystems**. Garantia 12-25 anos.

### SolarEdge brilha quando:

**1. Sistema grande comercial ou industrial com performance individual crítica.** Quando o cliente quer monitoramento por painel + inversor central robusto + bateria integrada.

**2. Casa com sistema híbrido (solar + bateria).** SolarEdge Home Hub e Genesis integram bateria com gestão inteligente da geração e do consumo (Smart Energy).

**3. Sombreamento crítico mas o cliente prefere arquitetura centralizada.** Otimizadores resolvem a sombra mantendo o inversor central.

**4. Cliente premium quer monitoramento por painel + custo intermediário.** SolarEdge custa ~15-25% a mais que string puro, mas menos que microinversor total.

**5. Atendimento direto a NBR 17193 com inversor central.** Sistemas SolarEdge atendem ambas as exigências (RSD + monitoramento) sem dispositivos adicionais.

### Inversor string brilha quando:

**1. Sistema residencial pequeno (até 5 kWp), telhado sem sombra, orientação única, e o cliente já avaliou que o RSD adicional cabe no orçamento.** Aqui ainda pode fazer sentido pelo custo.

**2. Sistema residencial sem nenhum sombreamento ao longo do dia.** Casas em terreno aberto, sem árvores, prédios próximos ou obstruções.

**3. Orçamento muito apertado.** Inversor string puro + dispositivo RSD ainda fica mais barato que microinversor pra sistemas residenciais sem complicação. Diferença caiu de 50% pra ~15-20% considerando o RSD obrigatório.

**Marcas string premium:** **Sungrow** (1-100kW), **GoodWe** (3-50kW, modelos novos com RSD integrado), **Huawei SUN2000** (3-100kW, integra com otimizadores Huawei pra atender RSD), **Solis**. Todas tier 1 com 5-12 anos de garantia.

## Comparativo direto: residência 5 kWp em Brasília

Cenário real: telhado misto (cerâmico + fibrocimento), pequena sombra parcial à tarde de uma árvore vizinha. Considerando NBR 17193:2025 já em vigor:

| Critério | String + RSD | Microinversor | SolarEdge + Otimizadores |
|---|---|---|---|
| Custo equipamento | R$ 4.200 + R$ 1.200 RSD | R$ 7.500 | R$ 6.500 |
| Custo total sistema | R$ 18.500 | R$ 21.000 | R$ 19.500 |
| Geração estimada | 720 kWh/mês | 760 kWh/mês | 750 kWh/mês |
| Perda por sombra | 8-12% | 1-2% | 2-3% |
| Atende NBR 17193 | Sim (com RSD) | Nativo | Nativo |
| AFCI integrado | Depende do modelo | Geralmente sim | Sim |
| Garantia inversor | 7 anos | 12-25 anos | 12 anos |
| Monitoramento | String agregada | Por painel | Por painel |
| Upgrade futuro | Limitado | Plug-and-play | Plug-and-play |
| ROI/payback | 33 meses | 36 meses | 34 meses |

Os preços de microinversor caíram cerca de 30% nos últimos 2 anos no mercado brasileiro. Combinado com a obrigatoriedade do RSD pra string, a diferença final fica em ~R$ 2.500-3.000 pra um sistema residencial — pequena pra quem considera os 25 anos de operação e o ganho em segurança.

## Sobre segurança e normas: o que importa entender

A grande questão por trás da NBR 17193:2025 e das normas de Corpo de Bombeiros é simples: **incêndios em sistemas fotovoltaicos existem e crescem com a expansão da tecnologia**. As causas mais comuns:

- **Arco elétrico (DC arc fault)** — mais perigoso que arco AC porque não tem cruzamento por zero (não se autoextingue)
- **Conectores MC4 mal crimpados ou de baixa qualidade**
- **Cabos DC danificados (roedores, exposição UV, abrasão)**
- **Inversores com falha de isolamento**

O AFCI (Arc Fault Circuit Interrupter) detecta padrões de arco elétrico e desliga o sistema em **menos de 0,2 segundos**. Microinversores e otimizadores SolarEdge têm AFCI integrado por design. String inverters modernos também trazem AFCI, mas modelos mais antigos não.

O RSD (Rapid Shutdown) é a segunda camada: em emergência (incêndio, manutenção, vistoria), reduz a tensão DC pra nível seguro pra equipe de bombeiros operar. **Microinversor opera nativamente em ~60V — já é seguro de fábrica**. SolarEdge derruba pra ~1V por painel via otimizador. String puro precisa de dispositivo adicional certificado.

Pra equipe de bombeiros entrando em residência ou comércio em chamas, a diferença entre 1.000V DC e 60V DC é literalmente a diferença entre risco fatal e operação segura.

## Como a EcoSunPower decide na prática

Nossa abordagem hoje, considerando NBR 17193:2025 + Corpo de Bombeiros:

**Comercial e industrial (>15 kWp):**
A maioria dos projetos vai pra **microinversor ou SolarEdge**. A obrigatoriedade do RSD + a necessidade de monitoramento por painel + a complexidade de cobertura em telhados grandes (sombreamento desigual ao longo do dia) tornam essas topologias o caminho natural. String puro só em projetos muito específicos com cliente que avalia trade-offs explicitamente.

**Residencial alto padrão (R$ 800+ de conta):**
Forte preferência por **microinversor**, especialmente nos casos com qualquer sombreamento, múltiplas orientações ou previsão de futura instalação de carro elétrico/bateria. Cliente alto padrão valoriza segurança, durabilidade e flexibilidade — todos pontos onde microinversor entrega.

**Residencial padrão sem sombra, telhado único, orçamento apertado:**
Aqui ainda avaliamos **string com RSD certificado** ou **microinversor** caso a caso. Com a queda de preço dos microinversores em 2025-2026, frequentemente a diferença é de R$ 2.500-3.000 — e o cliente prefere pagar essa diferença pelos benefícios de segurança e monitoramento individual.

**Sistemas híbridos (solar + bateria):**
**SolarEdge** ou **Deye com baterias compatíveis**. A integração nativa entre inversor e bateria simplifica o projeto e o suporte futuro.

Toda decisão passa por **visita técnica com análise de sombra, orientações, estrutura do telhado, quadro elétrico existente e perfil de uso**. Não decidimos "no escuro". Eu particularmente como engenheiro responsável tenho preferido recomendar microinversor cada vez mais, principalmente pelo aspecto de segurança — o cliente vai ter aquele sistema 25 anos no telhado dele.

## FAQ

**Microinversor falha mais que string?**
Não. Estatisticamente, microinversores têm taxa de falha menor (cada um é menor e mais simples). E quando 1 falha em 25 anos de operação, só o painel correspondente para — não o sistema todo. Garantia 12-25 anos versus 5-7 do string.

**Se chover muito, o microinversor estraga?**
Não. Todos têm IP67 (à prova d'água). Ficam embaixo do painel, protegidos do sol direto e da chuva.

**Preciso trocar inversor string em quanto tempo?**
Vida útil típica é 10-15 anos. Garantia de fábrica 5-12 anos. No 12º-15º ano, é normal trocar (custo R$ 4.000-8.000). Microinversor tipicamente dura mais que o sistema todo.

**SolarEdge é confiável? Ouvi falar de problemas no exterior.**
A marca passou por reestruturação em 2024-2025 (filial brasileira reforçada, novas linhas Genesis e Home Hub substituíram as antigas). Em 2026 é estável, com garantia padrão 12 anos e suporte local. EcoSunPower trabalha com SolarEdge em projetos comerciais e residenciais premium.

**Posso começar com string e migrar depois pra microinversor?**
Tecnicamente possível, mas custoso (precisa trocar inversor, cabos DC, configuração). Melhor decidir certo no início.

**Sistema antigo (pré-NBR 17193:2025) precisa adequar?**
A norma vale pra novas instalações. Sistemas existentes não são obrigados a retrofitar (por enquanto). Mas em comercial/industrial, vistoria de renovação de AVCB pode exigir adequação. Vale conversar com nosso time se for o seu caso.

**E o investimento adicional de RSD em string puro?**
Dispositivo RSD certificado custa R$ 800-1.500 pra residencial, R$ 2.500-5.000 pra comercial. Isso fecha boa parte da diferença pra microinversor — e ainda dá resultado inferior em segurança e monitoramento.

## Conclusão

Em 2026, a escolha entre microinversor, SolarEdge ou string deixou de ser puramente técnica/financeira. A NBR 17193:2025 e as normas de Corpo de Bombeiros tornaram **rapid shutdown obrigatório**, e isso muda o jogo:

- **Microinversor** atende a norma nativamente, virou favorito em comercial/industrial
- **SolarEdge** atende a norma nativamente via otimizadores, premium pra residencial sofisticado
- **String puro** ainda funciona, mas precisa de dispositivo RSD adicional certificado, e a economia inicial caiu drasticamente

Na EcoSunPower, com a queda de preço dos microinversores e o fortalecimento das normas, **temos usado microinversor cada vez mais** — por razões técnicas, de segurança e de durabilidade. Cliente que pesquisa o assunto chega à mesma conclusão sozinho.

A engenharia do projeto continua sendo o que faz a diferença. Em sistema mal projetado, o melhor inversor do mundo perde performance. Em sistema bem projetado, qualquer topologia entrega décadas de geração.

Pra avaliar qual faz sentido pro seu caso específico, fale com a EcoSunPower no WhatsApp. Fazemos visita técnica em Brasília-DF e Entorno até 100 km de Goiás, com análise de sombra, orientações, estrutura e adequação às normas vigentes (NBR 16690, NBR 17193:2025, normas estaduais de Corpo de Bombeiros).
