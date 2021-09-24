<template>
  <div class="algolia-search-box" id="docsearch" />
</template>

<script setup>
import docsearch from '@docsearch/js';
import '@docsearch/css/dist/style.css';
import { onMounted } from 'vue';
onMounted(() => {
  docsearch({
    container: '#docsearch',
    apiKey: '25626fae796133dc1e734c6bcaaeac3c',
    indexName: 'docsearch',
  });
});
</script>

<style lang="scss">
.algolia-search-box {
  min-width: 180px;
  margin: 0 20px;
}
.DocSearch {
  width: 100%;
  justify-content: space-between;
  margin: 0;
  padding: 0 10px;
  box-sizing: border-box;
  .DocSearch-Button-Container {
    display: flex;
    align-items: center;
  }
  .DocSearch-Button-Keys {
    display: flex;
    align-items: center;
  }
}
</style>
