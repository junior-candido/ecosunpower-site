// Parceiros de financiamento solar — condições PÚBLICAS de cada um.
// Conferido nos sites oficiais em 25/09/2026. Taxa de juros não entra: depende
// da análise de crédito de cada cliente (e a maioria nem publica).
// Ao mudar algo aqui, atualize também `CONFERIDO_EM`.

export const CONFERIDO_EM = 'setembro de 2026';

export interface Parceiro {
  id: string;
  nome: string;
  logo: string;
  /** largura de exibição da logo (px) — as proporções das marcas são bem diferentes */
  logoLargura: number;
  /** fundo da placa da logo: a cor em que a marca foi desenhada pra aparecer */
  placa: 'clara' | 'escura';
  parcelasMin?: number;
  parcelasMax: number;
  /** meses até a 1ª parcela (aproximado, pra régua) */
  carenciaMeses: number;
  carenciaTexto: string;
  parcela: string;
  parcelaFixa: boolean;
  limitePF?: string;
  limitePJ?: string;
  destaques: string[];
  fonte: string;
}

export const PARCEIROS: Parceiro[] = [
  {
    id: 'solfacil',
    nome: 'Solfácil',
    logo: '/logos/financiamento/solfacil.svg',
    logoLargura: 150,
    placa: 'clara',
    parcelasMin: 24,
    parcelasMax: 120,
    carenciaMeses: 3,
    carenciaTexto: 'até 3 meses',
    parcela: 'Fixa do começo ao fim',
    parcelaFixa: true,
    limitePF: 'R$ 235 mil',
    limitePJ: 'R$ 400 mil',
    destaques: [
      'O prazo mais longo: até 10 anos',
      'Não pede comprovante de renda',
    ],
    fonte: 'https://solfacil.com.br/financie/',
  },
  {
    id: 'bv',
    nome: 'banco BV',
    logo: '/logos/financiamento/bv.svg',
    logoLargura: 88,
    placa: 'clara',
    parcelasMax: 96,
    carenciaMeses: 4,
    carenciaTexto: 'até 120 dias',
    parcela: 'Fixa do começo ao fim',
    parcelaFixa: true,
    limitePF: 'R$ 500 mil',
    limitePJ: 'R$ 3 milhões',
    destaques: [
      'Os maiores limites, bom para empresas',
      'Financia também baterias e sistemas híbridos',
    ],
    fonte: 'https://www.bv.com.br/financiamento/solar',
  },
  {
    id: 'solagora',
    nome: 'Sol Agora',
    logo: '/logos/financiamento/solagora.svg',
    logoLargura: 150,
    placa: 'clara',
    parcelasMax: 84,
    carenciaMeses: 5,
    carenciaTexto: 'até 150 dias',
    parcela: 'Fixa do começo ao fim',
    parcelaFixa: true,
    destaques: [
      'O maior prazo para começar a pagar',
      'Aceita entrada para baixar a parcela',
    ],
    fonte: 'https://solagora.com.br/para-voce-cliente/',
  },
  {
    id: 'belcred',
    nome: 'BelCred',
    logo: '/logos/financiamento/belcred.png',
    logoLargura: 160,
    placa: 'escura',
    parcelasMax: 96,
    carenciaMeses: 4,
    carenciaTexto: 'até 120 dias',
    parcela: 'Corrigida pela inflação (IPCA) uma vez por ano',
    parcelaFixa: false,
    limitePF: 'R$ 70 mil',
    limitePJ: 'R$ 250 mil',
    destaques: [
      'Conta de luz e imóvel podem estar no nome de pai, mãe, cônjuge ou filho',
      'Não usa o limite do seu banco',
    ],
    fonte: 'Apresentação oficial BelCred',
  },
];

/** Maior horizonte da régua (carência + parcelas), em meses */
export const HORIZONTE_MESES = Math.max(
  ...PARCEIROS.map((p) => p.carenciaMeses + p.parcelasMax),
);
