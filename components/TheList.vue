<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  items: {
    type: Array as PropType<FirstDataItem[]>,
  },
});
</script>

<template>
  <div>
    <ul>
      <li v-for="item in items">
        <TheListItem :item="item" />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
