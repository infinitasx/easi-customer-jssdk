import { EnvType } from './utils/env';
import type { BaseParamesType } from './setup';
import type { ConfigParamesType, CheckJsApiType } from './base';
interface EASI {
    config: (conf: ConfigParamesType) => void;
    checkJsApi: (conf: CheckJsApiType) => void;
    ready: (callback: () => void) => void;
    error: (callback: (err: {
        errMsg: string;
    }) => void) => void;
    getEnv: () => EnvType;
    test: (conf: BaseParamesType) => void;
}
declare const easi: EASI;
export type { EnvType, ConfigParamesType, BaseParamesType, CheckJsApiType };
export default easi;
