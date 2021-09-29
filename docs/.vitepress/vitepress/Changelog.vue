<template>
  <p v-html="html"></p>
</template>

<script setup>
// import { markdown } from 'markdown';
import { useChangelog } from '../use/chooseChangeLog';

const file = import.meta.globEager('../../../CHANGELOG.md');
const contentArr = JSON.parse(file['../../../CHANGELOG.md'].__pageData);
const curVersion = contentArr?.headers[0]?.title.match(/\[(\S*)\]/)[1]; // 版本号类型 1.0.0
const { logArr } = useChangelog(contentArr?.headers, curVersion);

// console.log(markdown.renderJsonML(logArr));
</script>

<style></style>
