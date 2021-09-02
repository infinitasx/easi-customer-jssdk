declare const easi: {
    config: (userOption: import("./base").ConfigParamesType) => void;
    checkJsApi: (userOption: import("./base").CheckJsApiType) => void;
    ready: (callback: () => void) => void;
    error: (callback: (err: {
        errMsg: string;
    }) => void) => void;
    getEnv: () => import("./utils/env").EnvType;
    scanQRCode: (userOption: import("./base").scanCodeType) => void;
    getLocation: (userOption: import("./base").locationType) => void;
};
export default easi;
