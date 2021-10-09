const mdPlugin = require('./plugins');
const config = require('../config');
// const build = argv.build || false;
module.exports = {
  title: config.title,
  themeConfig: config.themeConfig,
  head: config.head,
  base: 'https://static.melbdelivery.com/easi-jssdk/2.0.0/docs/',
  vite: {
    server: {
      host: true,
    },
  },
  vue: {},
  markdown: {
    config: md => {
      mdPlugin(md);
    },
  },
};
