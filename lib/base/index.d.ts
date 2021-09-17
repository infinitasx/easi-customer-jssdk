import type { BaseParamesType } from '../bridge/interface';
import type { CheckJsApiType, ConfigParamesType, LocationType, ShareDataType, CopyType, ChooseImageType, LocalImageDataType, PreviewImageType, OpenLocationType, ScanCodeType, MenuItemsType, OpenWebPageType, OpenAppPageType } from './interface';
declare const config: (userOptions: ConfigParamesType) => void;
declare const ready: (callback: (res: {
    langage?: string;
}) => void) => void;
declare const error: (callback: (err: {
    errMsg?: string;
}) => void) => void;
/**
 * 获取网络类型
 * @param userOptions
 */
declare const getNetworkType: (userOptions: CheckJsApiType) => void;
/**
 * 检测api
 * @param userOptions
 */
declare const checkJsApi: (userOptions: CheckJsApiType) => void;
/**
 * 分享到微信联系人
 * @param userOptions
 */
declare const updateWechatMessageShareData: (userOptions: ShareDataType) => void;
/**
 * 分享到朋友圈
 * @param userOptions
 */
declare const updateWechatTimelineShareData: (userOptions: ShareDataType) => void;
/**
 * 分享到Facebook时间线
 * @param userOptions
 */
declare const updateFacebookTimelineShareData: (userOptions: ShareDataType) => void;
/**
 * 复制文本内容
 * @param userOptions
 */
declare const copy: (userOptions: CopyType) => void;
/**
 * 选取图片
 * @param userOptions
 */
declare const chooseImage: (userOptions: ChooseImageType) => void;
/**
 * 获取本地图片Base64数据
 * @param userOptions
 */
declare const getLocalImageData: (userOptions: LocalImageDataType) => void;
/**
 * 预览图片
 * @param userOptions
 */
declare const previewImage: (userOptions: PreviewImageType) => void;
/**
 * 第三方地图打开地址
 * @param userOptions
 */
declare const openLocation: (userOptions: OpenLocationType) => void;
/**
 * 获取设备地址
 * @param userOptions
 */
declare const getDeviceLocation: (userOptions: LocationType) => void;
/**
 * 扫描二维码
 * @param userOptions
 */
declare const scanQRCode: (userOptions: ScanCodeType) => void;
/**
 * 扫描条形码
 * @param userOptions
 */
declare const scanBarcode: (userOptions: ScanCodeType) => void;
/**
 * 关闭当前窗口
 * @param userOptions
 */
declare const closeWindow: () => void;
/**
 * 隐藏菜单栏
 * @param userOptions
 */
declare const hideMenuBar: () => void;
/**
 * 显示菜单栏
 * @param userOptions
 */
declare const showMenuBar: () => void;
/**
 * 批量隐藏菜单项
 * @param userOptions
 */
declare const hideMenuItems: (userOptions: MenuItemsType) => void;
/**
 * 批量显示菜单项
 * @param userOptions
 */
declare const showMenuItems: (userOptions: MenuItemsType) => void;
/**
 * 隐藏导航栏
 * @param userOptions
 */
declare const hideNavBar: () => void;
/**
 * 显示导航栏
 * @param userOptions
 */
declare const showNavBar: () => void;
/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */
declare const openWebPage: (userOptions: OpenWebPageType) => void;
/**
 * 在新窗口打开一个Web页面
 * @param userOptions
 */
declare const openAppPage: (userOptions: OpenAppPageType) => void;
/**
 * 获取用户信息
 * @param userOptions
 */
declare const getUserInfo: (userOptions: BaseParamesType) => void;
export { config, ready, error, getNetworkType, checkJsApi, updateWechatTimelineShareData, updateWechatMessageShareData, updateFacebookTimelineShareData, copy, chooseImage, getLocalImageData, previewImage, openLocation, getDeviceLocation, scanQRCode, scanBarcode, closeWindow, hideMenuBar, showMenuBar, hideMenuItems, showMenuItems, hideNavBar, showNavBar, openWebPage, openAppPage, getUserInfo, };
