export interface Bridge {
    callHandler: Function;
}
export interface AppResponse {
    code: string | number;
}
export interface baseParames {
    success?: Function;
    fail?: Function;
    cancel?: Function;
    complete?: Function;
    [props: string]: any;
}
/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */
export declare const callBackOperation: (res: any, userOption: baseParames, methodName: string) => void;
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
export declare const setupWebViewJavascriptBridge: (callback: Function) => any;
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOption 用户配置项
 */
export declare const call: (methodName: string, data: any, callback: Function, userOption: any) => void;
