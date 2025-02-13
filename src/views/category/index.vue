<script setup lang="ts">
import Card from '@/components/custom/cards/card.vue'
</script>

<template>
  <main>
    <h1 class="category-view__title">Category view {{ $route.params.id }}</h1>
    <section :class="$style['cards-container']">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </main>
</template>

<style module>
.category-view__title {
  text-align: center;
  text-decoration: line-through;
  margin-top: 20px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding: 5px 15px;
  margin-top: 10px;
  justify-content: center;
}

@media (min-width: 1024px) {
  .category-view__title {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
