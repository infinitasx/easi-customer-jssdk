<template>
  <div class="h-screen flex flex-col">
    <Nav class="fixed top-0 w-full bg-white z-10" />
    <Content class="pt-70" />
    <Debug />
  </div>
</template>

<script setup>
import { useData } from 'vitepress';
import Content from './Content.vue';
import Nav from './Nav.vue';
const { page } = useData();
</script>

<style></style>
