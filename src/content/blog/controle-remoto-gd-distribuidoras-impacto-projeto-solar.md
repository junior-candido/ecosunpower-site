---
title: "Controle remoto de GD pelas distribuidoras: o que muda no seu projeto solar"
description: "ANEEL abre consulta para permitir corte remoto de até 33 GW de GD. Entenda impactos técnicos, financeiros e como proteger seu projeto solar em 2026."
pubDate: 2026-09-11
category: tecnico
heroImage: /blog/controle-remoto-gd-distribuidoras-impacto-projeto-solar.jpg
heroImageAlt: "Técnico trabalhando com energia solar"
tags: ["geração distribuída","ANEEL","curtailment","MMGD","dimensionamento solar","Lei 14.300"]
readingTime: 9
sourceAttribution: "Inspirado em matérias do Canal Solar (canalsolar.com.br/aneel-controle-distribuidoras-geracao-distribuida) e da Agência iNFRA sobre a Consulta Pública ANEEL 033/2026 e a AIR de 15 de julho de 2026."
draft: false
---
## O que está em jogo: até 33 GW de geração distribuída sob controle da rede

A ANEEL abriu, no início de setembro de 2026, duas consultas públicas complementares (CP 032/2026 e CP 033/2026) que, juntas, redesenham a forma como a micro e minigeração distribuída (MMGD) vai se relacionar com o sistema elétrico brasileiro. O ponto mais polêmico é o seguinte: as distribuidoras poderão, em determinadas condições, **cortar remotamente a injeção de energia** de usinas fotovoltaicas conectadas na rede quando houver risco à operação.

Segundo a Análise de Impacto Regulatório (AIR) da própria ANEEL, a nova regra alcançaria cerca de **33 GW de MMGD** — praticamente todo o parque instalado hoje no país, incluindo mais de 20 GW já em operação e todas as novas conexões que forem feitas a partir da vigência da norma. Isso não é detalhe: é uma mudança estrutural que afeta o rendimento anual esperado, o payback e a forma como projetamos usinas solares no Brasil inteiro.

Este texto explica, em linguagem técnica mas acessível, **o que muda de fato**, **quem é afetado**, e — mais importante — **como continuar dimensionando projetos com segurança** dentro desse novo cenário.

## Quem entra na regra e quem fica de fora

A proposta da ANEEL faz uma separação clara por porte e por data de conexão. Vale a pena guardar este resumo:

| Categoria | Potência | Regra proposta |
|---|---|---|
| Microgeração (residencial típica) | Até 75 kW | Só se aplica a **novas conexões** |
| Minigeração | 75 kW a 5 MW | Se aplica a novas e existentes |
| GD tipo 3 (usinas > 500 kW) | > 500 kW | Se aplica a novas e existentes |
| Sistemas GD1 (conectados até 07/01/2023) | Qualquer porte | Direito adquirido preservado até 2045 |

Ou seja: **quem tem uma usina residencial de 5 a 20 kWp já instalada não será afetado retroativamente**. Mas quem for conectar um sistema novo — inclusive uma residência de 8 kWp — passa a operar sob as novas exigências técnicas, que incluem capacidade de resposta a comandos da distribuidora.

Já no segmento comercial, industrial e rural, o impacto é imediato mesmo para o parque existente quando a usina supera 500 kW ou está na faixa de minigeração. Uma usina de 1,2 MWp instalada em 2024 numa agroindústria, por exemplo, entra na nova regra.

## Por que a ANEEL quer fazer isso agora

A justificativa técnica é legítima e vale entendê-la antes de julgar. A geração distribuída solar cresceu de forma explosiva — de menos de 5 GW em 2020 para mais de 37 GW em 2026 — sem que o sistema de distribuição tivesse a mesma velocidade de modernização. Em muitas subestações do interior do país, a injeção de energia solar no meio do dia já supera a demanda local, causando **fluxo reverso**, elevação de tensão fora dos limites e, em casos extremos, risco de ilhamento não intencional.

