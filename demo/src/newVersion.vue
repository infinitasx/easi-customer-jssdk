<template>
  <div>
    <div class="page-title">*** 新web容器 ***</div>
    <img :src="img" alt="" v-if="img" />
    <div class="api-item">
      <div class="api-title">scheme</div>
      <div class="op-box">
        <button @click="headless(0)">隐藏顶部/底部-0</button>
        <button @click="headless(1)">隐藏顶部/底部-1</button>
        <button @click="headless(2)">隐藏顶部/底部-2</button>
      </div>
    </div>
    <div class="api-item">
      <div class="api-title">基础接口</div>
      <div class="op-box">
        <button @click="reload">刷新页面</button>
        <button @click="getNetworkType">获取网络类型</button>
        <button @click="checkJsApi">检查是否支持指定API</button>
        <button @click="updateWechatMessageShareData">分享到微信联系人</button>
        <button @click="copy">复制文本内容</button>
        <button @click="chooseImage">选取图片</button>
        <button @click="previewImage">预览图片</button>
        <button @click="openLocation">打开第三方地图</button>
        <button @click="scanQRCode">扫描二维码</button>
        <button @click="scanBarcode">扫描条形码</button>
        <button @click="closeWindow">关闭当前窗口</button>
        <button @click="hideMenuBar">隐藏菜单栏</button>
        <button @click="showMenuBar">显示菜单栏</button>
        <button @click="hideMenuItems">批量隐藏菜单项</button>
        <button @click="showMenuItems">批量显示菜单项</button>
        <button @click="hideNavBar">隐藏导航栏</button>
        <button @click="showNavBar">显示导航栏</button>
        <button @click="openWebPage">在新窗口打开一个Web页面</button>
        <button @click="openAppPage">打开一个原生页面</button>
        <button @click="getUserInfo">获取用户信息</button>
        <button @click="goTowPage">跳转二级页面web</button>
        <button @click="showLoading">打开Loading</button>
      </div>
    </div>
    <div class="api-item">
      <div class="api-title">业务接口</div>
      <div class="op-box">
        <button @click="getEASILocation">获取当前选择的配送地址</button>
        <button @click="showGlobalCart">显示全局购物车</button>
        <button @click="hideGlobalCart">隐藏全局购物车</button>
        <button @click="addToCart">唤起商品SKU选择界面</button>
        <button @click="removeFromCart">从全局购物车中移除</button>
        <button @click="addToFavourites">添加到收藏夹</button>
        <button @click="removeFromFavourites">移除收藏夹</button>
        <button @click="openAppShop">打开商家详情</button>
        <button @click="openAppCoupons">打开优惠券页面</button>
        <button @click="openAppAddress">打开地址管理页面</button>
        <button @click="selectAppAddress">选择地址</button>
        <button @click="openAppFavourites">打开收藏夹</button>
        <button @click="openAppLanguages">打开语言选择</button>
        <button @click="openAppCustomerService">打开联系客服页面</button>
        <button @click="openAppTabBar">切换底部导航栏</button>
      </div>
    </div>
    <div class="api-item">
      <div class="api-title">老版本api</div>
      <div class="op-box">
        <button @click="getLocation">获取经纬度</button>
        <button @click="scan">扫一扫</button>
        <button @click="user">获取用户信息</button>
        <button @click="wx_share">微信分享</button>
        <button @click="login">唤起登录</button>
        <button @click="addCart">添加到购物车</button>
        <button @click="showCart">显示购物车</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { easi } from '../../es/index';

let img = ref('');
let localtion = reactive({
  latitude: 0.0,
  longitude: 0.0,
});
let result = reactive({ data: {} });
let timer = ref(null);
const headless = type => {
  window.location.href = `au.com.easi.customer://web/redirect?url=${encodeURIComponent(
    'https://www.baidu.com?headless=' + type,
  )}`;
};
easi.config &&
  easi.config({
    debug: false,
    jsApiList: ['chooseImage', 'show'],
  });

easi.ready &&
  easi.ready(() => {
    easi.getDeviceLocation({
      type: 'wgs84',
      success: res => {
        localtion.latitude = res.latitude;
        localtion.longitude = res.longitude;
        alert(JSON.stringify(res));
      },
    });
  });

easi.error &&
  easi.error(e => {
    alert(JSON.stringify(e));
  });

const getNetworkType = () => {
  easi.getNetworkType &&
    easi.getNetworkType({
      success: res => {
        result.data = res;
        alert(JSON.stringify(res));
      },
    });
};

const checkJsApi = () => {
  easi.checkJsApi &&
    easi.checkJsApi({
      jsApiList: ['chooseImage', 'show'],
      success: res => {
        result.data = res;
        alert(JSON.stringify(res));
      },
    });
};

const updateWechatMessageShareData = () => {
  easi.updateWechatMessageShareData &&
    easi.updateWechatMessageShareData({
      title: '这是一个title',
      link: 'https://www.baidu.com',
      imgUrl: 'https://img.yzcdn.cn/vant/logo.png',
      desc: '这是一段描述',
    });
};

