---
title: "Como dimensionar minigeração solar até 3 MW no DF e Goiás: guia técnico"
description: "Passo a passo técnico para dimensionar usinas de minigeração distribuída solar dentro do limite de 3 MW da Lei 14.300/2022 no DF e Goiás."
pubDate: 2026-06-01
category: tutorial
tags: ["minigeração distribuída","Lei 14.300","dimensionamento solar","Brasília","Goiás","3 MW"]
readingTime: 9
sourceAttribution: "Inspirado em conteúdos do Canal Solar (https://canalsolar.com.br/) e em normativos da ANEEL sobre MMGD (Lei 14.300/2022 e Consulta Pública 011/2026)."
draft: false
---
## Por que esse tutorial é necessário em 2026

Muito do material disponível na internet ainda repete que a minigeração distribuída (MMGD) vai até 5 MW. Essa informação está **desatualizada**: era a regra da REN 482/2012. Desde a entrada em vigor plena da Lei 14.300/2022, o teto para minigeração solar fotovoltaica caiu para **3 MW (3.000 kWp)**, por se tratar de fonte não despachável. Quem ultrapassa esse limite sai automaticamente da GD e passa a operar no Ambiente de Contratação Livre (ACL), com outra lógica regulatória, contratual e tributária.

No dia a dia da EcoSunPower em Brasília-DF e no Entorno goiano, vemos clientes industriais, agronegócio e redes comerciais subdimensionando ou superdimensionando projetos justamente porque partem de uma premissa errada. Este tutorial mostra, passo a passo, como dimensionar uma usina de minigeração dentro da janela útil de 75 kW a 3 MW, evitando armadilhas regulatórias e maximizando o retorno financeiro.

## Passo 1: classifique corretamente o tipo de geração distribuída

Antes de qualquer cálculo de placa, defina em qual faixa o projeto se encaixa. A Lei 14.300/2022 separa assim:

- **Microgeração distribuída:** até 75 kW de potência instalada, qualquer fonte renovável.
- **Minigeração solar fotovoltaica:** acima de 75 kW e até **3 MW** (fonte não despachável).
- **Minigeração despachável** (biomassa, cogeração qualificada): até 5 MW.
- **Sistemas GD1** (com solicitação de acesso protocolada até 07/01/2023): mantêm direito adquirido ao limite anterior de 5 MW e à regra de compensação integral até 31/12/2045.

Na prática, para um projeto **novo** de solar fotovoltaica protocolado em 2026, o teto é 3 MW. Acima disso, é ACL. Essa decisão precisa ser tomada **antes** de fechar o memorial técnico, porque muda projeto elétrico, modalidade de conexão e até a viabilidade financeira.

## Passo 2: levante o consumo real e a curva de carga

O erro mais comum em projetos comerciais e industriais é dimensionar pela média anual. Para minigeração, isso não basta. Solicite ao cliente:

1. **Histórico de 12 meses** de consumo em kWh, separando ponta e fora de ponta (se for Grupo A).
2. **Demanda contratada** (kW) e demanda medida mês a mês.
3. **Curva de carga horária** — quando possível, exporte do medidor da Neoenergia-DF ou Equatorial Goiás.
4. **Fator de carga** da unidade consumidora.

No DF, a tarifa média da Neoenergia gira em torno de **R$ 1,05/kWh** para o B1 e a estrutura horossazonal pesa muito no Grupo A. Em Goiás, a Equatorial pratica média de **R$ 0,98/kWh**. Sem essa base, qualquer dimensionamento é chute.

Veja também nosso tutorial [como ler a conta de luz da Neoenergia-DF](/blog/como-ler-conta-luz-neoenergia-df) antes de seguir.

## Passo 3: calcule a potência ideal usando HSP corrigida

A fórmula básica de dimensionamento é:

**Potência (kWp) = Consumo médio diário (kWh) ÷ (HSP × PR)**

Onde:
- **HSP** (Horas de Sol Pleno): 5,2 h em Brasília, 5,3 h em Goiás (média anual).
- **PR** (Performance Ratio): use 0,78 a 0,82 para projetos bem ventilados; 0,75 para telhados quentes e sombreamento parcial.

### Exemplo prático — indústria em Anápolis (GO)

Consumo mensal: 180.000 kWh. Consumo diário médio: 6.000 kWh.

Potência = 6.000 ÷ (5,3 × 0,80) = **1.415 kWp**

Esse projeto cabe confortavelmente na faixa de minigeração (limite 3.000 kWp). Se o consumo fosse 400.000 kWh/mês, a potência calculada (~3.144 kWp) **estouraria o teto** e o cliente precisaria escolher: limitar em 2.999 kWp e ficar na GD, ou ir para o ACL.

## Passo 4: respeite o teto de 3 MW e o critério da carga instalada

Além do limite de 3 MW, a distribuidora exige que a potência da usina seja compatível com a **carga instalada** ou com a **demanda contratada** da unidade consumidora. Não adianta instalar 2.500 kWp em uma UC com demanda de 300 kW — a distribuidora pode exigir aumento de demanda, novo ponto de conexão ou indeferir o parecer de acesso.

Regra prática que usamos na EcoSunPower:

- Potência da usina **≤ demanda contratada × fator** (varia por concessionária e nível de tensão).
- Quando excede, é necessário **aumento de demanda** ou autoconsumo remoto com rateio entre múltiplas UCs.

