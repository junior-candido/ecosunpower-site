---
title: "Previsão da GD solar pelo ONS: o que muda para quem gera energia"
description: "ONS prepara novo modelo para prever a geração distribuída solar no Brasil. Entenda os impactos técnicos, riscos de curtailment e como se proteger."
pubDate: 2026-07-13
category: tecnico
heroImage: /blog/previsao-gd-solar-ons-o-que-muda.jpg
heroImageAlt: "Técnico trabalhando com energia solar"
tags: ["geração distribuída","ONS","previsão solar","curtailment","energia solar","operação do SIN"]
readingTime: 9
sourceAttribution: "Inspirado em artigo do Canal Solar (10/07/2026): https://canalsolar.com.br/ons-estudo-previsao-gd-brasil/"
draft: false
---
## Por que a previsão da GD virou dor de cabeça do ONS

A geração distribuída (GD) solar brasileira ultrapassou a marca de 40 GW de potência instalada e continua crescendo em ritmo acelerado. Só que, do ponto de vista do Operador Nacional do Sistema Elétrico (ONS), essa energia é praticamente invisível em tempo real: são milhões de sistemas pequenos, espalhados por telhados residenciais, comércios, agroindústrias e miniusinas em todas as regiões do país, sem telemetria individual conectada ao centro de operação.

O ONS anunciou que apresentará, em workshop técnico, um estudo para aprimorar a previsão da GD fotovoltaica no Brasil. A iniciativa é uma resposta direta ao problema crescente que já afeta o dia a dia da operação: quando o operador erra a estimativa de quanta energia os telhados vão injetar na rede, o sistema precisa reagir com cortes em usinas centralizadas (curtailment), acionamento de térmicas caras ou até desligamentos programados de GD. Todos esses ajustes têm custo — e, direta ou indiretamente, chegam ao consumidor.

Para quem investe em solar, entender esse movimento é estratégico. As decisões que o ONS tomar nos próximos meses podem mudar a forma como sistemas de médio e grande porte são operados, monitorados e até dimensionados.

## Como o ONS enxerga (ou deixa de enxergar) a GD hoje

Diferentemente das usinas centralizadas — que possuem medição em tempo real, previsão meteorológica dedicada e comando de despacho —, a GD é tratada estatisticamente. O ONS estima quanto os sistemas fotovoltaicos vão produzir a partir de:

- Base cadastral da ANEEL (potência instalada por subestação).
- Modelos de irradiação solar por região.
- Curvas típicas de geração ao longo do dia.
- Histórico de carga líquida (consumo observado menos geração estimada).

O problema é que essa abordagem tem margem de erro alta. Em dias de nebulosidade parcial, frentes frias no Sul, ou chuvas concentradas no Sudeste, a diferença entre previsto e realizado pode ultrapassar 20% da geração estimada. Em picos de sol no Nordeste e Centro-Oeste, onde o HSP passa de 5,5 horas, a GD chega a superar temporariamente a carga de subestações inteiras — algo que os modelos antigos não conseguiam antecipar.

O resultado prático é a chamada **carga líquida negativa**: horários em que uma cidade ou região exporta mais energia do que consome. Quando isso não é previsto, sobra energia no sistema, a frequência sobe e o ONS precisa comandar cortes de geração centralizada ou, em casos extremos, desligar trechos da própria GD.

## O que o novo estudo do ONS pretende mudar

A proposta em discussão vai na direção de um modelo híbrido, combinando três camadas:

1. **Dados cadastrais atualizados** da ANEEL, incluindo tipo de sistema, orientação e inclinação declaradas.
2. **Previsão meteorológica de alta resolução**, com dados de irradiância por microrregião.
3. **Machine learning** treinado com o histórico de carga líquida das distribuidoras, capaz de detectar o comportamento real da GD mesmo sem telemetria direta.

O objetivo declarado é reduzir o erro de previsão para menos de 10% na média nacional em condições típicas. Se conseguir, o ONS ganha três benefícios operacionais imediatos:

- Menos acionamento de térmicas caras nos horários de nuvens inesperadas.
- Menor risco de curtailment forçado em usinas eólicas e solares centralizadas.
- Redução da probabilidade de comandos de desligamento em cima da GD, sobretudo nos alimentadores mais saturados.

## O elo com o corte automático da GD

Esse estudo não pode ser lido isoladamente. Ele conecta diretamente com outra pauta técnica já em discussão: o desenvolvimento de **capacidade de corte remoto da GD** por parte do ONS, quando a rede estiver saturada ou o excedente ameaçar a estabilidade do sistema.

A lógica é simples: quanto melhor a previsão, menos o operador precisa recorrer a cortes emergenciais. E, quanto mais transparente for a metodologia, mais previsível fica o risco para o gerador. Para quem já tem projeto operando ou planeja instalar nos próximos meses, essas duas iniciativas caminham juntas e devem moldar as regras técnicas da GD até 2028.

Se você quer entender o outro lado dessa equação, vale ler o post [ONS vai cortar GD solar automaticamente: como se proteger tecnicamente](/blog/ons-cortar-gd-solar-automaticamente).

## Faixas de potência: quem deve se preocupar mais

O impacto da nova política de previsão não é igual para todos os perfis. Vale separar:

