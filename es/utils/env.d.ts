export declare type typeEnv = {
    ua: string;
    isEasi: boolean;
    isMalaysia: boolean;
    isAndroid: boolean;
    isIos: boolean;
    version: number | null | string;
};
export declare const getEnv: () => typeEnv;
