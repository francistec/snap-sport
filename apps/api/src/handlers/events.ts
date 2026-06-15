import { Hono } from 'hono';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, GetCommand } from '@aws-sdk/lib-dynamodb';
import type { SportEvent } from '@snapsport/types';

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

const TABLE = process.env.EVENTS_TABLE ?? 'snapsport-events';

export const eventsRouter = new Hono();

// GET /api/events
eventsRouter.get('/', async (c) => {
  const result = await ddb.send(
    new ScanCommand({
      TableName: TABLE,
      FilterExpression: 'published = :pub',
      ExpressionAttributeValues: { ':pub': true },
    })
  );

  return c.json({ data: (result.Items ?? []) as SportEvent[] });
});

// GET /api/events/:id
eventsRouter.get('/:id', async (c) => {
  const id = c.req.param('id');
  const result = await ddb.send(
    new GetCommand({ TableName: TABLE, Key: { id } })
  );

  if (!result.Item) {
    return c.json({ error: 'Event not found', statusCode: 404 }, 404);
  }

  return c.json({ data: result.Item as SportEvent });
});
