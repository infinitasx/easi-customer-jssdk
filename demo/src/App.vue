<template>
  <component :is="componentsName"></component>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import type {} from 'vue';
import newVersion from './newVersion.vue';
import oldVersion from './oldVersion.vue';
const componentsName = ref(null);
onMounted(() => {
  componentsName.value = navigator.userAgent.includes('JssdkVersion') ? newVersion : oldVersion;
});
</script>

<style>
* {
  margin: 0;
}
body {
  background: #f5f6f8;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.page-title {
  background: #ffda00;
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.api-item {
  background: #ffffff;
  margin-bottom: 10px;
  overflow: hidden;
}
.api-title {
  margin: 20px 20px 0 20px;
  color: #1c1c1e;
  font-size: 16px;
  height: 30px;
  line-height: 30px;
}
.op-box {
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 100px;
  display: block;
}
button {
  background: #ffda00;
  width: 100%;
  flex: 1 0 auto;
  height: 50px;
  line-height: 50px;
  margin: 20px 0 0 0;
  color: #1c1c1e;
  font-size: 16px;
  overflow: hidden;
  border-radius: 8px;
  border: none;
}
.result {
  font-family: 'Courier New', Courier, monospace;
  width: 100%;
  word-wrap: break-word;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 400px;
}
</style>
