// EASI基础数据
var baseEasiInfo = {
  easiAgent: 'EasiCustomer/',
  easiVersion: '1.8.10',
  easiUserVersion: '1.9.59',
  easiMalaysiaAgent: 'EasiMalaysia/',
  easiMalaysiaVersion: '4.9.39',
  easiMalaysiaUserVersion: '4.9.39'
};

/**
 * 获取系统版本信息
 * @param {Object} parmes 配置数据
 * @param {string} parmes.ua 系统ua
 * @param {boolean} parmes.isMalaysia 是否是马来西亚
 */

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
/**
 * 获取系统环境
 * @returns {Object} ua, isEasi, isMalaysia, isAndroid, isIos, version 返回的数据
 */


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

// app事件
var AppResultEventEnum;

(function (AppResultEventEnum) {
  AppResultEventEnum[AppResultEventEnum["success"] = 0] = "success";
  AppResultEventEnum[AppResultEventEnum["fail"] = 1] = "fail";
  AppResultEventEnum[AppResultEventEnum["cancel"] = 2] = "cancel";
})(AppResultEventEnum || (AppResultEventEnum = {}));

/**
 * 处理app返回数据
 * @param {Object} response App响应数据
 * @param {Object} userOptions 用户配置项
 * @param {string} methodName 调用App的Bridge名称
 */

var callBackOperation = function callBackOperation(response, userOptions, methodName) {
  if (userOptions !== null && userOptions !== void 0 && userOptions.complete) {
    userOptions.complete({
      errMsg: "".concat(methodName, ":complete")
    });
  }

  switch (response.status) {
    case AppResultEventEnum[0]:
      (userOptions === null || userOptions === void 0 ? void 0 : userOptions.success) && (userOptions === null || userOptions === void 0 ? void 0 : userOptions.success(_objectSpread2({
        errMsg: "".concat(methodName, ":ok")
      }, response.data)));
      break;

    case AppResultEventEnum[1]:
      (userOptions === null || userOptions === void 0 ? void 0 : userOptions.cancel) && (userOptions === null || userOptions === void 0 ? void 0 : userOptions.cancel({
        errMsg: "".concat(methodName, ":cancel,").concat(response.message)
      }));
      break;

    case AppResultEventEnum[2]:
      (userOptions === null || userOptions === void 0 ? void 0 : userOptions.fail) && (userOptions === null || userOptions === void 0 ? void 0 : userOptions.fail({
        errMsg: "".concat(methodName, ":fail,").concat(response.message)
      }));
  }
};
/**
 *  Bridge桥接
 * @param {Function} callback 回调函数
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
 * @param {string} methodName Bridge方法名
 * @param {Function} callback 回调函数
 * @param {Object | null} data 传递给app的参数
 * @param {Object} userOptions 用户配置项
 */


var call = function call(methodName, data, callback, userOptions) {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.callHandler("easi.".concat(methodName), data, function (response) {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }

      callback && callback(response, userOptions, methodName);
    });
  });
};

var initResult = {};
/**
 * 检测api配置项
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.debug 是否启用debug
 * @param {Array} userOptions.jsApiList 待检测的api列表
 */

var config = function config(userOptions) {
  if (userOptions !== null && userOptions !== void 0 && userOptions.debug) console.log("debug:".concat(JSON.stringify(userOptions)));
  call('config', {
    jsApiList: userOptions === null || userOptions === void 0 ? void 0 : userOptions.jsApiList
  }, function (response) {
    switch (response.status) {
      case AppResultEventEnum[1]:
        initResult.fail && initResult.fail({
          errMsg: response.message || 'fail'
        });
        break;

      case AppResultEventEnum[0]:
        initResult.success && initResult.success(response.data);
    }
  }, userOptions);
};
/**
 * config调用成功后执行函数
 * @param {Function} callback 回调函数
 */


var ready = function ready(callback) {
  initResult.success = callback;
};
/**
 * config调用失败后执行函数
 * @param callback 回调函数
 */


