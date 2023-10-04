<script lang="ts" setup>
defineProps({
  item: {
    type: Object as PropType<FirstDataItem>,
    required: true,
  },
});

let v = 0;

onMounted(() => {
  // this is an onmounted callback.
  v = 1;
});
</script>

<template>
  <div>
    <div class="p-1">
      <TheText :text="item.text" />

      <div>(mounted: {{ v === 1 }})</div>

      <br />

      <NuxtLink to="/">Back to index</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.p-1 {
  padding: 1rem;
}
</style>
