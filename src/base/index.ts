import { call, callBackOperation } from '../bridge';

import { AppResultEventEnum } from '../bridge/interface';
import type { BaseParamesType, AppResponseType } from '../bridge/interface';
import { IBase } from './interface';

export type TBase = {
  config: (userOptions: IBase.ConfigParamesType) => void;
  ready: (callback: (response: { langage?: string; checkResult: Object }) => void) => void;
  error: (callback: (err: { [key: string]: any; errMsg?: string | undefined }) => void) => void;
  getNetworkType: (userOptions: BaseParamesType) => void;
  checkJsApi: (userOptions: IBase.CheckJsApiType) => void;
  updateWechatMessageShareData: (userOptions: IBase.ShareDataType) => void;
  updateWechatTimelineShareData: (userOptions: IBase.ShareDataType) => void;
  updateFacebookTimelineShareData: (userOptions: IBase.ShareDataType) => void;
  copy: (userOptions: IBase.CopyType) => void;
  chooseImage: (userOptions: IBase.ChooseImageType) => void;
  getLocalImageData: (userOptions: IBase.LocalImageDataType) => void;
  previewImage: (userOptions: IBase.PreviewImageType) => void;
  openLocation: (userOptions: IBase.OpenLocationType) => void;
  getDeviceLocation: (userOptions: IBase.LocationType) => void;
  scanQRCode: (userOptions: IBase.ScanCodeType) => void;
  scanBarcode: (userOptions: IBase.ScanCodeType) => void;
  closeWindow: () => void;
  hideMenuBar: () => void;
  showMenuBar: () => void;
  hideMenuItems: (userOptions: IBase.MenuItemsType) => void;
  showMenuItems: (userOptions: IBase.MenuItemsType) => void;
  hideNavBar: () => void;
  showNavBar: () => void;
  openWebPage: (userOptions: IBase.OpenWebPageType) => void;
  openAppPage: (userOptions: IBase.OpenAppPageType) => void;
  getUserInfo: (userOptions: BaseParamesType) => void;
  showLoading: () => void;
  hideLoading: () => void;
};

// 初始化
const initResult: IBase.InitResultType = {};

/**
 * 检测api配置项
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.debug 是否启用debug
 * @param {Array} userOptions.jsApiList 待检测的api列表
 */
const config = (userOptions: IBase.ConfigParamesType) => {
  if (userOptions?.debug) console.log(`debug:${JSON.stringify(userOptions)}`);
  call(
    'config',
    { jsApiList: userOptions?.jsApiList },
    (response: AppResponseType) => {
      switch (response.status) {
        case AppResultEventEnum[1]:
          initResult.fail && initResult.fail({ errMsg: response.message || 'fail' });
          break;
        case AppResultEventEnum[0]:
          initResult.success && initResult.success(response.data);
        default:
          break;
      }
    },
    userOptions,
  );
};

/**
 * config调用成功后执行函数
 * @param {Function} callback 回调函数
 */
const ready = (callback: (response: { langage?: string; checkResult: Object }) => void): void => {
  initResult.success = callback;
};

/**
 * config调用失败后执行函数
 * @param callback 回调函数
 */
const error = (callback: (err: { errMsg?: string; [key: string]: any }) => void): void => {
  initResult.fail = callback;
};

