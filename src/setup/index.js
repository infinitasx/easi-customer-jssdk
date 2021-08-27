/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */
export const callBackOperation = (res, userOption, methodName) => {
    userOption.complete &&
        userOption.complete({
            errMsg: `${methodName}:complete`,
        });
    switch (res.code) {
        case 0:
            userOption.success &&
                userOption.success({
                    errMsg: `${methodName}:ok`,
                    result: res?.data,
                });
            break;
        case 1:
            userOption.cancel &&
                userOption.cancel({
                    errMsg: `${methodName}:cancel`,
                });
            break;
        default:
            userOption.fail &&
                userOption.fail({
                    errMsg: `${methodName}:fail`,
                });
            break;
    }
};
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
export const setupWebViewJavascriptBridge = (callback) => {
    if (window.WebViewJavascriptBridge) {
        return callback(window.WebViewJavascriptBridge);
    }
    else {
        document.addEventListener('WebViewJavascriptBridgeReady', function () {
            callback(window.WebViewJavascriptBridge);
        }, false);
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
};
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOption 用户配置项
 */
export const call = (methodName, data, callback, userOption) => {
    setupWebViewJavascriptBridge((bridge) => {
        bridge.callHandler(`easi.${methodName}`, data, (response) => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            callback(response, userOption, methodName);
        });
    });
};
//# sourceMappingURL=index.js.map