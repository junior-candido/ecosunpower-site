---
title: "Sandbox ONS-DSO: como o corte de MMGD solar vai funcionar no Brasil"
description: "ANEEL e ONS selecionam 5 distribuidoras para testar corte de MMGD solar. Entenda o sandbox, os impactos no seu projeto e como se preparar."
pubDate: 2026-09-25
category: regulacao
heroImage: /blog/sandbox-ons-dso-corte-mmgd-solar-brasil.jpg
heroImageAlt: "Painéis solares em prédio na cidade"
tags: ["MMGD","ANEEL","ONS","geração distribuída","curtailment","Lei 14.300"]
readingTime: 9
sourceAttribution: "Baseado em análise do Canal Solar (24/09/2026) — https://canalsolar.com.br/mmgd-operacao-sin-sandbox-ons-dso-gd/ e reportagem da Agência iNFRA (18/09/2026) — https://agenciainfra.com/blog/ons-e-aneel-selecionam-5-distribuidoras-para-testar-corte-de-mmgd-solar/"
draft: false
---
## O que está sendo testado e por que isso importa para todo o Brasil

A micro e minigeração distribuída (MMGD) solar deixou de ser um recurso invisível para o sistema. Com mais de 40 GW instalados no país, ela virou peça crítica na operação do SIN (Sistema Interligado Nacional). Reconhecendo isso, o ONS (Operador Nacional do Sistema Elétrico) e a ANEEL (Agência Nacional de Energia Elétrica) formalizaram um sandbox regulatório que vai permitir, pela primeira vez, o corte coordenado de geração distribuída em áreas específicas.

Cinco distribuidoras foram escolhidas para começar os testes: Cemig-D (MG), Energisa MT, Neoenergia Elektro (SP), CPFL Paulista (SP) e Copel (PR). Os critérios foram alta penetração de MMGD e maturidade tecnológica da concessão. A proposta do ONS, apresentada em meados de setembro, torna a participação obrigatória para geradores distribuídos nessas áreas — e, importante, sugere que não haja compensação financeira por cortes ou limitações durante o piloto.

Embora o teste comece em apenas cinco concessões, o desenho regulatório que sair dali provavelmente será replicado nacionalmente. Quem projeta, instala ou opera solar em qualquer estado precisa entender o que está em jogo agora — não depois do modelo virar norma.

## Do ACL para a GD: por que o SIN precisa enxergar a MMGD

Historicamente, o ONS opera o sistema a partir de usinas centralizadas e cargas agregadas por distribuidora. A MMGD entrava na conta como redução líquida de demanda: o operador via a carga cair no meio do dia, mas não sabia se aquilo era menor consumo ou mais geração no telhado.

Com o volume atual, essa opacidade virou problema. Em regiões com penetração alta, a curva de carga líquida forma o chamado "duck curve": queda profunda durante o dia (quando o sol gera) e rampa acentuada no fim da tarde (quando o sol some e a demanda sobe). Sem visibilidade e sem controle sobre a MMGD, o ONS precisa ligar térmicas caras para cobrir a rampa, aciona reservas girantes desnecessárias e, em casos extremos, enfrenta risco de sobretensão em alimentadores rurais no meio do dia.

O sandbox ONS–DSO (Distribution System Operator) endereça exatamente isso: cria um protocolo em que o operador do sistema pode solicitar à distribuidora que reduza a geração distribuída em uma região, de forma coordenada e mensurável. É o embrião de uma nova camada operacional no setor elétrico brasileiro.

## O que muda na prática para o proprietário do sistema solar

Se você tem ou pretende instalar um sistema fotovoltaico conectado à rede, três pontos merecem atenção imediata.

**Primeiro: o corte é uma realidade regulatória, não uma hipótese.** Já discutimos em outros posts do blog o avanço do curtailment em usinas centralizadas (veja /blog/curtailment-60-protecao-projeto-solar). Agora o mesmo conceito chega à GD. O sandbox testa a mecânica; a regulamentação definitiva deve sair em 12 a 24 meses.

**Segundo: os inversores precisam estar preparados.** A NBR 16149 e as revisões recentes do PRODIST já preveem funções de controle remoto e limitação de potência ativa. Inversores modernos de fabricantes como Solis, Growatt, Fronius, SMA, Sungrow e Huawei suportam esses comandos via SCADA ou protocolos como Modbus TCP e Sunspec. Sistemas antigos, com inversores sem essa capacidade, tendem a ser os primeiros forçados a atualizações — ou substituições.

**Terceiro: a compensação por energia cortada ainda é indefinida.** A proposta atual do ONS veda ressarcimento durante o sandbox. Isso funciona para um piloto controlado, mas cria precedente perigoso para o mercado. A ABSOLAR e outras entidades já sinalizaram que vão pressionar por regra de compensação na fase permanente — algo que a Justiça, em decisões recentes, tem interpretado de forma conservadora para o gerador.

## Baterias: de acessório a proteção contra curtailment

Até 2024, sistema com bateria em MMGD residencial parecia luxo. Em 2026, com o Fio B a 60% e a perspectiva concreta de cortes de geração, o cálculo mudou. Uma bateria bem dimensionada permite armazenar a energia que seria injetada na rede no horário de maior geração — justamente quando o risco de comando de corte é maior — e usá-la à noite, quando a tarifa cheia incide.

A DAH Solar, por exemplo, lançou recentemente uma linha voltada para adicionar baterias a sistemas fotovoltaicos já existentes, um sinal de que o mercado de retrofit está esquentando. A Solis obteve registro no Inmetro para módulos de bateria de até 261 kWh, endereçando o segmento comercial e industrial.

