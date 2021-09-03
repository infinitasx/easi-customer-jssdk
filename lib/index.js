'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const baseEasiInfo = {
    easiAgent: 'EasiCustomer/',
    easiVersion: '1.8.10',
    easiUserVersion: '1.9.59',
    easiMalaysiaAgent: 'EasiMalaysia/',
    easiMalaysiaVersion: '4.9.39',
    easiMalaysiaUserVersion: '4.9.39',
};

const getVersion = (parmes) => {
    const uaFragments = parmes.ua.split(' ');
    if (uaFragments.length > 0) {
        const easiMark = parmes.isMalaysia ? baseEasiInfo.easiMalaysiaAgent : baseEasiInfo.easiAgent;
        const easiUaStart = uaFragments[0].includes(easiMark);
        if (easiUaStart) {
            return uaFragments[0].replace(easiMark, '');
        }
    }
    return null;
};
const getEnv = () => {
    const ua = navigator.userAgent;
    const isEasi = ua.includes(baseEasiInfo.easiAgent);
    const isMalaysia = ua.includes(baseEasiInfo.easiMalaysiaAgent);
    const isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
    const isIos = ua.includes('iPhone') || ua.includes('iOS');
    const version = getVersion({ ua, isMalaysia });
    return { ua, isEasi, isMalaysia, isAndroid, isIos, version };
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
const callBackOperation = (response, userOption, methodName) => {
    userOption.complete &&
        userOption.complete({
            errMsg: `${methodName}:complete`,
        });
    switch (response.status) {
        case appResultEventType.success:
            userOption.success &&
                userOption.success({
                    errMsg: `${methodName}:ok`,
                    result: response?.data,
                });
            break;
        case appResultEventType.cancel:
            userOption.cancel &&
                userOption.cancel({
                    errMsg: `${methodName}:cancel`,
                });
            break;
        case appResultEventType.fail:
            userOption.fail &&
                userOption.fail({
                    message: response?.message,
                    errMsg: `${methodName}:fail`,
                });
    }
};
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
const setupWebViewJavascriptBridge = (callback) => {
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
const call = (methodName, data, callback, userOption) => {
    setupWebViewJavascriptBridge((bridge) => {
        bridge.callHandler(methodName, data, (response) => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            callback(response, userOption, methodName);
        });
    });
};

// 初始化结果
const initResult = {
    status: null,
    data: {},
};
const config = (userOption) => {
    if (userOption.debug)
        console.log(`debug:${JSON.stringify(userOption)}`);
    call('config', { jsApiList: userOption.jsApiList }, (response) => {
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
const ready = (callback) => {
    initResult.completes = callback;
};
const error = (callback) => {
    initResult.fail = callback;
};
const checkJsApi = (userOption) => {
    call('checkJsApi', { jsApiList: userOption.jsApiList }, callBackOperation, userOption);
};
const scanQRCode = (userOption) => {
    call('easi.scan', {
        needContent: userOption.needContent,
    }, callBackOperation, userOption);
};
const getLocation = (userOption) => {
    call('easi.location', {
        type: userOption.type || 'wgs84',
    }, callBackOperation, userOption);
};

const easi = {
    config,
    checkJsApi,
    ready,
    error,
    getEnv,
    scanQRCode,
    getLocation,
};

const delivery = {};

exports.delivery = delivery;
exports.easi = easi;
