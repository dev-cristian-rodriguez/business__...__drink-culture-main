<script setup lang="ts"></script>

<template>
  <main>
    <aside :class="$style['favorite-element-container']">
      <section :class="$style['favorite-element-container__body']">
        <img src="@/assets/images/beverage-1.jpg" />

        <div :class="$style['favorite-element-container__body__favorite-element-detail']">
          <p :class="$style['favorite-element-container__body__favorite-element-detail__name']">
            Whisky Single Malt 100%
          </p>

          <h3 :class="$style['favorite-element-container__body__favorite-element-detail__price']">
            $ 2.000
          </h3>

          <p :class="$style['favorite-element-container__body__favorite-element-detail__shipping']">
            Envio gratis
          </p>

          <div
            :class="$style['favorite-element-container__body__favorite-element-detail__buttons']"
          >
            <p>Comprar ahora</p>
            <p>Eliminar de favoritos</p>
          </div>
        </div>
      </section>
    </aside>
  </main>
</template>

<style module>
/* Mobile view */
.favorite-element-container {
  background: white;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.favorite-element-container__body {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 13px;
}

.favorite-element-container__body img {
  width: 85px;
  height: 85px;
}

.favorite-element-container__body__favorite-element-detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.favorite-element-container__body__favorite-element-detail__name {
  margin: 0;
  font-weight: 600;
  font-size: 14px;
}

.favorite-element-container__body__favorite-element-detail__price {
  margin: 0;
  font-weight: 700;
  font-size: 17px;
  color: #1a1a32;
}

.favorite-element-container__body__favorite-element-detail__shipping {
  margin: 0;
  font-size: 12px;
  color: green;
  font-weight: 600;
}

.favorite-element-container__body__favorite-element-detail__buttons {
  display: flex;
  gap: 15px;
  align-items: center;
  margin-top: 12px;
}

.favorite-element-container__body__favorite-element-detail__buttons p {
  color: blue;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  margin: 0px;
}

.favorite-element-container__body__favorite-element-detail__buttons p:hover {
  text-decoration: underline;
}

@media screen and (min-width: 1000px) {
  /* Desktop view */
}
</style>
