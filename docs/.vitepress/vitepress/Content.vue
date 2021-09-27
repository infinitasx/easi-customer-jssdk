<template>
  <div class="px-30 flex-auto h-1/2">
    <section class="flex flex-row max-w-1376 mx-auto flex-1 w-full h-full">
      <Side v-if="pagePath !== '/zh/'" />
      <section
        class="flex-1 w-full pt-30 pb-50 flex flex-row"
        :class="{ 'pl-280': pagePath !== '/zh/' }"
      >
        <div class="flex-1 w-full flex flex-col">
          <Content class="flex-1 w-full" />
          <Pages v-if="pagePath !== '/zh/'" />
        </div>
        <HyperLink v-if="pagePath !== '/zh/'" />
      </section>
    </section>
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import useFilePath from '../use/pagePath';
import Side from './Side.vue';
import Pages from './Pages.vue';
import HyperLink from './HyperLink.vue';

const { pagePath } = useFilePath();
</script>

<style></style>
