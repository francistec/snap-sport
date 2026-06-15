export interface PresignedUrlRequest {
  key: string;
  expiresIn?: number; // seconds, default 900
}

export interface PresignedUrlResponse {
  url: string;
  expiresAt: string;
}
