import { handle } from 'hono/aws-lambda';
import app from './app';

// Lambda entrypoint — used by API Gateway proxy integration
export const handler = handle(app);
