declare enum appResultEventType {
    'success' = 0,
    'fail' = 1,
    'cancel' = 2
}
interface AppResponseType {
    status: appResultEventType;
    message: string | null;
    data: Object | string;
}
interface BaseParamesType {
    success?: (...args: any[]) => void;
    fail?: (...args: any[]) => void;
    cancel?: (...args: any[]) => void;
    complete?: (...args: any[]) => void;
    trigger?: (...args: any[]) => void;
}
declare type CallBackOperationType = {
    (response: any, userOption: BaseParamesType, methodName: string): void;
};
/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOption 用户配置项
 */
declare const callBackOperation: CallBackOperationType;
/**
 *  Bridge桥接
 * @param callback 回调函数
 * @returns
 */
declare const setupWebViewJavascriptBridge: (callback: (arg: any) => void) => any;
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOption 用户配置项
 */
declare const call: (methodName: string, data?: any, callback?: CallBackOperationType | undefined, userOption?: any) => void;
export type { CallBackOperationType, BaseParamesType, AppResponseType };
export { call, setupWebViewJavascriptBridge, callBackOperation, appResultEventType };
