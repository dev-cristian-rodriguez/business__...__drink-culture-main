<script setup lang="ts">
import { ShoppingCart01Icon, Car03Icon, Archive01Icon } from 'hugeicons-vue'
</script>

<template>
  <main :class="$style.productSummary">
    <p :class="$style.vendorInfo"><strong> Vendido por: </strong> Licor JB</p>
    <p :class="$style.price">$162.000</p>
    <p :class="$style.stockInfo">¡Últimas 10 unidades!</p>

    <div :class="$style.deliveryConditions">
      <h5 :class="$style.deliveryTitle">Condiciones de entrega</h5>

      <div :class="$style.deliveryInfo1">
        <Car03Icon width="20" height="20" color="#1a1a32" />
        <p>Enviado por: <strong> Licor JB </strong></p>
      </div>

      <p :class="$style.deliveryTime">Entrega de 3 a 9 días hábiles</p>

      <div :class="$style.deliveryInfo2">
        <Archive01Icon width="20" height="20" color="#1a1a32" />
        <p>Disponible para: <strong> Compra y recoge </strong></p>
      </div>
    </div>

    <div :class="$style.addToCart">
      <button :class="$style.addToCartButton" type="button">
        Agregar al carrito
        <ShoppingCart01Icon width="20" height="20" />
      </button>
    </div>
  </main>
</template>

<style lang="css" module>
.productSummary {
  width: 100%;
  max-width: none;
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
  margin-top: 4px;
  margin-bottom: 0px;
}

.deliveryInfo1 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: -8px;
}

.deliveryTime {
  font-size: 12px;
  margin-top: 0px;
}

.deliveryInfo2 {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-top: 5px;
  margin-bottom: 5px;
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

@media (min-width: 900px) {
  .productSummary {
    max-width: 550px;
  }
}
</style>
