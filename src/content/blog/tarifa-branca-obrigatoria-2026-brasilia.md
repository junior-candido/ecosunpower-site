---
title: "Tarifa Branca obrigatória em 2026: o que muda na conta de luz do consumidor de Brasília"
description: "Análise técnica da Consulta Pública ANEEL sobre aplicação automática da Tarifa Branca em 2026, com números oficiais da Neoenergia Brasília (REH 3542) e impacto real para o consumidor do DF."
pubDate: 2026-05-14
category: regulacao
tags: ["Tarifa Branca","ANEEL","Neoenergia-DF","tarifa horária","energia solar","baterias","Brasília"]
author: "Junior Candido Rodrigues"
authorRole: "Responsável Técnico CREA/CFT"
readingTime: 12
sourceAttribution: "Baseado na Resolução Homologatória ANEEL nº 3.542 de 14/10/2025 (Neoenergia Distribuição Brasília) e na Consulta Pública ANEEL aberta entre 10/12/2025 e 09/03/2026 sobre modernização tarifária — https://www.gov.br/aneel/pt-br/assuntos/noticias/2025/modernizacao-tarifaria-aneel-abre-consulta-publica-sobre-tarifa-horaria-para-consumidores-com-consumo-elevado"
draft: false
---

## Uma conta de luz que muda de preço a cada hora chega em 2026

A partir de 2026, aproximadamente **2,5 milhões de consumidores brasileiros** podem ser migrados automaticamente para uma tarifa que cobra a energia elétrica em três faixas distintas ao longo do dia — e que pode encarecer o kWh consumido entre 18h e 21h em até **64% acima da tarifa convencional** que vigora hoje. A mudança não é hipotética: está em Consulta Pública aberta pela ANEEL entre **10 de dezembro de 2025 e 9 de março de 2026**, e a previsão de entrada em vigor é o próprio ano de 2026.

Para o consumidor de Brasília atendido pela Neoenergia Distribuição Brasília, isso significa algo direto: **quem janta às 19h, toma banho às 20h, liga o ar-condicionado no quarto às 21h vai pagar substancialmente mais caro pela mesma energia que pagava na conta antiga**. E quem não souber agir — instalando geração própria, ajustando hábito de consumo ou ambos — verá a fatura mensal crescer mesmo sem aumentar o consumo total em kWh.

Este artigo é uma análise técnica do que está em jogo, com os números oficiais publicados pela ANEEL no reajuste tarifário de outubro/2025 (REH 3542), os impactos práticos no consumidor residencial do DF e os caminhos para neutralizar o efeito da nova tarifa antes que ela bata na conta.

## O que é a Tarifa Branca, em três postos

A Tarifa Branca é a modalidade tarifária do **Grupo B** (baixa tensão) que divide o dia em três postos com preços diferentes do kWh, de segunda a sexta-feira:

- **Posto Ponta** — três horas consecutivas em que a tarifa é mais cara, definidas pela distribuidora. Em Brasília, das **18h00 às 20h59**.
- **Posto Intermediário** — uma hora antes e uma hora depois do horário de Ponta. No DF, das **17h00 às 17h59** e das **21h00 às 21h59**.
- **Posto Fora-Ponta** — todo o restante do dia, das **22h00 às 16h59**. Tarifa mais barata.

Aos sábados, domingos e feriados nacionais, a tarifa cobrada é sempre a de Fora-Ponta, independentemente do horário. Esta regra é nacional e definida pela ANEEL.

A modalidade está disponível desde 2018 como **opção** para consumidores das subclasses **B1 (Residencial)**, **B2 (Rural)** e **B3 (Comercial, Serviços, Industrial baixa tensão)**, com exceção das subclasses Residencial Baixa Renda e Iluminação Pública (B4). Hoje, a adesão é voluntária. O que está em discussão na ANEEL é exatamente isso: tornar a modalidade **obrigatória** para um recorte de consumidores específico.

