import { getEnv } from './utils/env';
import { config, checkJsApi, ready, error, test } from './base';
type EASI = {
  config: Function;
  checkJsApi: Function;
  ready: Function;
  error: Function;
  getEnv: Function;
  [key: string]: Function;
};

const easi: EASI = {
  config,
  checkJsApi,
  ready,
  error,
  test,
  getEnv,
};

export default easi;
