/**
 * Local dev server — runs Hono via Node.js (not Lambda).
 * Usage: npm run dev (inside apps/api)
 */
import { serve } from '@hono/node-server';
import app from './app';

const port = Number(process.env.PORT ?? 4000);

serve({ fetch: app.fetch, port }, () => {
  console.log(`API running at http://localhost:${port}`);
});
