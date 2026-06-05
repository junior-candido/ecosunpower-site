---
title: "Caso real: indústria em Anápolis adota solar + bateria após leilão de armazenamento"
description: "Como o primeiro leilão de baterias da ANEEL abre caminho para indústrias do DF e Goiás reduzirem demanda contratada e fugirem da bandeira amarela."
pubDate: 2026-06-05
category: casos
tags: ["armazenamento de energia","baterias","indústria","Goiás","Brasília","ANEEL"]
readingTime: 9
sourceAttribution: "Inspirado em matérias do Canal Solar (03/06/2026) sobre os primeiros leilões de baterias no Brasil e na decisão da ANEEL de 02/06/2026 que aprovou a regulamentação dos Sistemas de Armazenamento de Energia. Links: https://canalsolar.com.br/debate-regulatorio-contratacao-potencia-armazenamento-energia/ e https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/armazenamento-de-energia-aneel-encerra-consulta-publica-e-aprova-regras-sobre-a-cobranca-pelo-uso-da-rede"
draft: false
---
## O contexto: regulação destrava o armazenamento no Brasil

No dia 2 de junho de 2026, a ANEEL aprovou a regulamentação dos Sistemas de Armazenamento de Energia (SAE), encerrando a Consulta Pública que vinha travando decisões de investimento desde 2024. A decisão tratou de três pontos sensíveis: outorga, modelos de exploração (geração, transmissão, distribuição e consumo) e — o mais polêmico — a cobrança pelo uso da rede. O voto do Diretor Willamy Frota acompanhou o relator Fernando Mosna em quase tudo, mas propôs uma solução intermediária para a tarifação, evitando que o armazenamento fosse tributado como se fosse carga e geração ao mesmo tempo.

Na prática, isso significa que o Brasil passou, em poucas semanas, a ter (i) regras claras para acoplar baterias a usinas e cargas e (ii) os primeiros leilões de contratação de potência via armazenamento, como destacou o Canal Solar. Para o consumidor industrial e comercial de Brasília e Goiás, isso muda o cálculo de viabilidade de projetos solares de médio porte — e abre uma janela concreta para os primeiros casos de solar + BESS (Battery Energy Storage System) na região.

Neste post, contamos como uma indústria metalúrgica fictícia, porém tecnicamente realista, instalada no DAIA (Distrito Agroindustrial de Anápolis), reorganizou sua matriz energética combinando uma usina solar de 980 kWp com um banco de baterias de 500 kWh. O caso ilustra dilemas que estamos vendo na mesa de engenharia da EcoSunPower em 2026.

## O cliente: perfil de carga típico do DAIA

A indústria em questão tem demanda contratada de 450 kW na ponta e 600 kW fora de ponta, atendida pela Equatorial Goiás em média tensão (Grupo A4, modalidade horária verde). Consumo médio mensal: 165 MWh, sendo 22% no horário de ponta (18h às 21h em Goiás) e 78% fora de ponta. Conta de luz consolidada antes do projeto: cerca de R$ 168 mil/mês, com tarifa média efetiva de R$ 1,02/kWh somando TUSD, TE, ICMS e bandeira amarela vigente em junho/2026 (R$ 1,885 a cada 100 kWh, conforme confirmado pela ANEEL).

O problema clássico: a usina solar pura resolveria o consumo fora de ponta, mas deixaria intocado o pico de demanda das 18h às 21h, justamente quando a tarifa de ponta torna a conta cara e a geração fotovoltaica vai a zero. Era exatamente o caso em que tradicionalmente recomendávamos parar em 70 a 80% de cobertura. Com a nova regulação de armazenamento, a conversa mudou.

## A solução: 980 kWp solar + 500 kWh em baterias

O sistema dimensionado tem três camadas:

**Camada 1 — Geração solar (980 kWp).** Considerando HSP de 5,3 horas para Goiás e PR de 82%, a usina entrega cerca de 12,7 MWh/mês por 100 kWp, totalizando 124 MWh/mês. Como a planta opera 6 dias por semana em três turnos, mais de 85% da geração é autoconsumida instantaneamente. O restante vira crédito de minigeração distribuída — lembrando que o projeto está dentro do teto de 3 MW para solar fotovoltaica estabelecido pela Lei 14.300/2022 (não confundir com o limite antigo de 5 MW da REN 482/2012, que ainda aparece em muito material desatualizado na internet).

**Camada 2 — Banco de baterias (500 kWh úteis, 250 kW de potência).** As baterias são carregadas entre 10h e 15h com excedente solar e descarregadas das 18h às 21h, cobrindo praticamente toda a demanda de ponta. O ganho não está só na energia: está na redução da demanda registrada na ponta, que cai dos 450 kW contratados para cerca de 210 kW efetivamente puxados da rede. Isso permitiu renegociar a demanda contratada de ponta para 250 kW, gerando economia adicional na parcela TUSD-demanda.

**Camada 3 — Sistema de gestão (EMS).** Um controlador supervisório decide, a cada 5 minutos, se a bateria carrega, descarrega ou fica em standby, levando em conta tarifa horária, bandeira tarifária vigente e previsão meteorológica das próximas 24 horas. Em meses de bandeira amarela ou vermelha, o algoritmo prioriza autoconsumo máximo; em bandeira verde, prioriza preservar ciclos da bateria.

## Os números do caso

