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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  AppResultEventEnum[AppResultEventEnum["cancel"] = 1] = "cancel";
  AppResultEventEnum[AppResultEventEnum["fail"] = 2] = "fail";
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
  call('openAppPage', {
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
/**
 * 显示客户端的loading
 */


var showLoading = function showLoading() {
  call('showLoading');
};
/**
 * 隐藏客户端的loading
 */


var hideLoading = function hideLoading() {
  call('hideLoading');
};

var base = /*#__PURE__*/Object.freeze({
  __proto__: null,
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
  showLoading: showLoading,
  hideLoading: hideLoading
});

/**
 * 获取当前选择的配送地址或首页定位地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */

var getEASILocation = function getEASILocation(userOptions) {
  call('getEASILocation', {
    type: userOptions.type
  }, callBackOperation, userOptions);
};
/**
 * 显示全局购物车
 * @param 无
 */


var showGlobalCart = function showGlobalCart() {
  call('showGlobalCart');
};
/**
 * 隐藏全局购物车
 * @param 无
 */


var hideGlobalCart = function hideGlobalCart() {
  call('hideGlobalCart');
};
/**
 * 唤起商品SKU选择界面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.openDetails 是否显示商品详情
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var addToCart = function addToCart(userOptions) {
  var _userOptions$openDeta;

  call('addToCart', {
    itemId: userOptions.itemId,
    openDetails: (_userOptions$openDeta = userOptions.openDetails) !== null && _userOptions$openDeta !== void 0 ? _userOptions$openDeta : false
  }, callBackOperation, userOptions);
};
/**
 * 从全局购物车中移除
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var removeFromCart = function removeFromCart(userOptions) {
  call('removeFromCart', {
    itemId: userOptions.itemId
  }, callBackOperation, userOptions);
};
/**
 * 添加到收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var addToFavourites = function addToFavourites(userOptions) {
  call('addToFavourites', {
    shopId: userOptions.shopId
  }, callBackOperation, userOptions);
};
/**
 * 移除收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var removeFromFavourites = function removeFromFavourites(userOptions) {
  call('removeFromFavourites', {
    shopId: userOptions.shopId
  }, callBackOperation, userOptions);
};
/**
 * 快捷方法，打开商家详情页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var openAppShop = function openAppShop(userOptions) {
  call('openAppShop', {
    shopId: userOptions.shopId
  }, callBackOperation, userOptions);
};
/**
 * 快捷方法，打开优惠券页面
 * @param 无
 */


var openAppCoupons = function openAppCoupons() {
  call('openAppCoupons');
};
/**
 * 打开地址管理页面
 * @param 无
 */


var openAppAddress = function openAppAddress() {
  call('openAppAddress');
};
/**
 * 选择地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var selectAppAddress = function selectAppAddress(userOptions) {
  call('selectAppAddress', {}, callBackOperation, userOptions);
};
/**
 * 打开收藏夹
 * @param 无
 */


var openAppFavourites = function openAppFavourites() {
  call('openAppFavourites');
};
/**
 * 打开语言选择
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var openAppLanguages = function openAppLanguages(userOptions) {
  call('openAppLanguages', {}, callBackOperation, userOptions);
};
/**
 * 打开联系客服页面
 * @param 无
 */


var openAppCustomerService = function openAppCustomerService() {
  call('openAppCustomerService');
};
/**
 * 打开一个底部导航栏页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.id 底部tab标志
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */


var openAppTabBar = function openAppTabBar(userOptions) {
  call('openAppTabBar', {
    id: userOptions.id
  }, callBackOperation, userOptions);
};

var operational = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getEASILocation: getEASILocation,
  showGlobalCart: showGlobalCart,
  hideGlobalCart: hideGlobalCart,
  addToCart: addToCart,
  removeFromCart: removeFromCart,
  addToFavourites: addToFavourites,
  removeFromFavourites: removeFromFavourites,
  openAppShop: openAppShop,
  openAppCoupons: openAppCoupons,
  openAppAddress: openAppAddress,
  selectAppAddress: selectAppAddress,
  openAppFavourites: openAppFavourites,
  openAppLanguages: openAppLanguages,
  openAppCustomerService: openAppCustomerService,
  openAppTabBar: openAppTabBar
});

