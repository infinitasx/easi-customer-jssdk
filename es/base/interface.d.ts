import type { BaseParamesType } from '../bridge/interface';
export declare namespace IBase {
    type location = 'wgs84';
    type InitResultType = {
        success?: (res: any) => void;
        fail?: (err: {
            errMsg?: string;
        }) => void;
    };
    interface ConfigParamesType {
        debug?: boolean;
        jsApiList: string[];
    }
    interface CheckJsApiType extends BaseParamesType {
        jsApiList: string[];
    }
    interface ScanCodeType extends BaseParamesType {
        needContent: boolean;
    }
    interface LocationType extends BaseParamesType {
        type: location;
    }
    interface ShareDataType extends BaseParamesType {
        title: string;
        link: string;
        imgUrl: string;
        desc?: string;
    }
    interface CopyType extends BaseParamesType {
        content: string;
    }
    interface ChooseImageType extends BaseParamesType {
        accept: 'image/*' | 'video/*';
        compressImage: boolean;
        capture: 'environment' | 'user';
        count: number;
    }
    interface LocalImageDataType extends BaseParamesType {
        localId: string;
    }
    interface PreviewImageType extends BaseParamesType {
        current: string;
        urls: string[];
    }
    interface OpenLocationType extends BaseParamesType {
        latitude: number;
        longitude: number;
        zoom: number;
    }
    interface MenuItemsType extends BaseParamesType {
        menuItems: string[];
    }
    interface OpenWebPageType extends BaseParamesType {
        url: string;
    }
    interface LoadingType {
        show: boolean;
    }
    interface OpenAppPageType extends BaseParamesType {
        scheme: string;
    }
}
