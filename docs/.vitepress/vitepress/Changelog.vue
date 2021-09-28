<template>
  <p v-html="html"></p>
</template>

<script setup>
// import marked from 'marked';
import md from '../../../CHANGELOG.md';
const html = md.render().children[0].children;

// console.log(marked(html));
</script>

<style></style>
