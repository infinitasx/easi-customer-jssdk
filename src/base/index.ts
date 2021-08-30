import { call, baseParamesType, AppResponse, callBackOperation } from '../setup';
interface Result {
  state: number;
  data: any;
  completes?: Function;
  fail?: Function;
}

export const initResult: Result = {
  state: 0,
  data: {},
};

type jsApiList = [];

export interface configParamesType {
  debug?: boolean;
  appId: string; // 必填，公众号的唯一标识
  timestamp: number; // 必填，生成签名的时间戳
  nonceStr: string; // 必填，生成签名的随机串
  signature: string; // 必填，签名，见附录1
  jsApiList: jsApiList; // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
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
