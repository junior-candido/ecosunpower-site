---
title: "Caso prático: como blindar um projeto solar contra falhas de proteção externa"
description: "Análise técnica dos prejuízos por falta de DPS, aterramento e SPDA em sistemas fotovoltaicos, com exemplo real de sinistro e custos de reparo evitáveis."
pubDate: 2026-07-29
category: casos
heroImage: /blog/caso-pratico-protecao-externa-sistema-solar-fotovoltaico.jpg
heroImageAlt: "Energia solar em telhado"
tags: ["proteção externa","DPS solar","SPDA fotovoltaico","aterramento","sinistro solar","casos práticos"]
readingTime: 9
sourceAttribution: "Inspirado em artigo do Canal Solar (28/07/2026): O custo invisível da omissão — quanto o integrador solar perde por não instalar proteção externa. Link: https://canalsolar.com.br/integrador-perde-nao-instalar-protecao-externa/"
draft: false
---
## O custo invisível de uma economia mal calculada

Quando um cliente pede desconto no orçamento do sistema solar, o item que costuma sumir primeiro da proposta não é o módulo, nem o inversor. É a **proteção externa**: aterramento reforçado, DPS (Dispositivo de Proteção contra Surtos) classe I e II bem dimensionados, SPDA (Sistema de Proteção contra Descargas Atmosféricas), string box com fusíveis adequados e cabeamento CC com bitola correta. Retirar esses itens tira 3% a 8% do preço da proposta — e coloca em risco 100% do investimento.

No Brasil, país com uma das maiores densidades de descargas atmosféricas do mundo (média de 78 milhões de raios/ano, segundo o INPE), essa economia mal calculada é o motivo mais comum de sinistros em sistemas fotovoltaicos. Neste post, apresento um caso prático real (com dados reproduzíveis em qualquer região) para mostrar o tamanho do prejuízo — e como evitá-lo.

## O caso: sistema de 12 kWp queimado por surto

Um sistema residencial de 12 kWp instalado no interior, com 22 módulos de 550 W e um inversor híbrido de 12 kW, sofreu queima total do inversor e de metade das strings após uma tempestade próxima ao imóvel. Não houve descarga direta na edificação. O que houve foi indução eletromagnética por um raio caído a cerca de 300 metros, propagada pela rede da concessionária e pelo cabeamento CC exposto no telhado.

**Composição original do orçamento (proposta aceita pelo cliente):**

| Item | Valor aproximado |
|---|---|
| Kit (módulos, inversor, estruturas) | R$ 32.000 |
| Instalação e projeto | R$ 8.500 |
| String box básica com DPS classe II simples | R$ 450 |
| Aterramento (haste única, sem malha) | R$ 300 |
| **Total** | **R$ 41.250** |

**O que faltou (proposta técnica ideal, recusada pelo cliente por custo):**

| Item omitido | Valor evitado |
|---|---|
| DPS classe I + II coordenados (CC e CA) | R$ 1.400 |
| Malha de aterramento com 3 hastes interligadas | R$ 900 |
| Equipotencialização das estruturas dos módulos | R$ 600 |
| Cabo de descida SPDA (se não houvesse na edificação) | R$ 1.200 |
| **Total "economizado"** | **R$ 4.100** |

**Prejuízo após o sinistro:**

- Inversor híbrido de 12 kW: R$ 14.500 (fora de garantia por surto — cláusula padrão dos fabricantes)
- 11 módulos danificados: R$ 6.600
- Cabeamento CC substituído: R$ 1.100
- Mão de obra de reparo, retrabalho e ART complementar: R$ 3.800
- 47 dias sem geração (perda de créditos): R$ 950
- **Total do prejuízo: R$ 26.950**

O cliente economizou R$ 4.100 na obra e perdeu quase sete vezes esse valor menos de dois anos depois. O integrador que assinou o projeto, apesar de ter alertado por escrito, ainda foi cobrado judicialmente — situação que se resolveu com o histórico de e-mails e a assinatura do termo de recusa, mas custou tempo, honorários e reputação.

