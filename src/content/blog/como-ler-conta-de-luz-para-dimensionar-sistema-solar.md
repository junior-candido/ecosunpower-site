---
title: "Como ler a conta de luz para dimensionar seu sistema solar"
description: "Tutorial passo a passo para interpretar a fatura de energia e usar os dados corretos no dimensionamento do seu sistema fotovoltaico em 2026."
pubDate: 2026-08-03
category: tutorial
heroImage: /blog/como-ler-conta-de-luz-para-dimensionar-sistema-solar.jpg
heroImageAlt: "Engenheiro planejando energia solar"
tags: ["conta de luz","dimensionamento solar","tarifa de energia","bandeira tarifária","energia solar"]
readingTime: 9
sourceAttribution: "Inspirado em contexto tarifário divulgado pela ANEEL (bandeira amarela mantida em agosto/2026) — https://www.gov.br/aneel/pt-br/assuntos/noticias/2026-defeso-eleitoral/bandeira-tarifaria-continua-amarela-em-agosto"
draft: false
---
## Por que a conta de luz é o ponto de partida do projeto solar

Antes de qualquer simulação, cotação de módulos ou escolha de inversor, existe um documento que dita as regras do jogo: a sua conta de luz. É nela que estão os números que definem o tamanho do sistema fotovoltaico, o retorno financeiro esperado e até se vale mais a pena dimensionar para o consumo médio, para o consumo de pico ou para uma expansão futura.

O problema é que a maioria dos consumidores olha apenas para o valor final a pagar. E, quando um integrador pede a fatura para fazer o orçamento, boa parte das dúvidas sobre o projeto poderia ser resolvida em cinco minutos se o cliente soubesse ler os campos técnicos do documento. Com a bandeira tarifária amarela mantida em agosto de 2026 pela ANEEL — cobrando R$ 1,885 adicionais a cada 100 kWh consumidos — e com o Fio B cobrando 60% da TUSD sobre a energia injetada neste ano, entender cada linha da fatura virou parte essencial de qualquer decisão de investimento.

Este tutorial mostra, passo a passo, o que olhar, como interpretar e como transformar esses dados em um dimensionamento correto.

## Passo 1: identifique a modalidade tarifária e o grupo de consumo

O primeiro campo relevante fica no cabeçalho da fatura, geralmente próximo aos dados do titular. Você precisa localizar:

- **Grupo:** B (baixa tensão, atendida em 127/220/380 V) ou A (alta tensão, atendida em 13,8 kV ou mais).
- **Subgrupo:** B1 (residencial), B2 (rural), B3 (comercial/serviços), A4 (indústrias e grandes comércios em média tensão), entre outros.
- **Modalidade tarifária:** convencional, branca (para o Grupo B) ou horária verde/azul (para o Grupo A).

Essa informação define como o kWh é cobrado. Um cliente B1 convencional paga o mesmo por kWh o dia inteiro. Um B1 na tarifa branca paga três valores diferentes conforme o horário. Já um A4 na modalidade verde tem um preço para ponta e outro para fora de ponta, além de demanda contratada em kW.

Para dimensionamento solar, esse dado importa porque:

- No Grupo B, a compensação de créditos é praticamente 1:1 em energia (com o desconto do Fio B).
- No Grupo A, a compensação separa energia (TE) e distribuição (TUSD), o que muda o cálculo do payback.
- Na tarifa branca, o solar tende a compensar mais o consumo fora de ponta, então o dimensionamento precisa considerar o perfil horário.

## Passo 2: encontre o histórico dos últimos 12 meses

Quase todas as concessionárias imprimem, em uma tabela ou gráfico de barras, o consumo em kWh dos últimos 12 meses. Esse é o dado mais valioso da conta inteira para o projeto solar.

O que fazer com ele:

1. **Some os 12 valores** para obter o consumo anual em kWh.
2. **Divida por 12** para calcular a média mensal.
3. **Identifique picos sazonais** (verão com ar-condicionado, safra em propriedade rural, alta temporada em pousada).

