import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { Construct } from 'constructs';

interface FrontendStackProps extends cdk.StackProps {
  apiUrl: string;
}

export class FrontendStack extends cdk.Stack {
  public readonly frontendBucket: s3.Bucket;
  public readonly adminBucket: s3.Bucket;
  public readonly frontendDistributionId: string;
  public readonly adminDistributionId: string;

  constructor(scope: Construct, id: string, props: FrontendStackProps) {
    super(scope, id, props);

    // ── S3 Buckets ───────────────────────────────────────────────────────
    this.frontendBucket = new s3.Bucket(this, 'FrontendBucket', {
      bucketName: `snapsport-frontend-${this.account}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    this.adminBucket = new s3.Bucket(this, 'AdminBucket', {
      bucketName: `snapsport-admin-${this.account}`,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // ── CloudFront — Frontend ────────────────────────────────────────────
    const frontendCdn = new cloudfront.Distribution(this, 'FrontendCdn', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(this.frontendBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html', ttl: cdk.Duration.seconds(0) },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html', ttl: cdk.Duration.seconds(0) },
      ],
      comment: 'SnapSport Frontend',
    });

    // ── CloudFront — Admin ───────────────────────────────────────────────
    const adminCdn = new cloudfront.Distribution(this, 'AdminCdn', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(this.adminBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_DISABLED,
        compress: true,
      },
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 403, responseHttpStatus: 200, responsePagePath: '/index.html', ttl: cdk.Duration.seconds(0) },
        { httpStatus: 404, responseHttpStatus: 200, responsePagePath: '/index.html', ttl: cdk.Duration.seconds(0) },
      ],
      comment: 'SnapSport Admin',
    });

    this.frontendDistributionId = frontendCdn.distributionId;
    this.adminDistributionId = adminCdn.distributionId;

    // ── Outputs (usados por el script de deploy) ─────────────────────────
    new cdk.CfnOutput(this, 'FrontendUrl', {
      value: `https://${frontendCdn.distributionDomainName}`,
      exportName: 'SnapSportFrontendUrl',
    });
    new cdk.CfnOutput(this, 'AdminUrl', {
      value: `https://${adminCdn.distributionDomainName}`,
      exportName: 'SnapSportAdminUrl',
    });
    new cdk.CfnOutput(this, 'FrontendBucketName', {
      value: this.frontendBucket.bucketName,
      exportName: 'SnapSportFrontendBucket',
    });
    new cdk.CfnOutput(this, 'AdminBucketName', {
      value: this.adminBucket.bucketName,
      exportName: 'SnapSportAdminBucket',
    });
    new cdk.CfnOutput(this, 'FrontendDistributionId', {
      value: frontendCdn.distributionId,
      exportName: 'SnapSportFrontendDistId',
    });
    new cdk.CfnOutput(this, 'AdminDistributionId', {
      value: adminCdn.distributionId,
      exportName: 'SnapSportAdminDistId',
    });
  }
}
