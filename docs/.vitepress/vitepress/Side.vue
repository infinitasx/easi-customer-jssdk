<template>
  <aside
    class="
      fixed
      w-240
      border-r
      pr-10
      border-gray-100
      box-content
      pt-20
      overflow-y-scroll
      top-70
      bottom-0
    "
  >
    <SideLink :sideGrpup="sideArr" />
  </aside>
</template>

<script setup>
import SideLink from './side/SideLink.vue';
import { useCurrentSide } from '../use/currentSideArr';
const { sideArr } = useCurrentSide();
</script>

<style></style>
