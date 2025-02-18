<script setup lang="ts">
import cartItem from './cart-item.vue'
import shoppingResume from './shopping-resume.vue'
</script>

<template>
  <main :class="$style['main-container']">
    <h1 :class="$style['title']">Carrito de compras</h1>

    <aside :class="$style['cart-item-container']">
      <cartItem />
      <cartItem />
      <cartItem />
      <cartItem />
      <cartItem />
      <cartItem />
    </aside>

    <shoppingResume />
  </main>
</template>

<style module>
.main-container {
  margin: 0px 15px;
}

.title {
  color: #1a1a32;
  font-size: 23px;
  text-align: center;
  margin: 25px 0px;
  padding-top: 20px;
}

.cart-item-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 250px;
}

@media screen and (min-width: 1000px) {
  .title {
    padding-top: 0px;
  }

  .cart-item-container {
    margin-bottom: 0px;
  }
}
</style>