<svg viewBox="0 0 600 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mapa horário 24h da Tarifa Branca em Brasília" style="width:100%;height:auto;max-width:600px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif;">
  <rect x="0" y="0" width="600" height="200" fill="#0F172A"/>
  <text x="300" y="22" text-anchor="middle" fill="#fff" font-size="14" font-weight="600">Tarifa Branca em Brasília — postos por hora (segunda a sexta)</text>
  <g transform="translate(40,50)">
    <rect x="0" y="0" width="425" height="40" fill="#10B981"/>
    <rect x="425" y="0" width="25" height="40" fill="#F59E0B"/>
    <rect x="450" y="0" width="75" height="40" fill="#DC2626"/>
    <rect x="525" y="0" width="25" height="40" fill="#F59E0B"/>
    <text x="212" y="25" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">Fora-Ponta — 22h às 17h</text>
    <text x="437" y="60" text-anchor="middle" fill="#F59E0B" font-size="10">Interm.</text>
    <text x="437" y="72" text-anchor="middle" fill="#F59E0B" font-size="10">17h-18h</text>
    <text x="487" y="25" text-anchor="middle" fill="#fff" font-size="11" font-weight="600">Ponta</text>
    <text x="487" y="60" text-anchor="middle" fill="#DC2626" font-size="10">18h-21h</text>
    <text x="537" y="60" text-anchor="middle" fill="#F59E0B" font-size="10">Interm.</text>
    <text x="537" y="72" text-anchor="middle" fill="#F59E0B" font-size="10">21h-22h</text>
  </g>
  <g transform="translate(40,110)" font-size="9" fill="#94A3B8">
    <line x1="0" y1="0" x2="525" y2="0" stroke="#334155" stroke-width="1"/>
    <text x="0" y="14" text-anchor="middle">00h</text>
    <text x="131" y="14" text-anchor="middle">06h</text>
    <text x="262" y="14" text-anchor="middle">12h</text>
    <text x="393" y="14" text-anchor="middle">18h</text>
    <text x="525" y="14" text-anchor="middle">24h</text>
  </g>
  <g transform="translate(40,150)" font-size="10" fill="#fff">
    <rect x="0" y="0" width="14" height="10" fill="#10B981"/><text x="20" y="9">Mais barato</text>
    <rect x="120" y="0" width="14" height="10" fill="#F59E0B"/><text x="140" y="9">Intermediário</text>
    <rect x="260" y="0" width="14" height="10" fill="#DC2626"/><text x="280" y="9">Mais caro (Ponta)</text>
    <text x="0" y="28" fill="#94A3B8" font-size="9">Aos sábados, domingos e feriados a tarifa cobrada é sempre Fora-Ponta.</text>
  </g>
</svg>

## A virada de 2026: o que a ANEEL propôs

Em dezembro de 2025, a ANEEL abriu a Consulta Pública sobre **modernização tarifária**, com prazo de contribuições encerrado em **9 de março de 2026**. A área técnica da Agência propôs a aplicação automática da Tarifa Branca para consumidores do Grupo B com **consumo superior a 1.000 kWh/mês (1 MWh/mês)** — patamar que captura cerca de 2,5 milhões de unidades consumidoras em todo o país. Isso inclui comércios, serviços públicos de baixa tensão, condomínios, indústrias B3 e residências de alto consumo.

A proposta atinge as subclasses B1, B2 e B3, exceto Baixa Renda e Iluminação Pública. Não é mais uma migração voluntária: o consumidor que cruzar o patamar passa a pagar pela Tarifa Branca por padrão, e precisaria pedir explicitamente para retornar à modalidade convencional caso a Branca seja desvantajosa para o seu perfil de consumo.

A justificativa regulatória da ANEEL é induzir mudança de comportamento: deslocar consumo do horário de Ponta — que coincide com o pico de demanda do Sistema Interligado Nacional — para horários em que o sistema elétrico opera com folga. Para o regulador, é uma medida de eficiência sistêmica. Para o consumidor, é uma reorganização forçada da relação entre hábitos e conta.

A implementação efetiva é esperada **até o fim de 2026**, sujeita à decisão final da Diretoria da ANEEL após a fase de contribuições.

## Os números oficiais para Brasília — REH 3542

A tarifa em vigor na Neoenergia Distribuição Brasília até **21 de outubro de 2026** foi homologada pela ANEEL na **Resolução Homologatória nº 3.542, de 14 de outubro de 2025**, com reajuste médio de **+11,65%** para o consumidor B1. O próximo reajuste anual será em outubro de 2026, com expectativa preliminar de **-3,73%**.

