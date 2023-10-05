<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";

import ImageLazyload from "./ImageLazyload.vue";

const labels = ref(["one", "two", "three"]);

onMounted(() => {
  labels.value = ["one", "two", "three", "four", "five", "six"];
});

const randNum = ref(Math.floor(Math.random() * 1000));

const imgUrl = computed(
  () => `https://loremflickr.com/320/240?random=${randNum.value}`
);

const imgUrl2 = computed(
  () => `https://loremflickr.com/320/240?random=${randNum.value / 2}`
);
</script>

<template>
  <div class="pl-4">
    <div>Component: TheListThree</div>

    <div class="images">
      <ImageLazyload :src="imgUrl" :alt="'This is an image one'" />

      <ImageLazyload :src="imgUrl2" :alt="'This is an image two'" />
    </div>
  </div>
</template>

<style scoped>
.pl-4 {
  padding-left: 1rem;
}

.images {
  display: flex;
}
</style>
