<script lang="ts" setup>
import { ref } from "vue";
import { useGetFirstDataSynchronous } from "@/composables/useGetFirstData";

import TheListItem from "./TheListItem.vue";

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
