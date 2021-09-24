<template>
  <aside
    class="w-240 border-r pr-10 border-gray-100 flex-initial box-content pt-20 overflow-y-scroll"
  >
    <SideLink :sideGrpup="sideArr" />
  </aside>
</template>

<script setup>
import SideLink from './side/SideLink.vue';
import { useData, useRoute } from 'vitepress';
import { computed } from 'vue';
const { site, page } = useData();
const route = useRoute();
const sideArr = computed(() => {
  return site.value.themeConfig.sidebar;
});
</script>

<style></style>
