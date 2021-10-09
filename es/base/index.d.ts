import type { BaseParamesType } from '../bridge/interface';
import type { CheckJsApiType, ConfigParamesType, LocationType, ShareDataType, CopyType, ChooseImageType, LocalImageDataType, PreviewImageType, OpenLocationType, ScanCodeType, MenuItemsType, OpenWebPageType, OpenAppPageType } from './interface';
/**
 * 检测api配置项
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.debug 是否启用debug
 * @param {Array} userOptions.jsApiList 待检测的api列表
 */
declare const config: (userOptions: ConfigParamesType) => void;
/**
 * config调用成功后执行函数
 * @param {Function} callback 回调函数
 */
declare const ready: (callback: (response: {
    langage?: string;
    checkResult: Object;
}) => void) => void;
/**
 * config调用失败后执行函数
 * @param callback 回调函数
 */
declare const error: (callback: (err: {
    [key: string]: any;
    errMsg?: string | undefined;
}) => void) => void;
/**
 * 获取网络类型
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const getNetworkType: (userOptions: BaseParamesType) => void;
/**
 * 检查是否支持指定API
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const checkJsApi: (userOptions: CheckJsApiType) => void;
/**
 * 分享到微信联系人
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const updateWechatMessageShareData: (userOptions: ShareDataType) => void;
/**
 * 分享到朋友圈
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const updateWechatTimelineShareData: (userOptions: ShareDataType) => void;
/**
 * 分享到Facebook时间线
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.title 分享标题
 * @param {string} userOptions.link 分享链接
 * @param {string} userOptions.imgUrl 分享图标
 * @param {string} userOptions.desc 分享描述
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const updateFacebookTimelineShareData: (userOptions: ShareDataType) => void;
/**
 * 复制文本内容
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.content 需要复制到剪贴板的文本内容
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const copy: (userOptions: CopyType) => void;
/**
 * 选取图片
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.accept 选取的类型
 * @param {boolean} userOptions.compressImage 图片是否压缩
 * @param {string} userOptions.capture 前置或后置摄像头
 * @param {number} userOptions.count 数量 默认1，最大9
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const chooseImage: (userOptions: ChooseImageType) => void;
/**
 * 获取本地图片Base64数据
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.localId 图片的localId
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const getLocalImageData: (userOptions: LocalImageDataType) => void;
/**
 * 预览图片
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.current 当前显示图片的http链接
 * @param {Array} userOptions.urls 当需要预览的图片http链接列表
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const previewImage: (userOptions: PreviewImageType) => void;
/**
 * 第三方地图打开地址
 * @param {object} userOptions 用户配置项
 * @param {number} userOptions.latitude 纬度，浮点数，范围为90 ~ -90
 * @param {number} userOptions.longitude 经度，浮点数，范围为180 ~ -180
 * @param {number} userOptions.zoom 地图缩放级别，整型值，0~18 for Google Maps
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const openLocation: (userOptions: OpenLocationType) => void;
/**
 * 获取设备地址
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.type 预留字段，默认为wgs84的gps坐标，其他坐标系待定
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const getDeviceLocation: (userOptions: LocationType) => void;
/**
 * 扫描二维码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const scanQRCode: (userOptions: ScanCodeType) => void;
/**
 * 扫描条形码
 * @param {object} userOptions 用户配置项
 * @param {boolean} userOptions.needContent 是否返回扫描内容，默认false，否则由客户端处理扫描结果
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const scanBarcode: (userOptions: ScanCodeType) => void;
/**
 * 关闭当前窗口
 * @param 无
 */
declare const closeWindow: () => void;
/**
 * 隐藏菜单栏
 * @param 无
 */
declare const hideMenuBar: () => void;
/**
 * 显示菜单栏
 * @param 无
 */
declare const showMenuBar: () => void;
/**
 * 批量隐藏菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 隐藏的菜单项
 */
declare const hideMenuItems: (userOptions: MenuItemsType) => void;
/**
 * 批量显示菜单项
 * @param {object} userOptions 用户配置项
 * @param {Array} userOptions.menuItems 显示的菜单项
 */
declare const showMenuItems: (userOptions: MenuItemsType) => void;
/**
 * 隐藏导航栏
 * @param 无
 */
declare const hideNavBar: () => void;
/**
 * 显示导航栏
 * @param 无
 */
declare const showNavBar: () => void;
/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.url 目标页面
 */
declare const openWebPage: (userOptions: OpenWebPageType) => void;
/**
 * 在新窗口打开一个Web页面
 * @param {object} userOptions 用户配置项
 * @param {string} userOptions.scheme scheme地址
 */
declare const openAppPage: (userOptions: OpenAppPageType) => void;
/**
 * 获取用户信息
 * @param {Object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const getUserInfo: (userOptions: BaseParamesType) => void;
export { config, ready, error, getNetworkType, checkJsApi, updateWechatTimelineShareData, updateWechatMessageShareData, updateFacebookTimelineShareData, copy, chooseImage, getLocalImageData, previewImage, openLocation, getDeviceLocation, scanQRCode, scanBarcode, closeWindow, hideMenuBar, showMenuBar, hideMenuItems, showMenuItems, hideNavBar, showNavBar, openWebPage, openAppPage, getUserInfo, };
