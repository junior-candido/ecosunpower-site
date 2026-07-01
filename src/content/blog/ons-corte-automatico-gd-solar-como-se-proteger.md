---
title: "ONS vai cortar GD solar automaticamente: como se proteger tecnicamente"
description: "ANEEL e ONS avançam no corte automático de geração distribuída solar. Entenda o Erag, o impacto no ROI e como dimensionar projetos para reduzir perdas."
pubDate: 2026-07-01
category: tecnico
heroImage: /blog/ons-corte-automatico-gd-solar-como-se-proteger.jpg
heroImageAlt: "Painéis solares fotovoltaicos"
tags: ["curtailment solar","ONS","geração distribuída","Erag","dimensionamento","Lei 14.300"]
readingTime: 9
sourceAttribution: "Inspirado em reportagens da Agência iNFRA (29/06/2026) e Canal Solar (30/06/2026) sobre o Esquema Regional de Alívio de Geração (Erag) e o corte de 20 GW de renováveis durante o jogo Brasil x Japão na Copa."
draft: false
---
## O que está acontecendo: o Brasil vai cortar GD solar automaticamente

O Operador Nacional do Sistema Elétrico (ONS) planeja iniciar, ainda em 2026, um mecanismo automático de corte de usinas de geração distribuída (GD) solar em momentos de excesso de oferta e risco à estabilidade da rede. O sistema foi batizado de **Erag — Esquema Regional de Alívio de Geração**, em analogia ao já existente Erac (Esquema Regional de Alívio de Carga), que desliga blocos de consumo quando o sistema está prestes a colapsar.

O episódio que acendeu o alerta ocorreu durante o jogo Brasil x Japão na Copa: o ONS cortou aproximadamente **20 GW de geração renovável** de forma coordenada, principalmente eólica e solar centralizada, porque o consumo caiu abruptamente enquanto o sol e o vento continuavam gerando. É o cenário clássico da chamada **curva do pato**, agora amadurecendo no Brasil.

Para quem investe em energia solar — residencial, comércio, indústria ou produtor rural — a pergunta é direta: **meu sistema pode ser desligado remotamente pelo operador do sistema?** E, em caso positivo, como isso afeta o payback? Este post responde essas duas perguntas com dados técnicos e recomendações práticas para projetos em qualquer região do país.

## O que é o Erag e quem entra na mira do corte

O Erag é um mecanismo de proteção sistêmica. Quando o ONS detectar que há mais geração do que carga em determinada região — condição que já ocorre no meio do dia em vários estados do Nordeste, Sudeste e Centro-Oeste —, blocos de geração distribuída poderão ser desconectados automaticamente por telecomando via distribuidora.

Os agentes ouvidos pela imprensa especializada afirmam que o **caminho é longo**: depende de investimento em modernização das redes de distribuição, sistemas de telemetria e comunicação com inversores. Ainda assim, o cronograma inicial prevê os primeiros testes no último bimestre de 2026.

A fila de prioridade para o corte deve seguir uma lógica hierárquica:

1. **Usinas de geração centralizada** (parques solares e eólicos de grande porte) já sujeitas ao constrained-off contratual.
2. **Minigeração distribuída** (sistemas entre 75 kW e 3 MW) conectada em média tensão.
3. **Microgeração distribuída** (até 75 kW), residencial e comercial pequeno — último a ser afetado, mas potencialmente incluído em regiões críticas.

O consumidor residencial típico, com sistema de 4 a 10 kWp, dificilmente será o primeiro alvo. Mas quem tem projetos de minigeração — usinas comerciais, industriais ou remotas de médio porte — precisa considerar o Erag como variável real de projeto a partir de agora.

## Impacto no ROI: quanto o corte pode custar ao investidor

Em sistemas de GD, cada kWh não injetado por corte é um kWh de crédito que deixa de existir. Vamos aos números.

Considere uma usina comercial de **500 kWp** em uma região com HSP média de 5,2 h/dia. A produção anual esperada é de aproximadamente **780 MWh**. Com a tarifa cheia da concessionária local em torno de R$ 0,95/kWh (variando de R$ 0,85 a R$ 1,15/kWh no Brasil) e considerando o Fio B de 60% em 2026 sobre a parcela injetada, o valor bruto compensado anualmente fica na faixa de **R$ 620 a R$ 700 mil**.

Se o Erag aplicar cortes em 3% a 8% da geração anual — patamar realista para regiões com alta penetração de solar —, o impacto financeiro é de **R$ 18 mil a R$ 56 mil por ano** perdidos em créditos. Em um projeto com payback originalmente projetado em 4,2 anos, essa perda pode alongar o retorno para 4,6 a 5,0 anos.

Para microgeração residencial (5 a 10 kWp), o impacto absoluto é menor — algo entre R$ 150 e R$ 500 por ano no pior cenário —, mas ainda relevante para quem calcula o investimento com margem apertada.

## Como se proteger tecnicamente: sete estratégias de projeto

### 1. Dimensionar com fator de conservadorismo

Até agora, o mercado usava fator de perdas típico de 18% a 22% (sombreamento, temperatura, cabeamento, sujidade, inversor). A partir de 2027, recomenda-se acrescentar **1% a 3% adicionais** referentes a curtailment estimado em regiões com alta penetração de GD. Isso significa dimensionar levemente maior o gerador para compensar o corte esperado.

### 2. Priorizar autoconsumo sobre injeção

