<template>
  <div class="index-page">
    <h1>Hello {{ trans }}</h1>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useIntervalFn } from "@vueuse/core";
import useIndexStore from "@/store";

const indexStore = useIndexStore();
const trans = computed(() => indexStore.trans);

useIntervalFn(() => {
  indexStore.toggleLang();
}, 1000);
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 20px 0;
}
</style>
