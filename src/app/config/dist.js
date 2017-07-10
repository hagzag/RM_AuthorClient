import { base } from './base';

const distConfig = {
  appEnv: 'dist',
  baseUrl: location.protocol + '//' + location.host,
};

distConfig.webSocketUrl = `${distConfig.baseUrl}notification-ws`;

export const config =  Object.freeze(Object.assign({}, base, distConfig));

console.log('working environment: dist');
