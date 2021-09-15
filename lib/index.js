'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var baseEasiInfo = {
  easiAgent: 'EasiCustomer/',
  easiVersion: '1.8.10',
  easiUserVersion: '1.9.59',
  easiMalaysiaAgent: 'EasiMalaysia/',
  easiMalaysiaVersion: '4.9.39',
  easiMalaysiaUserVersion: '4.9.39'
};

var getVersion = function getVersion(parmes) {
  var uaFragments = parmes.ua.split(' ');

  if (uaFragments.length > 0) {
    var easiMark = parmes.isMalaysia ? baseEasiInfo.easiMalaysiaAgent : baseEasiInfo.easiAgent;
    var easiUaStart = uaFragments[0].includes(easiMark);

    if (easiUaStart) {
      return uaFragments[0].replace(easiMark, '');
    }
  }

  return null;
};

var getEnv = function getEnv() {
  var ua = navigator.userAgent;
  var isEasi = ua.includes(baseEasiInfo.easiAgent);
  var isMalaysia = ua.includes(baseEasiInfo.easiMalaysiaAgent);
  var isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
  var isIos = ua.includes('iPhone') || ua.includes('iOS');
  var version = getVersion({
    ua: ua,
    isMalaysia: isMalaysia
  });
  return {
    ua: ua,
    isEasi: isEasi,
    isMalaysia: isMalaysia,
    isAndroid: isAndroid,
    isIos: isIos,
    version: version
  };
};

// app事件类型
var appResultEventType;

(function (appResultEventType) {
  appResultEventType[appResultEventType["success"] = 0] = "success";
  appResultEventType[appResultEventType["fail"] = 1] = "fail";
  appResultEventType[appResultEventType["cancel"] = 2] = "cancel";
})(appResultEventType || (appResultEventType = {}));
/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */


var callBackOperation = function callBackOperation(response, userOption, methodName) {
  userOption.complete && userOption.complete({
    errMsg: "".concat(methodName, ":complete")
  });

  switch (response.status) {
    case appResultEventType.success:
      userOption.success && userOption.success({
        errMsg: "".concat(methodName, ":ok"),
        result: response === null || response === void 0 ? void 0 : response.data
      });
      break;

    case appResultEventType.cancel:
      userOption.cancel && userOption.cancel({
        errMsg: "".concat(methodName, ":cancel")
      });
      break;

    case appResultEventType.fail:
      userOption.fail && userOption.fail({
        message: response === null || response === void 0 ? void 0 : response.message,
        errMsg: "".concat(methodName, ":fail")
      });
  }
};
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */


var setupWebViewJavascriptBridge = function setupWebViewJavascriptBridge(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  } else {
    document.addEventListener('WebViewJavascriptBridgeReady', function () {
      callback(window.WebViewJavascriptBridge);
    }, false);
  }

  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback);
  }

  window.WVJBCallbacks = [callback];
  var WVJBIframe = document.createElement('iframe');
  WVJBIframe.style.display = 'none';
  WVJBIframe.src = 'https://__bridge_loaded__';
  document.documentElement.appendChild(WVJBIframe);
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe);
  }, 0);
};
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOption 用户配置项
 */


var call = function call(methodName, data, callback, userOption) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.callHandler(methodName, data, function (response) {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }

      callback && callback(response, userOption, methodName);
    });
  });
};

var initResult = {
  status: null,
  data: {}
};

var config = function config(userOption) {
  if (userOption.debug) console.log("debug:".concat(JSON.stringify(userOption)));
  call('config', {
    jsApiList: userOption.jsApiList
  }, function (response) {
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
  }, userOption);
};

var ready = function ready(callback) {
  initResult.completes = callback;
};

var error = function error(callback) {
  initResult.fail = callback;
};
/**
 * 获取网络类型
 * @param userOption
 */


var getNetworkType = function getNetworkType(userOption) {
  call('easi.getNetworkType', {}, callBackOperation, userOption);
};
/**
 * 检测api
 * @param userOption
 */


var checkJsApi = function checkJsApi(userOption) {
  call('easi.checkJsApi', {
    jsApiList: userOption.jsApiList
  }, callBackOperation, userOption);
};
/**
 * 分享到微信联系人
 * @param userOption
 */


var updateWechatMessageShareData = function updateWechatMessageShareData(userOption) {
  call('easi.updateWechatMessageShareData', {
    title: userOption.title,
    link: userOption.link,
    imgUrl: userOption.imgUrl,
    desc: userOption.desc
  }, callBackOperation, userOption);
};
/**
 * 分享到朋友圈
 * @param userOption
 */


var updateWechatTimelineShareData = function updateWechatTimelineShareData(userOption) {
  call('easi.updateWechatTimelineShareData', {
    title: userOption.title,
    link: userOption.link,
    imgUrl: userOption.imgUrl
  }, callBackOperation, userOption);
};
/**
 * 分享到Facebook时间线
 * @param userOption
 */


var updateFacebookTimelineShareData = function updateFacebookTimelineShareData(userOption) {
  call('easi.updateFacebookTimelineShareData', {
    title: userOption.title,
    link: userOption.link,
    imgUrl: userOption.imgUrl
  }, callBackOperation, userOption);
};
/**
 * 复制文本内容
 * @param userOption
 */


