// Extrai 1 frame (segundo 5) de cada video em public/cases/<slug>/*.mp4
// Salva como public/cases/<slug>/cover.jpg, max 1600px largura.
// Usa ffmpeg do sistema (sem dependencias node).

import { readdir, stat, access } from 'node:fs/promises';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const CASES_DIR = join(__dirname, '..', 'public', 'cases');
const FRAME_TIME = '00:00:05';

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let stderr = '';
    p.stderr.on('data', d => { stderr += d.toString(); });
    p.on('error', reject);
    p.on('close', code => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exit ${code}: ${stderr.slice(-500)}`));
    });
  });
}

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function main() {
  const dirs = await readdir(CASES_DIR);
  let processed = 0;
  let skipped = 0;

  for (const dir of dirs.sort()) {
    const dirPath = join(CASES_DIR, dir);
    const dirStat = await stat(dirPath).catch(() => null);
    if (!dirStat?.isDirectory()) continue;
    if (dir.startsWith('_') || dir === 'depoimentos') continue;

    const coverPath = join(dirPath, 'cover.jpg');
    if (await exists(coverPath)) {
      console.log(`SKIP ${dir} (cover ja existe)`);
      skipped++;
      continue;
    }

    const files = await readdir(dirPath);
    const video = files.find(f => /\.(mp4|mov)$/i.test(f));
    if (!video) {
      console.warn(`WARN ${dir} (sem video)`);
      continue;
    }

    const videoPath = join(dirPath, video);
    const args = [
      '-y',
      '-ss', FRAME_TIME,
      '-i', videoPath,
      '-vframes', '1',
      '-vf', 'scale=1600:-2',
      '-q:v', '3',
      coverPath,
    ];

    process.stdout.write(`Processando ${dir}... `);
    try {
      await runFfmpeg(args);
      console.log('OK');
      processed++;
    } catch (err) {
      console.log('FAIL', err.message);
    }
  }

  console.log(`\nDone. ${processed} processados, ${skipped} ja existiam.`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
