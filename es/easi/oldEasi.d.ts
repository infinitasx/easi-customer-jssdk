export declare class Easi {
    SYS_ERROR: {
        code: number;
        data: string;
    };
    SYS_VERSION_ERROR: {
        code: number;
        data: string;
    };
    PARAMES_ERROR: {
        code: number;
        data: string;
    };
    SYS_CONFIG: {
        easiAgent: string;
        easiVersion: string;
        easiUserVersion: string;
        easiMalaysiaAgent: string;
        easiMalaysiaVersion: string;
        easiMalaysiaUserVersion: string;
    };
    appVersion: any;
    ua: any;
    isEasi: any;
    isMalaysia: any;
    isAndroid: any;
    isIos: any;
    constructor();
    setupWebViewJavascriptBridge(callback: any): any;
    call(methodName: any, callback: any, data: any): void;
    /**
     *  在新版本App中可以识别到不存在的Bridge,该方法处理老版本的app，不支持的Bridge返回错误code给业务方
     * @param {*} methodName Bridge名称
     * @returns
     */
    lowVersionTips(methodName: any, callback: any): any;
    /**
     *  调用APP Bridge
     * @param {*} bridgeType 执行Bridge类型
     * @param {*} callback 回调
     * @returns
     */
    callMyApp(bridgeType: any, callback: any, data?: any): any;
    version(): void;
    compareVersionEle(currVersion: any, targetVersion: any): boolean;
    getVersion(callback: any): any;
    getLocation(callback: any): any;
    scan(callback: any): any;
    user(callback: any): any;
    wx_share(url: any, title: any, desc: any, mode: any): boolean;
    login(callback: any): any;
    /**
     * 添加购物车
     * @param {Function} callback 回调函数
     * @param {Object.int} itemId 商品itemId - 必传
     * @param {Object.boolean} openDetails 是否强制展示商品规格 true-显示 false-不显示
     * @returns
     */
    addCart(callback: any, { itemId, openDetails }: {
        itemId?: null | undefined;
        openDetails?: boolean | undefined;
    }): any;
    /**
     * 全局购物车
     * @param {Function} callback 回调函数
     * @param {Object.boolean} show 是否显示全局购物车 true - 显示 false - 不显示
     * @returns
     */
    showCart(callback: any, { show }: {
        show?: boolean | undefined;
    }): any;
    test(callback: any): void;
}
declare const _default: Easi;
export default _default;
