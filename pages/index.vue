<script lang="ts" setup></script>

<template>
  <div>
    <h1>Page: index</h1>

    <br />

    <div class="links">
      <NuxtLink to="/page/first">Go to /page/first</NuxtLink>
      <NuxtLink to="/page/second">Go to /page/second</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.links a {
  display: block;

  margin-bottom: 1rem;
}
</style>
