<template>
  <nav class="menus">
    <a class="menu-item" :href="item.link" v-for="(item, index) in menus" :key="index">
      {{ item.text }}
    </a>
  </nav>
</template>

<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
const menus = theme.value.nav;
</script>

<style lang="scss">
.menus {
  display: flex;
  .menu-item {
    padding: 0 10px;
    cursor: pointer;
  }
}
</style>
