import { call, callBackOperation } from '../bridge';

import { AppResultEventEnum } from '../bridge/interface';
import type { BaseParamesType, AppResponseType } from '../bridge/interface';
import type {
  InitResultType,
  CheckJsApiType,
  ConfigParamesType,
  LocationType,
  ShareDataType,
  CopyType,
  ChooseImageType,
  LocalImageDataType,
  PreviewImageType,
  OpenLocationType,
  ScanCodeType,
  MenuItemsType,
  OpenWebPageType,
  OpenAppPageType,
} from './interface';

// 初始化结果
const initResult: InitResultType = {
  status: AppResultEventEnum.fail,
  data: {},
};

const config = (userOptions: ConfigParamesType) => {
  if (userOptions?.debug) console.log(`debug:${JSON.stringify(userOptions)}`);
  call(
    'config',
    { jsApiList: userOptions?.jsApiList },
    (response: AppResponseType) => {
      switch (response.status) {
        case AppResultEventEnum.fail:
          initResult.data = response.data || userOptions;
          initResult.fail && initResult.fail(initResult.data);
          break;
        case AppResultEventEnum.success:
          initResult.status = AppResultEventEnum.success;
          initResult.success && initResult.success(response.data);
        default:
          break;
      }
    },
    userOptions,
  );
};

const ready = (callback: (res: { langage?: string }) => void): void => {
  initResult.success = callback;
};

const error = (callback: (err: { errMsg?: string }) => void): void => {
  initResult.fail = callback;
};

/**
 * 获取网络类型
 * @param userOptions
 */
const getNetworkType = (userOptions: CheckJsApiType) => {
  call('easi.getNetworkType', {}, callBackOperation, userOptions);
};

/**
 * 检测api
 * @param userOptions
 */
const checkJsApi = (userOptions: CheckJsApiType) => {
  call('easi.checkJsApi', { jsApiList: userOptions.jsApiList }, callBackOperation, userOptions);
};

/**
 * 分享到微信联系人
 * @param userOptions
 */
const updateWechatMessageShareData = (userOptions: ShareDataType) => {
  call(
    'easi.updateWechatMessageShareData',
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
 * @param userOptions
 */
const updateWechatTimelineShareData = (userOptions: ShareDataType) => {
  call(
    'easi.updateWechatTimelineShareData',
    { title: userOptions.title, link: userOptions.link, imgUrl: userOptions.imgUrl },
    callBackOperation,
    userOptions,
  );
};

/**
 * 分享到Facebook时间线
 * @param userOptions
 */
const updateFacebookTimelineShareData = (userOptions: ShareDataType) => {
  call(
    'easi.updateFacebookTimelineShareData',
    { title: userOptions.title, link: userOptions.link, imgUrl: userOptions.imgUrl },
    callBackOperation,
    userOptions,
  );
};

/**
 * 复制文本内容
 * @param userOptions
 */
const copy = (userOptions: CopyType) => {
  call('easi.copy', { content: userOptions.content }, callBackOperation, userOptions);
};

/**
 * 选取图片
 * @param userOptions
 */
const chooseImage = (userOptions: ChooseImageType) => {
  call(
    'easi.chooseImage',
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
 * @param userOptions
 */
const getLocalImageData = (userOptions: LocalImageDataType) => {
  call(
    'easi.getLocalImageData',
    {
      localId: userOptions.localId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 预览图片
 * @param userOptions
 */
const previewImage = (userOptions: PreviewImageType) => {
  call(
    'easi.previewImage',
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
 * @param userOptions
 */
const openLocation = (userOptions: OpenLocationType) => {
  call(
    'easi.openLocation',
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
 * @param userOptions
 */
const getDeviceLocation = (userOptions: LocationType) => {
  call(
    'easi.getDeviceLocation',
    {
      type: userOptions.type || 'wgs84',
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 扫描二维码
 * @param userOptions
 */
const scanQRCode = (userOptions: ScanCodeType) => {
  call(
    'easi.scanQRCode',
    {
      needContent: userOptions.needContent,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 扫描条形码
 * @param userOptions
 */
const scanBarcode = (userOptions: ScanCodeType) => {
  call(
    'easi.scanBarcode',
    {
      needContent: userOptions.needContent,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 关闭当前窗口
 * @param userOptions
 */
const closeWindow = () => {
  call('easi.closeWindow');
};

/**
 * 隐藏菜单栏
 * @param userOptions
 */
const hideMenuBar = () => {
  call('easi.hideMenuBar');
};

/**
 * 显示菜单栏
 * @param userOptions
 */
const showMenuBar = () => {
  call('easi.showMenuBar');
};

/**
 * 批量隐藏菜单项
 * @param userOptions
 */
const hideMenuItems = (userOptions: MenuItemsType) => {
  call(
    'easi.hideMenuItems',
    {
      menuItems: userOptions.menuItems,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 批量显示菜单项
 * @param userOptions
 */
const showMenuItems = (userOptions: MenuItemsType) => {
  call(
    'easi.showMenuItems',
    {
      menuItems: userOptions.menuItems,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 隐藏导航栏
 * @param userOptions
 */
const hideNavBar = () => {
  call('easi.hideNavBar');
};

/**
 * 显示导航栏
 * @param userOptions
 */
const showNavBar = () => {
  call('easi.showNavBar');
};

/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */
const openWebPage = (userOptions: OpenWebPageType) => {
  call('easi.openWebPage', {
    url: userOptions.url,
  });
};

/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */
const openAppPage = (userOptions: OpenAppPageType) => {
  call('easi.openWebPage', {
    scheme: userOptions.scheme,
  });
};

/**
 * 获取用户信息
 * @param userOptions
 */
const getUserInfo = (userOptions: BaseParamesType) => {
  call('easi.getUserInfo', {}, callBackOperation, userOptions);
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
};
