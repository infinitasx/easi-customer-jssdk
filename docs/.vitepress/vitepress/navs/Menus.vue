<template>
  <nav class="flex-row">
    <a
      class="px-10 cursor-pointer text-14 text-gray-500 hover:text-gray-900"
      :href="item.link"
      v-for="(item, index) in menus"
      :key="index"
    >
      {{ item.text }}
    </a>
  </nav>
</template>

<script setup>
import { useData } from 'vitepress';
const { theme } = useData();
const menus = theme.value.nav;
</script>

<style lang="scss"></style>
