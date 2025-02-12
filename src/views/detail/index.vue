<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowLeft02Icon } from 'hugeicons-vue'

// Components
// import productDetail from './product-detail.vue'
import productSummary from './product-summary.vue'
import additionalInfo from './additional-info.vue'

const route = useRoute()

// import Cards from '@/components/custom/cards/Cards.vue'

console.log(route.params)

// const beverageId = this.$router.params.id;

// this.$router.params.id

// console.log($router.params.id);
// import HelloWorld from '@/components/HelloWorld.vue'

//312B2F

// export default {
//   showAdditionalInfo,
//   toggleAdditionalInfo,
// }
</script>

<template>
  <main :class="$style.initialContainer">
    <section :class="$style.goBackContainer">
      <router-link to="/" :class="$style.goBack">
        <ArrowLeft02Icon width="20" height="20" color="#1a1a32" />
        <strong> Go Back </strong>
      </router-link>
    </section>

    <h5 :class="$style.title1">Whisky Single Malt 100%</h5>

    <section :class="$style.productSection">
      <aside :class="$style.thumbnailContainer">
        <img
          width="100%"
          height="100"
          style="object-fit: cover"
          src="@/assets/images/beverage-3.webp"
        />
        <img
          width="100%"
          height="100"
          style="object-fit: cover"
          src="@/assets/images/beverage-3.webp"
        />
        <img
          width="100%"
          height="100"
          style="object-fit: cover"
          src="@/assets/images/beverage-3.webp"
        />
      </aside>

      <aside>
        <div :class="$style.productImageContainer">
          <img :class="$style.productImage" src="@/assets/images/beverage-3.webp" />
        </div>
      </aside>

      <aside>
        <h5 :class="$style.title2">Whisky Single Malt 100%</h5>
        <productSummary />
      </aside>
    </section>

    <additionalInfo />
  </main>

  <!-- <main :class="$style.mobileContainer">
    <section :class="$style.goBackContainer">
      <router-link to="/" :class="$style.goBack">
        <ArrowLeft02Icon width="20" height="20" color="#1a1a32" />
        <strong> Go Back </strong>
      </router-link>
    </section>

    <h5 :class="$style.title">Whisky Single Malt 100% ( 750 ML )</h5>

    <div :class="$style.productImageContainer">
      <img :class="$style.productImage" src="@/assets/images/beverage-2.jpg" />
    </div>

    <h5 :class="$style.title">Whisky Single Malt 100% ( 750 ML )</h5>

    <productSummary />
    <additionalInfo />
  </main> -->

  <!-- <main :class="$style.desktopContainer">
    <CamperIcon />
    <h5>Desktop Container</h5>
  </main> -->
</template>

<style module>
/* ---- Mobile view ---- */

.initialContainer {
  padding: 20px 15px;
}

.goBackContainer {
  display: flex;
  align-items: center;
  padding: 10px 0px;
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

.title1 {
  display: initial;
  font-weight: 500;
  color: #1a1a32;
  font-size: 19px;
  margin-top: 5px;
  margin-bottom: 20px;
}

.title2 {
  display: none;
}

.mobileContainer {
  display: block;
  margin: 0px 15px;
  padding-top: 15px;
}

.productImageContainer {
  display: flex;
  justify-content: center;
  margin: 0px 0px;
}

.productImage {
  width: 100%;
  max-width: 350px;
}

.productSection {
  display: flex;
  flex-direction: column;
}

.thumbnailContainer {
  display: none;
}

@media (min-width: 900px) {
  /* ---- Desktop view ---- */
  .title1 {
    display: none;
  }

  .title2 {
    display: initial;
    font-weight: 500;
    color: #1a1a32;
    font-size: 19px;
    margin-bottom: 10px;
  }

  .productImage {
    width: 100%;
    height: 100%;
    max-width: 500px;
  }

  .productSection {
    display: grid;
    grid-template-columns: 10% 50% 40%;
    gap: 10px;
    margin: 0px 5%;
    margin-top: 10px;
  }

  .thumbnailContainer {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
}
</style>