O ponto econômico: um sistema solar de 10 kWp em região com HSP entre 4,5 e 5,8 h gera algo entre 500 e 900 kWh/mês por conjunto de painéis. Se, no futuro, 10% a 20% dessa geração for cortada sem compensação, o payback pode escorregar de 4 para 5 ou até 6 anos. Uma bateria de 10 a 15 kWh preserva boa parte dessa energia, embora acrescente R$ 25 mil a R$ 45 mil ao investimento inicial dependendo da tecnologia (LFP tipicamente).

## Impacto por perfil de cliente

**Residencial (até 75 kW — microgeração):** o risco de corte individual é baixo no curto prazo. O ONS deve começar pelas minigerações maiores. Ainda assim, vale exigir do integrador inversores com função de controle remoto e prever, no projeto, espaço físico e elétrico para adição futura de baterias.

**Comercial (75 kW a 500 kW):** grupo intermediário. Provável que entre nas ondas seguintes do sandbox conforme os pilotos se expandam. Recomenda-se monitoramento remoto profissional, contrato de O&M que inclua ajustes de parâmetros de inversor e análise anual de perdas por corte.

**Minigeração solar (500 kW a 3 MW):** grupo mais exposto. Nas áreas das cinco distribuidoras do piloto, participação obrigatória. Nas demais, é questão de tempo. Aqui o dimensionamento precisa considerar cenários com 5% a 15% de curtailment não compensado no cálculo de VPL e TIR do projeto.

**Sistemas GD1 (protocolo até 07/01/2023):** têm direito adquirido a regras antigas de compensação até 31/12/2045, incluindo o antigo teto de 5 MW. Mas atenção: o direito adquirido é sobre a compensação de créditos, não necessariamente sobre a operação. Comandos de segurança do sistema tendem a valer para todos.

## Lei 14.300 e o novo desenho da MMGD

É útil relembrar como o teto de MMGD ficou depois da Lei 14.300/2022, porque muito material desatualizado ainda circula:

- **Microgeração:** até 75 kW, todas as fontes.
- **Minigeração solar fotovoltaica:** até 3 MW (fonte não-despachável).
- **Minigeração despachável** (biomassa, cogeração qualificada): até 5 MW.
- Acima do teto, o projeto migra para o ACL (Ambiente de Contratação Livre), onde as regras são outras.

O sandbox ONS–DSO não altera esses limites, mas cria uma camada operacional nova. Um projeto de 2,5 MW solar continua sendo MMGD, mas passa a ter obrigações de comunicação e controle que não existiam em 2022. Quem estiver planejando uma minigeração de médio porte em 2026 ou 2027 precisa incluir no CAPEX itens como sistema SCADA, telemetria compatível com a distribuidora e, cada vez mais, armazenamento.

## Como se preparar tecnicamente agora

Algumas recomendações práticas, válidas para qualquer região do Brasil:

1. **Especifique inversores com suporte a controle remoto de potência ativa e reativa**, atendendo à NBR 16149 revisada. Evite modelos sem porta de comunicação ou sem homologação recente.
2. **Exija monitoramento profissional** com registro histórico mínimo de 12 meses. Sem dado, você não consegue provar corte, quantificar perda, nem pedir revisão contratual.
3. **Reserve espaço físico para bateria futura** no projeto elétrico, mesmo que não instale agora. Prever quadro CC, disjuntores e ventilação evita retrabalho caro em 2 ou 3 anos.
4. **No cálculo de payback, use cenário com 5% a 10% de curtailment não compensado** para minigerações. Para microgeração, cenário conservador de 2% a 5%.
5. **Cheque o contrato com o integrador:** cláusulas de garantia de geração precisam considerar limitação regulatória externa como excludente, mas também prever suporte técnico para eventual atualização de firmware ou parâmetros.

## O que esperar nos próximos 24 meses

O cronograma provável, com base nas discussões públicas de ANEEL e ONS, é este: até o meio de 2027, coleta de dados e ajustes do piloto; segundo semestre de 2027, consulta pública com proposta de regulamentação definitiva; 2028, entrada em vigor da nova sistemática nacional. Em paralelo, o Fio B chega a 75% em 2027 e a 90% em 2028, apertando a economia da GD tradicional e valorizando arquiteturas com armazenamento e autoconsumo.

A leitura estratégica é que a energia solar continua muito atrativa — o payback de 3,5 a 6 anos ainda vence qualquer aplicação financeira conservadora — mas o projeto "padrão" de 2022 não é mais o projeto ótimo de 2026. Quem entende agora as mudanças em curso ganha vantagem competitiva; quem espera vai gastar depois em retrofit.

## Fale com a EcoSunPower

Na EcoSunPower analisamos cada projeto considerando não só a tarifa e a irradiação, mas também o cenário regulatório em evolução: Lei 14.300, sandbox ONS–DSO, curtailment e armazenamento. Se você quer entender como esse novo desenho afeta um sistema específico — residencial, comercial, industrial ou rural — fale com nosso time pelo WhatsApp e receba uma análise técnica com cenários realistas de payback e retorno.

---

*Inspirado em análise do Canal Solar (24/09/2026): [MMGD entra na operação do SIN: o sandbox ONS–DSO e a próxima fronteira da GD](https://canalsolar.com.br/mmgd-operacao-sin-sandbox-ons-dso-gd/) e reportagem da Agência iNFRA (18/09/2026): [ONS e ANEEL selecionam 5 distribuidoras para testar corte de MMGD solar](https://agenciainfra.com/blog/ons-e-aneel-selecionam-5-distribuidoras-para-testar-corte-de-mmgd-solar/).*