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
                text: '兼容',
                link: '/zh/guide/compatible',
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
            children: [
              {
                text: 'getEASILocation 获取当前配送地址',
                link: '/zh/api/getEASILocation',
              },
              {
                text: 'showGlobalCart 显示全局购物车',
                link: '/zh/api/showGlobalCart',
              },
              {
                text: 'hideGlobalCart 隐藏全局购物车',
                link: '/zh/api/hideGlobalCart',
              },
              {
                text: 'addToCart 唤起商品SKU选择界面',
                link: '/zh/api/addToCart',
              },
              {
                text: 'removeFromCart 从全局购物车中移除商品',
                link: '/zh/api/removeFromCart',
              },
              {
                text: 'openAppFavourites 打开收藏夹',
                link: '/zh/api/openAppFavourites',
              },
              {
                text: 'addToFavourites 店铺添加到收藏夹',
                link: '/zh/api/addToFavourites',
              },
              {
                text: 'removeFromFavourites 店铺移除收藏夹',
                link: '/zh/api/removeFromFavourites',
              },
              {
                text: 'openAppShop 打开商家详情',
                link: '/zh/api/openAppShop',
              },
              {
                text: 'openAppCoupons 打开优惠券页面',
                link: '/zh/api/openAppCoupons',
              },
              {
                text: 'openAppAddress 打开地址管理页面',
                link: '/zh/api/openAppAddress',
              },
              {
                text: 'selectAppAddress 选择地址',
                link: '/zh/api/selectAppAddress',
              },
              {
                text: 'openAppLanguages 切换系统语言',
                link: '/zh/api/openAppLanguages',
              },
              {
                text: 'openAppCustomerService 联系客服',
                link: '/zh/api/openAppCustomerService',
              },
              {
                text: 'openAppTabBar 切换底部导航栏',
                link: '/zh/api/openAppTabBar',
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
        href: `/${name}/${version}/docs/images/favicon.ico`,
      },
    ],
  ],
};
