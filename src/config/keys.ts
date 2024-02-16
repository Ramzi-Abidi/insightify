let configModule;
const nodeEnv: string = process.env.NODE_ENV;

if (nodeEnv === 'prod') {
  configModule = require('./prod');
} else {
  configModule = require('./dev');
}

export = configModule;
