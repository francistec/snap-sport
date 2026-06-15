import * as cdk from 'aws-cdk-lib';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as lambdaNode from 'aws-cdk-lib/aws-lambda-nodejs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as path from 'path';

interface ApiStackProps extends cdk.StackProps {
  mediaBucket: s3.Bucket;
}

export class ApiStack extends cdk.Stack {
  public readonly apiUrl: string;

  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    // DynamoDB — on-demand (pay per request, no provisioned capacity)
    const eventsTable = new dynamodb.Table(this, 'EventsTable', {
      tableName: 'snapsport-events',
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
      pointInTimeRecoverySpecification: { pointInTimeRecoveryEnabled: false }, // PoC
    });

    // NodejsFunction: CDK bundlea con esbuild automáticamente (no requiere npm run build)
    const apiFn = new lambdaNode.NodejsFunction(this, 'ApiHandler', {
      functionName: 'snapsport-api',
      runtime: lambda.Runtime.NODEJS_20_X,
      entry: path.join(__dirname, '../../apps/api/src/lambda.ts'),
      handler: 'handler',
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: {
        EVENTS_TABLE: eventsTable.tableName,
        MEDIA_BUCKET: props.mediaBucket.bucketName,
        NODE_ENV: 'production',
      },
      bundling: {
        minify: true,
        sourceMap: false,
        target: 'node20',
        // AWS SDK v3 ya está incluido en el runtime de Lambda Node 20
        externalModules: ['@aws-sdk/*'],
        // esbuild bundlea hono directamente — no necesita npm ci
      },
    });

    eventsTable.grantReadWriteData(apiFn);
    props.mediaBucket.grantRead(apiFn);

    // HTTP API Gateway (70% más barato que REST API)
    const httpApi = new apigwv2.HttpApi(this, 'HttpApi', {
      apiName: 'snapsport-api',
      corsPreflight: {
        allowOrigins: [
          'https://snapsport.com.mx',
          'https://admin.snapsport.com.mx',
          'http://localhost:3000',
          'http://localhost:3001',
        ],
        allowMethods: [apigwv2.CorsHttpMethod.ANY],
        allowHeaders: ['content-type', 'authorization'],
        maxAge: cdk.Duration.days(1),
      },
    });

    httpApi.addRoutes({
      path: '/api/{proxy+}',
      methods: [apigwv2.HttpMethod.ANY],
      integration: new integrations.HttpLambdaIntegration('ApiIntegration', apiFn),
    });

    this.apiUrl = httpApi.url!;

    new cdk.CfnOutput(this, 'ApiUrl', { value: this.apiUrl });
    new cdk.CfnOutput(this, 'EventsTableName', { value: eventsTable.tableName });
  }
}