Os valores oficiais para Residencial B1 — TUSD (uso do sistema de distribuição) + TE (energia elétrica) — estão listados na tabela abaixo. **Esses números são sem PIS/COFINS, ICMS, bandeira tarifária e contribuição de iluminação pública**. Não é o que aparece na conta; é o componente regulado que ganha tributos depois.

| Modalidade | TUSD (R$/kWh) | TE (R$/kWh) | Total sem tributos |
|---|---|---|---|
| **Convencional** — Consumo Ativo | 0,42392 | 0,40280 | **R$ 0,82672** |
| **Branca** — Ponta | 0,74548 | 0,60841 | **R$ 1,35389** |
| **Branca** — Intermediário | 0,54120 | 0,38411 | **R$ 0,92531** |
| **Branca** — Fora-Ponta | 0,33691 | 0,38411 | **R$ 0,72102** |

> Fonte: ANEEL, Resolução Homologatória nº 3.542 de 14/10/2025, vigência de 22/10/2025 a 21/10/2026.

A informação que importa para o bolso é a relação entre eles:

- **Ponta = 1,64× a tarifa Convencional** (+64% mais caro)
- **Intermediário = 1,12× a Convencional** (+12% mais caro)
- **Fora-Ponta = 0,87× a Convencional** (-13%, mais barato)
- **Ponta = 1,88× a Fora-Ponta** — quase o dobro de preço por kWh consumido entre 18h e 21h em relação à madrugada e ao período diurno.

### Da tarifa regulada para o "R$ por kWh" da conta

Atendendo clientes em Brasília há mais de uma década, observamos que a tarifa efetiva paga pelo consumidor B1 — a soma de regulada + tributos + bandeira + CIP — varia entre **R$ 0,98 e R$ 1,06 por kWh** dependendo do perfil. Os fatores que explicam essa faixa:

- **ICMS DF** varia por faixa de consumo (alíquota residencial é progressiva, mais baixa em consumos pequenos e mais alta acima de 500 kWh/mês).
- **Bandeira tarifária** mensal: verde (R$ 0), amarela (R$ 1,885 a cada 100 kWh), vermelha P1 (R$ 4,463/100 kWh), vermelha P2 (R$ 7,877/100 kWh). Em 2026 estamos em ciclo alternado, com bandeira amarela acionada em maio.
- **PIS/COFINS** mensal, variável conforme apuração contábil da distribuidora.
- **Contribuição para Iluminação Pública (CIP)** — taxa cobrada pelo município, que se dilui no R$/kWh efetivo.

Em termos práticos, ao aplicar a Tarifa Branca a um perfil residencial médio de Brasília com tributos médios, os valores observados na conta seriam aproximadamente:

| Modalidade | Tarifa efetiva estimada |
|---|---|
| Convencional | ~R$ 1,07/kWh |
| Branca Ponta | ~R$ 1,76/kWh |
| Branca Intermediário | ~R$ 1,20/kWh |
| Branca Fora-Ponta | ~R$ 0,94/kWh |

Para um consumidor que tem hoje uma fatura de R$ 1,05/kWh e cuja maior parte do consumo concentra-se entre 17h e 22h, a migração compulsória para Branca pode representar **acréscimo de até 30% na conta mensal sem qualquer aumento de consumo**.

## Quem perde, quem fica neutro e quem ganha com a Tarifa Branca

A Branca não é boa nem ruim por natureza: ela favorece quem **realmente consome fora do horário de Ponta** e prejudica quem concentra consumo entre 17h e 22h. Pela nossa experiência com simulações em clientes do DF e Entorno, identificamos três perfis bem claros:

### Perfil "perde com a Branca" — residência típica do Plano Piloto

Família que sai cedo, volta no fim da tarde, faz jantar, toma banho, assiste TV e dorme com ar-condicionado ligado. Consumo concentrado entre 18h e 22h, exatamente nas faixas mais caras.

**Exemplo numérico** (sem tributos, para clareza):

- Consumo mensal: 600 kWh
- Distribuição típica: 35% Ponta (210 kWh) + 30% Intermediário (180 kWh) + 35% Fora-Ponta (210 kWh)
- Conta na Convencional: 600 × R$ 0,82672 = **R$ 496,03**
- Conta na Branca: (210 × 1,35389) + (180 × 0,92531) + (210 × 0,72102) = **R$ 602,29**
- Diferença: **+R$ 106,26/mês (+21,4%)** sem alterar nada no consumo.

