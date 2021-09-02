import type { BaseParamesType } from '../setup';
declare type location = 'wgs84';
interface ConfigParamesType {
    debug?: boolean;
    jsApiList: string[];
}
interface CheckJsApiType extends BaseParamesType {
    jsApiList: string[];
}
interface scanCodeType extends BaseParamesType {
    needContent: boolean;
}
interface locationType extends BaseParamesType {
    type: location;
}
declare const config: (userOption: ConfigParamesType) => void;
declare const ready: (callback: () => void) => void;
declare const error: (callback: (err: {
    errMsg: string;
}) => void) => void;
declare const checkJsApi: (userOption: CheckJsApiType) => void;
declare const scanQRCode: (userOption: scanCodeType) => void;
declare const getLocation: (userOption: locationType) => void;
export type { CheckJsApiType, ConfigParamesType, scanCodeType, locationType };
export { config, ready, error, checkJsApi, scanQRCode, getLocation };
