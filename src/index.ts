import { getEnv } from './utils';
import { call, callAppParames } from './setup';

interface EASI {
  config: Function;
  ready: Function;
  error: Function;
  login: Function;
  checkJsApi: Function;
}

let isOk = false;
let apiList = {
  config: 'config',
  login: 'login',
};

const easi: EASI = {
  config: (parmes: { debug: boolean; jsApiList: [] }) => {
    isOk = true;
  },
  checkJsApi: (parmes: { jsApiList: []; success: Function }) => {
    const { jsApiList, success } = parmes;
    let checkResult: {
      [props: string]: any;
    } = {};
    if (jsApiList.length > 0) {
      for (const item of jsApiList) {
        if (apiList[item]) {
          checkResult[item] = true;
        }
      }
    }
    success && success({ checkResult: checkResult, errMsg: 'checkJsApi:ok' });
  },
  ready: (cb: Function) => {
    isOk && cb && cb();
  },
  error: () => {},
  login: (parmes: callAppParames) => {
    call({
      ...parmes,
      methodName: 'login',
      data: {},
    });
  },
};

export default easi;
