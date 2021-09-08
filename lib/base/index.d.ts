import type { BaseParamesType } from '../bridge';
import type { CheckJsApiType, ConfigParamesType, LocationType, ShareDataType, CopyType, ChooseImageType, LocalImageDataType, PreviewImageType, OpenLocationType, ScanCodeType, MenuItemsType, OpenWebPageType, OpenAppPageType } from './interface';
declare const config: (userOption: ConfigParamesType) => void;
declare const ready: (callback: () => void) => void;
declare const error: (callback: (err: {
    errMsg: string;
}) => void) => void;
/**
 * 获取网络类型
 * @param userOption
 */
declare const getNetworkType: (userOption: CheckJsApiType) => void;
/**
 * 检测api
 * @param userOption
 */
declare const checkJsApi: (userOption: CheckJsApiType) => void;
/**
 * 分享到微信联系人
 * @param userOption
 */
declare const updateWechatMessageShareData: (userOption: ShareDataType) => void;
/**
 * 分享到朋友圈
 * @param userOption
 */
declare const updateWechatTimelineShareData: (userOption: ShareDataType) => void;
/**
 * 分享到Facebook时间线
 * @param userOption
 */
declare const updateFacebookTimelineShareData: (userOption: ShareDataType) => void;
/**
 * 复制文本内容
 * @param userOption
 */
declare const copy: (userOption: CopyType) => void;
/**
 * 选取图片
 * @param userOption
 */
declare const chooseImage: (userOption: ChooseImageType) => void;
/**
 * 获取本地图片Base64数据
 * @param userOption
 */
declare const getLocalImageData: (userOption: LocalImageDataType) => void;
/**
 * 预览图片
 * @param userOption
 */
declare const previewImage: (userOption: PreviewImageType) => void;
/**
 * 第三方地图打开地址
 * @param userOption
 */
declare const openLocation: (userOption: OpenLocationType) => void;
/**
 * 获取设备地址
 * @param userOption
 */
declare const getLocation: (userOption: LocationType) => void;
/**
 * 扫描二维码
 * @param userOption
 */
declare const scanQRCode: (userOption: ScanCodeType) => void;
/**
 * 扫描条形码
 * @param userOption
 */
declare const scanBarcode: (userOption: ScanCodeType) => void;
/**
 * 关闭当前窗口
 * @param userOption
 */
declare const closeWindow: () => void;
/**
 * 隐藏菜单栏
 * @param userOption
 */
declare const hideMenuBar: () => void;
/**
 * 显示菜单栏
 * @param userOption
 */
declare const showMenuBar: () => void;
/**
 * 批量隐藏菜单项
 * @param userOption
 */
declare const hideMenuItems: (userOption: MenuItemsType) => void;
/**
 * 批量显示菜单项
 * @param userOption
 */
declare const showMenuItems: (userOption: MenuItemsType) => void;
/**
 * 隐藏导航栏
 * @param userOption
 */
declare const hideNavBar: () => void;
/**
 * 显示导航栏
 * @param userOption
 */
declare const showNavBar: () => void;
/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */
declare const openWebPage: (userOption: OpenWebPageType) => void;
/**
 * 在新窗口打开一个Web页面
 * @param userOption
 */
declare const openAppPage: (userOption: OpenAppPageType) => void;
/**
 * 获取用户信息
 * @param userOption
 */
declare const getUserInfo: (userOption: BaseParamesType) => void;
export { config, ready, error, getNetworkType, checkJsApi, updateWechatTimelineShareData, updateWechatMessageShareData, updateFacebookTimelineShareData, copy, chooseImage, getLocalImageData, previewImage, openLocation, getLocation, scanQRCode, scanBarcode, closeWindow, hideMenuBar, showMenuBar, hideMenuItems, showMenuItems, hideNavBar, showNavBar, openWebPage, openAppPage, getUserInfo, };
