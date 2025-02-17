<script setup lang="ts">
import cartItem from './cart-item.vue'
</script>

<template>
  <main style="margin: 0px 10px">
    <h1 :class="$style['title']">Carrito de compras</h1>
    <cartItem />
    <cartItem />
  </main>
</template>

<style module>
.title {
  color: #1a1a32;
  font-size: 24px;
  text-align: center;
  margin: 25px 0px;
}
</style>
