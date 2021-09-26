const mdPlugin = require('./plugins');
module.exports = {
  title: 'EasiSdk',
  themeConfig: {
    theme: false,
    repo: 'element-plus/element-plus',
    logo: '/images/logo.png',
    agolia: {
      apiKey: 'e32c681af38f324039e81d81834e70b8',
      appId: '7DCTSU0WBW',
    },
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: 'component/affix' },
    ],
    sidebar: [
      {
        text: '侧边栏',
        children: [
          {
            text: 'affix',
            link: '/zh/component/affix',
          },
          {
            text: 'button',
            link: '/zh/component/button',
          },
        ],
      },
      {
        text: '侧边栏1',
        children: [
          {
            text: 'text',
            link: '/zh/component/text',
          },
          {
            text: 'input',
            link: '/zh/component/input',
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
