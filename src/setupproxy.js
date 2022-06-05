const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/ocr-ktp', {
      target: 'https://api.cloud.nodeflux.io/syncv2/analytics', // API endpoint 1
      changeOrigin: true,
      headers: {
        'Authorization': 'NODEFLUX-HMAC-SHA256 Credential=GRV7M0AYH8P1HD3TIG4ZS6DMQ/20220604/nodeflux.api.v1beta1.ImageAnalytic/StreamImageAnalytic, SignedHeaders=x-nodeflux-timestamp, Signature=3c8722a46c3360b3cfbbd8d922fedff6f5c5c2c9601ead9a5c87c744b956c748',
          'Content-Type': 'application/json',
          "x-nodeflux-timestamp": "20220604T080748Z"
      }
    })
  );
  app.use(
    createProxyMiddleware('/user', {
      target: 'https://piggybanc-backend.herokuapp.com/', // API endpoint 1
      changeOrigin: true
    })
  );

  app.use(
    createProxyMiddleware('/tx', {
      target: 'https://piggybanc-backend.herokuapp.com/', // API endpoint 1
      changeOrigin: true
    })
  );
}