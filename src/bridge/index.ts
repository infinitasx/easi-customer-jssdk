import type {
  CallBackOperationType,
  BaseParamesType,
  AppResponseType,
  BridgeType,
} from './interface';
import { AppResultEventEnum } from './interface';

/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOptions 用户配置项
 */
const callBackOperation: CallBackOperationType = (
  response: AppResponseType,
  userOptions: BaseParamesType,
  methodName: string,
) => {
  if (userOptions.complete) {
    userOptions.complete({
      errMsg: `${methodName}:complete`,
    });
  }
  switch (response.status) {
    case AppResultEventEnum.success:
      userOptions.success && userOptions.success({ errMsg: `${methodName}:ok`, ...response.data });
      break;
    case AppResultEventEnum.cancel:
      userOptions.cancel &&
        userOptions.cancel({
          errMsg: `${methodName}:cancel,${response.message}`,
        });
      break;
    case AppResultEventEnum.fail:
      userOptions.fail &&
        userOptions.fail({
          errMsg: `${methodName}:fail,${response.message}`,
        });
    default:
      break;
  }
};

/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
const setupWebViewJavascriptBridge = (callback: (arg: any) => void): any => {
  if (window.WebViewJavascriptBridge) {
    return callback(window.WebViewJavascriptBridge);
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        callback(window.WebViewJavascriptBridge);
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
};

/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOptions 用户配置项
 */
const call = (
  methodName: string,
  data?: any,
  callback?: CallBackOperationType,
  userOptions?: any,
) => {
  setupWebViewJavascriptBridge((bridge: BridgeType) => {
    bridge.callHandler(methodName, data, (response: AppResponseType) => {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      callback && callback(response, userOptions, methodName);
    });
  });
};

export { call, callBackOperation };