var error = function error(callback) {
  initResult.fail = callback;
};
/**
 * 获取网络类型
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var getNetworkType = function getNetworkType(userOptions) {
  call('getNetworkType', {}, callBackOperation, userOptions);
};
/**
 * 检查是否支持指定API
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var checkJsApi = function checkJsApi(userOptions) {
  call('checkJsApi', {
    jsApiList: userOptions.jsApiList
  }, callBackOperation, userOptions);
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


var updateWechatMessageShareData = function updateWechatMessageShareData(userOptions) {
  call('updateWechatMessageShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl,
    desc: userOptions.desc
  }, callBackOperation, userOptions);
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


var updateWechatTimelineShareData = function updateWechatTimelineShareData(userOptions) {
  call('updateWechatTimelineShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl
  }, callBackOperation, userOptions);
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


var updateFacebookTimelineShareData = function updateFacebookTimelineShareData(userOptions) {
  call('updateFacebookTimelineShareData', {
    title: userOptions.title,
    link: userOptions.link,
    imgUrl: userOptions.imgUrl
  }, callBackOperation, userOptions);
};
/**
 * 复制文本内容
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.content 需要复制到剪贴板的文本内容
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var copy = function copy(userOptions) {
  call('copy', {
    content: userOptions.content
  }, callBackOperation, userOptions);
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


var chooseImage = function chooseImage(userOptions) {
  call('chooseImage', {
    accept: userOptions.accept,
    compressImage: userOptions.compressImage,
    capture: userOptions.capture,
    count: userOptions.count
  }, callBackOperation, userOptions);
};
/**
 * 获取本地图片Base64数据
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.localId 图片的localId
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var getLocalImageData = function getLocalImageData(userOptions) {
  call('getLocalImageData', {
    localId: userOptions.localId
  }, callBackOperation, userOptions);
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


var previewImage = function previewImage(userOptions) {
  call('previewImage', {
    current: userOptions.current,
    urls: userOptions.urls
  }, callBackOperation, userOptions);
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


var openLocation = function openLocation(userOptions) {
  call('openLocation', {
    latitude: userOptions.latitude,
    longitude: userOptions.longitude,
    zoom: userOptions.zoom
  }, callBackOperation, userOptions);
};
/**
 * 获取设备地址
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.type 预留字段，默认为wgs84的gps坐标，其他坐标系待定
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var getDeviceLocation = function getDeviceLocation(userOptions) {
  call('getDeviceLocation', {
    type: userOptions.type || 'wgs84'
  }, callBackOperation, userOptions);
};
/**
 * 扫描二维码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var scanQRCode = function scanQRCode(userOptions) {
  call('scanQRCode', {
    needContent: userOptions.needContent
  }, callBackOperation, userOptions);
};
/**
 * 扫描条形码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var scanBarcode = function scanBarcode(userOptions) {
  call('scanBarcode', {
    needContent: userOptions.needContent
  }, callBackOperation, userOptions);
};
/**
 * 关闭当前窗口
 * @param 无
 */


var closeWindow = function closeWindow() {
  call('closeWindow');
};
/**
 * 隐藏菜单栏
 * @param 无
 */


var hideMenuBar = function hideMenuBar() {
  call('hideMenuBar');
};
/**
 * 显示菜单栏
 * @param 无
 */


var showMenuBar = function showMenuBar() {
  call('showMenuBar');
};
/**
 * 批量隐藏菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 隐藏的菜单项
 */


var hideMenuItems = function hideMenuItems(userOptions) {
  call('hideMenuItems', {
    menuItems: userOptions.menuItems
  }, callBackOperation, userOptions);
};
/**
 * 批量显示菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 显示的菜单项
 */


var showMenuItems = function showMenuItems(userOptions) {
  call('showMenuItems', {
    menuItems: userOptions.menuItems
  }, callBackOperation, userOptions);
};
/**
 * 隐藏导航栏
 * @param 无
 */


var hideNavBar = function hideNavBar() {
  call('hideNavBar');
};
/**
 * 显示导航栏
 * @param 无
 */


var showNavBar = function showNavBar() {
  call('showNavBar');
};
/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.url 目标页面
 */


var openWebPage = function openWebPage(userOptions) {
  call('openWebPage', {
    url: userOptions.url
  });
};
/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.scheme scheme地址
 */


var openAppPage = function openAppPage(userOptions) {
  call('openWebPage', {
    scheme: userOptions.scheme
  });
};
/**
 * 获取用户信息
 * @param {Object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var getUserInfo = function getUserInfo(userOptions) {
  call('getUserInfo', {}, callBackOperation, userOptions);
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

export { delivery, easi };
