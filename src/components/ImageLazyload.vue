<script lang="ts" setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="lazy-img">
    <img :src="src" :title="alt" loading="lazy" />
  </div>
</template>

<style scoped>
.lazy-img {
  width: 100px;
  height: 100px;
}

.lazy-img img {
  width: 100%;
  height: 100%;

  object-fit: contain;
}
</style>
