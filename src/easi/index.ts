import { getEnv } from '../utils/env';
import * as base from '../base';

import * as operational from './operational';

import oldEasi from './oldEasi';

const { ua, isEasi, isMalaysia, isAndroid, isIos, version } = getEnv();

const easi = {
  ua,
  isEasi,
  isMalaysia,
  isAndroid,
  isIos,
  version,
  ...base,
  ...operational,
};

let target: any = easi;
const isNew = navigator.userAgent.includes('JssdkVersion');
if (!isNew) {
  target = oldEasi;
}

export default target;
