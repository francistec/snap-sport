import { Hono } from 'hono';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import type { PresignedUrlRequest, PresignedUrlResponse } from '@snapsport/types';

const s3 = new S3Client({});
const BUCKET = process.env.MEDIA_BUCKET ?? 'snapsport-media';

export const mediaRouter = new Hono();

// POST /api/media/presign
mediaRouter.post('/presign', async (c) => {
  const body = await c.req.json<PresignedUrlRequest>();
  const expiresIn = body.expiresIn ?? 900; // 15 min default

  const command = new GetObjectCommand({ Bucket: BUCKET, Key: body.key });
  const url = await getSignedUrl(s3, command, { expiresIn });

  const response: PresignedUrlResponse = {
    url,
    expiresAt: new Date(Date.now() + expiresIn * 1000).toISOString(),
  };

  return c.json({ data: response });
});
