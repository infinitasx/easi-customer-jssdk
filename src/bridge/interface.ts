// app事件
enum AppResultEventEnum {
  'success',
  'fail',
  'cancel',
}

// app返回类型
interface AppResponseType {
  status: AppResultEventEnum;
  message: string | null;
  data: Object;
}

// Bridge类型
interface BridgeType {
  callHandler: (
    methodName: string,
    data: any,
    callBack: (response: AppResponseType) => void,
  ) => void;
}

// 用户参数类型
interface BaseParamesType {
  success?: (...args: any[]) => void;
  fail?: (...args: any[]) => void;
  cancel?: (...args: any[]) => void;
  complete?: (...args: any[]) => void;
  trigger?: (...args: any[]) => void;
}

// 调用Bridge方法类型
type CallBackOperationType = {
  (response: AppResponseType, userOptions: BaseParamesType, methodName: string): void;
};

export type { CallBackOperationType, BaseParamesType, AppResponseType, BridgeType };
export { AppResultEventEnum };
