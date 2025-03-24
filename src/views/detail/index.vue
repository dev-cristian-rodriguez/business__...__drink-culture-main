<script setup lang="ts">
import { ref } from 'vue'

// import { useRoute } from 'vue-router'
import { ArrowLeft02Icon } from 'hugeicons-vue'

// Schemas
import type { ThumbnailImage } from '@/schemas/schemas.ts'

// Components
import ProductSummary from './product-summary.vue'
import AdditionalInfo from './additional-info.vue'

// const route = useRoute()

const thumbnailsImages = ref<ThumbnailImage[]>([
  {
    id: 1,
    url: 'https://exitocol.vtexassets.com/arquivos/ids/26884826/Whisky-Old-Parr-12-Anos-750-ml-560307_a.jpg?v=638762679597400000',
    selected: true,
  },
  {
    id: 2,
    url: 'https://exitocol.vtexassets.com/arquivos/ids/26884831/Whisky-Old-Parr-12-Anos-750-ml-560307_f.jpg?v=638762679603030000',
    selected: false,
  },
  {
    id: 3,
    url: 'https://exitocol.vtexassets.com/arquivos/ids/26884829/Whisky-Old-Parr-12-Anos-750-ml-560307_d.jpg?v=638762679600830000',
    selected: false,
  },
  {
    id: 4,
    url: 'https://exitocol.vtexassets.com/arquivos/ids/26884831/Whisky-Old-Parr-12-Anos-750-ml-560307_f.jpg?v=638762679603030000',
    selected: false,
  },
])

const handleThumbnailClick = (id: number) => {
  thumbnailsImages.value = thumbnailsImages.value?.map((item) =>
    item.id === id ? { ...item, selected: true } : { ...item, selected: false },
  )
}
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
          v-for="image in thumbnailsImages"
          :key="image?.id"
          :src="image?.url"
          :style="
            image?.selected ? { boxShadow: '0 0 6px rgb(0, 0, 0, 0.5)' } : { cursor: 'pointer' }
          "
          alt="thumbnail-image"
          v-on:click="handleThumbnailClick(image?.id)"
        />
      </aside>

      <aside :class="$style['product-page__image-container']">
        <img
          :src="thumbnailsImages?.find((item) => item?.selected)?.url"
          alt="product-image"
          :class="$style['product-page__image-container__image']"
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
  font-size: 20px;
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

/* .product-page__thumbnail {
  display: flex;
  justify-content: center;
} */

.product-page__image-container {
  display: flex;
  justify-content: center;
}

.product-page__image-container__image {
  width: 100%;
  max-width: 350px;
  border-radius: 6px;
  box-shadow: 0 0 6px rgb(189, 188, 188, 0.3);
}

/* Responsive for Desktop */
@media (min-width: 1000px) {
  .product-page__title--mobile {
    display: none;
  }

  .product-page__title--desktop {
    display: block;
    margin-bottom: 10px;
  }

  .product-page__details {
    display: grid;
    grid-template-columns: 6.5% 50% 40%;
    gap: 10px;
    margin: 10px 4% 0;
  }

  .product-page__thumbnails {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .product-page__thumbnails img {
    width: 100%;
    height: 82px;
    object-fit: cover;
    border-radius: 6px;
    transition: box-shadow 0.3s;
  }

  .product-page__thumbnails img:hover {
    box-shadow: 0 0 6px rgb(0, 0, 0, 0.5);
  }

  .product-page__image-container__image {
    max-width: 500px;
    height: auto;
  }
}
</style>
