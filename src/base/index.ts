import { call, callBackOperation, appResultEventType } from '../bridge';
import type { BaseParamesType, AppResponseType } from '../bridge';
import type {
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
const initResult: {
  status: string | null;
  data: any;
  completes?: () => void;
  fail?: (err: { errMsg: string }) => void;
} = {
  status: null,
  data: {},
};

const config = (userOption: ConfigParamesType) => {
  if (userOption.debug) console.log(`debug:${JSON.stringify(userOption)}`);
  call(
    'config',
    { jsApiList: userOption.jsApiList },
    (response: AppResponseType) => {
      switch (response.status) {
        case appResultEventType.fail:
          initResult.data = response.data || userOption;
          initResult.fail && initResult.fail(initResult.data);
          break;
        default:
          initResult.status = 'completes';
          initResult.completes && initResult.completes();
          break;
      }
    },
    userOption,
  );
};

const ready = (callback: () => void): void => {
  initResult.completes = callback;
};

const error = (callback: (err: { errMsg: string }) => void): void => {
  initResult.fail = callback;
};

/**
 * 获取网络类型
 * @param userOption
 */
const getNetworkType = (userOption: CheckJsApiType) => {
  call('easi.getNetworkType', {}, callBackOperation, userOption);
};

/**
 * 检测api
 * @param userOption
 */
const checkJsApi = (userOption: CheckJsApiType) => {
  call('easi.checkJsApi', { jsApiList: userOption.jsApiList }, callBackOperation, userOption);
};

/**
 * 分享到微信联系人
 * @param userOption
 */
const updateWechatMessageShareData = (userOption: ShareDataType) => {
  call(
    'easi.updateWechatMessageShareData',
    {
      title: userOption.title,
      link: userOption.link,
      imgUrl: userOption.imgUrl,
      desc: userOption.desc,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 分享到朋友圈
 * @param userOption
 */
const updateWechatTimelineShareData = (userOption: ShareDataType) => {
  call(
    'easi.updateWechatTimelineShareData',
    { title: userOption.title, link: userOption.link, imgUrl: userOption.imgUrl },
    callBackOperation,
    userOption,
  );
};

/**
 * 分享到Facebook时间线
 * @param userOption
 */
const updateFacebookTimelineShareData = (userOption: ShareDataType) => {
  call(
    'easi.updateFacebookTimelineShareData',
    { title: userOption.title, link: userOption.link, imgUrl: userOption.imgUrl },
    callBackOperation,
    userOption,
  );
};

/**
 * 复制文本内容
 * @param userOption
 */
const copy = (userOption: CopyType) => {
  call('easi.copy', { content: userOption.content }, callBackOperation, userOption);
};

/**
 * 选取图片
 * @param userOption
 */
const chooseImage = (userOption: ChooseImageType) => {
  call(
    'easi.chooseImage',
    {
      accept: userOption.accept,
      compressImage: userOption.compressImage,
      capture: userOption.capture,
      count: userOption.count,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 获取本地图片Base64数据
 * @param userOption
 */
const getLocalImageData = (userOption: LocalImageDataType) => {
  call(
    'easi.getLocalImageData',
    {
      localId: userOption.localId,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 预览图片
 * @param userOption
 */
const previewImage = (userOption: PreviewImageType) => {
  call(
    'easi.previewImage',
    {
      current: userOption.current,
      urls: userOption.urls,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 第三方地图打开地址
 * @param userOption
 */
const openLocation = (userOption: OpenLocationType) => {
  call(
    'easi.openLocation',
    {
      latitude: userOption.latitude,
      longitude: userOption.longitude,
      zoom: userOption.zoom,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 获取设备地址
 * @param userOption
 */
const getLocation = (userOption: LocationType) => {
  call(
    'easi.getLocation',
    {
      type: userOption.type || 'wgs84',
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 扫描二维码
 * @param userOption
 */
const scanQRCode = (userOption: ScanCodeType) => {
  call(
    'easi.scanQRCode',
    {
      needContent: userOption.needContent,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 扫描条形码
 * @param userOption
 */
const scanBarcode = (userOption: ScanCodeType) => {
  call(
    'easi.scanBarcode',
    {
      needContent: userOption.needContent,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 关闭当前窗口
 * @param userOption
 */
const closeWindow = () => {
  call('easi.closeWindow');
};

/**
 * 隐藏菜单栏
 * @param userOption
 */
const hideMenuBar = () => {
  call('easi.hideMenuBar');
};

/**
 * 显示菜单栏
 * @param userOption
 */
const showMenuBar = () => {
  call('easi.showMenuBar');
};

/**
 * 批量隐藏菜单项
 * @param userOption
 */
const hideMenuItems = (userOption: MenuItemsType) => {
  call(
    'easi.hideMenuItems',
    {
      menuItems: userOption.menuItems,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 批量显示菜单项
 * @param userOption
 */
const showMenuItems = (userOption: MenuItemsType) => {
  call(
    'easi.showMenuItems',
    {
      menuItems: userOption.menuItems,
    },
    callBackOperation,
    userOption,
  );
};

/**
 * 隐藏导航栏
 * @param userOption
 */
const hideNavBar = () => {
  call('easi.hideNavBar');
};

/**
 * 显示导航栏
 * @param userOption
 */
const showNavBar = () => {
  call('easi.showNavBar');
};

/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */
const openWebPage = (userOption: OpenWebPageType) => {
  call('easi.openWebPage', {
    url: userOption.url,
  });
};

/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */
const openAppPage = (userOption: OpenAppPageType) => {
  call('easi.openWebPage', {
    scheme: userOption.scheme,
  });
};

/**
 * 获取用户信息
 * @param userOption
 */
const getUserInfo = (userOption: BaseParamesType) => {
  call('easi.getUserInfo', {}, callBackOperation, userOption);
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
  getLocation,
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