### Perfil "fica neutro" — uso bem distribuído

Família com pessoas em casa o dia todo, geladeira, freezer, máquina de lavar usada durante o dia, banhos espalhados. Consumo equilibrado.

- 25% Ponta + 25% Intermediário + 50% Fora-Ponta
- Convencional: R$ 496,03
- Branca: (150 × 1,35389) + (150 × 0,92531) + (300 × 0,72102) = **R$ 558,18**
- Diferença: +R$ 62,15/mês (+12,5%). Ainda perde, mas menos.

### Perfil "ganha com a Branca" — quem realmente desloca consumo

Profissional liberal que trabalha fora o dia inteiro, almoça fora, janta em restaurante 3-4 dias por semana. Banho de manhã. Geladeira e roteador como principais cargas noturnas.

- 5% Ponta + 10% Intermediário + 85% Fora-Ponta
- Convencional: R$ 496,03
- Branca: (30 × 1,35389) + (60 × 0,92531) + (510 × 0,72102) = **R$ 463,86**
- Diferença: -R$ 32,17/mês (-6,5%). Ganha pouco.

A conclusão prática é desconfortável: **para o consumidor residencial médio de Brasília, a Tarifa Branca é predominantemente desfavorável**. Mesmo em cenários quase ideais, o ganho é marginal. Em cenários típicos, a perda é expressiva. E é por isso que a obrigatoriedade está sendo discutida com tanto cuidado — em vez de a Branca substituir a Convencional naturalmente pela atratividade, ela precisará de força regulatória para acontecer.

## Como a energia solar fotovoltaica neutraliza o efeito da Tarifa Branca

Aqui está o ponto que muitos integradores e a própria comunicação institucional do setor explicam mal. **Um sistema fotovoltaico bem dimensionado é a única ferramenta econômica que resolve simultaneamente os três problemas que a Tarifa Branca traz**:

1. **Tarifa cheia da Convencional** — o solar já compensa o consumo total no balanço anual.
2. **Tarifa de Ponta da Branca** — o solar libera créditos de geração distribuída que abatem a Ponta posteriormente.
3. **Fio B subindo na Lei 14.300** — quanto mais energia o consumidor consome dentro da própria casa, menor o caminho dela pela rede, e menor o Fio B incidente.

### O mecanismo do autoconsumo simultâneo

A energia gerada pelos módulos fotovoltaicos durante o dia, **quando é consumida na mesma hora dentro da própria unidade consumidora**, não passa pela rede da distribuidora. Não vira crédito, não recebe Fio B, não sofre incidência de Tarifa Branca, não recebe bandeira tarifária. É, na prática, **energia gratuita** após o investimento inicial.

Em Brasília, com **5,2 horas de Sol Pleno (HSP)** médias anuais e céu predominantemente limpo entre 9h e 16h, o autoconsumo simultâneo em residências típicas fica entre **25% e 40%** da geração total. Para comércios diurnos, esse índice sobe para **70% a 85%**. Quanto maior o autoconsumo, **menor o impacto da Tarifa Branca**, porque a maior parte da energia consumida nunca passou pela tarifa horária.

### O mecanismo da compensação de créditos

A energia gerada em excesso durante o dia é injetada na rede e vira crédito em kWh, válido por 60 meses. Esse crédito **abate consumo posterior independentemente do horário**: pode compensar uma kWh consumida às 19h (horário de Ponta) sem qualquer perda proporcional. É exatamente o mecanismo que neutraliza a Branca para o consumidor solar.

Em outras palavras: enquanto o vizinho da rua paga R$ 1,76/kWh ao ligar o chuveiro às 19h30, o consumidor com sistema solar bem dimensionado paga **zero** por essa kWh — ela é abatida pelo crédito gerado às 13h do mesmo dia, quando o painel jogou 4 kWh excedentes na rede a custo zero.

### Cálculo prático para uma residência de 600 kWh/mês em Brasília

Tomemos o perfil "perde com a Branca" do exemplo anterior — 600 kWh/mês, padrão Lago Sul/Sudoeste, com instalação de sistema fotovoltaico dimensionado a 100% do consumo.

