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
  min-width: 176.3px;
}
.DocSearch {
  width: 100%;
  margin: 0;
  justify-content: space-between;
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
