import { getEnv } from './utils/env';
import { config, checkJsApi, ready, error, getLocation, scanQRCode } from './base';

const easi = {
  config,
  checkJsApi,
  ready,
  error,
  getEnv,
  scanQRCode,
  getLocation,
};

export default easi;
