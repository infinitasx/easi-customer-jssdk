import { typeEnv } from './utils/env';
import { baseParames } from './setup';
import { configParames } from './base';
interface EASI {
    config: (conf: configParames) => void;
    checkJsApi: Function;
    ready: (callback: () => void) => void;
    error: (callback: (err: {
        errMsg: string;
    }) => void) => void;
    getEnv: () => typeEnv;
    test: (params: baseParames) => void;
}
declare const easi: EASI;
export default easi;
