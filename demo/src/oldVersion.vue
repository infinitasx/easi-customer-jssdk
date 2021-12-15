<template>
  <div>
    <div class="page-title">*** 老web容器 ***</div>
    <div class="api-item">
      <div class="api-title">基础接口</div>
      <div class="op-box">
        <button @click="reload">刷新页面</button>
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
import { easi } from '../../es/index';
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
