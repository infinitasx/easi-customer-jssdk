export declare type EnvType = {
    ua: string;
    isEasi: boolean;
    isMalaysia: boolean;
    isAndroid: boolean;
    isIos: boolean;
    version: number | null | string;
};
/**
 * 获取系统环境
 * @returns {Object} ua, isEasi, isMalaysia, isAndroid, isIos, version 返回的数据
 */
export declare const getEnv: () => EnvType;
