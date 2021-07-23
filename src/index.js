export class Easi {
  SYS_ERROR = {
    code: 100,
    data: '获取数据异常',
  };

  SYS_VERSION_ERROR = {
    code: 100,
    data: '该Bridge在当前版本不支持，请升级APP',
  };

  PARAMES_ERROR = {
    code: 100,
    data: '参数错误',
  };

  SYS_CONFIG = {
    easiAgent: 'EasiCustomer/',
    easiVersion: '1.8.10',
    easiUserVersion: '1.9.59',
    easiMalaysiaAgent: 'EasiMalaysia/',
    easiMalaysiaVersion: '4.9.39',
    easiMalaysiaUserVersion: '4.9.39',
  };

  appVersion = null;

  constructor() {
    this.ua = navigator.userAgent;
    this.isEasi = this.ua.includes(this.SYS_CONFIG.easiAgent);
    this.isMalaysia = this.ua.includes(this.SYS_CONFIG.easiMalaysiaAgent);
    this.isAndroid =
      this.ua.includes('Android') || this.ua.includes('android') || this.ua.includes('Linux');
    this.isIos = this.ua.includes('iPhone') || this.ua.includes('iOS');
    this.version();
  }

  // 兼容
  isIos() {
    return this.isIos;
  }

  isAndroid() {
    return this.isAndroid;
  }

  isEasi() {
    return this.isEasi;
  }

  isMalaysia() {
    return this.isMalaysia;
  }

  setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    } else {
      document.addEventListener(
        'WebViewJavascriptBridgeReady',
        function () {
          callback(WebViewJavascriptBridge);
        },
        false,
      );
    }

    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }

    window.WVJBCallbacks = [callback];

    const WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }

  call(methodName, callback, data) {
    let _this = this;
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
  lowVersionTips(methodName, callback) {
    // 老的Bridge列表
    const oldMethodName = ['easi.location', 'easi.scan', 'easi.user'];
    if (this.isEasi) {
      if (
        !oldMethodName.includes(methodName) &&
        !this.compareVersionEle(this.appVersion, '2.4.0')
      ) {
        return callback(this.SYS_VERSION_ERROR);
      }
    }
    if (this.isMalaysia) {
      if (
        !oldMethodName.includes(methodName) &&
        !this.compareVersionEle(this.appVersion, '5.4.0')
      ) {
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
  callMyApp(bridgeType, callback, data = '') {
    if (this.isEasi) {
      if (this.compareVersionEle(this.appVersion, this.SYS_CONFIG.easiVersion)) {
        return this.call(bridgeType, callback, data);
      }
    } else if (this.isMalaysia) {
      if (this.compareVersionEle(this.appVersion, this.SYS_CONFIG.easiMalaysiaVersion)) {
        return this.call(bridgeType, callback), data;
      }
    }
    return callback(this.SYS_ERROR);
  }

  version() {
    const uaFragments = this.ua.split(' ');
    if (uaFragments.length > 0) {
      const easiMark = this.isMalaysia
        ? this.SYS_CONFIG.easiMalaysiaAgent
        : this.SYS_CONFIG.easiAgent;
      const easiUaStart = uaFragments[0].includes(easiMark);
      if (easiUaStart) {
        this.appVersion = uaFragments[0].replace(easiMark, '');
      }
    }
  }

  //比较Bridge执行环境是否与预设的版本匹配
  compareVersionEle(currVersion, targetVersion) {
    if (!currVersion || !targetVersion) return false;
    const curr = currVersion.split('.');
    const target = targetVersion.split('.');
    let lenth = curr.length > target.length ? curr.length : target.length;
    for (let i = 0; i < lenth; i++) {
      if (parseInt(curr[i]) > parseInt(target[i])) {
        return true;
      }
      if (parseInt(curr[i]) < parseInt(target[i])) {
        return false;
      }
    }
    return true;
  }

  // 获取系统版本
  getVersion(callback) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    return callback({ code: 0, data: this.appVersion });
  }

  // 获取经纬度
  getLocation(callback) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    this.callMyApp('easi.location', callback);
  }

  // 调用扫码
  scan(callback) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    this.callMyApp('easi.scan', callback);
  }

  // 获取用户信息
  user(callback) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    this.callMyApp('easi.user', callback);
  }

  // 调用分享到朋友圈
  wx_share(url, title, desc, mode) {
    window.location.href = `au.com.easi.customer://share/text?url=${encodeURIComponent(
      url,
    )}&title=${title}&text=${desc}&mode=${mode}&channel=1`;
    return true;
  }

  // 登录
  login(callback) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    this.callMyApp('easi.login', callback);
  }

  /**
   * 唤起购物车
   * @param {Function} callback 回调函数
   * @param {string} id 商品id
   * @returns
   */
  addCart(callback, id) {
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
  addCart(callback, { itemId, openDetails = true }) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    if (!itemId) return callback(this.PARAMES_ERROR);
    if (!!itemId && typeof itemId === 'string') itemId = Number(itemId);
    this.callMyApp('easi.addCart', callback, { itemId: itemId, openDetails: openDetails });
  }

  /**
   * 全局购物车
   * @param {Function} callback 回调函数
   * @param {Object.boolean} show 是否显示全局购物车 true - 显示 false - 不显示
   * @returns
   */
  showCart(callback, { show = false }) {
    if (!this.appVersion) return callback(this.SYS_ERROR);
    this.callMyApp('easi.showCart', callback, { show: show });
  }

  test(callback) {
    return this.call('easi.test', callback);
  }
}