O autoconsumo remoto e a geração compartilhada (consórcios e cooperativas) permitem distribuir a energia de uma única usina entre várias unidades dentro da mesma área de concessão — recurso muito útil para redes de lojas no DF ou frigoríficos com filiais em Goiás.

## Passo 5: avalie o impacto do Fio B no payback

A Lei 14.300/2022 instituiu cobrança progressiva da TUSD Fio B sobre a energia compensada de sistemas GD2 (instalados após 07/01/2023). Em **2026, a cobrança é de 60%**; em 2027 sobe para 75%; em 2028, 90%; e em 2029, 100% — quando entrará em vigor a regra definitiva da ANEEL.

Isso significa que o **payback** de uma minigeração nova hoje precisa considerar:

| Ano | Fio B cobrado |
|-----|---------------|
| 2026 | 60% |
| 2027 | 75% |
| 2028 | 90% |
| 2029 em diante | regra definitiva ANEEL |

Mesmo com Fio B, projetos bem dimensionados no DF e Goiás ainda têm **payback de 3,5 a 5 anos** para minigeração comercial e industrial, considerando preço Greener jan/2026 de **R$ 2.800/kWp comercial** e **R$ 2.200/kWp industrial**. Para mais detalhes regulatórios, veja [créditos vencidos de GD e a Consulta Pública 011/2026](/blog/creditos-vencidos-gd-consulta-publica-011-2026).

## Passo 6: escolha a modalidade de conexão correta

Para minigeração, a conexão depende da potência e da tensão disponível:

- **Até 75 kW:** baixa tensão (380/220 V no DF), Grupo B, conexão trifásica.
- **75 kW a 500 kW:** geralmente média tensão (13,8 kV ou 34,5 kV), Grupo A.
- **500 kW a 3 MW:** média ou alta tensão, com subestação dedicada, transformador elevador e proteções de interface conforme NTD da distribuidora.

Na Neoenergia-DF, o procedimento segue a **NTD 6.09** e prazos do Módulo 3 do PRODIST. Na Equatorial Goiás, a referência é a **NTC-71**. Em ambos os casos, o parecer de acesso para minigeração leva de 60 a 120 dias úteis — bem mais que os 15 dias da microgeração.

## Passo 7: simule cenários antes de fechar o projeto

Antes de assinar contrato, monte pelo menos três cenários:

1. **Conservador:** PR de 0,75, degradação anual de 0,55%, bandeira amarela permanente (R$ 1,885/100 kWh adicional, como agora em junho de 2026).
2. **Realista:** PR de 0,80, degradação 0,45%, mix de bandeiras verde e amarela.
3. **Otimista:** PR de 0,82, degradação 0,40%, bandeira majoritariamente verde.

A bandeira amarela acionada pela ANEEL em maio e junho de 2026 mostra como o cenário hidrológico afeta diretamente a economia gerada pela usina — quanto pior a bandeira, mais o cliente economiza com solar, mas é arriscado dimensionar contando com isso.

## Passo 8: documentação e homologação

Para protocolar o pedido de acesso de uma minigeração, prepare:

- ART do CREA ou TRT do CFT do responsável técnico.
- Memorial descritivo do projeto elétrico.
- Diagrama unifilar e multifilar.
- Datasheet de módulos, inversores e proteções.
- Estudo de curto-circuito (acima de 300 kW na maioria das distribuidoras).
- Estudo de proteção e seletividade.
- Planta de situação e implantação.
- Comissionamento e laudos de aterramento e SPDA.

A ausência de qualquer um desses documentos é motivo recorrente de indeferimento. Pela experiência da EcoSunPower, projetos com documentação completa têm aprovação no primeiro parecer em mais de 85% dos casos.

## Erros mais comuns que ainda vemos no mercado

- Vender projeto de 3,5 MW como GD — não existe, é ACL.
- Misturar limite de 5 MW (GD1, direito adquirido) com projetos novos.
- Ignorar a curva de carga e superdimensionar para Grupo A com alta tarifa fora de ponta.
- Não considerar a escalada do Fio B no fluxo de caixa.
- Dimensionar pela área de telhado disponível e não pelo consumo real.

## Fechando o projeto com segurança técnica

Dimensionar minigeração no DF e em Goiás exige domínio simultâneo da Lei 14.300/2022, das normas técnicas das distribuidoras locais e da realidade financeira do cliente. Não é tarefa para integradores que tratam projeto comercial e industrial como se fosse um residencial maior.

A EcoSunPower atende Brasília, todo o DF e cidades goianas em um raio de até 100 km — Luziânia, Valparaíso, Cidade Ocidental, Águas Lindas, Formosa, Planaltina-GO, Cristalina e Anápolis. Se sua empresa, indústria ou propriedade rural está avaliando uma usina entre 75 kW e 3 MW, fale com nossa equipe técnica pelo WhatsApp e receba o estudo de viabilidade com cenário conservador, realista e otimista.

---

Inspirado em conteúdos do Canal Solar (https://canalsolar.com.br/) e em normativos da ANEEL relativos à MMGD e à Consulta Pública 011/2026 (https://www.gov.br/aneel/pt-br/assuntos/noticias/2026/consulta-publica-vai-tratar-dos-creditos-excedentes-de-mmgd-para-modicidade-tarifaria).