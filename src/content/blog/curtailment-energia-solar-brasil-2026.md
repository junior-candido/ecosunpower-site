---
title: "Curtailment no Brasil: como o corte de geração afeta seu projeto solar"
description: "Entenda o que é curtailment, por que ele cresce no Brasil e como reduzir o risco em projetos solares de MMGD e usinas de grande porte em 2026."
pubDate: 2026-09-05
category: tecnico
heroImage: /blog/curtailment-energia-solar-brasil-2026.jpg
heroImageAlt: "Painéis solares em detalhe"
tags: ["curtailment","energia solar","MMGD","geração distribuída","ONS","dimensionamento"]
readingTime: 9
sourceAttribution: "Inspirado em pauta da Abeeólica publicada em 01/09/2026 pela Agência iNFRA (https://agenciainfra.com/blog/abeeolica-pede-a-presidenciaveis-plano-nacional-para-reduzir-curtailment/) e em análises do Canal Solar sobre o tema."
draft: false
---
## O que é curtailment e por que ele virou pauta nacional

Curtailment é o corte forçado de geração renovável determinado pelo Operador Nacional do Sistema Elétrico (ONS) quando a rede de transmissão não consegue escoar toda a energia produzida naquele momento. Na prática, a usina está pronta para injetar, o sol está no zênite, os módulos operando dentro da curva, mas o despacho é reduzido — às vezes zerado — por restrição elétrica, sobretensão ou excesso de oferta em uma determinada área.

O tema ganhou tração em 2026 depois que a Abeeólica apresentou aos presidenciáveis uma proposta de Plano Nacional de Redução do Curtailment, com metas anuais de diminuição dos cortes. Embora o pleito venha do setor eólico, o problema atinge frontalmente a geração solar centralizada, especialmente no Nordeste, e começa a espalhar preocupação também entre integradores de minigeração distribuída (MMGD) que operam próximo dos limites da rede.

Para quem investe em solar — seja uma residência de 5 kWp, um comércio de 75 kWp ou uma usina de 3 MW — entender o curtailment deixou de ser assunto exclusivo de gerador centralizado. Ele impacta diretamente o retorno financeiro, o dimensionamento e a escolha de topologia do sistema.

## Por que os cortes aumentaram em 2025 e 2026

O Brasil viveu uma expansão acelerada da geração renovável entre 2020 e 2025. Só a fonte solar saltou de aproximadamente 8 GW instalados em 2021 para mais de 55 GW em 2026, somando geração centralizada e distribuída. Já as obras de transmissão, por natureza mais lentas, não acompanharam o ritmo.

O resultado é um descompasso estrutural. Nos horários de maior irradiação (entre 10h e 15h), várias subestações do Nordeste e do Centro-Oeste operam no limite de escoamento. O ONS, então, aciona o Constrained-Off, reduzindo a geração para preservar a estabilidade do sistema.

Os principais fatores por trás dos cortes:

- **Gargalos de transmissão** em regiões com alta densidade de usinas (Bahia, Piauí, Ceará, Rio Grande do Norte).
- **Sobrefrequência e sobretensão local** em alimentadores de distribuição com muita MMGD conectada.
- **Falta de flexibilidade do sistema**, com pouca capacidade de armazenamento e de resposta rápida da demanda.
- **Atrasos em leilões de transmissão** e em obras de reforço já contratadas.

Embora hoje o curtailment afete majoritariamente usinas de grande porte, os efeitos começam a chegar à MMGD por dois caminhos: recusa de parecer de acesso em alimentadores saturados e limitação da potência injetada durante períodos específicos.

## Impacto financeiro: como o corte muda o payback

Um sistema solar bem dimensionado no Brasil trabalha com um fator de capacidade médio entre 18% e 22%, dependendo da região (HSP de 4,5 a 5,8 horas). Quando entra o curtailment, esse fator cai.

Veja uma simulação simples para uma usina de 1 MWp em uma região com HSP de 5,5 h:

| Cenário | Geração anual estimada | Receita anual (a R$ 0,35/kWh no ACL) | Perda vs. cenário base |
|---|---|---|---|
| Sem curtailment | 1.900 MWh | R$ 665 mil | — |
| Curtailment de 5% | 1.805 MWh | R$ 631 mil | R$ 34 mil/ano |
| Curtailment de 12% | 1.672 MWh | R$ 585 mil | R$ 80 mil/ano |
| Curtailment de 20% | 1.520 MWh | R$ 532 mil | R$ 133 mil/ano |

Para projetos de MMGD, o impacto é diferente, mas existe. Se o inversor for limitado por comando da distribuidora em horários críticos, a energia deixa de ser injetada e de gerar crédito. Considerando tarifa residencial média no Brasil entre R$ 0,85 e R$ 1,15/kWh, uma perda de 10% da geração em um sistema de 8 kWp pode significar de R$ 900 a R$ 1.400 por ano — o suficiente para estender o payback em vários meses.

## Como o integrador deve avaliar o risco antes de fechar o projeto

Antes de propor um sistema, especialmente acima de 75 kW, três verificações técnicas passaram a ser obrigatórias em 2026:

### 1. Consulta prévia à distribuidora

Peça informação formal sobre a capacidade disponível do alimentador e da subestação onde o projeto será conectado. Muitas concessionárias já publicam mapas de capacidade em seus portais. Se o alimentador estiver com mais de 80% de ocupação por GD, o risco de restrição de potência injetada é real.

