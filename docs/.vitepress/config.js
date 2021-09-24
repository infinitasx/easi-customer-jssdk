const mdPlugin = require('./plugins');
module.exports = {
  title: 'EasiSdk',
  themeConfig: {
    theme: false,
    repo: 'element-plus/element-plus',
    logo: '/images/logo.png',
    docsDir: 'docs',
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/' },
    ],
    sidebar: [{ text: '我的', link: '/en-US/component/affix' }],
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico', //图片放在public文件夹下
      },
    ],
  ],
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
