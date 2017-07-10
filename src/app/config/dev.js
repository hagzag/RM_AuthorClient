import { base } from './base';

const devConfig = {
  appEnv: 'dev',
  baseUrl: 'http://servername:8001/index.html',
};

devConfig.webSocketUrl = `${devConfig.baseUrl}notification-ws`;

export const config =  Object.freeze(Object.assign({}, base, devConfig));
console.log('working environment: dev');
