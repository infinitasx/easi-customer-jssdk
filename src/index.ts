import { getEnv, typeEnv } from './utils/env';
import { baseParamesType } from './setup';
import { config, configParamesType, checkJsApi, ready, error, test } from './base';
interface EASI {
  config: (conf: configParamesType) => void;
  checkJsApi: Function;
  ready: (callback: () => void) => void;
  error: (callback: (err: { errMsg: string }) => void) => void;
  getEnv: () => typeEnv;
  test: (params: baseParamesType) => void;
}

const easi: EASI = {
  config,
  checkJsApi,
  ready,
  error,
  test,
  getEnv,
};

export default easi;
export type { configParamesType, baseParamesType };
