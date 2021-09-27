const mdPlugin = require('./plugins');
module.exports = {
  title: 'EasiSdk',
  themeConfig: {
    base: './',
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
      { text: '指南', link: '/guide/guide1' },
      { text: '组件', link: '/component/text' },
    ],
    sidebar: [
      {
        '/guide/': [
          {
            text: '指南',
            children: [
              {
                text: 'guide1',
                link: '/zh/guide/guide1',
              },
              {
                text: 'guide2',
                link: '/zh/guide/guide2',
              },
            ],
          },
        ],
      },
      {
        '/component/': [
          {
            text: '组件',
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
          {
            text: '组件1',
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
