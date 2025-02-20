<script setup lang="ts">
import purchaseElement from './purchase-element.vue'
</script>

<template>
  <main>
    <h1 :class="$style['title']">Compras</h1>

    <aside :class="$style['purchases-container']">
      <purchaseElement />
      <purchaseElement />
      <purchaseElement />
    </aside>
  </main>
</template>

<style module>
.title {
  color: #1a1a32;
  font-size: 23px;
  text-align: center;
  margin: 25px 0px;
  padding-top: 20px;
}

.purchases-container {
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0px 17px;
}

@media screen and (min-width: 1000px) {
  .title {
    padding-top: 0px;
  }

  .purchases-container {
    padding: 0px 7%;
  }
}
</style>
