<template>
  <div class="demo">
    <p v-html="decodedDescription"></p>
    <Example :file="path" :demo="formatPathDemos[path]" />
    <SourceCode :code="source" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import SourceCode from './demo/SourceCode.vue';
import Example from './demo/Example.vue';

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  css: {
    type: String,
    required: true,
  },
  cssPreProcessor: {
    type: String,
    required: true,
  },
  js: {
    type: String,
    required: true,
  },
  jsPreProcessor: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
  demos: {
    type: Object,
    required: true,
  },
  rawSource: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});
const formatPathDemos = computed(() => {
  const demos = {};
  Object.keys(props.demos).forEach(key => {
    demos[key.replace('../../examples/', '').replace('.vue', '')] = props.demos[key].default;
  });
  return demos;
});

const decodedDescription = computed(() => decodeURIComponent(props.description));
</script>

<style></style>
