import { getEnv } from '../utils/env';
import {
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
} from '../base';

import oldEasi from './oldEasi';

const { ua, isEasi, isMalaysia, isAndroid, isIos, version } = getEnv();

const easi = {
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
  ua,
  isEasi,
  isMalaysia,
  isAndroid,
  isIos,
  version,
};

let target: any = easi;
const isNew = navigator.userAgent.includes('JssdkVersion');
if (!isNew) {
  target = oldEasi;
}

export default target;