### Microgeração (até 75 kW)

Sistemas residenciais e pequenos comércios continuam praticamente imunes a comandos individuais. O que muda para eles é indireto: com previsão melhor, o custo sistêmico cai e a pressão para novas restrições regulatórias diminui.

### Minigeração solar (75 kW a 3 MW)

Aqui está a faixa mais sensível. É o segmento típico de agronegócio, indústrias médias, condomínios comerciais e usinas de geração compartilhada. Projetos acima de 500 kWp já estão no radar do ONS e das distribuidoras para eventuais programas de telemetria obrigatória. Se você tem ou está planejando um sistema nessa faixa, considere:

- Especificar inversores com capacidade de comunicação Modbus TCP e protocolo IEC 61850.
- Prever infraestrutura de rede de dados no projeto (fibra ou 4G/5G industrial).
- Registrar corretamente a orientação e inclinação dos módulos no processo de acesso.

### Sistemas acima de 3 MW

Pela Lei 14.300/2022, projetos solares novos acima de 3 MW não se enquadram mais em GD e vão para o Ambiente de Contratação Livre (ACL). Ali, telemetria e previsão de geração já são obrigatórias e contratuais. Projetos GD1 (com acesso solicitado até 07/01/2023) mantêm o direito adquirido ao limite antigo de 5 MW até 2045, mas devem ficar atentos ao aumento de exigências operacionais.

## Como isso afeta seu payback

Muita gente pergunta se essas mudanças matam o negócio do solar. Não matam — mas mudam o cálculo de sensibilidade. Considerando as faixas nacionais atuais:

| Segmento | CAPEX médio (R$/kWp) | Tarifa (R$/kWh) | Payback típico |
|---|---|---|---|
| Residencial | 3.400 | 0,85 a 1,15 | 4 a 6 anos |
| Comercial | 2.800 | 0,70 a 0,95 | 3,5 a 5 anos |
| Rural | 3.600 | 0,65 a 0,90 | 4,5 a 6 anos |
| Industrial (BT/MT) | 2.200 | 0,55 a 0,80 | 3 a 4,5 anos |

Se futuramente houver curtailment médio de 3% a 5% em regiões saturadas — cenário conservador dos estudos internacionais aplicados ao Brasil —, o payback aumenta em algo entre 2 e 4 meses. É um impacto real, mas absorvível, especialmente porque:

- A tarifa continua subindo acima da inflação (a conta de luz foi o item que mais pesou no IPCA de junho de 2026, segundo o IBGE).
- A bandeira amarela segue em vigor, adicionando R$ 1,885 a cada 100 kWh consumidos da rede.
- O cronograma do Fio B da Lei 14.300 chega a 60% em 2026 e 75% em 2027, o que penaliza quem adiar a decisão de instalar.

## O que fazer agora, na prática

Para projetos residenciais e pequenos comerciais, o recado é: nada muda no curto prazo. Continue avaliando a instalação pelo custo da conta e pelo cronograma do Fio B — os pequenos não estão no radar operacional do ONS.

Para projetos de minigeração e usinas de médio porte, cinco recomendações técnicas:

1. **Escolha inversores com telemetria nativa** e API aberta. Fabricantes tier 1 já entregam isso por padrão.
2. **Documente rigorosamente o memorial técnico** no processo de acesso — orientação, inclinação, potência CC e CA, tipo de módulo. Esses dados alimentam a base cadastral que o ONS vai usar nos modelos.
3. **Considere armazenamento em projetos de retrofit**. Baterias mitigam curtailment e permitem deslocar geração para horário de ponta. Veja [Leilão de baterias no Brasil: o que muda para quem investe em solar](/blog/leilao-baterias-brasil-solar).
4. **Monitore a saturação do alimentador** onde vai conectar. Distribuidoras já publicam mapas de hosting capacity — regiões saturadas terão mais risco de restrição operacional.
5. **Reveja o dimensionamento**. Sobrecargas de inversor (relação CC/CA acima de 1,3) fazem sentido em locais com curtailment previsto, porque parte da energia recortada estaria fora do horário de risco.

## Conclusão: previsão melhor é bom para todos

O estudo do ONS é uma boa notícia para o setor, mesmo que traga mais exigência técnica. Um sistema que enxerga bem a GD é um sistema que confia na GD — e confiança se traduz em menos restrições, menos cortes e menos ruído regulatório contra o solar.

O recado para quem investe é continuar tratando o projeto com rigor de engenharia: dimensionamento correto, equipamentos com comunicação, documentação impecável e uma leitura atenta do contexto regulatório. O solar brasileiro continua sendo um dos investimentos com melhor relação risco-retorno da economia real, e isso não vai mudar nos próximos anos.

Se você tem um projeto em análise — residencial, comercial, rural ou industrial — e quer entender como as regras de operação do ONS afetam o seu caso específico, fale com a EcoSunPower pelo WhatsApp. Fazemos análise técnica completa, dimensionamento otimizado e projeto executivo já considerando os requisitos de comunicação e telemetria que estão virando padrão no Brasil.

---

Inspirado em artigo do Canal Solar publicado em 10/07/2026: [ONS apresentará estudo para aprimorar previsão da GD em workshop](https://canalsolar.com.br/ons-estudo-previsao-gd-brasil/).