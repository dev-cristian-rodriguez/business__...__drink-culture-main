<script setup lang="ts">
import purchasesHeader from './purchases-header.vue'
import purchaseElement from './purchase-element.vue'
</script>

<template>
  <main>
    <h1 :class="$style['title']">Compras</h1>

    <aside :class="$style['purchases-header-container']">
      <purchasesHeader />
    </aside>

    <aside :class="$style['purchases-item-container']">
      <purchaseElement />
      <purchaseElement />
      <purchaseElement />
      <purchaseElement />
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

.purchases-header-container {
  margin: 0px 17px;
}

.purchases-item-container {
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

  .purchases-item-container {
    padding: 0px 7%;
  }

  .purchases-header-container {
    padding: 0px 7%;
  }
}
</style>
