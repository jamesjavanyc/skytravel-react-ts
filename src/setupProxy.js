const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        // 代理标识
        '/api',
        // 代理配置
        createProxyMiddleware({
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: {
                // 去掉接口中的 /api 前缀
                '^/api': ''
            }
        })
        
    )
}