function Easi() {
    this.SYS_ERROR = {code: 100, data: ''};
    this.setupWebViewJavascriptBridge = function (callback) {
        if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge);
        } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady'
                , function () {
                    callback(WebViewJavascriptBridge)
                },
                false
            );
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
    this.call = function (methodName, data, callback) {
        this.setupWebViewJavascriptBridge(function (bridge) {
            if (data && typeof data === "function") {
                callback = data;
                data = '';
            }
            bridge.callHandler(methodName, data, function responseCallback(responseData) {
                if (typeof (responseData) == 'string') {
                    responseData = JSON.parse(responseData);
                }
                callback && callback(responseData);
            });
        });
    };
    this.version = function () {
        var app_version = '';
        var easiUa = navigator.userAgent.split(' ');
        if (easiUa.length > 0) {
            var easi_mark = "EasiCustomer/";
            var easiUaStartIndex = easiUa[0].indexOf(easi_mark);
            if (easiUaStartIndex != -1) {
                app_version = easiUa[0].substring(easiUaStartIndex + easi_mark.length);
            }
        }
        return app_version;
    };
    this.compareVersionEle = function (currVersion, targetVerison) {
        if (!currVersion || !targetVerison) return false;
        const curr = currVersion.split('.');
        const target = targetVerison.split('.');
        for (let i = 0; i < curr.length; i++) {
            if (parseInt(curr[i]) > parseInt(target[i])) {
                return true
            }
            if (parseInt(curr[i]) < parseInt(target[i])) {
                return false
            }
        }
        return false;
    };
    this.isAndroid = function () {
        var u = navigator.userAgent;
        if (u.indexOf("Android") > -1 || u.indexOf("android") > -1 || u.indexOf("Linux") > -1) {
            return true;
        }
        return false;
    };
    this.isIos = function () {
        var u = navigator.userAgent;
        if (u.indexOf("iPhone") > -1 || u.indexOf("iOS") > -1) {
            return true;
        }
        return false;
    };
}

Easi.prototype.getVersion = function (callback) {
    var v = this.version();
    if (!v) {
        callback(this.SYS_ERROR);
        return;
    }
    callback({code: 0, data: v});
};

Easi.prototype.getLocation = function (callback) {
    var v = this.version();
    if (!v) {
        callback(this.SYS_ERROR);
        return;
    }
    if (this.isIos()) {
        if (this.compareVersionEle(v, "1.8.10")) {
            easi.call("easi.location", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else if (this.isAndroid()) {
        if (this.compareVersionEle(v, "1.8.10")) {
            easi.call("easi.location", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else {
        callback(this.SYS_ERROR);
    }
};

Easi.prototype.scan = function (callback) {
    var v = this.version();
    if (!v) {
        callback(this.SYS_ERROR);
        return;
    }
    if (this.isIos()) {
        if (this.compareVersionEle(v, "1.8.10")) {
            easi.call("easi.scan", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else if (this.isAndroid()) {
        if (this.compareVersionEle(v, "1.8.10")) {
            easi.call("easi.scan", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else {
        callback(this.SYS_ERROR);
    }
};

Easi.prototype.user = function (callback) {
    var v = this.version();
    if (!v) {
        callback(this.SYS_ERROR);
        return;
    }
    if (this.isIos()) {
        if (this.compareVersionEle(v, "1.9.60")) {
            easi.call("easi.user", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else if (this.isAndroid()) {
        if (this.compareVersionEle(v, "1.9.60")) {
            easi.call("easi.user", callback);
        } else {
            callback(this.SYS_ERROR);
        }
    } else {
        callback(this.SYS_ERROR);
    }
};

Easi.prototype.wx_share = function (url, title, desc, mode) {
    var v = this.version();
    if (!v) {
        return false;
    }
    var easi_schema = 'au.com.easi.customer://share/text'
    window.location.href = easi_schema + '?url=' + encodeURIComponent(url) + '&title=' + title + '&text=' + desc + '&mode='+mode+'&channel=1';
    return true;
};