var copy = function copy(userOption) {
  call('easi.copy', {
    content: userOption.content
  }, callBackOperation, userOption);
};
/**
 * 选取图片
 * @param userOption
 */


var chooseImage = function chooseImage(userOption) {
  call('easi.chooseImage', {
    accept: userOption.accept,
    compressImage: userOption.compressImage,
    capture: userOption.capture,
    count: userOption.count
  }, callBackOperation, userOption);
};
/**
 * 获取本地图片Base64数据
 * @param userOption
 */


var getLocalImageData = function getLocalImageData(userOption) {
  call('easi.getLocalImageData', {
    localId: userOption.localId
  }, callBackOperation, userOption);
};
/**
 * 预览图片
 * @param userOption
 */


var previewImage = function previewImage(userOption) {
  call('easi.previewImage', {
    current: userOption.current,
    urls: userOption.urls
  }, callBackOperation, userOption);
};
/**
 * 第三方地图打开地址
 * @param userOption
 */


var openLocation = function openLocation(userOption) {
  call('easi.openLocation', {
    latitude: userOption.latitude,
    longitude: userOption.longitude,
    zoom: userOption.zoom
  }, callBackOperation, userOption);
};
/**
 * 获取设备地址
 * @param userOption
 */


var getLocation = function getLocation(userOption) {
  call('easi.getLocation', {
    type: userOption.type || 'wgs84'
  }, callBackOperation, userOption);
};
/**
 * 扫描二维码
 * @param userOption
 */


var scanQRCode = function scanQRCode(userOption) {
  call('easi.scanQRCode', {
    needContent: userOption.needContent
  }, callBackOperation, userOption);
};
/**
 * 扫描条形码
 * @param userOption
 */


var scanBarcode = function scanBarcode(userOption) {
  call('easi.scanBarcode', {
    needContent: userOption.needContent
  }, callBackOperation, userOption);
};
/**
 * 关闭当前窗口
 * @param userOption
 */


var closeWindow = function closeWindow() {
  call('easi.closeWindow');
};
/**
 * 隐藏菜单栏
 * @param userOption
 */


var hideMenuBar = function hideMenuBar() {
  call('easi.hideMenuBar');
};
/**
 * 显示菜单栏
 * @param userOption
 */


var showMenuBar = function showMenuBar() {
  call('easi.showMenuBar');
};
/**
 * 批量隐藏菜单项
 * @param userOption
 */


var hideMenuItems = function hideMenuItems(userOption) {
  call('easi.hideMenuItems', {
    menuItems: userOption.menuItems
  }, callBackOperation, userOption);
};
/**
 * 批量显示菜单项
 * @param userOption
 */


var showMenuItems = function showMenuItems(userOption) {
  call('easi.showMenuItems', {
    menuItems: userOption.menuItems
  }, callBackOperation, userOption);
};
/**
 * 隐藏导航栏
 * @param userOption
 */


var hideNavBar = function hideNavBar() {
  call('easi.hideNavBar');
};
/**
 * 显示导航栏
 * @param userOption
 */


var showNavBar = function showNavBar() {
  call('easi.showNavBar');
};
/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */


var openWebPage = function openWebPage(userOption) {
  call('easi.openWebPage', {
    url: userOption.url
  });
};
/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */


var openAppPage = function openAppPage(userOption) {
  call('easi.openWebPage', {
    scheme: userOption.scheme
  });
};
/**
 * 获取用户信息
 * @param userOption
 */


var getUserInfo = function getUserInfo(userOption) {
  call('easi.getUserInfo', {}, callBackOperation, userOption);
};

var _getEnv = getEnv(),
    ua = _getEnv.ua,
    isEasi = _getEnv.isEasi,
    isMalaysia = _getEnv.isMalaysia,
    isAndroid = _getEnv.isAndroid,
    isIos = _getEnv.isIos,
    version = _getEnv.version;

var easi = {
  config: config,
  ready: ready,
  error: error,
  getNetworkType: getNetworkType,
  checkJsApi: checkJsApi,
  updateWechatTimelineShareData: updateWechatTimelineShareData,
  updateWechatMessageShareData: updateWechatMessageShareData,
  updateFacebookTimelineShareData: updateFacebookTimelineShareData,
  copy: copy,
  chooseImage: chooseImage,
  getLocalImageData: getLocalImageData,
  previewImage: previewImage,
  openLocation: openLocation,
  getLocation: getLocation,
  scanQRCode: scanQRCode,
  scanBarcode: scanBarcode,
  closeWindow: closeWindow,
  hideMenuBar: hideMenuBar,
  showMenuBar: showMenuBar,
  hideMenuItems: hideMenuItems,
  showMenuItems: showMenuItems,
  hideNavBar: hideNavBar,
  showNavBar: showNavBar,
  openWebPage: openWebPage,
  openAppPage: openAppPage,
  getUserInfo: getUserInfo,
  ua: ua,
  isEasi: isEasi,
  isMalaysia: isMalaysia,
  isAndroid: isAndroid,
  isIos: isIos,
  version: version
};

var delivery = {};

exports.delivery = delivery;
exports.easi = easi;
