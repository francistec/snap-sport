import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { eventsRouter } from './handlers/events';
import { mediaRouter } from './handlers/media';

const app = new Hono().basePath('/api');

app.use('*', logger());
app.use(
  '*',
  cors({
    origin: [
      'https://snapsport.com.mx',
      'https://admin.snapsport.com.mx',
      'http://localhost:3000',
      'http://localhost:3001',
    ],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
  })
);

app.get('/health', (c) => c.json({ status: 'ok' }));

app.route('/events', eventsRouter);
app.route('/media', mediaRouter);

export default app;
