import * as base from '../base';
import * as operational from './operational';
import { Easi as old } from './oldEasi';
declare type TEasi = Partial<base.TBase & operational.TOperational & old>;
declare let easi: TEasi;
export default easi;
