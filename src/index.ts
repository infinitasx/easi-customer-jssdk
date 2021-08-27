import { getEnv } from './utils/env';
import { config, checkJsApi, ready, error, test } from './base';
interface EASI {
  [props: string]: unknown;
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
