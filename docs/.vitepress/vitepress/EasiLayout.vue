<template>
  <div class="easi-layout h-screen flex flex-col">
    <EasiNav />
    <EasiContent />
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import EasiContent from './EasiContent.vue';
import EasiNav from './EasiNav.vue';
const { page } = useData();
</script>

<style></style>
