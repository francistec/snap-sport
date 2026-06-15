#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { FrontendStack } from '../lib/frontend-stack';
import { ApiStack } from '../lib/api-stack';
import { MediaStack } from '../lib/media-stack';

const app = new cdk.App();

const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION ?? 'us-east-1',
};

const mediaStack = new MediaStack(app, 'SnapSportMedia', { env });

const apiStack = new ApiStack(app, 'SnapSportApi', {
  env,
  mediaBucket: mediaStack.mediaBucket,
});

new FrontendStack(app, 'SnapSportFrontend', {
  env,
  apiUrl: apiStack.apiUrl,
});
