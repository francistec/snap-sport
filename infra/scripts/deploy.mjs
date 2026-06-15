#!/usr/bin/env node
/**
 * deploy.mjs — Script de deploy completo para SnapSport
 *
 * Flujo:
 *   1. build de frontend y admin (next build → out/)
 *   2. cdk deploy --all (infra: S3 + CloudFront + Lambda + DynamoDB)
 *   3. aws s3 sync apps/frontend/out → S3 frontend bucket
 *   4. aws s3 sync apps/admin/out   → S3 admin bucket
 *   5. CloudFront invalidation en ambas distribuciones
 *
 * Uso:
 *   node infra/scripts/deploy.mjs
 */

import { execSync } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');

function run(cmd, cwd = ROOT) {
  console.log(`\n▶ ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

function getOutput(cmd, cwd = ROOT) {
  return execSync(cmd, { cwd }).toString().trim();
}

// ── 1. Build apps (secuencial para evitar conflictos de npm en Windows) ──
console.log('\n🔨 Building frontend...');
run('npm run build --prefix apps/frontend');
console.log('\n🔨 Building admin...');
run('npm run build --prefix apps/admin');

// ── 2. CDK deploy ────────────────────────────────────────────────────────
console.log('\n🚀 Deploying CDK stacks...');
run('npx cdk deploy --all --require-approval never --outputs-file cdk-outputs.json', resolve(ROOT, 'infra'));

// ── 3. Leer outputs del CDK ──────────────────────────────────────────────
const { readFileSync } = await import('fs');
const outputs = JSON.parse(readFileSync(resolve(ROOT, 'infra/cdk-outputs.json'), 'utf8'));

const frontendStack = outputs['SnapSportFrontend'] ?? {};
const frontendBucket  = frontendStack['FrontendBucketName'];
const adminBucket     = frontendStack['AdminBucketName'];
const frontendDistId  = frontendStack['FrontendDistributionId'];
const adminDistId     = frontendStack['AdminDistributionId'];
const frontendUrl     = frontendStack['FrontendUrl'];
const adminUrl        = frontendStack['AdminUrl'];

if (!frontendBucket || !adminBucket) {
  console.error('❌ No se encontraron outputs del stack. Verifica que el deploy terminó correctamente.');
  process.exit(1);
}

// ── 4. S3 sync ───────────────────────────────────────────────────────────
console.log('\n📦 Syncing frontend to S3...');
run(`aws s3 sync apps/frontend/out s3://${frontendBucket} --delete --cache-control "public, max-age=31536000, immutable"`);

console.log('\n📦 Syncing admin to S3...');
run(`aws s3 sync apps/admin/out s3://${adminBucket} --delete --cache-control "no-cache, no-store"`);

// ── 5. CloudFront invalidation ───────────────────────────────────────────
console.log('\n🔄 Invalidating CloudFront caches...');
run(`aws cloudfront create-invalidation --distribution-id ${frontendDistId} --paths "/*"`);
run(`aws cloudfront create-invalidation --distribution-id ${adminDistId} --paths "/*"`);

// ── Done ─────────────────────────────────────────────────────────────────
console.log('\n✅ Deploy completado!');
console.log(`   Frontend: ${frontendUrl}`);
console.log(`   Admin:    ${adminUrl}`);
