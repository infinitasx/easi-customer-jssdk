import { getEnv } from '../utils/env';

import * as base from '../base';
import * as operational from './operational';

import oldEasi from './oldEasi';

const easi = {
  ...getEnv(),
  ...base,
  ...operational,
};

let target: any = easi;
const isNew = navigator.userAgent.includes('JssdkVersion');
if (!isNew) {
  target = oldEasi;
}

export default target;
