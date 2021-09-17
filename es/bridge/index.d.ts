import type { CallBackOperationType } from './interface';
/**
 * 处理app返回数据
 * @param res app返回的原始数据
 * @param userOptions 用户配置项
 */
declare const callBackOperation: CallBackOperationType;
/**
 * 调用Bridge
 * @param methodName Bridge方法名
 * @param callback 回调函数
 * @param data 传递给app的参数
 * @param userOptions 用户配置项
 */
declare const call: (methodName: string, data?: any, callback?: CallBackOperationType | undefined, userOptions?: any) => void;
export { call, callBackOperation };
