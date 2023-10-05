<script lang="ts" setup>
import { PropType } from "vue";

// defineProps({
//   items: {
//     type: Array as PropType<FirstDataItem[]>,
//   },
// });

const items = ref(useGetFirstDataSynchronous().items);
</script>

<template>
  <div>
    <ul>
      <li v-for="item in items">
        <TheListItem />
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
