const path = require('path');
const args = require('minimist')(process.argv.slice(2));

// List of allowed environments
const allowedEnvs = ['dev', 'dist', 'test', 'qa'];

// Set the correct environment
let env;

if (args._.length > 0 && args._.indexOf('start') !== -1) {
  env = 'test';
} else if (args.env) {
  env = args.env;
} else {
  env = 'dev';
}

process.env.REACT_WEBPACK_ENV = env;

/**
 * Build the webpack configuration
 * @param  {String} wantedEnv The wanted environment
 * @return {Object} Webpack config
 */
function buildConfig(wantedEnv) {
  const isValid = wantedEnv && wantedEnv.length > 0 && allowedEnvs.indexOf(wantedEnv) !== -1;
  const validEnv = isValid ? wantedEnv : 'dev';
  console.log('validEnv => ', validEnv);
  console.log('file => ', `./webpack-config/webpack.config.${validEnv}`);
  const config = require(path.join(__dirname, `./webpack-config/webpack.config.${validEnv}.js`));
  return config;
}

module.exports = buildConfig(env);
