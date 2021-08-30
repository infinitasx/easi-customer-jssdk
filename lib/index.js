'use strict';

const baseInfo = {
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
        const easiMark = parmes.isMalaysia ? baseInfo.easiMalaysiaAgent : baseInfo.easiAgent;
        const easiUaStart = uaFragments[0].includes(easiMark);
        if (easiUaStart) {
            return uaFragments[0].replace(easiMark, '');
        }
    }
    return null;
};
const getEnv = () => {
    const ua = navigator.userAgent;
    const isEasi = ua.includes(baseInfo.easiAgent);
    const isMalaysia = ua.includes(baseInfo.easiMalaysiaAgent);
    const isAndroid = ua.includes('Android') || ua.includes('android') || ua.includes('Linux');
    const isIos = ua.includes('iPhone') || ua.includes('iOS');
    const version = getVersion({ ua, isMalaysia });
    return { ua, isEasi, isMalaysia, isAndroid, isIos, version };
};

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
    switch (response.code) {
        case 0:
            userOption.success &&
                userOption.success({
                    errMsg: `${methodName}:ok`,
                    result: response?.data,
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
        bridge.callHandler(`easi.${methodName}`, data, (response) => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            callback(response, userOption, methodName);
        });
    });
};

// 初始化结果
const initResult = {
    state: 0,
    data: {},
};
const config = (userOption) => {
    if (userOption.debug) {
        console.log(`debug:${JSON.stringify(userOption)}`);
    }
    call('login', {}, (response) => {
        if (response.code === -1) {
            initResult.data = userOption;
            return initResult.fail && initResult.fail();
        }
        initResult.state = 1;
        initResult.completes && initResult.completes();
    }, userOption);
};
const checkJsApi = () => { };
const ready = (callback) => {
    initResult.state !== 0 ? callback && callback() : (initResult.completes = callback);
};
const error = (callback) => {
    initResult.state === -1 ? callback && callback(initResult.data) : (initResult.fail = callback);
};
const test = (userOption) => {
    call('login', {}, callBackOperation, userOption);
};

const easi = {
    config,
    checkJsApi,
    ready,
    error,
    test,
    getEnv,
};

module.exports = easi;
