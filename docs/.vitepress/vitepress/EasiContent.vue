<template>
  <div class="px-10 flex-auto h-1/2">
    <section class="flex flex-row max-w-1376 mx-auto flex-1 w-full h-full">
      <EasiSide />
      <Content class="flex-1 w-full overflow-y-scroll hide-scoll-bar pt-30 pl-30" />
    </section>
  </div>
</template>

<script setup>
import EasiSide from './EasiSide.vue';
import { useData } from 'vitepress';
const page = useData();
</script>

<style></style>
