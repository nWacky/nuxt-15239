<script lang="ts" setup>
// const props = defineProps({
//   item: {
//     type: Object as PropType<FirstDataItem>,
//     required: true,
//   },
// });

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
