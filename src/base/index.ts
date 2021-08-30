import { call, baseParamesType, AppResponse, callBackOperation } from '../setup';
interface appResultType {
  state: number;
  data: any;
  completes?: Function;
  fail?: Function;
}
// 初始化结果
export const initResult: appResultType = {
  state: 0,
  data: {},
};

type jsApiList = [];

// wx.config参数类型
export interface configParamesType {
  debug?: boolean;
  appId: string;
  timestamp: number;
  nonceStr: string;
  signature: string;
  jsApiList: jsApiList;
}

export const config = (userOption: configParamesType) => {
  if (userOption.debug) {
    console.log(`debug:${JSON.stringify(userOption)}`);
  }
  call(
    'login',
    {},
    (response: AppResponse) => {
      if (response.code === -1) {
        initResult.data = userOption;
        return initResult.fail && initResult.fail();
      }
      initResult.state = 1;
      initResult.completes && initResult.completes();
    },
    userOption,
  );
};

export const checkJsApi = () => {};

export const ready = (callback: () => void): void => {
  initResult.state !== 0 ? callback && callback() : (initResult.completes = callback);
};

export const error = (callback: (err: { errMsg: string }) => void): void => {
  initResult.state === -1 ? callback && callback(initResult.data) : (initResult.fail = callback);
};

export const test = (userOption: baseParamesType) => {
  call('login', {}, callBackOperation, userOption);
};
