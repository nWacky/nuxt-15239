<script lang="ts" setup>
import { ref } from "vue";

const isMounted = ref(false);
</script>

<template>
  <div class="pl-4">
    <div>Component: TheListOne</div>

    <div>mounted: {{ isMounted }}</div>
  </div>
</template>

<style scoped>
.pl-4 {
  padding-left: 1rem;
}
</style>
