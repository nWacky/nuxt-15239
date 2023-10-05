<script lang="ts" setup>
const { data } = useAsyncData(async () => await useGetFirstData());
</script>

<template>
  <div>
    <div>
      <h1>Page: first</h1>

      <br />

      <div v-if="(data?.items ?? []).length === 0">
        <p>No data</p>
      </div>
      <TheList v-else :items="data?.items ?? []" />
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}
</style>
