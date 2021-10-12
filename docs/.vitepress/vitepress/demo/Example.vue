<template>
  <diiv>
    <component v-if="demo" :is="demo" v-bind="$attrs" />
  </diiv>
</template>

<script setup>
const props = defineProps({
  demo: {
    type: Object,
    required: true,
  },
});
</script>

<style></style>
