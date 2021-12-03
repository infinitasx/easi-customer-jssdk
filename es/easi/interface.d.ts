import type { BaseParamesType } from '../bridge/interface';
declare type location = 'wgs84';
interface LocationParamesType extends BaseParamesType {
    type?: location;
}
interface addToCartParamesType extends BaseParamesType {
    itemId: Number;
    openDetails?: boolean;
}
interface removeFromCartParamesType extends Omit<addToCartParamesType, 'openDetails'> {
}
interface favouritesParamesType extends BaseParamesType {
    shopId: Number;
}
interface tabBarParamesType extends BaseParamesType {
    id: 'home' | 'orders' | 'me';
}
export type { LocationParamesType, addToCartParamesType, removeFromCartParamesType, favouritesParamesType, tabBarParamesType, };
