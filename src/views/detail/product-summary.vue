<script setup lang="ts">
import { ShoppingCart01Icon, Car03Icon, Archive01Icon } from 'hugeicons-vue'
</script>

<template>
  <main :class="$style['product-summary']">
    <p :class="$style['product-summary__vendor-info']"><strong>Vendido por:</strong> Licor JB</p>
    <p :class="$style['product-summary__price']">$162.000</p>
    <p :class="$style['product-summary__stock-info']">¡Últimas 10 unidades!</p>

    <div :class="$style['product-summary__delivery-conditions']">
      <h5 :class="$style['product-summary__delivery-title']">Condiciones de entrega</h5>

      <div :class="$style['product-summary__delivery-info']">
        <Car03Icon width="20" height="20" :class="$style['product-summary__icon']" />
        <p>Enviado por: <strong> Licor JB </strong></p>
      </div>

      <p :class="$style['product-summary__delivery-time']">Entrega de 3 a 9 días hábiles</p>

      <div :class="$style['product-summary__delivery-info']">
        <Archive01Icon width="20" height="20" :class="$style['product-summary__icon']" />
        <p>Disponible para: <strong> Compra y recoge </strong></p>
      </div>
    </div>

    <div :class="$style['product-summary__add-to-cart']">
      <button :class="$style['product-summary__add-to-cart-button']" type="button">
        Agregar al carrito
        <ShoppingCart01Icon width="20" height="20" />
      </button>
    </div>
  </main>
</template>

<style lang="css" module>
.product-summary {
  width: 100%;
  max-width: none;
  background: white;
  border: 1px solid rgb(189, 188, 188);
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 0 6px rgb(189, 188, 188, 0.3);
}

.product-summary__vendor-info {
  font-size: 12px;
  border-bottom: 2px solid #f4f4f4;
  padding: 8px 10px;
  margin: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.product-summary__price {
  font-size: 12px;
  font-weight: bold;
  margin: 12px 10px;
}

.product-summary__stock-info {
  font-size: 12px;
  color: red;
  margin: 10px 10px;
}

.product-summary__delivery-conditions {
  background-color: #f4f4f4;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0 10px;
}

.product-summary__delivery-title {
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 0px;
}

.product-summary__delivery-info {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-top: 6px;
}

.product-summary__delivery-time {
  font-size: 12px;
  margin-top: 0px;
}

.product-summary__add-to-cart {
  background-color: saddlebrown;
  margin: 15px 10px;
  border-radius: 6px;
}

.product-summary__add-to-cart-button {
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

.product-summary__add-to-cart-button:hover {
  background: #121221;
}

@media (min-width: 1000px) {
  .product-summary {
    max-width: 550px;
  }
}
</style>
