import type { BaseParamesType } from '../setup';
interface AppResultType {
    state: number;
    data: any;
    completes?: () => void;
    fail?: (err: {
        errMsg: string;
    }) => void;
}
export declare const initResult: AppResultType;
declare type jsApiList = [];
export interface ConfigParamesType {
    debug?: boolean;
    appId: string;
    timestamp: number;
    nonceStr: string;
    signature: string;
    jsApiList: jsApiList;
}
export declare const config: (userOption: ConfigParamesType) => void;
export interface CheckJsApiType extends BaseParamesType {
    jsApiList: string[];
}
export declare const checkJsApi: (userOption: CheckJsApiType) => void;
export declare const ready: (callback: () => void) => void;
export declare const error: (callback: (err: {
    errMsg: string;
}) => void) => void;
export declare const test: (userOption: BaseParamesType) => void;
export {};
