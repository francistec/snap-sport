import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigwv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

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
    });

    // Lambda — single handler for all API routes (Hono router handles the split)
    const apiFn = new lambda.Function(this, 'ApiHandler', {
      functionName: 'snapsport-api',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'lambda.handler',
      code: lambda.Code.fromAsset('../apps/api/dist'),
      memorySize: 256,
      timeout: cdk.Duration.seconds(10),
      environment: {
        EVENTS_TABLE: eventsTable.tableName,
        MEDIA_BUCKET: props.mediaBucket.bucketName,
        NODE_ENV: 'production',
      },
    });

    eventsTable.grantReadWriteData(apiFn);
    props.mediaBucket.grantRead(apiFn);

    // HTTP API Gateway (cheaper than REST API)
    const httpApi = new apigwv2.HttpApi(this, 'HttpApi', {
      apiName: 'snapsport-api',
      corsPreflight: {
        allowOrigins: ['https://snapsport.com.mx', 'https://admin.snapsport.com.mx'],
        allowMethods: [apigwv2.CorsHttpMethod.ANY],
        allowHeaders: ['content-type', 'authorization'],
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
