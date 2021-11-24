import type { BaseParamesType } from '../bridge/interface';
export namespace IBase {
  // 坐标系
export type location = 'wgs84';

// 初始化页面类型
export type InitResultType = {
  success?: (res: any) => void;
  fail?: (err: { errMsg?: string }) => void;
};

// config接口类型
export interface ConfigParamesType {
  debug?: boolean;
  jsApiList: string[];
}

// checkJsApi接口类型
export interface CheckJsApiType extends BaseParamesType {
  jsApiList: string[];
}

// scanCode接口类型
export interface ScanCodeType extends BaseParamesType {
  needContent: boolean;
}

// 获取设备地址接口类型
export interface LocationType extends BaseParamesType {
  type: location;
}

// 分享接口类型
export interface ShareDataType extends BaseParamesType {
  title: string;
  link: string;
  imgUrl: string;
  desc?: string;
}

// 复制文本接口类型
export interface CopyType extends BaseParamesType {
  content: string;
}

// 选择图片接口类型
export interface ChooseImageType extends BaseParamesType {
  accept: 'image/*' | 'video/*';
  compressImage: boolean;
  capture: 'environment' | 'user';
  count: number;
}

// 获取本地图片接口类型
export interface LocalImageDataType extends BaseParamesType {
  localId: string;
}

// 预览图片接口类型
export interface PreviewImageType extends BaseParamesType {
  current: string;
  urls: string[];
}

// 打开第三方地图接口类型
export interface OpenLocationType extends BaseParamesType {
  latitude: number;
  longitude: number;
  zoom: number;
}

// 菜单接口类型
export interface MenuItemsType extends BaseParamesType {
  menuItems: string[];
}

// 打开web页面接口类型
export interface OpenWebPageType extends BaseParamesType {
  url: string;
}

// 打开App页面接口类型
export interface OpenAppPageType extends BaseParamesType {
  scheme: string;
}

}



// export type {
//   CheckJsApiType,
//   ConfigParamesType,
//   LocationType,
//   ShareDataType,
//   CopyType,
//   ChooseImageType,
//   LocalImageDataType,
//   PreviewImageType,
//   OpenLocationType,
//   ScanCodeType,
//   MenuItemsType,
//   OpenWebPageType,
//   OpenAppPageType,
//   InitResultType,
// };
