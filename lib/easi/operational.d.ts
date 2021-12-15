import { BaseParamesType } from '../bridge/interface';
import type { LocationParamesType, addToCartParamesType, removeFromCartParamesType, favouritesParamesType, tabBarParamesType } from './interface';
export declare type TOperational = {
    getEASILocation: (userOptions: LocationParamesType) => void;
    showGlobalCart: () => void;
    hideGlobalCart: () => void;
    addToCart: (userOptions: addToCartParamesType) => void;
    removeFromCart: (userOptions: removeFromCartParamesType) => void;
    addToFavourites: (userOptions: favouritesParamesType) => void;
    removeFromFavourites: (userOptions: favouritesParamesType) => void;
    openAppShop: (userOptions: favouritesParamesType) => void;
    openAppCoupons: () => void;
    openAppAddress: () => void;
    selectAppAddress: (userOptions: BaseParamesType) => void;
    openAppFavourites: () => void;
    openAppLanguages: (userOptions: BaseParamesType) => void;
    openAppCustomerService: () => void;
    openAppTabBar: (userOptions: tabBarParamesType) => void;
};
/**
 * 获取当前选择的配送地址或首页定位地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const getEASILocation: (userOptions: LocationParamesType) => void;
/**
 * 显示全局购物车
 * @param 无
 */
declare const showGlobalCart: () => void;
/**
 * 隐藏全局购物车
 * @param 无
 */
declare const hideGlobalCart: () => void;
/**
 * 唤起商品SKU选择界面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.openDetails 是否显示商品详情
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const addToCart: (userOptions: addToCartParamesType) => void;
/**
 * 从全局购物车中移除
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const removeFromCart: (userOptions: removeFromCartParamesType) => void;
/**
 * 添加到收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const addToFavourites: (userOptions: favouritesParamesType) => void;
/**
 * 移除收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const removeFromFavourites: (userOptions: favouritesParamesType) => void;
/**
 * 快捷方法，打开商家详情页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const openAppShop: (userOptions: favouritesParamesType) => void;
/**
 * 快捷方法，打开优惠券页面
 * @param 无
 */
declare const openAppCoupons: () => void;
/**
 * 打开地址管理页面
 * @param 无
 */
declare const openAppAddress: () => void;
/**
 * 选择地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const selectAppAddress: (userOptions: BaseParamesType) => void;
/**
 * 打开收藏夹
 * @param 无
 */
declare const openAppFavourites: () => void;
/**
 * 打开语言选择
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const openAppLanguages: (userOptions: BaseParamesType) => void;
/**
 * 打开联系客服页面
 * @param 无
 */
declare const openAppCustomerService: () => void;
/**
 * 打开一个底部导航栏页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.id 底部tab标志
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
declare const openAppTabBar: (userOptions: tabBarParamesType) => void;
export { getEASILocation, showGlobalCart, hideGlobalCart, addToCart, removeFromCart, addToFavourites, removeFromFavourites, openAppShop, openAppCoupons, openAppAddress, selectAppAddress, openAppFavourites, openAppLanguages, openAppCustomerService, openAppTabBar, };