- **Sistema necessário:** ~4,8 kWp (8 módulos TOPCon de 600 W) gerando ~720 kWh/mês em Brasília
- **Investimento médio (Greener jan/2026):** R$ 3.400/kWp × 4,8 kWp = **R$ 16.320**
- **Conta antiga (Convencional, com tributos):** ~R$ 642/mês
- **Conta nova (Branca + solar, com tributos):** ~R$ 60-80/mês (somente a taxa mínima de disponibilidade + parcela residual após abatimento de créditos)
- **Economia mensal:** ~R$ 562
- **Payback estimado:** **2 anos e 5 meses**

Quanto mais a tarifa da Branca encarecer o horário de Ponta, **mais valiosa fica a geração solar diurna que produz crédito para abatimento posterior**. A Branca, paradoxalmente, melhora o retorno financeiro do sistema fotovoltaico.

<svg viewBox="0 0 600 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Comparativo de conta mensal: Convencional, Branca, Branca com solar e Branca com solar e bateria" style="width:100%;height:auto;max-width:600px;display:block;margin:1.5rem auto;font-family:system-ui,sans-serif;">
  <rect x="0" y="0" width="600" height="320" fill="#fff"/>
  <text x="300" y="22" text-anchor="middle" fill="#0F172A" font-size="14" font-weight="600">Conta mensal estimada — residência 600 kWh/mês Brasília</text>
  <text x="300" y="40" text-anchor="middle" fill="#64748B" font-size="11">Perfil consumo concentrado entre 18h e 22h, com tributos médios</text>
  <g transform="translate(60,70)">
    <line x1="0" y1="200" x2="500" y2="200" stroke="#CBD5E1" stroke-width="1"/>
    <line x1="0" y1="0" x2="0" y2="200" stroke="#CBD5E1" stroke-width="1"/>
    <text x="-8" y="200" text-anchor="end" fill="#64748B" font-size="10">R$ 0</text>
    <text x="-8" y="150" text-anchor="end" fill="#64748B" font-size="10">R$ 250</text>
    <text x="-8" y="100" text-anchor="end" fill="#64748B" font-size="10">R$ 500</text>
    <text x="-8" y="50" text-anchor="end" fill="#64748B" font-size="10">R$ 750</text>
    <text x="-8" y="4" text-anchor="end" fill="#64748B" font-size="10">R$ 1.000</text>
    <rect x="40" y="71" width="80" height="129" fill="#0E7CB8"/>
    <text x="80" y="65" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="600">R$ 644</text>
    <text x="80" y="220" text-anchor="middle" fill="#0F172A" font-size="10">Convencional</text>
    <text x="80" y="232" text-anchor="middle" fill="#64748B" font-size="9">(hoje)</text>
    <rect x="160" y="44" width="80" height="156" fill="#DC2626"/>
    <text x="200" y="38" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="600">R$ 783</text>
    <text x="200" y="220" text-anchor="middle" fill="#0F172A" font-size="10">Branca</text>
    <text x="200" y="232" text-anchor="middle" fill="#64748B" font-size="9">(sem solar)</text>
    <rect x="280" y="184" width="80" height="16" fill="#10B981"/>
    <text x="320" y="178" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="600">R$ 80</text>
    <text x="320" y="220" text-anchor="middle" fill="#0F172A" font-size="10">Branca + solar</text>
    <text x="320" y="232" text-anchor="middle" fill="#64748B" font-size="9">(4,8 kWp)</text>
    <rect x="400" y="190" width="80" height="10" fill="#059669"/>
    <text x="440" y="184" text-anchor="middle" fill="#0F172A" font-size="11" font-weight="600">R$ 50</text>
    <text x="440" y="220" text-anchor="middle" fill="#0F172A" font-size="10">Branca + solar</text>
    <text x="440" y="232" text-anchor="middle" fill="#64748B" font-size="9">+ bateria LFP</text>
  </g>
  <text x="300" y="305" text-anchor="middle" fill="#94A3B8" font-size="9">Valores estimativos com base na REH 3542 e tributos médios DF. Conta real varia com bandeira tarifária, CIP e perfil.</text>
</svg>

## Como solar + bateria blinda o consumidor completamente