O Operador Nacional do Sistema (ONS) vem apontando, desde 2024, que sem mecanismos de controle sobre a GD, o país precisará adotar **curtailment de segurança** — o corte forçado de geração em janelas específicas. Já falamos sobre isso no post [Curtailment no Brasil: como o corte de geração afeta seu projeto solar](/blog/curtailment-brasil-corte-geracao-solar). A diferença agora é que o corte deixa de ser uma emergência pontual e passa a ser uma **funcionalidade regulatória permanente**.

## O impacto real na geração anual

Aqui vem a pergunta que todo cliente faz: **quanto vou perder de geração?** A resposta honesta é: depende da região e do momento em que o corte ocorrer, mas as estimativas iniciais são mais brandas do que a manchete sugere.

Estudos preliminares do setor apontam perdas médias entre **1,5% e 4% da geração anual** para sistemas afetados, concentradas em janelas de baixa demanda (finais de semana ensolarados, feriados, horários entre 11h e 14h). Em regiões com alta penetração de GD e rede saturada — como partes do Nordeste, do interior de Minas Gerais e do Centro-Oeste — o número pode chegar a 6% ou 7% em anos críticos.

Para um sistema residencial de **10 kWp** que gera cerca de 15.000 kWh/ano numa região com HSP de 5,2 h, uma perda de 3% representa 450 kWh/ano — algo em torno de **R$ 380 a R$ 520 por ano** menos de economia, considerando tarifas residenciais entre R$ 0,85 e R$ 1,15/kWh. Não é insignificante, mas também não inviabiliza o investimento.

Já para uma usina comercial de **500 kWp** gerando 780.000 kWh/ano, uma perda de 4% equivale a 31.200 kWh, o que pode significar entre **R$ 20 mil e R$ 28 mil de receita perdida por ano**. Aí o impacto no fluxo de caixa merece atenção real no dimensionamento.

## Como isso muda o dimensionamento e o payback

Com base na experiência técnica que acumulamos e nas primeiras análises pós-consulta pública, três ajustes práticos passam a ser recomendáveis nos novos projetos:

### 1. Adotar fator de curtailment nos cálculos

 Onde antes usávamos performance ratio (PR) de 0,80 a 0,82 para projetos bem executados, agora recomendamos incluir um **fator adicional de disponibilidade de rede** entre 0,96 e 0,98, dependendo da região. Isso equivale a assumir que 2% a 4% da geração teórica não será entregue.

Exemplo: sistema de 100 kWp em região com HSP de 5,4 h.

- Cálculo antigo: 100 × 5,4 × 365 × 0,81 = **159.651 kWh/ano**
- Cálculo ajustado (com fator 0,97): 159.651 × 0,97 = **154.862 kWh/ano**

A diferença de 4.789 kWh/ano precisa entrar na projeção de payback e no contrato apresentado ao cliente. Vender expectativa irrealista hoje é criar frustração amanhã.

### 2. Priorizar a autoconsumo instantâneo

Energia consumida no mesmo instante em que é gerada **não passa pela rede** e, portanto, não está sujeita a corte pela distribuidora. Isso valoriza dimensionamentos mais próximos do consumo diurno real, especialmente em:

- Comércios abertos das 8h às 18h (padarias, restaurantes, lojas)
- Indústrias com turnos diurnos
- Propriedades rurais com irrigação, resfriamento ou ordenha automatizada
- Residências com carro elétrico carregado durante o dia

O velho hábito de superdimensionar para "gerar excedente e usar de noite" perde parte da lógica quando o excedente pode ser cortado.

### 3. Considerar baterias como hedge, não como luxo

Um sistema fotovoltaico com **BESS (Battery Energy Storage System)** deixa de ser um item premium para virar uma proteção estratégica: quando a distribuidora sinalizar corte de injeção, a energia que seria "perdida" passa a carregar o banco. Já discutimos isso em [Como dimensionar um sistema solar híbrido com baterias](/blog/dimensionamento-solar-hibrido-baterias-2026).

