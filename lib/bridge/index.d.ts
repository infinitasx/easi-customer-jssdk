import type { CallBackOperationType } from './interface';
/**
 * 处理app返回数据
 * @param {Object} response App响应数据
 * @param {Object} userOptions 用户配置项
 * @param {string} methodName 调用App的Bridge名称
 */
declare const callBackOperation: CallBackOperationType;
/**
 * 调用Bridge
 * @param {string} methodName Bridge方法名
 * @param {Function} callback 回调函数
 * @param {Object | null} data 传递给app的参数
 * @param {Object} userOptions 用户配置项
 */
declare const call: (methodName: string, data?: any, callback?: CallBackOperationType | undefined, userOptions?: any) => void;
export { call, callBackOperation };