Para quem deseja extrair o máximo desempenho contra a Tarifa Branca, a combinação **solar fotovoltaico + bateria estacionária LFP** entrega o controle total sobre o quando se usa a energia gerada. A engenharia por trás disso opera em dois mecanismos complementares, conhecidos no mercado de energia como **Peak Shaving** e **Load Shifting**:

### Peak Shaving — cortar o pico

A bateria atua para reduzir o consumo da rede da distribuidora exatamente nos horários de tarifa cara — Ponta e Intermediário. Quando o sistema fotovoltaico não está mais produzindo (após o pôr-do-sol), a bateria assume parte ou toda a carga residencial, evitando que a tarifa de Ponta seja aplicada ao consumo da casa.

Para a residência de 600 kWh/mês usada como exemplo, com 210 kWh consumidos hoje em Ponta, uma bateria de **10 kWh** com 90% de profundidade de descarga consegue cobrir aproximadamente 270 kWh/mês durante os horários caros — eliminando praticamente toda a exposição à Tarifa de Ponta.

### Load Shifting — deslocar consumo

O sistema híbrido programa a carga da bateria preferencialmente durante o dia, usando a energia solar excedente que iria virar crédito. Esse deslocamento aumenta o autoconsumo simultâneo de 35% (típico em sistemas só fotovoltaicos) para **60% a 80%** em sistemas híbridos bem dimensionados. Resultado prático: menos energia transita pela rede, menos exposição ao Fio B, menos exposição à Branca.

### Quando vale a pena o investimento adicional em bateria

Sistemas híbridos com bateria custam, segundo médias atuais, entre **R$ 4.500 e R$ 6.000 por kWh** de capacidade instalada (bateria + inversor híbrido + projeto + instalação). Para uma bateria de 10 kWh, o adicional sobre um sistema fotovoltaico convencional é da ordem de **R$ 45.000 a R$ 55.000**.

A análise de payback considerando apenas a economia adicional sobre o sistema fotovoltaico puro fica entre **6 e 9 anos**, comparado aos **2-3 anos** do sistema puro. **Entretanto, a bateria entrega valor que vai além do payback financeiro**:

- **Autonomia em quedas de energia** — cada vez mais frequentes em Brasília com eventos climáticos extremos (vendavais, tempestades de raios no fim do período seco).
- **Hedge tarifário** — caso a Tarifa Branca seja seguida por outras formas de tarifa horária mais agressiva (cenário em discussão pela ANEEL para 2027-2030).
- **Demanda futura de carregamento veicular** — quem planeja instalar carregador para carro elétrico ou híbrido plug-in encontra na bateria estacionária o casamento técnico ideal.

Para clientes residenciais de alto padrão em condomínios do Lago Sul, Lago Norte, Park Way, Jardim Botânico, Sudoeste e Águas Claras, a recomendação técnica EcoSunPower tem sido cada vez mais clara: **investir em sistema híbrido com bateria LFP é a melhor proteção financeira contra a próxima década de mudanças tarifárias**, não apenas contra a Branca de 2026.

## Os caminhos pra agir antes da obrigatoriedade chegar

Para o consumidor de Brasília que ainda não tem geração solar, o cenário regulatório está sinalizando uma janela curta. Antes de a Tarifa Branca virar obrigatória — e antes do próximo reajuste anual da Neoenergia em outubro/2026 — vale priorizar três passos técnicos:

### 1. Análise da fatura dos últimos 12 meses

Não basta olhar o consumo médio. É preciso entender a **distribuição horária do consumo** — algo que a fatura tradicional não traz, mas que pode ser inferido pelo perfil da casa (rotina de saída/chegada, equipamentos, presença de ar-condicionado central, hábito de cozinhar à noite). Em alguns casos, a Neoenergia disponibiliza dados horários via o portal do consumidor para residências com medidor já preparado para Branca.

### 2. Simulação Convencional vs. Branca antes de migrar

Para quem não tem solar e está pensando em pedir migração voluntária para Branca: **calcule antes**. Em 80% dos casos residenciais que simulamos, a Branca sai mais cara. Migrar por impulso pode custar caro até que o consumidor possa voltar à Convencional (a migração entre modalidades tem limitações de janela de tempo).

### 3. Dimensionamento solar que privilegia autoconsumo

