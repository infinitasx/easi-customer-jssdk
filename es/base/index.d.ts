import type { baseParamesType } from '../setup';
interface appResultType {
    state: number;
    data: any;
    completes?: () => void;
    fail?: (err: {
        errMsg: string;
    }) => void;
}
export declare const initResult: appResultType;
declare type jsApiList = [];
export interface configParamesType {
    debug?: boolean;
    appId: string;
    timestamp: number;
    nonceStr: string;
    signature: string;
    jsApiList: jsApiList;
}
export declare const config: (userOption: configParamesType) => void;
export interface checkJsApiType extends baseParamesType {
    jsApiList: string[];
}
export declare const checkJsApi: (userOption: checkJsApiType) => void;
export declare const ready: (callback: () => void) => void;
export declare const error: (callback: (err: {
    errMsg: string;
}) => void) => void;
export declare const test: (userOption: baseParamesType) => void;
export {};
