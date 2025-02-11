<script setup lang="ts">
import { useRoute } from 'vue-router'

import { ShoppingCart01Icon } from 'hugeicons-vue'

// import Cards from '@/components/custom/cards/Cards.vue'

const route = useRoute()

console.log(route.params)

// const beverageId = this.$router.params.id;

// this.$router.params.id

// console.log($router.params.id);
// import HelloWorld from '@/components/HelloWorld.vue'

//312B2F
</script>

<template>
  <main :class="$style.mobileContainer">
    <h5 :class="$style.title">Vino tinto</h5>
    <div :class="$style.productImageContainer">
      <img :class="$style.productImage" src="@/assets/images/beverage-2.jpg" />
    </div>

    <aside :class="$style.productDetails">
      <p :class="$style.vendorInfo"><strong>Vendido por:</strong> Licor JB</p>
      <p :class="$style.price">$162.000</p>
      <p :class="$style.stockInfo">¡Últimas 10 unidades!</p>

      <div :class="$style.deliveryConditions">
        <h5 :class="$style.deliveryTitle">Condiciones de entrega</h5>
        <p :class="$style.deliveryInfo">Enviado por: <strong>Licor JB</strong></p>
        <p :class="$style.deliveryInfo">Disponible para: <strong>Compra y recoge</strong></p>
      </div>

      <div :class="$style.addToCart">
        <button :class="$style.addToCartButton" type="button">
          Agregar al carrito
          <ShoppingCart01Icon width="20" />
        </button>
      </div>
    </aside>
  </main>

  <main :class="$style.desktopContainer">
    <h5>Desktop Container</h5>
  </main>
</template>

<style module>
.mobileContainer {
  display: block;
  margin: 0px 10px;
  padding-top: 15px;
}

.productImageContainer {
  display: flex;
  justify-content: center;
}

.productImage {
  width: 100%;
  max-width: 400px;
  margin: auto;
}

.title {
  text-decoration: underline;
  font-weight: 600;
  margin: 0px;
  margin-bottom: 10px;
}

.productDetails {
  border: 1px solid rgb(189, 188, 188);
  border-radius: 10px;
  margin-top: 30px;
}

.vendorInfo {
  font-size: 12px;
  background-color: #f4f4f4;
  padding: 8px 10px;
  margin: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.price {
  font-size: 12px;
  font-weight: bold;
  margin: 12px 10px;
}

.stockInfo {
  font-size: 12px;
  color: red;
  margin: 10px 10px;
}

.deliveryConditions {
  background-color: #f4f4f4;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 10px;
}

.deliveryTitle {
  font-size: 12px;
  margin: 0;
}

.deliveryInfo {
  font-size: 12px;
}

.addToCart {
  background-color: saddlebrown;
  margin: 15px 10px;
  border-radius: 6px;
}

.addToCartButton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 7px 0px;
  border: none;
  border-radius: 6px;
  background: #1a1a32;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.addToCartButton:hover {
  background: #121221;
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