/**
 * 获取网络类型
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const getNetworkType = (userOptions: BaseParamesType) => {
  call('getNetworkType', {}, callBackOperation, userOptions);
};

/**
 * 检查是否支持指定API
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const checkJsApi = (userOptions: IBase.CheckJsApiType) => {
  call('checkJsApi', { jsApiList: userOptions.jsApiList }, callBackOperation, userOptions);
};

/**
 * 分享到微信联系人
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const updateWechatMessageShareData = (userOptions: IBase.ShareDataType) => {
  call(
    'updateWechatMessageShareData',
    {
      title: userOptions.title,
      link: userOptions.link,
      imgUrl: userOptions.imgUrl,
      desc: userOptions.desc,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 分享到朋友圈
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const updateWechatTimelineShareData = (userOptions: IBase.ShareDataType) => {
  call(
    'updateWechatTimelineShareData',
    { title: userOptions.title, link: userOptions.link, imgUrl: userOptions.imgUrl },
    callBackOperation,
    userOptions,
  );
};

/**
 * 分享到Facebook时间线
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const updateFacebookTimelineShareData = (userOptions: IBase.ShareDataType) => {
  call(
    'updateFacebookTimelineShareData',
    { title: userOptions.title, link: userOptions.link, imgUrl: userOptions.imgUrl },
    callBackOperation,
    userOptions,
  );
};

/**
 * 复制文本内容
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.content 需要复制到剪贴板的文本内容
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const copy = (userOptions: IBase.CopyType) => {
  call('copy', { content: userOptions.content }, callBackOperation, userOptions);
};

/**
 * 选取图片
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.accept 选取的类型
 * @param {boolean} userOptions.compressImage 图片是否压缩
 * @param {string} userOptions.capture 前置或后置摄像头
 * @param {number} userOptions.count 数量 默认1，最大9
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const chooseImage = (userOptions: IBase.ChooseImageType) => {
  call(
    'chooseImage',
    {
      accept: userOptions.accept,
      compressImage: userOptions.compressImage,
      capture: userOptions.capture,
      count: userOptions.count,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 获取本地图片Base64数据
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.localId 图片的localId
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const getLocalImageData = (userOptions: IBase.LocalImageDataType) => {
  call(
    'getLocalImageData',
    {
      localId: userOptions.localId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 预览图片
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.current 当前显示图片的http链接
 * @param {Array} userOptions.urls 当需要预览的图片http链接列表
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const previewImage = (userOptions: IBase.PreviewImageType) => {
  call(
    'previewImage',
    {
      current: userOptions.current,
      urls: userOptions.urls,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 第三方地图打开地址
 * @param {object} userOptions 用户配置项
 * @param {number} userOptions.latitude 纬度，浮点数，范围为90 ~ -90
 * @param {number} userOptions.longitude 经度，浮点数，范围为180 ~ -180
 * @param {number} userOptions.zoom 地图缩放级别，整型值，0~18 for Google Maps
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const openLocation = (userOptions: IBase.OpenLocationType) => {
  call(
    'openLocation',
    {
      latitude: userOptions.latitude,
      longitude: userOptions.longitude,
      zoom: userOptions.zoom,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 获取设备地址
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.type 预留字段，默认为wgs84的gps坐标，其他坐标系待定
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const getDeviceLocation = (userOptions: IBase.LocationType) => {
  call(
    'getDeviceLocation',
    {
      type: userOptions.type || 'wgs84',
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 扫描二维码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const scanQRCode = (userOptions: IBase.ScanCodeType) => {
  call(
    'scanQRCode',
    {
      needContent: userOptions.needContent,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 扫描条形码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const scanBarcode = (userOptions: IBase.ScanCodeType) => {
  call(
    'scanBarcode',
    {
      needContent: userOptions.needContent,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 关闭当前窗口
 * @param 无
 */
const closeWindow = () => {
  call('closeWindow');
};

/**
 * 隐藏菜单栏
 * @param 无
 */
const hideMenuBar = () => {
  call('hideMenuBar');
};

/**
 * 显示菜单栏
 * @param 无
 */
const showMenuBar = () => {
  call('showMenuBar');
};

/**
 * 批量隐藏菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 隐藏的菜单项
 */
const hideMenuItems = (userOptions: IBase.MenuItemsType) => {
  call(
    'hideMenuItems',
    {
      menuItems: userOptions.menuItems,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 批量显示菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 显示的菜单项
 */
const showMenuItems = (userOptions: IBase.MenuItemsType) => {
  call(
    'showMenuItems',
    {
      menuItems: userOptions.menuItems,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 隐藏导航栏
 * @param 无
 */
const hideNavBar = () => {
  call('hideNavBar');
};

/**
 * 显示导航栏
 * @param 无
 */
const showNavBar = () => {
  call('showNavBar');
};

/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.url 目标页面
 */
const openWebPage = (userOptions: IBase.OpenWebPageType) => {
  call('openWebPage', {
    url: userOptions.url,
  });
};

/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.scheme scheme地址
 */
const openAppPage = (userOptions: IBase.OpenAppPageType) => {
  call('openAppPage', {
    scheme: userOptions.scheme,
  });
};

/**
 * 获取用户信息
 * @param {Object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const getUserInfo = (userOptions: BaseParamesType) => {
  call('getUserInfo', {}, callBackOperation, userOptions);
};

/**
 * 显示客户端的loading
 */
const showLoading = () => {
  call('showLoading');
};

/**
 * 隐藏客户端的loading
 */
const hideLoading = () => {
  call('hideLoading');
};

export {
  config,
  ready,
  error,
  getNetworkType,
  checkJsApi,
  updateWechatTimelineShareData,
  updateWechatMessageShareData,
  updateFacebookTimelineShareData,
  copy,
  chooseImage,
  getLocalImageData,
  previewImage,
  openLocation,
  getDeviceLocation,
  scanQRCode,
  scanBarcode,
  closeWindow,
  hideMenuBar,
  showMenuBar,
  hideMenuItems,
  showMenuItems,
  hideNavBar,
  showNavBar,
  openWebPage,
  openAppPage,
  getUserInfo,
  showLoading,
  hideLoading,
};
