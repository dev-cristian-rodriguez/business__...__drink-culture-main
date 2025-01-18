<script setup lang="ts">
// import { defineProps } from 'vue'

import { ShoppingCart01Icon } from 'hugeicons-vue'

//312B2F
</script>

<template>
  <main>
    <aside :class="$style.cardContainer">
      <img src="@/assets/images/beverage-1.png" />

      <h2 :class="$style.title">Consola PS5 slim de disco de 1TB bbbbb ewqe eqwe eqw</h2>
      <h3 :class="$style.type">PS5</h3>

      <div :class="$style.discountContainer">
        <p :class="$style.discount">- 13%</p>
        <p :class="$style.previousPrice">$ 1,900,000</p>
      </div>

      <p :class="$style.price">$ 1,650,000</p>

      <button type="button">
        Agregar al carrito
        <ShoppingCart01Icon width="20" />
      </button>
    </aside>
  </main>
</template>

<style module>
.cardContainer {
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 5px;
}

.cardContainer img {
  width: 100;
}

.title {
  margin: 0px;
  margin-top: 8px;
  font-size: 13px;
  color: #1a1a32;
  font-weight: bold;
}

.type {
  margin: 8px 0px 0px 0px;
  font-size: 13px;
  font-weight: 500;
  color: #969393;
}

.discountContainer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0px 0px 0px;
}

.discount {
  margin: 0px;
  font-size: 13px;
  padding: 2px 5px;
  border-radius: 4px;
  background: #1a1a32;
  color: white;
  font-weight: bold;
}

.previousPrice {
  margin: 0px;
  font-size: 13px;
  color: #ada9a9;
  text-decoration: line-through;
}

.price {
  margin: 0px;
  margin-top: 10px;
  font-size: 13px;
  color: #1a1a32;
  font-weight: bold;
}

.cardContainer button {
  margin: 12px 0px 0px 0px;
  padding: 7px 0px;
  border: none;
  border-radius: 6px;
  background: #1a1a32;
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background 0.3s;
}

.cardContainer button:hover {
  background: #121221;
}
</style>
