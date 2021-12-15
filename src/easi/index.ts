import { getEnv } from '../utils/env';

import * as base from '../base';
import * as operational from './operational';

import oldEasi, { Easi as old } from './oldEasi';

type TEasi = Partial<base.TBase & operational.TOperational & old>;

let easi: TEasi = {};

const isNew = navigator.userAgent.includes('JssdkVersion');
if (!isNew) {
  easi = oldEasi;
} else {
  easi = Object.assign(oldEasi, getEnv(), base, operational);
}

export default easi;
