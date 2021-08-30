import { envType } from './utils/env';
import { baseParamesType } from './setup';
import type { configParamesType, checkJsApiType } from './base';
interface EASI {
    config: (conf: configParamesType) => void;
    checkJsApi: (conf: checkJsApiType) => void;
    ready: (callback: () => void) => void;
    error: (callback: (err: {
        errMsg: string;
    }) => void) => void;
    getEnv: () => envType;
    test: (conf: baseParamesType) => void;
}
declare const easi: EASI;
export type { configParamesType, baseParamesType, envType };
export default easi;
