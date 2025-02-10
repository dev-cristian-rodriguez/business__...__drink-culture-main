<script setup lang="ts">
// import { defineProps } from 'vue'

import { ShoppingCart01Icon } from 'hugeicons-vue'

const testId = '6'

//312B2F
</script>

<template>
  <main style="background: red">
    <aside :class="$style.cardContainer">
      <router-link :to="`/detail/${testId}`" :class="$style.linkToDetail">
        <img src="@/assets/images/beverage-2.jpg" />

        <h2 :class="$style.title">Consola PS5 slim de disco de 1TB bbbbb ewqe eqwe eqw</h2>
        <h3 :class="$style.type">PS5</h3>
      </router-link>

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
  /* align-items: center; */
  width: 170px;
  padding: 5px;
}

.cardContainer img {
  width: 100%;
}

.title {
  margin: 0px;
  margin-top: 8px;
  font-size: 13px;
  color: #1a1a32;
  font-weight: 600;
}

.type {
  margin: 3px 0px 0px 0px;
  font-size: 13px;
  font-weight: 500;
  color: #969393;
}

.linkToDetail {
  text-decoration: none;
  cursor: pointer;
}

.linkToDetail:hover .title {
  color: rgb(96, 96, 202);
  text-decoration: underline;
}

.discountContainer {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0px 0px 0px;
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

@media screen and (min-width: 700px) {
  .cardContainer {
    width: 200px;
  }
}
</style>
