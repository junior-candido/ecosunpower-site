---
title: "Como dimensionar sistema solar para condomínios residenciais"
description: "Guia técnico para dimensionar geração compartilhada em condomínios: cálculo por unidade, rateio, Fio B 2026 e retorno financeiro real."
pubDate: 2026-08-18
category: tecnico
heroImage: /blog/como-dimensionar-sistema-solar-condominios-residenciais.jpg
heroImageAlt: "Painéis solares em detalhe"
tags: ["condomínios","geração compartilhada","dimensionamento","energia solar","Lei 14.300","autoconsumo remoto"]
readingTime: 9
sourceAttribution: "Análise técnica baseada em dados do mercado (Greener jan/2026), Lei 14.300/2022 e contexto ANEEL — inspirada em discussões do Canal Solar sobre geração distribuída (agosto/2026)."
draft: false
---
## Por que condomínios são um dos melhores nichos para solar em 2026

Condomínios residenciais verticais (prédios) e horizontais (casas em vila) concentram uma característica que os torna ideais para energia solar: **cargas coletivas previsíveis** (elevadores, bombas, iluminação de áreas comuns, portaria, piscina aquecida, academia) somadas a **múltiplas unidades consumidoras** que podem ser beneficiadas via autoconsumo remoto ou geração compartilhada.

Com o Fio B chegando a 60% da TUSD em 2026 e 75% em 2027, o senso comum de que "solar em condomínio não vale mais a pena" é falso. O que mudou é a necessidade de projetar com precisão. Erros de dimensionamento que antes eram absorvidos pela economia agressiva hoje comprometem o payback.

Este guia mostra como estruturar tecnicamente o projeto, do levantamento de cargas ao rateio, com números aplicáveis a qualquer região do Brasil.

## Modalidades regulatórias aplicáveis

Antes de calcular, defina o enquadramento. A Lei 14.300/2022 e a REN 1.000/2021 preveem três caminhos para condomínios:

**1. Autoconsumo local com múltiplas UCs (mesma matrícula):**
Usina instalada no telhado do condomínio atende diretamente a UC da administração (áreas comuns). Simples e sem rateio.

**2. Autoconsumo remoto com múltiplas UCs (mesmo CPF/CNPJ):**
Casos em que o condomínio possui outras UCs sob o mesmo cadastro. Menos comum em residencial.

**3. Geração compartilhada (consórcio ou cooperativa):**
O condomínio e/ou os condôminos formam uma pessoa jurídica (consórcio) e a usina credita energia para todas as UCs participantes, cada uma na sua própria conta. Esse é o modelo que **realmente destrava o potencial** do prédio: usa não só as áreas comuns, mas também os apartamentos.

Para microgeração, o limite é 75 kWp. Para minigeração solar (novos projetos pós-2023), o teto é **3 MW**, e não 5 MW como muito material antigo ainda repete. Acima disso, o sistema migra para o Ambiente de Contratação Livre.

## Passo 1: levantamento de consumo

Comece separando o consumo em dois blocos:

**Áreas comuns:** peça as últimas 12 contas da UC do condomínio. Prédios verticais médios (20 a 40 apartamentos) consomem tipicamente entre 1.500 kWh e 6.000 kWh/mês em áreas comuns, dependendo de elevadores, bombas de recalque, ar-condicionado central e piscina aquecida.

**Unidades autônomas:** se o projeto contemplar rateio para condôminos, é necessário levantar o consumo médio de cada apartamento interessado. Peça autorização por escrito para consultar a distribuidora ou colete cópias das contas. Um apartamento de 3 quartos com ar-condicionado consome, em média, entre 250 e 500 kWh/mês.

Use a **média dos últimos 12 meses**, não o pico. Isso evita superdimensionar e gerar excedente que não será compensado.

## Passo 2: cálculo da potência do sistema

A fórmula continua clássica:

**Potência (kWp) = Consumo médio mensal (kWh) ÷ (HSP × 30 × PR)**

Onde:
- HSP = horas de sol pleno da região (4,5 h no Sul, 5,0 h no Sudeste, 5,3 h no Centro-Oeste, 5,5 a 5,8 h no Nordeste)
- PR = performance ratio do sistema, tipicamente 0,78 a 0,82
- 30 = dias médios do mês

**Exemplo prático:** condomínio no Sudeste com consumo agregado (áreas comuns + 15 apartamentos participantes) de 8.500 kWh/mês.

Potência = 8.500 ÷ (5,0 × 30 × 0,80) = **70,8 kWp**

Usina de aproximadamente 71 kWp — ainda dentro do limite de microgeração (75 kWp), o que simplifica o processo de acesso e reduz exigências de proteção.

Se o condomínio quiser incluir mais unidades e ultrapassar 75 kWp, o projeto migra para minigeração, e ganha exigências como relé de proteção 25/27/59/81, estudo de curto-circuito e, muitas vezes, transformador dedicado.

## Passo 3: análise estrutural e de espaço

Essa etapa é onde muitos projetos de condomínio travam. Um sistema de 71 kWp com módulos de 600 W ocupa aproximadamente **125 módulos**, o que exige entre 280 e 320 m² de área útil de cobertura, considerando espaçamento e sombreamento.

