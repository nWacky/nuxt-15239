<script lang="ts" setup></script>

<template>
  <div class="page">
    <div>Layout: FullWidth</div>

    <section>
      <slot />
    </section>

    <LazyTheFooter />
  </div>
</template>

<style scoped>
.page {
  max-width: 600px;
  margin: auto;
  padding: 1rem;
}
</style>