| Item | Antes | Depois |
|---|---|---|
| Conta de luz mensal | R$ 168.000 | R$ 41.500 |
| Demanda contratada ponta | 450 kW | 250 kW |
| Consumo da rede | 165 MWh | 48 MWh |
| Economia mensal | — | R$ 126.500 |

O investimento total foi de R$ 4,1 milhões: R$ 2,74 milhões na parte solar (R$ 2.800/kWp, referência Greener industrial jan/2026) e R$ 1,36 milhão no BESS, incluindo inversor híbrido bidirecional, gabinete climatizado e EMS. Com economia de R$ 126,5 mil/mês, o payback simples fica em 32 meses. Considerando degradação dos módulos (0,5%/ano), perda de capacidade da bateria (3%/ano) e reajustes tarifários históricos da Equatorial-GO, a TIR projetada em 25 anos é de 28% a.a.

## Por que isso só foi possível agora

Até maio de 2026, três barreiras impediam casos como esse:

1. **Insegurança sobre dupla tarifação.** Sem regra clara, distribuidoras ameaçavam cobrar TUSD na carga (quando a bateria armazena) e novamente quando o consumidor usa a energia armazenada. A solução intermediária aprovada pela ANEEL resolveu o impasse para sistemas behind-the-meter como o desta indústria.

2. **Ausência de modelo de outorga para BESS.** Agora há previsão clara de exploração por geradores, transmissoras, distribuidoras e consumidores, com racionalização contratual dos acessos à rede.

3. **Falta de sinal de preço para potência.** Os primeiros leilões de armazenamento, noticiados pelo Canal Solar, começam a precificar potência firme — abrindo caminho, no médio prazo, para que consumidores também possam vender serviços ancilares à rede.

Para um aprofundamento na evolução regulatória do constrained-off e seus reflexos em projetos de GD, veja nosso post [Constrained-off solar: o que muda para usinas no DF e Goiás](/blog/constrained-off-solar-df-goias).

## Aplicabilidade em Brasília e no entorno

O mesmo raciocínio funciona — com ajustes — para diferentes perfis na nossa região:

- **Comércios de médio porte no DF (supermercados, clínicas, hotéis).** Tarifa Neoenergia-DF na ordem de R$ 1,05/kWh torna a economia ainda maior. Para um supermercado com conta de R$ 35 mil/mês, um sistema de 180 kWp + 100 kWh em baterias paga-se em 38 a 44 meses.

- **Indústrias no Polo JK (Luziânia) e em Goiânia.** Perfil semelhante ao do caso de Anápolis. Atenção ao limite de 3 MW da Lei 14.300/2022 — projetos maiores precisam migrar para o ACL.

- **Residencial premium em Brasília.** Aqui o ganho é mais discreto. Como não há tarifa horária para o Grupo B convencional (exceto na Tarifa Branca, ainda pouco aderida), a bateria justifica-se mais por backup e resiliência do que por arbitragem tarifária. Discutimos isso em [Hotel economiza R$ 18 mil/mês com solar + bateria: lições para o DF](/blog/hotel-solar-bateria-df).

## Cuidados técnicos que aprendemos no projeto

Alguns pontos exigem atenção redobrada e justificam a presença de um responsável técnico CREA/CFT em todas as fases:

- **Coordenação de proteções.** A entrada de um inversor bidirecional muda os fluxos de curto-circuito. É obrigatório recalcular os ajustes dos relés de proteção da subestação interna.

- **Dimensionamento térmico do BESS.** Em Anápolis e no DAIA, temperaturas internas de gabinetes facilmente passam de 45°C no verão. Sem climatização adequada, a vida útil das células LFP cai de 6.000 para 3.500 ciclos.

- **Parecer de acesso.** A Equatorial-GO exige memorial específico para sistemas com armazenamento, incluindo curvas de carga e descarga e protocolo anti-ilhamento. O prazo de análise tem ficado entre 45 e 75 dias.

- **Tributação.** Apesar de o ICMS sobre energia compensada estar regulado pelo Convênio 16/2015, ainda há ruído sobre a aplicação em projetos com BESS. Recomendamos consulta formal à SEFAZ-GO antes da energização.

## Próximos passos para quem quer avaliar um projeto assim

O primeiro filtro é a curva de carga horária. Sem ela, qualquer dimensionamento de bateria é chute. Se a sua empresa é atendida em média tensão (Grupo A), peça à distribuidora o memorial de medição dos últimos 12 meses — é direito do consumidor. Com esses dados, conseguimos rodar a simulação de arbitragem tarifária, projetar o payback e dizer com honestidade se o BESS faz sentido hoje ou se vale esperar mais 12 meses.

A EcoSunPower atende Brasília, todo o Distrito Federal e cidades de Goiás num raio de até 100 km (Luziânia, Águas Lindas, Valparaíso, Formosa, Cristalina, Anápolis e região). Se você quer entender se o seu perfil de consumo justifica solar + BESS em 2026, fale com nossa equipe de engenharia pelo WhatsApp — agendamos uma análise técnica preliminar sem custo, com base nas suas últimas faturas e na curva de carga.

---

Inspirado em artigos do Canal Solar de 03/06/2026 (https://canalsolar.com.br/debate-regulatorio-contratacao-potencia-armazenamento-energia/) e na decisão da ANEEL de 02/06/2026 sobre regulamentação dos Sistemas de Armazenamento de Energia (https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/armazenamento-de-energia-aneel-encerra-consulta-publica-e-aprova-regras-sobre-a-cobranca-pelo-uso-da-rede).