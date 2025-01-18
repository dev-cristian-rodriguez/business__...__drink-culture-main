<script setup lang="ts">
// import {} from "vue-router";

import Cards from '@/components/custom/cards/Cards.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

//312B2F
</script>

<template>
  <div>
    <h1 style="text-align: center">Category view {{ $route.params.id }}</h1>

    <section :class="$style.cardsContainer">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </section>
  </div>
</template>

<style module>
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
  gap: 15px;
  padding: 5px 15px;
  margin-top: 10px;
  justify-content: center;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
