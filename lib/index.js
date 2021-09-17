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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

// app事件枚举
var AppResultEventEnum;

(function (AppResultEventEnum) {
  AppResultEventEnum[AppResultEventEnum["success"] = 0] = "success";
  AppResultEventEnum[AppResultEventEnum["fail"] = 1] = "fail";
  AppResultEventEnum[AppResultEventEnum["cancel"] = 2] = "cancel";
})(AppResultEventEnum || (AppResultEventEnum = {}));

/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOptions 用户配置项
 */

var callBackOperation = function callBackOperation(response, userOptions, methodName) {
  if (userOptions.complete) {
    userOptions.complete({
      errMsg: "".concat(methodName, ":complete")
    });
  }

  switch (response.status) {
    case AppResultEventEnum.success:
      userOptions.success && userOptions.success(_objectSpread2({
        errMsg: "".concat(methodName, ":ok")
      }, response.data));
      break;

    case AppResultEventEnum.cancel:
      userOptions.cancel && userOptions.cancel({
        errMsg: "".concat(methodName, ":cancel,").concat(response.message)
      });
      break;

    case AppResultEventEnum.fail:
      userOptions.fail && userOptions.fail({
        errMsg: "".concat(methodName, ":fail,").concat(response.message)
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
 * @param userOptions 用户配置项
 */


var call = function call(methodName, data, callback, userOptions) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.callHandler(methodName, data, function (response) {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }

      callback && callback(response, userOptions, methodName);
    });
  });
};

var initResult = {
  status: AppResultEventEnum.fail,
  data: {}
};

var config = function config(userOptions) {
  if (userOptions !== null && userOptions !== void 0 && userOptions.debug) console.log("debug:".concat(JSON.stringify(userOptions)));
  call('config', {
    jsApiList: userOptions === null || userOptions === void 0 ? void 0 : userOptions.jsApiList
  }, function (response) {
    switch (response.status) {
      case AppResultEventEnum.fail:
        initResult.data = response.data || userOptions;
        initResult.fail && initResult.fail(initResult.data);
        break;

      case AppResultEventEnum.success:
        initResult.status = AppResultEventEnum.success;
        initResult.success && initResult.success(response.data);
    }
  }, userOptions);
};

var ready = function ready(callback) {
  initResult.success = callback;
};

var error = function error(callback) {
  initResult.fail = callback;
};
/**
 * 获取网络类型
 * @param userOptions
 */


var getNetworkType = function getNetworkType(userOptions) {
  call('easi.getNetworkType', {}, callBackOperation, userOptions);
};
/**
 * 检测api
 * @param userOptions
 */


var checkJsApi = function checkJsApi(userOptions) {
  call('easi.checkJsApi', {
    jsApiList: userOptions.jsApiList
  }, callBackOperation, userOptions);
};
/**
 * 分享到微信联系人
 * @param userOptions
 */


var updateWechatMessageShareData = function updateWechatMessageShareData(userOptions) {
  call('easi.updateWechatMessageShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl,
    desc: userOptions.desc
  }, callBackOperation, userOptions);
};
/**
 * 分享到朋友圈
 * @param userOptions
 */


var updateWechatTimelineShareData = function updateWechatTimelineShareData(userOptions) {
  call('easi.updateWechatTimelineShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl
  }, callBackOperation, userOptions);
};
/**
 * 分享到Facebook时间线
 * @param userOptions
 */


var updateFacebookTimelineShareData = function updateFacebookTimelineShareData(userOptions) {
  call('easi.updateFacebookTimelineShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl
  }, callBackOperation, userOptions);
};
/**
 * 复制文本内容
 * @param userOptions
 */


var copy = function copy(userOptions) {
  call('easi.copy', {
    content: userOptions.content
  }, callBackOperation, userOptions);
};
/**
 * 选取图片
 * @param userOptions
 */


var chooseImage = function chooseImage(userOptions) {
  call('easi.chooseImage', {
    accept: userOptions.accept,
    compressImage: userOptions.compressImage,
    capture: userOptions.capture,
    count: userOptions.count
  }, callBackOperation, userOptions);
};
/**
 * 获取本地图片Base64数据
 * @param userOptions
 */


var getLocalImageData = function getLocalImageData(userOptions) {
  call('easi.getLocalImageData', {
    localId: userOptions.localId
  }, callBackOperation, userOptions);
};
/**
 * 预览图片
 * @param userOptions
 */


var previewImage = function previewImage(userOptions) {
  call('easi.previewImage', {
    current: userOptions.current,
    urls: userOptions.urls
  }, callBackOperation, userOptions);
};
/**
 * 第三方地图打开地址
 * @param userOptions
 */


var openLocation = function openLocation(userOptions) {
  call('easi.openLocation', {
    latitude: userOptions.latitude,
    longitude: userOptions.longitude,
    zoom: userOptions.zoom
  }, callBackOperation, userOptions);
};
/**
 * 获取设备地址
 * @param userOptions
 */


var getDeviceLocation = function getDeviceLocation(userOptions) {
  call('easi.getDeviceLocation', {
    type: userOptions.type || 'wgs84'
  }, callBackOperation, userOptions);
};
/**
 * 扫描二维码
 * @param userOptions
 */


var scanQRCode = function scanQRCode(userOptions) {
  call('easi.scanQRCode', {
    needContent: userOptions.needContent
  }, callBackOperation, userOptions);
};
/**
 * 扫描条形码
 * @param userOptions
 */


var scanBarcode = function scanBarcode(userOptions) {
  call('easi.scanBarcode', {
    needContent: userOptions.needContent
  }, callBackOperation, userOptions);
};
/**
 * 关闭当前窗口
 * @param userOptions
 */


var closeWindow = function closeWindow() {
  call('easi.closeWindow');
};
/**
 * 隐藏菜单栏
 * @param userOptions
 */


var hideMenuBar = function hideMenuBar() {
  call('easi.hideMenuBar');
};
/**
 * 显示菜单栏
 * @param userOptions
 */


var showMenuBar = function showMenuBar() {
  call('easi.showMenuBar');
};
/**
 * 批量隐藏菜单项
 * @param userOptions
 */


var hideMenuItems = function hideMenuItems(userOptions) {
  call('easi.hideMenuItems', {
    menuItems: userOptions.menuItems
  }, callBackOperation, userOptions);
};
/**
 * 批量显示菜单项
 * @param userOptions
 */


var showMenuItems = function showMenuItems(userOptions) {
  call('easi.showMenuItems', {
    menuItems: userOptions.menuItems
  }, callBackOperation, userOptions);
};
/**
 * 隐藏导航栏
 * @param userOptions
 */


var hideNavBar = function hideNavBar() {
  call('easi.hideNavBar');
};
/**
 * 显示导航栏
 * @param userOptions
 */


var showNavBar = function showNavBar() {
  call('easi.showNavBar');
};
/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */


var openWebPage = function openWebPage(userOptions) {
  call('easi.openWebPage', {
    url: userOptions.url
  });
};
/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */


var openAppPage = function openAppPage(userOptions) {
  call('easi.openWebPage', {
    scheme: userOptions.scheme
  });
};
/**
 * 获取用户信息
 * @param userOptions
 */


var getUserInfo = function getUserInfo(userOptions) {
  call('easi.getUserInfo', {}, callBackOperation, userOptions);
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
  getDeviceLocation: getDeviceLocation,
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
