<template>
  <header class="easi-nav">
    <section class="wrapper">
      <a class="logo-container">
        <img class="logo" src="/images/logo.svg" alt="" srcset="" />
        EASI-SDK
      </a>
      <div class="col-r">
        <Search />
        <Menus />
      </div>
    </section>
  </header>
</template>

<script setup>
import Menus from './navs/Menus.vue';
import Search from './navs/Search.vue';
</script>

<style lang="scss">
.easi-nav {
  border-bottom: 1px solid var(--border-color);
  .wrapper {
    height: var(--header-height);
    max-width: var(--app-max-width);
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: space-between;
    .logo-container {
      height: var(--logo-height);
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 100;
      img {
        height: 100%;
        max-width: 100%;
        margin-right: 10px;
      }
    }
    .col-r {
      display: flex;
      align-items: center;
    }
  }
}
</style>
