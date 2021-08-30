import { getEnv, EnvType } from './utils/env';
import type { BaseParamesType } from './setup';
import { config, checkJsApi, ready, error, test } from './base';
import type { ConfigParamesType, CheckJsApiType } from './base';
interface EASI {
  config: (conf: ConfigParamesType) => void;
  checkJsApi: (conf: CheckJsApiType) => void;
  ready: (callback: () => void) => void;
  error: (callback: (err: { errMsg: string }) => void) => void;
  getEnv: () => EnvType;
  test: (conf: BaseParamesType) => void;
}

const easi: EASI = {
  config,
  checkJsApi,
  ready,
  error,
  test,
  getEnv,
};

export type { EnvType, ConfigParamesType, BaseParamesType, CheckJsApiType };
export default easi;
