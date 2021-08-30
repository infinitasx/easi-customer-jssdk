export declare type EnvType = {
    ua: string;
    isEasi: boolean;
    isMalaysia: boolean;
    isAndroid: boolean;
    isIos: boolean;
    version: number | null | string;
};
export declare const getEnv: () => EnvType;