Exemplo prático: uma residência com histórico de 4.800 kWh/ano tem média de 400 kWh/mês. Esse é o número que vai para o dimensionamento — **nunca use apenas o mês da conta atual**, porque ele pode estar acima ou abaixo da média por sazonalidade.

Se o histórico mostrar tendência de crescimento (por exemplo, um carro elétrico comprado recentemente, uma piscina aquecida, uma expansão comercial), considere um acréscimo de 15% a 30% no consumo futuro.

## Passo 3: separe a tarifa efetiva do valor total

A fatura mostra vários componentes: TE (Tarifa de Energia), TUSD (Tarifa de Uso do Sistema de Distribuição), tributos (ICMS, PIS, Cofins), contribuição de iluminação pública e bandeira tarifária. Some tudo o que incide sobre o kWh consumido e divida pelo consumo do mês. Isso dá a **tarifa efetiva com impostos**, que é o valor real que o solar vai economizar por kWh gerado.

No Brasil, essa tarifa efetiva residencial varia hoje entre R$ 0,85 e R$ 1,15/kWh, dependendo da concessionária, da bandeira vigente e do ICMS estadual. Consumidores comerciais e industriais podem ter valores um pouco menores, mas com estrutura mais complexa.

Dica prática: pegue três faturas de meses diferentes e calcule a tarifa efetiva de cada uma. Use a média nos cálculos de payback. Isso evita distorções causadas por bandeiras verde, amarela ou vermelha.

## Passo 4: verifique bandeira tarifária e adicionais

A bandeira aparece na parte inferior da conta, geralmente detalhada em uma linha separada. Em agosto de 2026, por exemplo, a ANEEL manteve a bandeira amarela pelo quarto mês consecutivo, refletindo reservatórios baixos e maior acionamento de térmicas.

Por que isso importa para o dimensionamento:

- Cada 100 kWh consumidos em bandeira amarela custa R$ 1,885 a mais.
- Em bandeira vermelha 2, o adicional pode passar de R$ 7,00 por 100 kWh.
- O solar **elimina esse adicional** sobre a parcela compensada, o que melhora o retorno em anos secos.

Ao simular economia, considere um cenário conservador (bandeira verde o ano todo) e um realista (com pelo menos alguns meses de amarela ou vermelha). O payback verdadeiro costuma ficar entre os dois.

## Passo 5: identifique o custo de disponibilidade

Mesmo quem instala solar continua pagando um valor mínimo por mês, chamado **custo de disponibilidade**:

- Monofásico: equivalente a 30 kWh
- Bifásico: equivalente a 50 kWh
- Trifásico: equivalente a 100 kWh

Esse valor é cobrado sempre, mesmo que a geração seja maior que o consumo. Ele deve entrar no cálculo de economia líquida. Um erro comum é prometer conta zerada, quando na verdade sempre haverá esse mínimo, além da contribuição de iluminação pública.

Se você está entre monofásico e bifásico, a decisão pelo tipo de ligação impacta o solar. Discutimos esse ponto no post sobre [como escolher a potência do sistema solar](/blog/como-escolher-potencia-sistema-solar).

## Passo 6: calcule o consumo compensável e o tamanho do sistema

Com os dados anteriores em mãos, o cálculo do sistema fica direto:

1. **Consumo compensável mensal** = consumo médio − custo de disponibilidade.
2. **Geração diária necessária** = consumo compensável ÷ 30 dias.
3. **Potência do sistema (kWp)** = geração diária ÷ (HSP local × 0,80).

O fator 0,80 é o **performance ratio**, que considera perdas de temperatura, sujeira, cabeamento, inversor e desvios de orientação. Ele é conservador e realista para a maioria dos telhados brasileiros bem projetados.

A HSP (horas de sol pleno) varia entre 4,5 h/dia em regiões Sul e mais nubladas até 5,8 h/dia no Nordeste e no Centro-Oeste. Para uso rápido, adote 5,0 h como referência nacional.

