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
      { text: '指南', link: '/guide/base' },
      { text: 'API', link: '/api/text' },
    ],
    sidebar: [
      {
        '/guide/': [
          {
            text: '基础',
            children: [
              {
                text: '安装',
                link: '/zh/guide/base',
              },
              {
                text: '快速开始',
                link: '/zh/guide/begin',
              },
              {
                text: '更热日志',
                link: '/zh/guide/changelog',
              },
            ],
          },
        ],
      },
      {
        '/api/': [
          {
            text: '组件',
            children: [
              {
                text: 'text',
                link: '/zh/api/text',
              },
              {
                text: 'input',
                link: '/zh/api/input',
              },
            ],
          },
          {
            text: '组件1',
            children: [
              {
                text: 'affix',
                link: '/zh/api/affix',
              },
              {
                text: 'button',
                link: '/zh/api/button',
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
