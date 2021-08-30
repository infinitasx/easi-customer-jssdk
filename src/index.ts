import { getEnv, typeEnv } from './utils/env';
import { baseParames } from './setup';
import { config, configParames, checkJsApi, ready, error, test } from './base';
interface EASI {
  config: (conf: configParames) => void;
  checkJsApi: Function;
  ready: (callback: () => void) => void;
  error: (callback: (err: { errMsg: string }) => void) => void;
  getEnv: () => typeEnv;
  test: (params: baseParames) => void;
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
