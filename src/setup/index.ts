// app事件类型
enum appResultEventType {
  'success',
  'fail',
  'cancel',
}
// app返回类型
interface AppResponseType {
  status: appResultEventType;
  message: string | null;
  data: Object | string;
}

// Bridge类型
interface BridgeType {
  callHandler: (
    methodName: string,
    data: any,
    callBack: (response: AppResponseType) => void,
  ) => void;
}

// 用户参数类型
interface BaseParamesType {
  success?: (...args: any[]) => void;
  fail?: (...args: any[]) => void;
  cancel?: (...args: any[]) => void;
  complete?: (...args: any[]) => void;
  trigger?: (...args: any[]) => void;
}

// Bridge方法类型
type CallBackOperationType = {
  (response: any, userOption: BaseParamesType, methodName: string): void;
};

/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */
const callBackOperation: CallBackOperationType = (
  response: any,
  userOption: BaseParamesType,
  methodName: string,
) => {
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
 * @param userOption 用户配置项
 */
const call = (methodName: string, data: any, callback: CallBackOperationType, userOption: any) => {
  setupWebViewJavascriptBridge((bridge: BridgeType) => {
    bridge.callHandler(methodName, data, (response: AppResponseType) => {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      callback(response, userOption, methodName);
    });
  });
};

export type { CallBackOperationType, BaseParamesType, AppResponseType };
export { call, setupWebViewJavascriptBridge, callBackOperation, appResultEventType };
