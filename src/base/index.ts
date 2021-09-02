import { call, callBackOperation, appType } from '../setup';
import type { BaseParamesType, AppResponseType } from '../setup';

// 初始化结果
const initResult: {
  status: string | null;
  data: any;
  completes?: () => void;
  fail?: (err: { errMsg: string }) => void;
} = {
  status: null,
  data: {},
};

type location = 'wgs84';

// easi.config参数类型
interface ConfigParamesType {
  debug?: boolean;
  jsApiList: string[];
}
interface CheckJsApiType extends BaseParamesType {
  jsApiList: string[];
}

interface scanCodeType extends BaseParamesType {
  needContent: boolean;
}
interface locationType extends BaseParamesType {
  type: location;
}

const config = (userOption: ConfigParamesType) => {
  if (userOption.debug) console.log(`debug:${JSON.stringify(userOption)}`);
  call(
    'config',
    { jsApiList: userOption.jsApiList },
    (response: AppResponseType) => {
      switch (response.status) {
        case appType.fail:
          initResult.data = response.data || userOption;
          initResult.fail && initResult.fail(initResult.data);
          break;
        default:
          initResult.status = 'completes';
          initResult.completes && initResult.completes();
          break;
      }
    },
    userOption,
  );
};

const ready = (callback: () => void): void => {
  initResult.completes = callback;
};

const error = (callback: (err: { errMsg: string }) => void): void => {
  initResult.fail = callback;
};

const checkJsApi = (userOption: CheckJsApiType) => {
  call('checkJsApi', { jsApiList: userOption.jsApiList }, callBackOperation, userOption);
};

const scanQRCode = (userOption: scanCodeType) => {
  call(
    'easi.scan',
    {
      needContent: userOption.needContent,
    },
    callBackOperation,
    userOption,
  );
};

const getLocation = (userOption: locationType) => {
  call(
    'easi.location',
    {
      type: userOption.type || 'wgs84',
    },
    callBackOperation,
    userOption,
  );
};

export type { CheckJsApiType, ConfigParamesType, scanCodeType, locationType };
export { config, ready, error, checkJsApi, scanQRCode, getLocation };