**Pontos críticos de análise:**
- **Carga estrutural:** lajes de cobertura devem suportar 15 a 25 kg/m² adicionais. Em prédios antigos, exigir laudo de engenheiro estrutural é inegociável.
- **Sombreamento:** caixa d'água, casa de máquinas de elevador, antenas e prédios vizinhos criam sombras que reduzem geração. Use ferramentas de simulação 3D (PVsyst, PV*SOL) para modelagem precisa.
- **Ação do vento:** coberturas em altura recebem cargas de vento significativamente maiores. Fixação por lastro (concreto) é comum, mas exige cálculo específico conforme NBR 6123.
- **Acesso para manutenção:** guarda-corpos, linhas de vida e escadas marinheiro precisam estar previstos no orçamento.

Quando o telhado não comporta a potência necessária, uma alternativa cada vez mais adotada é a **usina remota**: o condomínio contrata uma usina em terreno rural próximo (mesma área de concessão) e recebe os créditos via geração compartilhada. Veja nosso post sobre [dimensionamento de usinas remotas](/blog/como-dimensionar-usina-remota).

## Passo 4: rateio dos créditos

Esse é o coração jurídico do projeto. Na geração compartilhada, os percentuais de rateio devem ser cadastrados na distribuidora e podem ser alterados a cada ciclo de faturamento (geralmente com prazo mínimo entre alterações).

**Modelo típico em condomínio residencial:**
- 40% para as áreas comuns (UC do condomínio)
- 60% distribuído entre os condôminos participantes, proporcional ao consumo histórico ou à cota contratada

É fundamental formalizar:
- **Estatuto do consórcio ou cooperativa** (pessoa jurídica formal)
- **Regras de entrada, saída e transferência** de cotas quando um condômino vender o imóvel
- **Rateio de custos de O&M** (operação e manutenção) proporcional à cota
- **Assembleia com quórum qualificado** aprovando o projeto (verifique o que exige a convenção do condomínio)

## Passo 5: análise financeira com Fio B

Como o Fio B incide sobre a energia injetada e compensada em UC diferente da geradora, ele **impacta diretamente** condomínios em regime de geração compartilhada.

**Simulação nacional (referência 2026):**

| Item | Valor |
|---|---|
| Potência instalada | 71 kWp |
| Investimento (R$ 2.800/kWp comercial) | R$ 198.800 |
| Geração anual estimada | ~104.000 kWh |
| Tarifa média cheia | R$ 0,95/kWh |
| Fio B 2026 (60% da TUSD, ~R$ 0,28/kWh) | R$ 0,168/kWh de custo sobre injetado |
| Economia bruta anual | ~R$ 98.800 |
| Custo Fio B anual | ~R$ 17.500 |
| **Economia líquida anual** | **~R$ 81.300** |
| **Payback** | **~2,45 anos** |

Mesmo com Fio B a 60%, o payback em condomínios continua atraente porque a tarifa comercial (do condomínio) é geralmente mais alta que a residencial e o custo por kWp instalado é menor pela escala.

Use tarifa da SUA concessionária para ajustar. Regiões com tarifa acima de R$ 1,00/kWh (parte do Sudeste, Nordeste e Norte) têm payback ainda mais curto.

## Passo 6: cuidados contratuais e de projeto

Alguns erros recorrentes que vejo em projetos de condomínio:

1. **Não formalizar o consórcio antes da homologação:** a distribuidora exige CNPJ do consórcio no cadastro. Comece por aí.
2. **Ignorar a convenção do condomínio:** algumas convenções exigem unanimidade para obras na cobertura. Verifique antes.
3. **Não prever expansão:** deixe infraestrutura (eletrocalha, quadro, disjuntor) preparada para adicionar módulos se novos condôminos aderirem.
4. **Escolher inversor único de grande porte:** em condomínios com sombreamento parcial, uma solução com múltiplos inversores string menores ou microinversores costuma render melhor no longo prazo. Veja nosso comparativo entre [microinversores e otimizadores](/blog/microinversores-vs-otimizadores-2026).
5. **Subestimar O&M:** telhados de prédios juntam poeira e fuligem urbana rapidamente. Prever limpeza semestral no contrato de O&M é essencial.

## Conclusão

Condomínios estão entre os projetos com melhor relação retorno-por-esforço em 2026. A combinação de área de telhado disponível, consumo agregado alto e possibilidade de rateio via geração compartilhada permite payback abaixo de 3 anos em boa parte do Brasil, mesmo com Fio B em 60%.

O segredo está em três frentes: **dimensionamento realista** (não superestimar consumo futuro), **estrutura jurídica sólida** do consórcio e **projeto executivo detalhado** que considere carga estrutural, sombreamento e expansão.

Se o seu condomínio quer avaliar viabilidade, a EcoSunPower faz estudo completo — do laudo estrutural ao dimensionamento e à modelagem financeira com o Fio B do seu ano de conexão. Fale com nossa equipe pelo WhatsApp para agendar uma visita técnica sem compromisso.

---

*Inspirado em análises do Canal Solar sobre geração distribuída e no arcabouço da Lei 14.300/2022 e REN ANEEL 1.000/2021.*