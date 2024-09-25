const next = require('next');
const config = require('./next.config.js');

module.exports = {
  start: async (options = {}) => {
    const dev = options.dev || process.env.NODE_ENV !== 'production';
    const app = next({ dev, conf: config });
    const handle = app.getRequestHandler();

    await app.prepare();

    return { app, handle };
  }
};
