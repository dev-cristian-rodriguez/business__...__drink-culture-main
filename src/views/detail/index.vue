<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ArrowLeft02Icon } from 'hugeicons-vue'

// Components
import ProductSummary from './product-summary.vue'
import AdditionalInfo from './additional-info.vue'

const route = useRoute()
console.log(route.params)
</script>

<template>
  <main :class="$style['product-page']">
    <section :class="$style['product-page__go-back']">
      <router-link to="/" :class="$style['product-page__go-back-link']">
        <ArrowLeft02Icon :class="$style['product-page__icon']" />
        <strong> Go Back </strong>
      </router-link>
    </section>

    <h5 :class="[$style['product-page__title'], $style['product-page__title--mobile']]">
      Whisky Single Malt 100%
    </h5>

    <section :class="$style['product-page__details']">
      <aside :class="$style['product-page__thumbnails']">
        <img
          v-for="n in 3"
          :key="n"
          width="100%"
          height="100"
          style="object-fit: cover"
          src="@/assets/images/beverage-3.webp"
        />
      </aside>

      <aside :class="$style['product-page__image-container']">
        <img
          src="@/assets/images/beverage-1.jpg"
          alt="Whisky Bottle"
          :class="$style['product-page__image']"
        />
      </aside>

      <aside :class="$style['product-page__info']">
        <h5 :class="[$style['product-page__title'], $style['product-page__title--desktop']]">
          Whisky Single Malt 100%
        </h5>
        <ProductSummary />
      </aside>
    </section>

    <AdditionalInfo />
  </main>
</template>

<style module>
.product-page {
  padding: 20px 15px;
}

/* Go Back Section */
.product-page__go-back {
  display: flex;
  align-items: center;
  padding: 10px 0;
}

.product-page__go-back-link {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #1a1a32;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
}

.product-page__go-back-link:hover {
  text-decoration: underline;
}

.product-page__icon {
  width: 20px;
  height: 20px;
  fill: #1a1a32;
}

/* Titles */
.product-page__title {
  font-weight: 600;
  color: #1a1a32;
  font-size: 19px;
  margin-bottom: 20px;
}

.product-page__title--mobile {
  display: block;
  margin-top: 5px;
}

.product-page__title--desktop {
  display: none;
}

/* Product Details */
.product-page__details {
  display: flex;
  flex-direction: column;
}

.product-page__thumbnails {
  display: none;
}

.product-page__thumbnail {
  display: flex;
  justify-content: center;
}

.product-page__image-container {
  display: flex;
  justify-content: center;
}

.product-page__image {
  width: 100%;
  max-width: 350px;
}

/* Responsive for Desktop */
@media (min-width: 900px) {
  .product-page__title--mobile {
    display: none;
  }

  .product-page__title--desktop {
    display: block;
    margin-bottom: 10px;
  }

  .product-page__details {
    display: grid;
    grid-template-columns: 10% 50% 40%;
    gap: 10px;
    margin: 10px 5% 0;
  }

  .product-page__thumbnails {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .product-page__image {
    max-width: 500px;
    height: auto;
  }
}
</style>
