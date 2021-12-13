import { call, callBackOperation } from '../bridge';
import { BaseParamesType } from '../bridge/interface';

import type {
  LocationParamesType,
  addToCartParamesType,
  removeFromCartParamesType,
  favouritesParamesType,
  tabBarParamesType,
} from './interface';

/**
 * 获取当前选择的配送地址或首页定位地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const getEASILocation = (userOptions: LocationParamesType) => {
  call(
    'getEASILocation',
    {
      type: userOptions.type,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 显示全局购物车
 * @param 无
 */
const showGlobalCart = () => {
  call('showGlobalCart');
};

/**
 * 隐藏全局购物车
 * @param 无
 */
const hideGlobalCart = () => {
  call('hideGlobalCart');
};

/**
 * 唤起商品SKU选择界面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.openDetails 是否显示商品详情
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const addToCart = (userOptions: addToCartParamesType) => {
  call(
    'addToCart',
    {
      itemId: userOptions.itemId,
      openDetails: userOptions.openDetails ?? false,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 从全局购物车中移除
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.itemId 商品Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const removeFromCart = (userOptions: removeFromCartParamesType) => {
  call(
    'removeFromCart',
    {
      itemId: userOptions.itemId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 添加到收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const addToFavourites = (userOptions: favouritesParamesType) => {
  call(
    'addToFavourites',
    {
      shopId: userOptions.shopId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 移除收藏夹
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const removeFromFavourites = (userOptions: favouritesParamesType) => {
  call(
    'removeFromFavourites',
    {
      shopId: userOptions.shopId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 快捷方法，打开商家详情页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.shopId 商家Id
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const openAppShop = (userOptions: favouritesParamesType) => {
  call(
    'openAppShop',
    {
      shopId: userOptions.shopId,
    },
    callBackOperation,
    userOptions,
  );
};

/**
 * 快捷方法，打开优惠券页面
 * @param 无
 */
const openAppCoupons = () => {
  call('openAppCoupons');
};

/**
 * 打开地址管理页面
 * @param 无
 */
const openAppAddress = () => {
  call('openAppAddress');
};

/**
 * 选择地址
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
 const selectAppAddress = (userOptions: BaseParamesType) => {
  call('selectAppAddress', {}, callBackOperation, userOptions);
};

/**
 * 打开收藏夹
 * @param 无
 */
const openAppFavourites = () => {
  call('openAppFavourites');
};

/**
 * 打开语言选择
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const openAppLanguages = (userOptions: BaseParamesType) => {
  call('openAppLanguages', {}, callBackOperation, userOptions);
};

/**
 * 打开联系客服页面
 * @param 无
 */
const openAppCustomerService = () => {
  call('openAppCustomerService');
};

/**
 * 打开一个底部导航栏页面
 * @param {object} userOptions 用户配置项
 * @param {Function} userOptions.id 底部tab标志
 * @param {Function} userOptions.success 成功回调
 * @param {Function} userOptions.fail 失败回调
 * @param {Function} userOptions.complete 完成回调
 */
const openAppTabBar = (userOptions: tabBarParamesType) => {
  call(
    'openAppTabBar',
    {
      id: userOptions.id,
    },
    callBackOperation,
    userOptions,
  );
};

export {
  getEASILocation,
  showGlobalCart,
  hideGlobalCart,
  addToCart,
  removeFromCart,
  addToFavourites,
  removeFromFavourites,
  openAppShop,
  openAppCoupons,
  openAppAddress,
  selectAppAddress,
  openAppFavourites,
  openAppLanguages,
  openAppCustomerService,
  openAppTabBar,
};
