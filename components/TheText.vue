<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    {{ text }}
  </div>
</template>

<style scoped></style>