### 2. Análise da curva de carga do cliente

Sistemas que geram e consomem simultaneamente sofrem menos com eventuais restrições de injeção. Comércios, indústrias e produtores rurais com operação diurna são naturalmente menos expostos. Já residências e comércios com pico noturno dependem 100% da injeção na rede.

### 3. Simulação com fator de descasamento

Recomendo que integradores incluam no memorial de cálculo uma margem de 3% a 8% de perda por eventual limitação, dependendo da região. Isso protege o cliente de expectativas irreais e evita revisões dolorosas no payback dois anos depois.

## Estratégias técnicas para mitigar o risco de corte

Há alternativas concretas — algumas já bem estabelecidas, outras emergentes — para reduzir a exposição ao curtailment. Escolher a certa depende do porte e do perfil de consumo.

**Oversizing do gerador em relação ao inversor (DC/AC ratio)**: trabalhar com relações de 1,25 a 1,40 aumenta a geração nas pontas do dia (manhã e fim de tarde), quando a rede costuma estar menos congestionada. É uma prática já consolidada e continua sendo o primeiro passo para maximizar rendimento sem estressar a rede no horário crítico.

**Armazenamento com baterias LFP**: sistemas híbridos permitem carregar bateria no horário de pico solar e injetar (ou autoconsumir) mais tarde. Com a queda de preço das baterias de fosfato de ferro-lítio, projetos comerciais acima de 30 kWp já começam a mostrar viabilidade — veja nosso outro post sobre [baterias LFP residenciais em 2026](/blog/baterias-lfp-residenciais-2026).

**Controle inteligente de injeção (zero export ou soft export)**: em locais com restrição, configurar o inversor para não injetar excedente e priorizar autoconsumo evita rejeições regulatórias. Perde-se parte do crédito, mas garante-se a conexão.

**Escolha estratégica de orientação**: painéis voltados para leste ou oeste (em vez de norte puro) geram menos energia total, mas distribuem a curva ao longo do dia, aliviando o pico de meio-dia. É útil em telhados grandes com margem para acomodar mais módulos.

**Migração para o ACL em projetos grandes**: usinas acima de 3 MW não cabem mais na MMGD (o teto para fonte solar caiu para 3 MW pela Lei 14.300/2022). No Ambiente de Contratação Livre, o gerador pode contratar hedge, seguros de geração e produtos financeiros que compensam parte da perda por curtailment.

## O que esperar do cenário regulatório

O debate político sobre curtailment ainda está em fase inicial, mas três frentes merecem atenção:

1. **Leilão de baterias da ANEEL**: previsto para dezembro de 2026, é um passo importante para dar flexibilidade ao sistema. Se o certame não for adiado, os primeiros sistemas de armazenamento de grande porte devem entrar em operação a partir de 2028, aliviando parte do problema.
2. **Compensação financeira aos geradores cortados**: o setor pressiona para que os cortes por restrição sistêmica (não causados pelo gerador) sejam ressarcidos, similar ao que ocorre em outros países. Ainda não há consenso.
3. **Reforço de transmissão**: os próximos leilões da ANEEL devem priorizar linhas em regiões congestionadas. O prazo típico de execução é de 4 a 6 anos.

Para o consumidor final que pensa em instalar solar hoje, a mensagem é clara: o curtailment é um risco que existe, mas continua concentrado em usinas grandes e regiões específicas. Sistemas residenciais e comerciais bem dimensionados, com autoconsumo elevado e conectados em alimentadores com folga, seguem entregando payback entre 3,5 e 6 anos.

## Checklist para o cliente antes de assinar o contrato

- Solicitou parecer de acesso preliminar e recebeu resposta positiva da distribuidora?
- O memorial de cálculo já considera margem de perda por eventual limitação?
- O sistema foi projetado priorizando autoconsumo (curva de carga alinhada com geração)?
- Há espaço técnico e orçamentário para incluir bateria no futuro, se necessário?
- O contrato de fornecimento prevê o comportamento do sistema em caso de restrição de injeção?

Quem ignora esses pontos corre o risco de descobrir, meses após a energização, que a economia projetada não se concretiza. Quem trata cada um deles ganha um projeto sólido, com previsibilidade financeira e pronto para os próximos ciclos regulatórios.

## Conclusão

O curtailment não é um problema que vá desaparecer nos próximos dois ou três anos. É consequência natural da velocidade com que o Brasil renovou sua matriz — e vai continuar existindo enquanto transmissão, armazenamento e geração não voltarem a se equilibrar. A boa notícia é que, para a imensa maioria dos projetos de MMGD, ele é gerenciável com bom dimensionamento, análise prévia da rede e, quando faz sentido, integração com baterias.

Se você está avaliando instalar energia solar — residencial, comercial, rural ou industrial — ou quer uma segunda opinião técnica sobre um projeto que já recebeu, fale com o time da EcoSunPower pelo WhatsApp. Fazemos análise personalizada de viabilidade, consulta de capacidade do alimentador e simulação de payback com cenários realistas, incluindo margem para eventuais restrições da rede.

Inspirado em artigo da Agência iNFRA sobre a pauta da Abeeólica: https://agenciainfra.com/blog/abeeolica-pede-a-presidenciaveis-plano-nacional-para-reduzir-curtailment/