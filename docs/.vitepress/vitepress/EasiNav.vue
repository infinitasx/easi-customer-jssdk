<template>
  <header class="border-b border-gray-100 px-10">
    <section class="h-70 max-w-1376 w-full items-center flex flex-row justify-between mx-auto">
      <a class="flex items-center h-30">
        <img class="mr-10 h-full max-w-full" src="/images/logo.svg" alt="" srcset="" />
      </a>
      <div class="flex flex-row items-center">
        <Search />
        <Menus class="mr-20" />
        <GitHub :url="'http://localhost:3000/'" />
      </div>
    </section>
  </header>
</template>

<script setup>
import Menus from './navs/Menus.vue';
import Search from './navs/Search.vue';
import GitHub from './navs/GitHub.vue';
</script>

<style lang="scss"></style>
