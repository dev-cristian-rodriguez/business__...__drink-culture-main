<script setup lang="ts">
import { ShoppingCart01Icon } from 'hugeicons-vue'

const testId = '6'
</script>

<template>
  <main>
    <aside :class="$style['card']">
      <router-link :to="`/detail/${testId}`" :class="$style['card__link']">
        <img src="@/assets/images/beverage-3.webp" :class="$style['card__image']" />
        <h2 :class="$style['card__title']">Whisky Single Malt 100%</h2>
        <h3 :class="$style['card__type']">PS5</h3>
      </router-link>

      <div :class="$style['card__discount-container']">
        <p :class="$style['card__discount']">- 13%</p>
        <p :class="$style['card__previous-price']">$ 1,900,000</p>
      </div>

      <p :class="$style['card__price']">$ 1,650,000</p>

      <button type="button" :class="$style['card__button']">
        Agregar al carrito
        <ShoppingCart01Icon width="20" />
      </button>
    </aside>
  </main>
</template>

<style module>
.card {
  display: flex;
  flex-direction: column;
  width: 170px;
  padding: 15px;
  background: white;
  border-radius: 6px;
}

.card__image {
  width: 100%;
}

.card__title {
  margin: 8px 0 0;
  font-size: 13px;
  color: #1a1a32;
  font-weight: 600;
}

.card__type {
  margin: 3px 0 0;
  font-size: 13px;
  font-weight: 500;
  color: #969393;
}

.card__link {
  text-decoration: none;
  cursor: pointer;
}

.card__link:hover .card__title {
  color: rgb(96, 96, 202);
  text-decoration: underline;
}

.card__discount-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card__discount {
  font-size: 13px;
  padding: 2px 5px;
  border-radius: 4px;
  background: #1a1a32;
  color: white;
  font-weight: bold;
}

.card__previous-price {
  font-size: 13px;
  color: #ada9a9;
  text-decoration: line-through;
}

.card__price {
  margin-top: 10px;
  font-size: 13px;
  color: #1a1a32;
  font-weight: bold;
  margin: 0px;
}

.card__button {
  margin-top: 12px;
  padding: 7px 0;
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

.card__button:hover {
  background: #121221;
}

@media screen and (min-width: 700px) {
  .card {
    width: 200px;
  }
}
</style>
