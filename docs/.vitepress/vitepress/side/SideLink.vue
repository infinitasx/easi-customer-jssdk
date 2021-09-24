<template>
  <div v-for="(item, index) in sideGrpup" :key="index">
    <h3 class="text-18 font-medium text-black py-10">{{ item.text }}</h3>
    <template v-if="item.children">
      <a
        class="
          h-40
          leading-40
          block
          px-20
          rounded-sm
          text-14 text-gray-500
          hover:bg-yellow-100 hover:text-gray-900
          cursor-pointer
        "
        v-for="(item, index) in item.children"
        :key="index"
        :href="item.link"
      >
        链接
      </a>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  sideGrpup: {
    type: Array,
    require: true,
  },
});
</script>

<style></style>
