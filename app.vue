<script setup lang="ts">
const showItems = ref(false);
</script>

<template>
  <div>
    <!-- <NuxtPage /> -->
    <!-- <RouterView /> -->

    <div>
      <h1>app.vue</h1>

      <br />
      <button @click="showItems = !showItems">
        Toggle show to {{ !showItems }}
      </button>
      <br />

      <div v-if="showItems">
        <TheList />
      </div>
    </div>
  </div>
</template>
