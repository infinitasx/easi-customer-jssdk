import type { BaseParamesType } from '../bridge/interface';

// 坐标系
type location = 'wgs84';

// 获取当前选择的配送地址或首页定位地址
interface LocationParamesType extends BaseParamesType {
  type?: location;
}

// 唤起商品SKU选择界面
interface addToCartParamesType extends BaseParamesType {
  itemId: Number;
  openDetails?: boolean;
}

// 从全局购物车中移除
interface removeFromCartParamesType extends Omit<addToCartParamesType,'openDetails'> {}


// 收藏夹
interface favouritesParamesType extends BaseParamesType {
  shopId: Number;
}

// 收藏夹
interface tabBarParamesType extends BaseParamesType {
  id: 'home' | '';
}

export type {
  LocationParamesType,
  addToCartParamesType,
  removeFromCartParamesType,
  favouritesParamesType,
  tabBarParamesType,
};
