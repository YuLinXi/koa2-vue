const path = require('path');

module.exports = {
  pages: {
    index: path.resolve(__dirname, './web/main.ts'),
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
  configureWebpack: () => ({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './web'),
      },
    },
  }),
};
