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
    sidebar: [
      {
        text: '侧边栏',
        children: [
          {
            text: 'affix',
            link: '/en-US/component/affix',
          },
          {
            text: 'button',
            link: '/en-US/component/button',
          },
        ],
      },
    ],
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
