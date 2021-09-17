declare enum AppResultEventEnum {
    'success' = 0,
    'fail' = 1,
    'cancel' = 2
}
interface AppResponseType {
    status: AppResultEventEnum;
    message: string | null;
    data: Object;
}
interface BridgeType {
    callHandler: (methodName: string, data: any, callBack: (response: AppResponseType) => void) => void;
}
interface BaseParamesType {
    success?: (...args: any[]) => void;
    fail?: (...args: any[]) => void;
    cancel?: (...args: any[]) => void;
    complete?: (...args: any[]) => void;
    trigger?: (...args: any[]) => void;
}
declare type CallBackOperationType = {
    (response: AppResponseType, userOption: BaseParamesType, methodName: string): void;
};
export type { CallBackOperationType, BaseParamesType, AppResponseType, BridgeType };
export { AppResultEventEnum };