## Por que fabricantes negam garantia em queima por surto

Esse é o ponto que a maioria dos clientes desconhece. Praticamente todos os grandes fabricantes de inversores (Growatt, Fronius, SMA, Sungrow, Deye, Huawei, entre outros) trazem cláusula explícita nos termos de garantia excluindo danos causados por:

- Sobretensões da rede acima do limite normativo
- Descargas atmosféricas diretas ou induzidas
- Instalação sem aterramento conforme a NBR 5410 e a NBR 16690
- Ausência ou subdimensionamento de DPS conforme a NBR IEC 61643-11

Quando o técnico de assistência abre o inversor e encontra placa carbonizada, capacitores estourados ou MOV internos rompidos, o laudo é imediato: **surto externo, sem cobertura**. A discussão termina ali. O consumidor descobre, tarde demais, que o "desconto de R$ 4 mil" o transformou em pagador integral do prejuízo.

## As três camadas de proteção que todo projeto sério tem

Um sistema fotovoltaico bem protegido trabalha em três camadas coordenadas. Cada uma resolve um tipo de ameaça e nenhuma substitui a outra.

### Camada 1: proteção contra descarga direta (SPDA)

Se a edificação tiver captor Franklin, gaiola de Faraday ou mastros captores, os módulos e as estruturas devem ficar dentro do volume protegido calculado pelo método das esferas rolantes (NBR 5419). Quando o telhado não tem SPDA e o sistema é grande (a partir de 20 a 30 kWp em área rural, ou qualquer sistema em ponto isolado exposto), avaliar a instalação de SPDA passa a ser obrigatório do ponto de vista técnico. Em residências urbanas menores, a análise de risco da NBR 5419-2 costuma dispensar SPDA, mas não dispensa as camadas 2 e 3.

### Camada 2: DPS coordenados no lado CC e CA

O cabeamento CC no telhado é uma antena longa. Uma descarga a centenas de metros induz picos de tensão que percorrem os cabos até o inversor. O DPS classe II na string box drena esse surto para o aterramento antes que ele chegue ao MPPT. Do lado CA, outro conjunto de DPS protege a saída do inversor contra surtos vindos da rede da concessionária — que é, estatisticamente, a origem mais comum de queimas em GD residencial. Em zonas com incidência ceráunica alta (grande parte do Centro-Oeste, Norte e Sudeste), o correto é usar DPS combinado classe I+II na entrada geral.

### Camada 3: aterramento e equipotencialização

DPS sem aterramento bom é enfeite caro. A malha de terra precisa ter resistência baixa (idealmente abaixo de 10 ohms, e nunca acima de 25 ohms) e as estruturas metálicas dos módulos, a carcaça do inversor, a string box e o quadro geral precisam estar todos interligados na mesma referência de potencial. Sem essa equipotencialização, o surto encontra caminho preferencial pelo circuito eletrônico do inversor — e o queima justamente porque o DPS não tem para onde escoar o pico.

Para entender melhor como a norma trata esses limites, vale ler nosso outro post sobre [como escolher o inversor solar ideal](/blog/como-escolher-inversor-solar-ideal-tutorial-tecnico-2026), que discute a compatibilidade elétrica entre inversor, string e proteções.

## Quanto pesa a proteção externa no orçamento total

Esta é a pergunta que o cliente deveria fazer antes de pedir desconto. As faixas típicas de mercado no Brasil (Greener, jan/2026, e composições próprias) são:

- **Residencial 4 a 10 kWp**: proteção externa completa representa 3% a 5% do orçamento (R$ 800 a R$ 2.000 em um sistema de R$ 25 mil a R$ 40 mil)
- **Comercial 30 a 75 kWp**: 4% a 7% do orçamento (R$ 6 mil a R$ 15 mil)
- **Rural 50 a 500 kWp**: 5% a 9%, porque em zona rural a exposição a descargas é maior e o SPDA muitas vezes precisa ser projetado do zero
- **Industrial e minigeração acima de 500 kWp**: 6% a 10%, com projeto elétrico detalhado, malha de aterramento dimensionada e DPS classe I+II obrigatórios

Comparando com o custo médio de R$ 3.400/kWp residencial, R$ 2.800/kWp comercial e R$ 3.600/kWp rural, a proteção externa é a menor rubrica do projeto — e a mais rentável em termos de risco evitado.

## Como avaliar se o seu orçamento tem proteção adequada

Antes de assinar contrato, peça ao integrador uma lista clara. Se ele não conseguir responder, é sinal de alerta.

1. **Qual DPS será instalado no lado CC?** Marca, modelo, classe (idealmente II ou I+II), corrente nominal de descarga (In) e corrente máxima (Imax).
2. **Qual DPS será instalado no lado CA?** Mesmo detalhamento, coordenado com o disjuntor geral.
3. **Como será feito o aterramento?** Quantas hastes, qual bitola de cabo de cobre nu (mínimo 16 mm² para o condutor de equipotencialização em sistemas típicos), qual resistência esperada de terra.
4. **As estruturas metálicas serão equipotencializadas?** Deve haver cabo de cobre saindo das trilhos dos módulos até o barramento de terra.
5. **Há necessidade de SPDA?** Se sim, o projeto contempla o volume de proteção segundo a NBR 5419?
6. **A ART/TRT cobre projeto elétrico completo, incluindo proteções?** Ou apenas a instalação dos módulos?

Registre a resposta por escrito. Se o cliente optar por recusar itens de proteção, o integrador sério emite um termo de responsabilidade específico, deixando claro que a garantia do fabricante e a proteção do investimento ficam comprometidas. Não é frescura burocrática — é o que separa o profissional do improvisador.

## O que o seguro solar cobre (e o que não cobre)

Muita gente pensa em contratar seguro fotovoltaico como "plano B" no lugar da proteção física. É um erro. As apólices que cobrem sistemas solares (oferecidas por várias seguradoras nacionais, com prêmios entre 0,3% e 0,7% do valor segurado ao ano) exigem, como pré-requisito, que o sistema esteja instalado conforme as normas — inclusive proteções contra surtos. Após um sinistro, o perito verifica se havia DPS, aterramento e SPDA quando necessário. Se não havia, a indenização é negada ou reduzida.

Ou seja: seguro é complemento da proteção externa, não substituto. E a proteção externa reduz o próprio prêmio, porque diminui a probabilidade estatística de sinistro.

## O recado final para quem vai investir em solar

Energia solar é um investimento de 25 anos. Comprar módulo Tier 1, inversor com garantia estendida e monitoramento em tempo real, mas cortar R$ 2 mil em proteção elétrica, é como blindar o carro e andar sem cinto de segurança. Em algum momento — provavelmente em uma tempestade de verão — a conta chega. E ela vem multiplicada.

O cliente informado exige detalhamento das proteções na proposta técnica, compara integradores por competência normativa (não só por preço/kWp) e entende que o menor orçamento raramente é o mais barato no fim da vida útil do sistema.

Se você está avaliando um projeto solar e quer entender se o orçamento recebido contempla proteção externa adequada para a sua região e o seu tipo de telhado, fale com a EcoSunPower pelo WhatsApp. Analisamos a proposta gratuitamente, comparamos com o padrão técnico das normas NBR 5410, NBR 5419 e NBR 16690 e apontamos o que precisa ser reforçado antes da assinatura.

Inspirado em artigo do Canal Solar (28/07/2026): [O custo invisível da omissão: quanto o integrador solar perde por não instalar proteção externa](https://canalsolar.com.br/integrador-perde-nao-instalar-protecao-externa/).