<script lang="ts" setup>
import { ref, onMounted } from "vue";
import TheText from "./TheText.vue";
import TheListOne from "./TheListOne.vue";
import TheListTwo from "./TheListTwo.vue";
import TheListThree from "./TheListThree.vue";

let v = ref(0);

onMounted(() => {
  // this is an onmounted callback.
  v.value = 1;
});

const onClickButton = () => {
  // console.log("item clicked: ", `${JSON.stringify(props.item)}`);
};
</script>

<template>
  <div>
    <div class="p-1">
      <TheText :text="'test'" />

      <div>(mounted: {{ v === 1 }})</div>

      <br />

      <button @click="onClickButton">Button</button>

      <br />

      <details>
        <TheListOne />
        <TheListTwo />
        <TheListThree />
      </details>

      <br />

      <!-- <NuxtLink to="/">Back to index</NuxtLink> -->
    </div>
  </div>
</template>

<style scoped>
.p-1 {
  padding: 1rem;
}
</style>
