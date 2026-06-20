// Gera a versão pública (embaralhada) do simulador a partir da fonte legível.
//
// Fonte legível (NÃO vai pro site nem pro GitHub):  src/simulador/medidores-ecosun.src.html
// Saída pública (vai pro ar, com o JS ofuscado):    public/simulador/medidores-ecosun.html
//
// Rode com:  npm run build:simulador
// É um passo MANUAL e único — não está plugado no `npm run build` de propósito,
// pra não criar risco no deploy do Cloudflare. Rode de novo sempre que editar a fonte.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import JavaScriptObfuscator from 'javascript-obfuscator';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const SRC = resolve(root, 'src/simulador/medidores-ecosun.src.html');
const OUT = resolve(root, 'public/simulador/medidores-ecosun.html');

// Opções moderadas: deixa o código uma "sopa de letras" sem matar a performance.
// (evitamos controlFlowFlattening/debugProtection que pesam num requestAnimationFrame contínuo)
const OBFUSCATE_OPTS = {
  compact: true,
  identifierNamesGenerator: 'hexadecimal',
  numbersToExpressions: false,
  simplify: true,
  stringArray: true,
  stringArrayThreshold: 0.75,
  stringArrayEncoding: ['base64'],
  splitStrings: true,
  splitStringsChunkLength: 8,
  transformObjectKeys: false,
  unicodeEscapeSequence: false,
  selfDefending: false,
  target: 'browser',
};

const html = readFileSync(SRC, 'utf8');

// Ofusca cada bloco <script> SEM atributo src (os scripts inline do simulador).
const SCRIPT_RE = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi;

let count = 0;
const out = html.replace(SCRIPT_RE, (match, attrs, code) => {
  if (!code.trim()) return match;
  const obf = JavaScriptObfuscator.obfuscate(code, OBFUSCATE_OPTS).getObfuscatedCode();
  count++;
  console.log(`   bloco ${count}: ${code.length} -> ${obf.length} chars`);
  return `<script${attrs}>${obf}</script>`;
});

if (count === 0) {
  console.error('⚠️  Nenhum bloco <script> inline encontrado — nada foi ofuscado. Verifique a fonte.');
  process.exit(1);
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, out, 'utf8');

console.log(`✅ Simulador gerado: ${count} bloco(s) de script ofuscado(s).`);
console.log(`   -> ${OUT}`);
