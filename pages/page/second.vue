<script lang="ts" setup>
const data = useGetFirstDataSynchronous();
</script>

<template>
  <div>
    <div>
      <h1>Page: second</h1>

      <br />

      <div v-if="(data?.items ?? []).length === 0">
        <p>No data</p>
      </div>
      <div v-else>
        <TheList :items="data?.items ?? []" />
      </div>
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
