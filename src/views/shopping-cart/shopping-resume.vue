<script setup lang="ts"></script>

<template>
  <main>
    <aside :class="$style['shopping-resume-container']">
      <h1>Resumen de compra</h1>

      <section :class="$style['shopping-resume-container__quantity-of-products']">
        <p>Productos (2)</p>

        <p>$ 100.00</p>
      </section>

      <section :class="$style['shopping-resume-container__total-price']">
        <p>Total</p>

        <p>$ 200.000</p>
      </section>

      <section :class="$style['shopping-resume-container__buy-button']">
        <button>Continuar compra</button>
      </section>
    </aside>
  </main>
</template>

<style module>
/* Mobile view */
.shopping-resume-container {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  background: white;
}

.shopping-resume-container h1 {
  margin: 0px;
  font-size: 16px;
  padding: 13px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.shopping-resume-container__quantity-of-products {
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
  border-bottom: 1px solid #e0e0e0;
}

.shopping-resume-container__quantity-of-products p {
  margin: 0;
  font-weight: 500;
  font-size: 13px;
}

.shopping-resume-container__quantity-of-products p:last-child {
  font-weight: 700;
}

.shopping-resume-container__total-price {
  display: flex;
  justify-content: space-between;
  padding: 13px 20px;
}

.shopping-resume-container__total-price p {
  margin: 0;
  font-weight: 500;
}

.shopping-resume-container__total-price p:last-child {
  font-weight: 700;
  font-size: 13px;
}

.shopping-resume-container__total-price p:first-child {
  font-weight: 700;
  font-size: 15px;
}

.shopping-resume-container__buy-button {
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}

.shopping-resume-container__buy-button button {
  width: 100%;
  padding: 13px 20px;
  background: #1a1a32;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 10px;
  transition: background 0.3s;
}

.shopping-resume-container__buy-button button:hover {
  background: #111121;
}

@media screen and (min-width: 1000px) {
  .shopping-resume-container {
    position: relative;
    width: 350px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}

@media screen and (min-width: 1250px) {
  .shopping-resume-container {
    width: 440px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