**Exemplo:** residência com consumo médio de 400 kWh/mês, ligação bifásica (50 kWh de disponibilidade), HSP 5,0 h.

- Compensável: 400 − 50 = 350 kWh/mês
- Geração diária: 350 ÷ 30 = 11,67 kWh/dia
- Potência: 11,67 ÷ (5,0 × 0,80) = **2,92 kWp**

Com módulos de 610 W, isso equivale a cinco painéis, uma configuração comum e viável em telhado residencial.

## Passo 7: ajuste para o Fio B e o cenário 2026-2028

A Lei 14.300/2022 fez a cobrança do Fio B sobre a energia injetada crescer ano a ano: 45% em 2025, **60% em 2026**, 75% em 2027 e 90% em 2028. Isso significa que, para cada kWh injetado na rede e depois consumido de volta, você paga uma fração da TUSD.

Na prática, o payback aumenta em alguns meses a cada degrau anual. Ao ler a conta e projetar economia futura, use uma tarifa efetiva média que já inclua esse desconto. Uma regra prática: multiplique a tarifa cheia por 0,90 para 2026, 0,87 para 2027 e 0,84 para 2028, e trabalhe com esse valor no cálculo do retorno.

Quem já tinha sistema conectado antes de 07/01/2023 (GD1) mantém regras antigas até 2045, mas projetos novos entram no cronograma completo do Fio B.

## Passo 8: valide se vale a pena antes de assinar

Com tudo em mãos, faça o teste final:

- **CAPEX estimado (Greener jan/2026):** R$ 3.400/kWp residencial, R$ 2.800 comercial, R$ 3.600 rural, R$ 2.200 industrial.
- **Economia anual líquida** = (consumo compensável × 12) × tarifa efetiva × fator Fio B.
- **Payback simples** = CAPEX ÷ economia anual.

Se o payback ficar entre 3,5 e 6 anos, o projeto está dentro da média nacional saudável. Se passar de 7 anos, algo precisa ser revisto: pode ser tarifa muito baixa, orientação ruim do telhado, sombreamento ou superdimensionamento. Se ficar abaixo de 3 anos, verifique se a tarifa efetiva usada não está inflada por bandeiras extremas.

Uma boa referência complementar é o nosso post sobre [como simular a economia do solar antes de contratar](/blog/como-simular-economia-solar-antes-de-contratar).

## Erros comuns na leitura da conta

- Usar apenas o kWh de um único mês, geralmente o mais alto, e superdimensionar o sistema.
- Esquecer o custo de disponibilidade e prometer conta zerada.
- Ignorar a bandeira do mês no cálculo da tarifa efetiva.
- Confundir tarifa residencial B1 com tarifa comercial B3 em um mesmo endereço com duas ligações.
- Não considerar aumento de consumo previsto (carro elétrico, ar-condicionado adicional, ampliação de galpão).
- Aplicar o teto de 5 MW da regra antiga em projetos de minigeração solar novos — desde 2023, o limite é **3 MW** para fotovoltaica não-despachável.

## Conclusão

Ler a conta de luz com atenção transforma o dimensionamento solar em uma decisão baseada em dados, não em achismo. Consumo médio anual, tarifa efetiva com impostos, bandeira, custo de disponibilidade, grupo tarifário e o cronograma do Fio B são as variáveis que definem se o sistema vai entregar payback rápido ou frustrar as expectativas.

Se quiser uma análise personalizada da sua fatura, a equipe técnica da EcoSunPower faz esse estudo gratuitamente. Envie a última conta (ou o histórico dos 12 meses, se possível) pelo nosso WhatsApp e receba um dimensionamento com projeção de economia, payback e comparação de equipamentos. É a forma mais direta de sair da dúvida e começar o projeto com o pé direito.

---

*Referência tarifária: ANEEL, bandeira amarela mantida em agosto/2026 — https://www.gov.br/aneel/pt-br/assuntos/noticias/2026-defeso-eleitoral/bandeira-tarifaria-continua-amarela-em-agosto*