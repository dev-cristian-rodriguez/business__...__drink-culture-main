<script setup lang="ts"></script>

<template>
  <main>
    <aside :class="$style['purchase-container']">
      <section :class="$style['purchase-container__header']">
        <h3>12 de noviembre del 2024</h3>

        <p>Volver a comprar</p>
      </section>

      <section :class="$style['purchase-container__body']">
        <img src="@/assets/images/beverage-1.jpg" />

        <div :class="$style['purchase-container__body__purchase-detail']">
          <p :class="$style['purchase-container__body__purchase-detail__status']">Entregado</p>

          <p :class="$style['purchase-container__body__product-detail__arrived-date']">
            Llego el 15 de noviembre del 2024
          </p>

          <p :class="$style['purchase-container__body__product-detail__address']">
            Envia entregó tu paquete a las 13:25 en Carrera 8E #14-103, Las Américas, Chaparral,
            Tolima.
          </p>

          <p :class="$style['purchase-container__body__product-detail__quantity']">1 unidad</p>
        </div>
      </section>
    </aside>
  </main>
</template>

<style module>
/* Mobile view */
.purchase-container {
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}

.purchase-container__header {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 13px 15px;
  border-bottom: 1px solid rgb(183, 183, 183);
}

.purchase-container__header h3 {
  margin: 0;
  font-weight: 600;
  font-size: 14px;
}

.purchase-container__header p {
  margin: 0;
  font-weight: 600;
  font-size: 12.5px;
  color: rgb(66, 66, 175);
  cursor: pointer;
}

.purchase-container__body {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 13px;
}

.purchase-container__body img {
  width: 90px;
  height: 90px;
}

.purchase-container__body__purchase-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.purchase-container__body__purchase-detail__status {
  margin: 0;
  font-size: 12px;
  color: green;
  font-weight: 700;
}

.purchase-container__body__product-detail__arrived-date {
  margin: 0;
  font-size: 13px;
  color: #1a1a32;
  text-decoration: underline;
}

.purchase-container__body__product-detail__address {
  margin: 0;
  font-size: 13px;
  color: #1a1a32;
}

.purchase-container__body__product-detail__quantity {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #1a1a32;
}

.cart-item-container__product-info__product-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 12px;
}

.cart-item-container__product-info__product-detail__product-name {
  font-weight: 500;
  margin: 0px;
  font-size: 13px;
}

.cart-item-container__product-info__product-detail__product-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.cart-item-container__product-info__product-detail__product-actions__delete {
  margin: 0px;
  color: red;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.cart-item-container__product-info__product-detail__product-actions__buy-now {
  margin: 0px;
  color: blue;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
}

.cart-item-container__product-info__product-quantity {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 15px;
  border-radius: 5px;
  border: 1px solid rgb(183, 183, 183);
}

.cart-item-container__product-info__product-quantity p {
  margin: 0;
  cursor: pointer;
  font-size: 13px;
}

.cart-item-container__product-info__product-price {
  margin: 0;
  font-weight: 500;
  font-size: 17px;
  margin-right: 15px;
}

.cart-item-container__shipping-cost {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 13px 20px;
}

.cart-item-container__shipping-cost h3 {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
}

.cart-item-container__shipping-cost p {
  margin: 0;
  font-size: 14px;
  color: gray;
}

@media screen and (min-width: 1000px) {
  /* Desktop view */
  .cart-item-container {
    width: 600px;
  }

  .cart-item-container__distributor h3 {
    font-size: 13px;
  }

  .cart-item-container__product-info {
    display: flex;
    flex-direction: row;
    gap: 0px;
    justify-content: space-between;
    padding: 13px 12px;
  }

  .cart-item-container__product-info__product-detail__product-name {
    font-size: 12px;
  }

  .cart-item-container__product-info__product-detail__product-actions {
    justify-content: start;
  }
}

@media screen and (min-width: 1250px) {
  .cart-item-container {
    width: 680px;
  }
}
</style>
