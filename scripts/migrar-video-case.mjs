// Migra UM video de case novo pro Supabase Storage (bucket cases-videos).
// Comprime em 720p (com faststart, pra abrir rapido ao clicar) e sobe.
// No fim, mostra a linha "videoUrl" exata pra voce colar no JSON do case.
//
// Uso:
//   SUPABASE_SERVICE_KEY=eyJ...  node scripts/migrar-video-case.mjs <pasta-do-case> <caminho-do-video>
//
// Exemplo:
//   node scripts/migrar-video-case.mjs 18-residencial-aguas-claras "C:/Users/.../drone.mp4"
//
// Pre-requisitos: ffmpeg no PATH + a chave service_role do projeto na env SUPABASE_SERVICE_KEY.

import { spawn } from 'node:child_process';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const PROJECT_REF = 'kupnsoyymulbdzakqlqc';
const BUCKET = 'cases-videos';
const BASE = `https://${PROJECT_REF}.supabase.co/storage/v1`;

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', d => { err += d.toString(); });
    p.on('error', reject);
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`ffmpeg exit ${code}: ${err.slice(-500)}`)));
  });
}

async function main() {
  const [pasta, origem] = process.argv.slice(2);
  const KEY = process.env.SUPABASE_SERVICE_KEY;

  if (!pasta || !origem) {
    console.error('Uso: SUPABASE_SERVICE_KEY=eyJ... node scripts/migrar-video-case.mjs <pasta-do-case> <caminho-do-video>');
    process.exit(1);
  }
  if (!KEY) {
    console.error('Falta a chave: defina SUPABASE_SERVICE_KEY (a service_role do projeto) na env.');
    process.exit(1);
  }

  const tmp = await mkdtemp(join(tmpdir(), 'case-video-'));
  const out = join(tmp, 'video.mp4');

  console.log(`Comprimindo em 720p: ${origem}`);
  await runFfmpeg([
    '-y', '-i', origem,
    // limita a 720p mantendo proporcao; garante largura/altura par (exigencia do H.264)
    '-vf', "scale='min(1280,iw)':'min(720,ih)':force_original_aspect_ratio=decrease,scale=trunc(iw/2)*2:trunc(ih/2)*2",
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '25',
    '-c:a', 'aac', '-b:a', '96k',
    '-movflags', '+faststart', // <- deixa o video engatar antes de baixar inteiro
    out,
  ]);

  const bytes = await readFile(out);
  console.log(`Subindo ${(bytes.length / 1048576).toFixed(1)}MB pro bucket ${BUCKET}/${pasta}/video.mp4 ...`);

  const res = await fetch(`${BASE}/object/${BUCKET}/${pasta}/video.mp4`, {
    method: 'POST',
    headers: {
      apikey: KEY,
      Authorization: `Bearer ${KEY}`,
      'x-upsert': 'true',
      'Content-Type': 'video/mp4',
    },
    body: bytes,
  });

  await rm(tmp, { recursive: true, force: true });

  if (!res.ok) {
    console.error(`FALHOU no upload (HTTP ${res.status}): ${await res.text()}`);
    process.exit(1);
  }

  const url = `https://${PROJECT_REF}.supabase.co/storage/v1/object/public/${BUCKET}/${pasta}/video.mp4`;
  console.log('\nOK! Video no ar. Cole esta linha no JSON do case (depois de "fotos"):\n');
  console.log(`  "videoUrl": "${url}",`);
  console.log('\nDica: rode "node scripts/extract-frames.mjs" pra gerar a cover.jpg a partir do video original.');
}

main().catch(err => { console.error(err); process.exit(1); });