var Easi = /*#__PURE__*/function () {
  function Easi() {
    _classCallCheck(this, Easi);

    _defineProperty(this, "SYS_ERROR", {
      code: 100,
      data: '获取数据异常'
    });

    _defineProperty(this, "SYS_VERSION_ERROR", {
      code: 100,
      data: '该Bridge在当前版本不支持，请升级APP'
    });

    _defineProperty(this, "PARAMES_ERROR", {
      code: 100,
      data: '参数错误'
    });

    _defineProperty(this, "SYS_CONFIG", {
      easiAgent: 'EasiCustomer/',
      easiVersion: '1.8.10',
      easiUserVersion: '1.9.59',
      easiMalaysiaAgent: 'EasiMalaysia/',
      easiMalaysiaVersion: '4.9.39',
      easiMalaysiaUserVersion: '4.9.39'
    });

    _defineProperty(this, "appVersion", null);

    _defineProperty(this, "ua", void 0);

    _defineProperty(this, "isEasi", void 0);

    _defineProperty(this, "isMalaysia", void 0);

    _defineProperty(this, "isAndroid", void 0);

    _defineProperty(this, "isIos", void 0);

    this.ua = navigator.userAgent;
    this.isEasi = this.ua.includes(this.SYS_CONFIG.easiAgent);
    this.isMalaysia = this.ua.includes(this.SYS_CONFIG.easiMalaysiaAgent);
    this.isAndroid = this.ua.includes('Android') || this.ua.includes('android') || this.ua.includes('Linux');
    this.isIos = this.ua.includes('iPhone') || this.ua.includes('iOS');
    this.version();
  }

  _createClass(Easi, [{
    key: "setupWebViewJavascriptBridge",
    value: function setupWebViewJavascriptBridge(callback) {
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
    }
  }, {
    key: "call",
    value: function call(methodName, callback, data) {
      var _this = this;

      this.setupWebViewJavascriptBridge(function (bridge) {
        // if (data && typeof data === 'function') {
        //   callback = data;
        //   data = '';
        // }
        if (!_this.lowVersionTips(methodName, callback)) return;
        bridge.callHandler(methodName, data, function responseCallback(response) {
          if (typeof response === 'string') {
            response = JSON.parse(response);
          }

          callback && callback(response);
        });
      });
    }
    /**
     *  在新版本App中可以识别到不存在的Bridge,该方法处理老版本的app，不支持的Bridge返回错误code给业务方
     * @param {*} methodName Bridge名称
     * @returns
     */

  }, {
    key: "lowVersionTips",
    value: function lowVersionTips(methodName, callback) {
      // 老的Bridge列表
      var oldMethodName = ['easi.location', 'easi.scan', 'easi.user'];

      if (this.isEasi) {
        if (!oldMethodName.includes(methodName) && !this.compareVersionEle(this.appVersion, this.isAndroid ? '2.5.0' : '2.4.0')) {
          return callback(this.SYS_VERSION_ERROR);
        }
      }

      if (this.isMalaysia) {
        if (!oldMethodName.includes(methodName) && !this.compareVersionEle(this.appVersion, this.isAndroid ? '5.5.0' : '5.4.0')) {
          return callback(this.SYS_VERSION_ERROR);
        }
      }

      return true;
    }
    /**
     *  调用APP Bridge
     * @param {*} bridgeType 执行Bridge类型
     * @param {*} callback 回调
     * @returns
     */

  }, {
    key: "callMyApp",
    value: function callMyApp(bridgeType, callback) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (this.isEasi) {
        if (this.compareVersionEle(this.appVersion, this.SYS_CONFIG.easiVersion)) {
          return this.call(bridgeType, callback, data);
        }
      } else if (this.isMalaysia) {
        if (this.compareVersionEle(this.appVersion, this.SYS_CONFIG.easiMalaysiaVersion)) {
          return this.call(bridgeType, callback, data);
        }
      }

      return callback(this.SYS_ERROR);
    }
  }, {
    key: "version",
    value: function version() {
      var uaFragments = this.ua.split(' ');

      if (uaFragments.length > 0) {
        var easiMark = this.isMalaysia ? this.SYS_CONFIG.easiMalaysiaAgent : this.SYS_CONFIG.easiAgent;
        var easiUaStart = uaFragments[0].includes(easiMark);

        if (easiUaStart) {
          this.appVersion = uaFragments[0].replace(easiMark, '');
        }
      }
    } //比较Bridge执行环境是否与预设的版本匹配

  }, {
    key: "compareVersionEle",
    value: function compareVersionEle(currVersion, targetVersion) {
      if (!currVersion || !targetVersion) return false;
      var curr = currVersion.split('.');
      var target = targetVersion.split('.');
      var lenth = curr.length > target.length ? curr.length : target.length;

      for (var i = 0; i < lenth; i++) {
        if (parseInt(curr[i]) > parseInt(target[i])) {
          return true;
        }

        if (parseInt(curr[i]) < parseInt(target[i])) {
          return false;
        }
      }

      return true;
    } // 获取系统版本

  }, {
    key: "getVersion",
    value: function getVersion(callback) {
      if (!this.appVersion) return callback(this.SYS_ERROR);
      return callback({
        code: 0,
        data: this.appVersion
      });
    } // 获取经纬度

  }, {
    key: "getLocation",
    value: function getLocation(callback) {
      if (!this.appVersion) return callback(this.SYS_ERROR);
      this.callMyApp('easi.location', callback);
    } // 调用扫码

  }, {
    key: "scan",
    value: function scan(callback) {
      if (!this.appVersion) return callback(this.SYS_ERROR);
      this.callMyApp('easi.scan', callback);
    } // 获取用户信息

  }, {
    key: "user",
    value: function user(callback) {
      if (!this.appVersion) return callback(this.SYS_ERROR);
      this.callMyApp('easi.user', callback);
    } // 调用分享到朋友圈

  }, {
    key: "wx_share",
    value: function wx_share(url, title, desc, mode) {
      window.location.href = "au.com.easi.customer://share/text?url=".concat(encodeURIComponent(url), "&title=").concat(title, "&text=").concat(desc, "&mode=").concat(mode, "&channel=1");
      return true;
    } // 登录

  }, {
    key: "login",
    value: function login(callback) {
      if (!this.appVersion) return callback(this.SYS_ERROR);
      this.callMyApp('easi.login', callback);
    }
    /**
     * 添加购物车
     * @param {Function} callback 回调函数
     * @param {Object.int} itemId 商品itemId - 必传
     * @param {Object.boolean} openDetails 是否强制展示商品规格 true-显示 false-不显示
     * @returns
     */

  }, {
    key: "addCart",
    value: function addCart(callback, _ref) {
      var _ref$itemId = _ref.itemId,
          itemId = _ref$itemId === void 0 ? null : _ref$itemId,
          _ref$openDetails = _ref.openDetails,
          openDetails = _ref$openDetails === void 0 ? true : _ref$openDetails;
      if (!this.appVersion) return callback(this.SYS_ERROR);
      if (!itemId) return callback(this.PARAMES_ERROR);
      if (!!itemId && typeof itemId === 'string') itemId = Number(itemId);
      this.callMyApp('easi.addCart', callback, {
        itemId: itemId,
        openDetails: openDetails
      });
    }
    /**
     * 全局购物车
     * @param {Function} callback 回调函数
     * @param {Object.boolean} show 是否显示全局购物车 true - 显示 false - 不显示
     * @returns
     */

  }, {
    key: "showCart",
    value: function showCart(callback, _ref2) {
      var _ref2$show = _ref2.show,
          show = _ref2$show === void 0 ? false : _ref2$show;
      if (!this.appVersion) return callback(this.SYS_ERROR);
      this.callMyApp('easi.showCart', callback, {
        show: show
      });
    }
  }, {
    key: "test",
    value: function test(callback) {
      return this.call('easi.test', callback, '');
    }
  }]);

  return Easi;
}();
var oldEasi = new Easi();

var easi = {};
var isNew = navigator.userAgent.includes('JssdkVersion');

if (!isNew) {
  easi = oldEasi;
} else {
  easi = Object.assign(oldEasi, getEnv(), base, operational);
}

var easi$1 = easi;

var delivery = {};

export { delivery, easi$1 as easi };
