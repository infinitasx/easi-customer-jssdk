import { call, AppResponse, callBackOperation } from '../setup';
import type { BaseParamesType } from '../setup';

interface AppResultType {
  state: number;
  data: any;
  completes?: () => void;
  fail?: (err: { errMsg: string }) => void;
}
// 初始化结果
export const initResult: AppResultType = {
  state: 0,
  data: {},
};

type jsApiList = [];

// wx.config参数类型
export interface ConfigParamesType {
  debug?: boolean;
  appId: string;
  timestamp: number;
  nonceStr: string;
  signature: string;
  jsApiList: jsApiList;
}

export const config = (userOption: ConfigParamesType) => {
  if (userOption.debug) {
    console.log(`debug:${JSON.stringify(userOption)}`);
  }
  call(
    'login',
    {},
    (response: AppResponse) => {
      if (response.code === -1) {
        initResult.data = userOption;
        return initResult.fail && initResult.fail(initResult.data);
      }
      initResult.state = 1;
      initResult.completes && initResult.completes();
    },
    userOption,
  );
};

export interface CheckJsApiType extends BaseParamesType {
  jsApiList: string[];
}
export const checkJsApi = (userOption: CheckJsApiType) => {};

export const ready = (callback: () => void): void => {
  initResult.state !== 0 ? callback && callback() : (initResult.completes = callback);
};

export const error = (callback: (err: { errMsg: string }) => void): void => {
  initResult.state === -1 ? callback && callback(initResult.data) : (initResult.fail = callback);
};

export const test = (userOption: BaseParamesType) => {
  call('login', {}, callBackOperation, userOption);
};
