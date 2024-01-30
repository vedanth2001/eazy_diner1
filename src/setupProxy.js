// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8888', // Change this to match the port of your Express server
      changeOrigin: true,
    })
  );
};
