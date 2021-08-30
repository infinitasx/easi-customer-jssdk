import { baseParamesType } from '../setup';
interface Result {
    state: number;
    data: any;
    completes?: Function;
    fail?: Function;
}
export declare const initResult: Result;
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
export declare const checkJsApi: () => void;
export declare const ready: (callback: () => void) => void;
export declare const error: (callback: (err: {
    errMsg: string;
}) => void) => void;
export declare const test: (userOption: baseParamesType) => void;
export {};
