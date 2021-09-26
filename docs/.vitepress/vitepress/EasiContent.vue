<template>
  <div class="px-10 flex-auto h-1/2">
    <section class="flex flex-row max-w-1376 mx-auto flex-1 w-full h-full">
      <EasiSide v-if="pagePath.includes('component')" />
      <section
        class="flex-1 w-full overflow-y-scroll hide-scoll-bar pt-30 pb-50"
        :class="{ 'pl-30': pagePath.includes('component') }"
      >
        <Content class="flex-1 w-full" />
        <EasiPages />
      </section>
    </section>
  </div>
</template>

<script setup>
import EasiSide from './EasiSide.vue';
import EasiPages from './EasiPages.vue';
import { useData } from 'vitepress';
import useFilePath from '../use/pagePath';

const { pagePath } = useFilePath();
const page = useData();
</script>

<style></style>
