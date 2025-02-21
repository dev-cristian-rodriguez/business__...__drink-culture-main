<script setup lang="ts"></script>

<template>
  <main>
    <aside :class="$style['cart-item-container']">
      <section :class="$style['cart-item-container__distributor']">
        <input type="checkbox" class="custom-checkbox" />
        <h3>Product of Licor JB</h3>
      </section>

      <section :class="$style['cart-item-container__product-info']">
        <img src="@/assets/images/beverage-3.webp" />

        <div :class="$style['cart-item-container__product-info__product-detail']">
          <p :class="$style['cart-item-container__product-info__product-detail__product-name']">
            Whisky Single Malt 100% ( 750 ML )
          </p>

          <div
            :class="$style['cart-item-container__product-info__product-detail__product-actions']"
          >
            <p
              :class="
                $style['cart-item-container__product-info__product-detail__product-actions__delete']
              "
            >
              Eliminar
            </p>

            <p
              :class="
                $style[
                  'cart-item-container__product-info__product-detail__product-actions__buy-now'
                ]
              "
            >
              Comprar ahora
            </p>
          </div>
        </div>

        <div :class="$style['cart-item-container__product-info__product-quantity']">
          <p style="color: gray; font-weight: 700; font-size: 20px">-</p>
          <p>2</p>
          <p style="color: blue; font-weight: 700; font-size: 20px">+</p>
        </div>

        <p :class="$style['cart-item-container__product-info__product-price']">$ 100.000</p>
      </section>

      <section :class="$style['cart-item-container__shipping-cost']">
        <h3>Envio</h3>
        <p>--</p>
      </section>
    </aside>
  </main>
</template>

<style module>
/* Mobile view */
.cart-item-container {
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-item-container__distributor {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 13px 20px;
  border-bottom: 1px solid rgb(183, 183, 183);
}

.cart-item-container__distributor h3 {
  margin: 0;
  font-weight: 500;
  font-size: 13px;
}

.cart-item-container__product-info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  padding: 13px 10px;
  border-bottom: 1px solid rgb(183, 183, 183);
}

.cart-item-container__product-info img {
  width: 100px;
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
