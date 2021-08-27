export interface Bridge {
  callHandler: Function;
}

export interface AppResponse {
  code: string | number;
}

export interface baseParames {
  methodName: string;
  data?: any;
  success?: Function;
  fail?: Function;
  cancel?: Function;
  complete: Function;
}

/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
export const setupWebViewJavascriptBridge = (callback: Function) => {
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

const appResult = () => {};

/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递的数据
 */
export const call = (parames: baseParames) => {
  const { methodName, data, success, cancel, fail, complete } = parames;
  setupWebViewJavascriptBridge((bridge: Bridge) => {
    bridge.callHandler(`easi.${methodName}`, data, (response: AppResponse) => {
      if (typeof response === 'string') {
        response = JSON.parse(response);
      }
      response.code === 0 ? success && success(response) : fail && fail(response);
      complete && complete(response);
    });
  });
};