O Fio B em 2026 já é de 60% e vai a 75% em 2027. Cada kWh consumido na hora da geração vale mais que cada kWh injetado. Ajustar rotinas de consumo — bombas d'água, ar-condicionado, câmaras frias, carregamento de veículo elétrico — para o horário de pico solar (10h às 15h) protege o projeto tanto do Fio B quanto de eventuais cortes futuros.

### 3. Considerar armazenamento (BESS)

O episódio do shopping que perdeu clientes durante o jogo do Brasil, noticiado nesta semana, mostra que o BESS (Battery Energy Storage System) deixou de ser luxo. Para projetos comerciais e industriais acima de 100 kWp, uma bateria dimensionada para 1 a 2 horas de autonomia parcial (20% a 40% da carga crítica) transforma energia que seria cortada em consumo real ou em créditos deslocados para o período noturno. Já publicamos análise detalhada em [nosso post sobre baterias e ampliação de créditos GD](/blog/baterias-aumento-creditos-gd).

### 4. Escolher inversores com curtailment programável

Inversores modernos (Solplanet, Sungrow, Fronius, Growatt linha premium, Huawei) já suportam **setpoints remotos de potência ativa** via protocolos SunSpec Modbus, IEC 61850 e DNP3. Ao especificar o projeto, exija do integrador equipamentos homologados para receber comandos de despacho remoto — isso será exigência regulatória em breve.

### 5. Estudar a topologia da subestação alimentadora

Em áreas onde a subestação da distribuidora já opera com fluxo reverso frequente (indicativo de saturação de GD no alimentador), o risco de corte é maior. Ao decidir onde instalar uma usina remota ou de autoconsumo remoto, priorize alimentadores com carga elevada e baixa penetração atual de GD — geralmente áreas industriais ou centros urbanos de alta densidade.

### 6. Modelagem financeira com cenários

Não apresente ao cliente apenas o cenário otimista. Trabalhe com três projeções:

- **Base:** payback com perdas normais.
- **Moderado:** payback com 3% de curtailment anual.
- **Pessimista:** payback com 8% de curtailment + Fio B acelerado.

Se o projeto se mantém viável no cenário pessimista, o investimento é sólido.

### 7. Aproveitar o direito adquirido dos sistemas GD1

Sistemas que solicitaram acesso até 07/01/2023 (chamados GD1) têm direito ao regime antigo até **31/12/2045**, incluindo o limite de 5 MW e o Fio B mais favorável. Esses ativos, quando existentes, são particularmente valiosos e devem ser preservados em qualquer expansão ou reforma.

## Tabela comparativa: como o corte afeta diferentes portes

| Porte do sistema | Potência típica | Risco de corte pelo Erag | Ação recomendada |
|---|---|---|---|
| Residencial | 4 a 10 kWp | Baixo | Autoconsumo no horário solar |
| Comercial pequeno | 20 a 75 kWp | Baixo a médio | Autoconsumo + monitoramento |
| Comercial médio | 75 a 500 kWp | Médio | BESS parcial + inversor com setpoint remoto |
| Industrial / rural grande | 500 kWp a 3 MW | Alto | BESS + engenharia de despacho + contrato com distribuidora |
| Geração compartilhada remota | qualquer porte | Médio a alto | Diversificação de alimentadores |

## O contexto regulatório: o que ainda pode mudar

A ANEEL aprovou também nesta semana as regras de transição para autoprodução (Lei 15.269/2025), com prazo de até três anos. Isso reforça que o desenho da GD no Brasil está em fase de ajuste fino, e mais mudanças virão. Entre os pontos em aberto:

- **Compensação pelo corte:** haverá indenização ao gerador de GD? Na geração centralizada existe o constrained-off, com regras específicas. Na GD, ainda não.
- **Priorização por tipo de conexão:** trifásica vs. monofásica, urbana vs. rural.
- **Interação com bandeiras tarifárias:** a bandeira amarela mantida para julho, com adicional de R$ 1,885 a cada 100 kWh, mostra que o sistema segue estressado — o que aumenta a pressão para modernizar a rede.

Acompanhar essa regulação virou parte do trabalho do integrador. Um projeto bem executado hoje precisa considerar não só a Lei 14.300, mas o pacote de resoluções que vai construindo o Erag e o novo desenho da GD brasileira.

## Conclusão: solar continua ótimo negócio, mas exige projeto competente

O corte automático de GD não é o fim da energia solar no Brasil — está longe disso. O país ainda tem penetração modesta de GD frente ao seu potencial e a demanda continua crescendo (data centers, eletrificação de veículos, mineração de dados, industrialização verde). O que muda é o **grau de sofisticação exigido do projeto**.

Usinas dimensionadas no chute, com inversores baratos sem capacidade de despacho remoto, e sem consideração do perfil de consumo do cliente, vão sofrer mais. Projetos técnicos bem executados, com engenharia de despacho, inversores certos e — quando faz sentido — armazenamento, seguirão entregando payback abaixo de cinco anos com folga.

Quer avaliar se o seu projeto atual ou futuro está preparado para o cenário do Erag? Fale com a equipe técnica da EcoSunPower no WhatsApp: fazemos análise de risco de curtailment, revisão de dimensionamento e projeto de retrofit com armazenamento para clientes de todo o Brasil.

---

*Inspirado em reportagens da [Agência iNFRA sobre o caminho longo do corte automático de GD](https://agenciainfra.com/blog/agentes-relatam-caminho-longo-para-corte-automatico-de-gd-solar/) e do [Canal Solar sobre o corte de 20 GW durante Brasil x Japão](https://canalsolar.com.br/ons-cortou-20-gw-de-geracao-renovavel-durante-brasil-x-japao-na-copa/).*