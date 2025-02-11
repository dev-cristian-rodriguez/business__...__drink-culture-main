<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import {
  ShoppingCart01Icon,
  ArrowLeft02Icon,
  Car03Icon,
  Archive01Icon,
  ArrowDown01Icon,
} from 'hugeicons-vue'

const route = useRoute()

// import Cards from '@/components/custom/cards/Cards.vue'
const showAdditionalInfo = ref(true)

const toggleAdditionalInfo = () => {
  showAdditionalInfo.value = !showAdditionalInfo.value
}

console.log(route.params)

// const beverageId = this.$router.params.id;

// this.$router.params.id

// console.log($router.params.id);
// import HelloWorld from '@/components/HelloWorld.vue'

//312B2F
</script>

<template>
  <main :class="$style.mobileContainer">
    <section :class="$style.goBackContainer">
      <router-link to="/" :class="$style.goBack">
        <ArrowLeft02Icon width="20" height="20" color="#1a1a32" />
        <strong> Go Back</strong>
      </router-link>
    </section>

    <h5 :class="$style.title">Whisky Single Malt 100% ( 750 ML )</h5>
    <div :class="$style.productImageContainer">
      <img :class="$style.productImage" src="@/assets/images/beverage-2.jpg" />
    </div>

    <aside :class="$style.productDetails">
      <p :class="$style.vendorInfo"><strong>Vendido por:</strong> Licor JB</p>
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
    </aside>

    <section style="margin-bottom: 35px">
      <aside
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f4f4f4;
          padding: 10px 15px;
          margin-top: 25px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          border-top: 1px solid rgb(189, 188, 188);
          border-left: 1px solid rgb(189, 188, 188);
          border-right: 1px solid rgb(189, 188, 188);
          border-bottom: 1px solid rgb(189, 188, 188);
        "
      >
        <h3 style="margin: 0px">Additional info</h3>
        <ArrowDown01Icon
          width="40"
          height="40"
          cursor="pointer"
          :class="showAdditionalInfo ? $style.rotatedUp : $style.rotatedDown"
          v-on:click="toggleAdditionalInfo"
        />
      </aside>

      <aside v-show="showAdditionalInfo" :class="$style.additionalInfo">
        <div :class="$style.additionalInfoSection">
          <strong :class="$style.detailInfoTitle">Referencia</strong>
          <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
          <hr />
        </div>

        <div :class="$style.additionalInfoSection">
          <strong :class="$style.detailInfoTitle">Referencia</strong>
          <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
          <hr />
        </div>

        <div :class="$style.additionalInfoSection">
          <strong :class="$style.detailInfoTitle">Referencia</strong>
          <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
          <hr />
        </div>

        <div :class="$style.additionalInfoSection">
          <strong :class="$style.detailInfoTitle">Referencia</strong>
          <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
          <hr />
        </div>

        <div :class="$style.additionalInfoSection">
          <strong :class="$style.detailInfoTitle">Referencia</strong>
          <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
          <hr />
        </div>
      </aside>
    </section>
  </main>

  <!-- <main :class="$style.desktopContainer">
    <CamperIcon />
    <h5>Desktop Container</h5>
  </main> -->
</template>

<style module>
.mobileContainer {
  display: block;
  margin: 0px 15px;
  padding-top: 15px;
}

.goBackContainer {
  display: flex;
  /* justify-content: flex-start; */
  /* cursor: pointer; */
  align-items: center;
  margin-top: 10px;
  margin-bottom: 15px;
}

.goBack {
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  color: #1a1a32;
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  gap: 5px;
}

.goBack:hover {
  text-decoration: underline;
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
  font-weight: 500;
  color: #1a1a32;
  font-size: 19px;
  margin: 20px 0px;
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

.additionalInfo {
  background: #f4f4f4;
  font-size: 12px;
  padding-top: 13px;
  border-left: 1px solid rgb(189, 188, 188);
  border-right: 1px solid rgb(189, 188, 188);
}

.additionalInfoSection {
  padding: 0 0px;
}

.detailInfoTitle {
  margin: 0px;
  padding: 0px 15px;
}

.detailInfoText {
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 0px 15px;
}

.rotatedUp {
  transition: transform 0.2s;
  transform: rotate(180deg);
}

.rotatedDown {
  transition: transform 0.2s;
  transform: rotate(0deg);
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
