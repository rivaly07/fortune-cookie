#!/usr/bin/env node
import { spawnSync } from 'child_process';
import { readFileSync } from 'fs';
import { join } from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

console.log('Running first build...');
const r1 = spawnSync('node', ['--experimental-strip-types', 'main.ts'], {
  cwd: process.cwd(),
  env: { ...process.env, MAKEFUN_OUTPUT_DIR: outputDir },
  encoding: 'utf8'
});
if (r1.status !== 0) {
  console.error('First run failed:', r1.stderr);
  process.exit(1);
}
const out1 = readFileSync(join(outputDir, 'entry.txt'), 'utf8');
console.log('First output:', JSON.stringify(out1));

console.log('Running second build...');
const r2 = spawnSync('node', ['--experimental-strip-types', 'main.ts'], {
  cwd: process.cwd(),
  env: { ...process.env, MAKEFUN_OUTPUT_DIR: outputDir },
  encoding: 'utf8'
});
if (r2.status !== 0) {
  console.error('Second run failed:', r2.stderr);
  process.exit(1);
}
const out2 = readFileSync(join(outputDir, 'entry.txt'), 'utf8');
console.log('Second output:', JSON.stringify(out2));

if (out1 !== out2) {
  console.error('ERROR: Outputs differ!');
  process.exit(1);
}

if (out1.length < 1 || out1.length > 140) {
  console.error('ERROR: Length out of range:', out1.length);
  process.exit(1);
}

if (!out1.trim()) {
  console.error('ERROR: Only whitespace');
  process.exit(1);
}

console.log('✓ All checks passed: deterministic, valid length, non-whitespace');
console.log('Length:', out1.length, 'chars');