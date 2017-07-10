import { base } from './base';

const devConfig = {
  appEnv: 'dev',
  baseUrl: 'http://localhost:3000',
};

devConfig.webSocketUrl = `${devConfig.baseUrl}notification-ws`;

export const config =  Object.freeze(Object.assign({}, base, devConfig));
console.log('working environment: dev');
