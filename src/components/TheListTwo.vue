<script lang="ts" setup>
import { ref, onMounted } from "vue";

const labels = ref(["one", "two", "three"]);

onMounted(() => {
  labels.value = ["one", "two", "three", "four", "five", "six"];
});
</script>

<template>
  <div class="pl-4">
    <div>Component: TheListTwo</div>

    <div>Labels:</div>
    <div v-for="(label, idx) in labels" :key="idx">
      {{ label }}
    </div>
  </div>
</template>

<style scoped>
.pl-4 {
  padding-left: 1rem;
}
</style>
