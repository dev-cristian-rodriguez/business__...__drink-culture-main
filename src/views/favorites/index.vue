<script setup lang="ts">
import favoriteElement from './favorite-element.vue'
</script>

<template>
  <main>
    <h1 :class="$style['title']">Favoritos</h1>

    <aside :class="$style['favorites-item-container']">
      <favoriteElement />
      <favoriteElement />
      <favoriteElement />
      <favoriteElement />
    </aside>
  </main>
</template>

<style module>
/* Mobile */

.title {
  color: #1a1a32;
  font-size: 23px;
  text-align: center;
  margin: 25px 0px;
  padding-top: 20px;
}

.favorites-item-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 25px 17px;
}

@media screen and (min-width: 1000px) {
  /* Desktop */

  .title {
    padding-top: 0px;
  }

  .favorites-item-container {
    padding: 0px 7%;
  }
}
</style>
