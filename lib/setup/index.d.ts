export interface Bridge {
    callHandler: Function;
}
export interface AppResponse {
    code: string | number;
}
export interface baseParamesType {
    success?: Function;
    fail?: Function;
    cancel?: Function;
    complete?: Function;
}
export declare type callBackOperationType = {
    (response: any, userOption: baseParamesType, methodName: string): void;
};
/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */
export declare const callBackOperation: callBackOperationType;
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
export declare const setupWebViewJavascriptBridge: (callback: (arg: any) => void) => any;
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOption 用户配置项
 */
export declare const call: (methodName: string, data: any, callback: callBackOperationType, userOption: any) => void;