const copy = () => {
  easi.copy &&
    easi.copy({
      content: '复制的内容',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const chooseImage = () => {
  easi.chooseImage &&
    easi.chooseImage({
      accept: 'image/*',
      compressImage: true,
      capture: 'environment',
      count: 1,
      success: res => {
        easi.getLocalImageData({
          localId: res.localIds[0],
          success: res => {
            img.value = `${res.localData}`;
            result.data = res.localData.length / 1024;
            alert(JSON.stringify(res));
          },
        });
      },
    });
};

const previewImage = () => {
  easi.previewImage &&
    easi.previewImage({
      current: 'https://vitejs.cn/logo.svg',
      urls: ['https://vitejs.cn/logo.svg', 'https://v3.cn.vuejs.org/logo.png'],
      success: res => {
        result.data = res;
        alert(JSON.stringify(res));
      },
    });
};

const openLocation = () => {
  easi.openLocation &&
    easi.openLocation({
      latitude: localtion.latitude,
      longitude: localtion.longitude,
      zoom: 1,
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const scanQRCode = () => {
  easi.scanQRCode &&
    easi.scanQRCode({
      needContent: true,
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const scanBarcode = () => {
  easi.scanBarcode &&
    easi.scanBarcode({
      needContent: true,
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const closeWindow = () => {
  easi.closeWindow && easi.closeWindow();
};

const hideMenuBar = () => {
  easi.hideMenuBar && easi.hideMenuBar();
};

const showMenuBar = () => {
  easi.showMenuBar && easi.showMenuBar();
};

const hideMenuItems = () => {
  easi.hideMenuItems &&
    easi.hideMenuItems({
      menuItems: ['refresh', 'copy'],
    });
};

const showMenuItems = () => {
  easi.showMenuItems &&
    easi.showMenuItems({
      menuItems: ['refresh', 'copy'],
    });
};

const hideNavBar = () => {
  easi.hideNavBar && easi.hideNavBar();
};

const showNavBar = () => {
  easi.showNavBar && easi.showNavBar();
};

const openWebPage = () => {
  easi.openWebPage &&
    easi.openWebPage({
      url: 'https://www.baidu.com/',
    });
};

const openAppPage = () => {
  easi.openAppPage &&
    easi.openAppPage({
      scheme: 'au.com.easi.customer://shop/6129',
    });
};

const showLoading = () => {
  easi.showLoading && easi.showLoading();
  if (timer.value) {
    clearTimeout(timer.value);
  }
  timer.value = setTimeout(() => {
    easi.hideLoading();
  }, 2e3);
};

const getUserInfo = () => {
  easi.getUserInfo &&
    easi.getUserInfo({
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const goTowPage = () => {
  window.location.href = 'https://www.baidu.com';
};

const getEASILocation = () => {
  easi.getEASILocation &&
    easi.getEASILocation({
      type: 'wgs84',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const showGlobalCart = () => {
  easi.showGlobalCart && easi.showGlobalCart();
};

const hideGlobalCart = () => {
  easi.hideGlobalCart && easi.hideGlobalCart();
};

const addToCart = () => {
  easi.addToCart &&
    easi.addToCart({
      itemId: '4167464',
      openDetails: true,
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const removeFromCart = () => {
  easi.removeFromCart &&
    easi.removeFromCart({
      itemId: '4167464',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const addToFavourites = () => {
  easi.addToFavourites &&
    easi.addToFavourites({
      shopId: '2',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const removeFromFavourites = () => {
  easi.removeFromFavourites &&
    easi.removeFromFavourites({
      shopId: '2',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const openAppShop = () => {
  easi.openAppShop &&
    easi.openAppShop({
      shopId: '2',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const openAppCoupons = () => {
  easi.openAppCoupons && easi.openAppCoupons();
};

const openAppAddress = () => {
  easi.openAppAddress && easi.openAppAddress();
};

const selectAppAddress = () => {
  easi.selectAppAddress &&
    easi.selectAppAddress({
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const openAppFavourites = () => {
  easi.openAppFavourites && easi.openAppFavourites();
};

const openAppLanguages = () => {
  easi.openAppLanguages && easi.openAppLanguages();
};

const openAppCustomerService = () => {
  easi.openAppCustomerService && easi.openAppCustomerService();
};

const openAppTabBar = () => {
  easi.openAppTabBar &&
    easi.openAppTabBar({
      id: 'home',
      success: res => {
        alert(JSON.stringify(res));
        result.data = res;
      },
    });
};

const getLocation = () => {
  easi.getLocation &&
    easi.getLocation(res => {
      alert(JSON.stringify(res));
    });
};

const scan = () => {
  easi.scan &&
    easi.scan(res => {
      alert(JSON.stringify(res));
    });
};

const user = () => {
  easi.user &&
    easi.user(res => {
      alert(JSON.stringify(res));
    });
};

const wx_share = () => {
  easi.wx_share &&
    easi.wx_share(res => {
      alert(JSON.stringify(res));
    });
};

const login = () => {
  easi.login &&
    easi.login(res => {
      alert(JSON.stringify(res));
    });
};

const addCart = () => {
  easi.addCart &&
    easi.addCart(
      res => {
        alert(JSON.stringify(res));
      },
      {
        itemId: '4167464',
      },
    );
};

const showCart = () => {
  easi.showCart &&
    easi.showCart(
      res => {
        alert(JSON.stringify(res));
      },
      {
        show: true,
      },
    );
};

const reload = () => {
  window.location.reload();
};
</script>

<style></style>
