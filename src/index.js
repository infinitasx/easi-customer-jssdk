export class Easi {
  SYS_ERROR = { code: 100, data: "" };
  SYS_CONFIG = {
    easiAgent: "EasiCustomer/",
    easiVersion: "1.8.10",
    easiUserVersion: "1.9.59",
    easiMalaysiaAgent: "EasiMalaysia/",
    easiMalaysiaVersion: "4.9.39",
    easiMalaysiaUserVersion: "4.9.39",
  };
  setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    } else {
      document.addEventListener(
        "WebViewJavascriptBridgeReady",
        function () {
          callback(WebViewJavascriptBridge);
        },
        false
      );
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";
    WVJBIframe.src = "https://__bridge_loaded__";
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }
  call(methodName, data, callback) {
    this.setupWebViewJavascriptBridge(function (bridge) {
      if (data && typeof data === "function") {
        callback = data;
        data = "";
      }
      bridge.callHandler(methodName, data, function responseCallback(responseData) {
        if (typeof responseData == "string") {
          responseData = JSON.parse(responseData);
        }
        callback && callback(responseData);
      });
    });
  }
  version() {
    var appVersion = "";
    var easiUa = navigator.userAgent.split(" ");
    if (easiUa.length > 0) {
      var easiMark = this.isMalaysia() ? this.SYS_CONFIG.easiMalaysiaAgent : this.SYS_CONFIG.easiAgent;
      var easiUaStartIndex = easiUa[0].indexOf(easiMark);
      if (easiUaStartIndex != -1) {
        appVersion = easiUa[0].substring(easiUaStartIndex + easiMark.length);
      }
    }
    return appVersion;
  }
  isEasi() {
    var isEasi = false;
    var easiUa = navigator.userAgent.split(" ");
    if (easiUa.length > 0) {
      var easiUaStartIndex = easiUa[0].indexOf(this.SYS_CONFIG.easiAgent);
      if (easiUaStartIndex != -1) {
        isEasi = true;
      }
    }
    return isEasi;
  }
  isMalaysia() {
    var isMalaysia = false;
    var easiUa = navigator.userAgent.split(" ");
    if (easiUa.length > 0) {
      var easiUaStartIndex = easiUa[0].indexOf(this.SYS_CONFIG.easiMalaysiaAgent);
      if (easiUaStartIndex != -1) {
        isMalaysia = true;
      }
    }
    return isMalaysia;
  }
  compareVersionEle(currVersion, targetVerison) {
    if (!currVersion || !targetVerison) return false;
    const curr = currVersion.split(".");
    const target = targetVerison.split(".");
    for (let i = 0; i < curr.length; i++) {
      if (parseInt(curr[i]) > parseInt(target[i])) {
        return true;
      }
      if (parseInt(curr[i]) < parseInt(target[i])) {
        return false;
      }
    }
    return false;
  }
  isAndroid() {
    var u = navigator.userAgent;
    if (u.indexOf("Android") > -1 || u.indexOf("android") > -1 || u.indexOf("Linux") > -1) {
      return true;
    }
    return false;
  }
  isIos() {
    var u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
      return true;
    }
    return false;
  }

  getVersion(callback) {
    var v = this.version();
    if (!v) {
      return callback(this.SYS_ERROR);
    }
    return callback({ code: 0, data: v });
  }
  getLocation(callback) {
    var v = this.version();
    if (!v) {
      return callback(this.SYS_ERROR);
    }
    if (this.isEasi()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiVersion)) {
        return this.call("easi.location", callback);
      }
    } else if (this.isMalaysia()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiMalaysiaVersion)) {
        return this.call("easi.location", callback);
      }
    }
    return callback(this.SYS_ERROR);
  }

  scan(callback) {
    var v = this.version();
    if (!v) {
      return callback(this.SYS_ERROR);
    }
    if (this.isEasi()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiVersion)) {
        return this.call("easi.scan", callback);
      }
    } else if (this.isMalaysia()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiMalaysiaVersion)) {
        return this.call("easi.scan", callback);
      }
    }
    return callback(this.SYS_ERROR);
  }

  user(callback) {
    var v = this.version();
    if (!v) {
      return callback(this.SYS_ERROR);
    }
    if (this.isEasi()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiUserVersion)) {
        return this.call("easi.user", callback);
      }
    } else if (this.isMalaysia()) {
      if (this.compareVersionEle(v, this.SYS_CONFIG.easiMalaysiaUserVersion)) {
        return this.call("easi.user", callback);
      }
    }
    return callback(this.SYS_ERROR);
  }

  wx_share(url, title, desc, mode) {
    var v = this.version();
    if (!v) {
      return false;
    }
    var easi_schema = "au.com.easi.customer://share/text";
    window.location.href = easi_schema + "?url=" + encodeURIComponent(url) + "&title=" + title + "&text=" + desc + "&mode=" + mode + "&channel=1";
    return true;
  }
}