Para quem vai instalar fotovoltaico agora visando a era da Tarifa Branca, o projeto técnico deve priorizar **autoconsumo simultâneo alto** — sistemas com módulos voltados para leste e oeste em vez de só ao norte, módulos com bifacialidade aproveitando reflexo do solo, inversores com múltiplos MPPTs para diferentes orientações. Quanto mais energia gerada e consumida na mesma hora, **menos energia transita pela rede e menos exposição à tarifa horária**.

Discutimos o impacto do superdimensionamento e da Lei 14.300 no projeto solar no nosso artigo sobre [Créditos vencidos de GD e a Consulta Pública 011/2026](/blog/creditos-vencidos-mmgd-consulta-publica-aneel-2026), e o efeito da bandeira tarifária atual em [Bandeira amarela em maio de 2026](/blog/bandeira-amarela-maio-2026-impacto-conta-luz-df-goias).

## Conclusão: 2026 é o ano em que a conta de luz deixa de ser uma média

Por décadas, o consumidor brasileiro viveu sob o regime de tarifa "média" — uma tarifa por kWh, igual para qualquer hora do dia. Esse modelo está prestes a mudar para a maior fatia do mercado residencial e comercial de baixa tensão. A Tarifa Branca obrigatória em 2026 é apenas o primeiro passo de uma reforma tarifária mais ampla, que tende a aproximar o consumidor brasileiro do modelo de tarifa em tempo real já praticado em mercados maduros como Califórnia, Reino Unido e Austrália.

Para o consumidor que se preparou — instalando geração solar bem dimensionada, otimizando hábitos de consumo, considerando bateria como hedge —, a transição é uma **oportunidade financeira líquida**: cada real adicional cobrado em horário de Ponta é um real adicional economizado pelo sistema fotovoltaico. Para o consumidor que não se preparou, a Branca é um aumento silencioso de até 30% na conta sem qualquer aviso de reajuste tradicional.

Os números oficiais publicados pela ANEEL na REH 3542 não deixam margem para dúvida: o **kWh consumido às 19h custa quase o dobro do kWh consumido à 1h da manhã** na nova modalidade. E quem controla o quando se usa a energia — através de geração própria, armazenamento ou ambos — passa a ter uma vantagem econômica permanente sobre quem depende exclusivamente da rede.

---

A EcoSunPower atende clientes residenciais de alto padrão, comércios e indústrias em todo o Distrito Federal, Entorno do DF e municípios goianos em raio de até 100 km. Realizamos análise técnica das 12 últimas faturas, simulação Convencional vs. Branca, dimensionamento solar com foco em autoconsumo simultâneo e projetos híbridos com bateria LFP para clientes que querem blindagem tarifária completa. Todos os projetos são assinados por **Responsável Técnico CREA/CFT**, com homologação junto à Neoenergia Distribuição Brasília e à Equatorial Goiás.

Se você quer entender o impacto da Tarifa Branca obrigatória no seu perfil de consumo específico antes de 2026, fale com nossa equipe técnica pelo **WhatsApp**. Em até 48 horas você recebe uma análise técnica completa do seu consumo, com simulação dos dois cenários tarifários e proposta de dimensionamento solar — ou solar + bateria — adequado ao seu imóvel.

---

**Fontes:**

- [Resolução Homologatória ANEEL nº 3.542, de 14/10/2025](https://www.gov.br/aneel/pt-br/assuntos/noticias/2025/neoenergia-brasilia-tem-novas-tarifas-de-energia-eletrica-aprovadas-pela-aneel) — Reajuste Tarifário Anual da Neoenergia Distribuição Brasília S.A., vigência de 22/10/2025 a 21/10/2026.
- [Consulta Pública ANEEL sobre modernização tarifária e Tarifa Horária obrigatória](https://www.gov.br/aneel/pt-br/assuntos/noticias/2025/modernizacao-tarifaria-aneel-abre-consulta-publica-sobre-tarifa-horaria-para-consumidores-com-consumo-elevado) — contribuições entre 10/12/2025 e 09/03/2026.
- [Página oficial ANEEL — Tarifa Branca](https://www.gov.br/aneel/pt-br/assuntos/tarifas/tarifa-branca) — estrutura tarifária, postos, regras de fim de semana e feriado.
- Estudo Estratégico Greener, Mercado Solar Fotovoltaico — Janeiro/2026, referência de preços médios R$/kWp por segmento.
