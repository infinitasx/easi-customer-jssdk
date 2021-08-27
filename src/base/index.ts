import { call, baseParames, AppResponse, callBackOperation } from '../setup';
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

export const config = (userOption: baseParames) => {
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

export const ready = (callback: Function) => {
  initResult.state !== 0 ? callback && callback() : (initResult.completes = callback);
};

export const error = (callback: Function) => {
  initResult.state === -1 ? callback && callback(initResult.data) : (initResult.fail = callback);
};

export const test = (userOption: baseParames) => {
  call('login', {}, callBackOperation, userOption);
};
