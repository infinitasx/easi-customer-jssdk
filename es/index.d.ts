import { typeEnv } from './utils/env';
import { baseParamesType } from './setup';
import { configParamesType } from './base';
interface EASI {
    config: (conf: configParamesType) => void;
    checkJsApi: Function;
    ready: (callback: () => void) => void;
    error: (callback: (err: {
        errMsg: string;
    }) => void) => void;
    getEnv: () => typeEnv;
    test: (params: baseParamesType) => void;
}
declare const easi: EASI;
export default easi;
export type { configParamesType, baseParamesType };
