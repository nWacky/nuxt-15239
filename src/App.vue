<script setup lang="ts">
import { ref } from "vue";
import TheList from "./components/TheList.vue";

const showItems = ref(false);
</script>

<template>
  <div>
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
