declare const easi: {
    config: (userOptions: import("../base/interface").ConfigParamesType) => void;
    ready: (callback: (res: {
        langage?: string | undefined;
    }) => void) => void;
    error: (callback: (err: {
        errMsg?: string | undefined;
    }) => void) => void;
    getNetworkType: (userOptions: import("../base/interface").CheckJsApiType) => void;
    checkJsApi: (userOptions: import("../base/interface").CheckJsApiType) => void;
    updateWechatTimelineShareData: (userOptions: import("../base/interface").ShareDataType) => void;
    updateWechatMessageShareData: (userOptions: import("../base/interface").ShareDataType) => void;
    updateFacebookTimelineShareData: (userOptions: import("../base/interface").ShareDataType) => void;
    copy: (userOptions: import("../base/interface").CopyType) => void;
    chooseImage: (userOptions: import("../base/interface").ChooseImageType) => void;
    getLocalImageData: (userOptions: import("../base/interface").LocalImageDataType) => void;
    previewImage: (userOptions: import("../base/interface").PreviewImageType) => void;
    openLocation: (userOptions: import("../base/interface").OpenLocationType) => void;
    getDeviceLocation: (userOptions: import("../base/interface").LocationType) => void;
    scanQRCode: (userOptions: import("../base/interface").ScanCodeType) => void;
    scanBarcode: (userOptions: import("../base/interface").ScanCodeType) => void;
    closeWindow: () => void;
    hideMenuBar: () => void;
    showMenuBar: () => void;
    hideMenuItems: (userOptions: import("../base/interface").MenuItemsType) => void;
    showMenuItems: (userOptions: import("../base/interface").MenuItemsType) => void;
    hideNavBar: () => void;
    showNavBar: () => void;
    openWebPage: (userOptions: import("../base/interface").OpenWebPageType) => void;
    openAppPage: (userOptions: import("../base/interface").OpenAppPageType) => void;
    getUserInfo: (userOptions: import("../bridge/interface").BaseParamesType) => void;
    ua: string;
    isEasi: boolean;
    isMalaysia: boolean;
    isAndroid: boolean;
    isIos: boolean;
    version: string | number | null;
};
export default easi;
