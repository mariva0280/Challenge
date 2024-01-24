const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',  // Cambia esto según el puerto de tu backend
      changeOrigin: true,
    })
  );
};
