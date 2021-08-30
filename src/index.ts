import { getEnv, envType } from './utils/env';
import { baseParamesType } from './setup';
import { config, checkJsApi, ready, error, test } from './base';
import type { configParamesType, checkJsApiType } from './base';
interface EASI {
  config: (conf: configParamesType) => void;
  checkJsApi: (conf: checkJsApiType) => void;
  ready: (callback: () => void) => void;
  error: (callback: (err: { errMsg: string }) => void) => void;
  getEnv: () => envType;
  test: (conf: baseParamesType) => void;
}

const easi: EASI = {
  config,
  checkJsApi,
  ready,
  error,
  test,
  getEnv,
};

export type { configParamesType, baseParamesType, envType };
export default easi;
