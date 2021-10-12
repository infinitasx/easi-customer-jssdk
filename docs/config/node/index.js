// title、themeConfig、head参考官网配置
// https://vitepress.vuejs.org/config/basics.html
const { version, name } = require('../../../package.json');
module.exports = {
  title: name,
  base: `/${name}/${version}/docs/`, // 部署路径
  themeConfig: {
    theme: false,
    repo: 'infinitasx/easi-customer-jssdk',
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
      { text: 'API', link: '/api/config' },
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
                text: '变更日志',
                link: '/zh/guide/changelog',
              },
            ],
          },
        ],
      },
      {
        '/api/': [
          {
            text: '基础接口',
            children: [
              {
                text: 'config 基础配置',
                link: '/zh/api/config',
              },
              {
                text: 'ready sdk初始化成功',
                link: '/zh/api/ready',
              },
              {
                text: 'error sdk初始化失败',
                link: '/zh/api/error',
              },
              {
                text: 'getNetworkType 获取网络类型',
                link: '/zh/api/getnetworktype',
              },
              {
                text: 'checkJsApi 检测Api',
                link: '/zh/api/checkjsapi',
              },
              {
                text: 'updateWechatMessageShareData 分享到微信联系人',
                link: '/zh/api/wechatmessage',
              },
              {
                text: 'updateWechatTimelineShareData 分享到微信朋友圈',
                link: '/zh/api/wechattimeline',
              },
              {
                text: 'updateFacebookTimelineShareData 分享到Facebook时间线',
                link: '/zh/api/facebooktimeline',
              },
              {
                text: 'copy 复制文本内容',
                link: '/zh/api/copy',
              },
              {
                text: 'chooseImage 选取图片',
                link: '/zh/api/chooseimage',
              },
              {
                text: 'getLocalImageData 获取本地图片Base64数据',
                link: '/zh/api/localImagedata',
              },
              {
                text: 'previewImage 预览图片',
                link: '/zh/api/previewimage',
              },
              {
                text: 'openLocation 打开第三方地图',
                link: '/zh/api/openlocation',
              },
              {
                text: 'getDeviceLocation 获取设备地址',
                link: '/zh/api/devicelocation',
              },
              {
                text: 'scanQRCode 扫描二维码',
                link: '/zh/api/scanqrcode',
              },
              {
                text: 'scanBarcode 扫描条形码',
                link: '/zh/api/scanbarcode',
              },
              {
                text: 'closeWindow 关闭当前窗口',
                link: '/zh/api/closewindow',
              },
              {
                text: 'hideMenuBar 隐藏菜单栏',
                link: '/zh/api/hidemenubar',
              },
              {
                text: 'showMenuBar 显示菜单栏',
                link: '/zh/api/showmenubar',
              },
              {
                text: 'hideMenuItems 批量隐藏菜单项',
                link: '/zh/api/hidemenuitems',
              },
              {
                text: 'hideMenuItems 批量显示菜单项',
                link: '/zh/api/showmenuitems',
              },
              {
                text: 'hideNavBar 隐藏导航栏',
                link: '/zh/api/hidenavbar',
              },
              {
                text: 'showNavBar 显示导航栏',
                link: '/zh/api/shownavbar',
              },
              {
                text: 'openWebPage 在新窗口打开一个Web页面',
                link: '/zh/api/openwebpage',
              },
              {
                text: 'openAppPage 打开一个原生页面',
                link: '/zh/api/openapppage',
              },

              {
                text: 'getUserInfo 获取用户信息',
                link: '/zh/api/userinfo',
              },
            ],
          },
          {
            text: '业务接口',
            children: [],
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
        href: `/${name}/${version}/docs/images/favicon.ico`,
      },
    ],
  ],
};