Com o BNDES já credenciando empresas para o leilão de baterias e fabricantes como KSTAR e Solis lançando linhas de 5 kWh a 261 kWh para o Brasil, o custo por kWh armazenado caiu para faixa de **R$ 2.800 a R$ 3.800/kWh** em sistemas LFP residenciais e comerciais em 2026. Ainda não é barato, mas o payback do BESS acoplado começa a fechar em cenários específicos.

## O que muda por segmento de cliente

**Residencial (até 75 kWp):** impacto pequeno se o consumo diurno for razoável. A recomendação é dimensionar 5% a 10% acima da meta para compensar eventual curtailment, ou considerar bateria pequena (5 a 10 kWh) para armazenar o excedente diurno.

**Comercial (75 kW a 500 kW):** impacto moderado. Aqui o autoconsumo instantâneo é o grande aliado — comércios com carga diurna alinhada à geração perdem muito pouco. Revisar contratos de performance com integradores é recomendado.

**Industrial e rural (500 kW a 3 MW):** impacto relevante. Todo projeto novo precisa ser modelado com curva horária de geração vs. consumo, e o dimensionamento deve considerar **cenários de corte de 3%, 5% e 7%** para calcular payback conservador. Vale também avaliar migração ao ACL quando o porte se aproximar dos 3 MW (teto da MMGD solar pela Lei 14.300).

**GD1 (conectados até 07/01/2023):** vantagem competitiva preservada. Esses sistemas mantêm as regras antigas até 2045 e não entram no controle remoto. Quem tem, deve preservar.

## Cronograma provável e o que fazer agora

A Consulta Pública 033/2026 tem prazo típico de 45 a 60 dias. A publicação da resolução final deve ocorrer entre o **primeiro e o segundo trimestre de 2027**, com carência de implementação técnica que pode chegar a 12 ou 24 meses para o parque existente.

Na prática, isso significa que **projetos protocolados e conectados ao longo de 2026** ainda entram no regime atual — sem exigência de controle remoto embarcado. Para quem está planejando instalar, a mensagem é clara: **acelerar a decisão** dentro dos próximos meses garante conexão nas regras vigentes, sem custos adicionais de hardware compatível com telecontrole.

Paralelamente, quem já tem sistema deve solicitar cópia atualizada do parecer de acesso e guardar a data de conexão — ela será o documento definitivo para provar direito adquirido, caso a norma final crie ambiguidades.

## Conclusão: mudança de paradigma, não fim do solar

O controle remoto pelas distribuidoras é uma mudança grande, mas está longe de tornar a energia solar inviável. Payback de 3,5 a 6 anos continua realista para a maioria dos perfis, tarifa da rede segue subindo acima da inflação, e o Fio B (60% em 2026, 75% em 2027) já é a maior variável na conta — o curtailment é apenas mais um item a modelar.

O que muda é a **exigência de projeto bem feito**. Cálculos otimistas, dimensionamentos genéricos e propostas que ignoram a curva horária de consumo vão gerar clientes frustrados. Projetos técnicos rigorosos, com fator de disponibilidade realista e estratégia de autoconsumo, seguem entregando retorno excelente.

Se você está avaliando instalar solar em residência, comércio, indústria ou propriedade rural, ou tem dúvidas sobre como essas novas regras afetam um projeto específico, converse com a EcoSunPower pelo WhatsApp. Fazemos análise técnica completa, com curva horária, cenários de curtailment e comparativo com e sem BESS, para você decidir com base em números — não em promessa.

---

*Inspirado em matérias do Canal Solar e da Agência iNFRA sobre a Consulta Pública ANEEL 033/2026: [canalsolar.com.br/aneel-controle-distribuidoras-geracao-distribuida](https://canalsolar.com.br/aneel-controle-distribuidoras-geracao-distribuida/)*