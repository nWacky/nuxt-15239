<script lang="ts" setup></script>

<template>
  <div class="page">
    <div>Layout: LeftColumn</div>

    <section>
      <div>left column:</div>

      <slot name="left-column"></slot>
    </section>

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
