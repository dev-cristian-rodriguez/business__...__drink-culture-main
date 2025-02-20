<script setup lang="ts">
import {
  Carousel,
  Slide as CarouselSlide,
  Pagination as CarouselPagination,
  Navigation as CarouselNavigation,
} from 'vue3-carousel'

// Components
import Card from '@/components/custom/cards/card.vue'

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 4000,
}

// Mobile
const imagesUrls1 = [
  'https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blt9b418bfadf51e45f/67afc91ed15087716a528838/2ModaHombre-Desk.jpg?auto=webp&disable=upscale&quality=70&width=720',
  'https://images.falabella.com/v3/assets/blt088e6fffbba20f16/bltda39c1f683974d08/67afc91eefe40e92e48f91f3/3Belleza-Desk.jpg?auto=webp&disable=upscale&quality=70&width=720',
  'https://images.falabella.com/v3/assets/blt088e6fffbba20f16/blta26fc04fc278bfc6/67b77da0fd5f93419ffce3e1/ModaMujer-Desk-20feb.jpg?auto=webp&disable=upscale&quality=70&width=720',
]

// Desktop
const imagesUrls2 = [
  'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/dbae88a0-e01f-4229-a98a-04d7a57288d0___ee86286842992026a190ab2f8666d290.jpg',
  'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/a9762382-e2ea-4964-823a-d9cd058267e8___123fb1bf1e3344ec302747737912d16c.png',
  'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/24b35cd6-553e-45f9-b2a0-7a6af3f7ce13___0b7d3b12e96fe228b86340c377098343.png',
  'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/53ae748a-4c82-4a72-9fe5-0d91037e6dcf___e46e6fe226311d764653bd6fc81c7ea6.jpg',
  'https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/a18cb71a-406f-4288-896b-72b83d2afbcd___53636046f2a8dbecbc45535af09399d4.jpg',
]
</script>

<template>
  <main>
    <!-- Mobile Images -->
    <aside :class="$style['image-container--mobile']">
      <Carousel style="width: 100%" v-bind="carouselConfig">
        <CarouselSlide v-for="slide in imagesUrls1" :key="slide">
          <img v-bind:src="slide" width="100%" />
        </CarouselSlide>

        <template #addons>
          <CarouselNavigation />
          <CarouselPagination />
        </template>
      </Carousel>
    </aside>

    <!-- Desktop Images -->
    <aside :class="$style['image-container--desktop']">
      <Carousel style="width: 100%" v-bind="carouselConfig">
        <CarouselSlide v-for="slide in imagesUrls2" :key="slide">
          <img v-bind:src="slide" width="100%" />
        </CarouselSlide>

        <template #addons>
          <CarouselNavigation />
          <CarouselPagination />
        </template>
      </Carousel>
    </aside>

    <section :class="$style['cards-container']">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  </main>
</template>

<style module>
.image-container--mobile {
  display: block;
}

.image-container--desktop {
  display: none;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 35px;
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
}

@media screen and (min-width: 750px) {
  .image-container--mobile {
    display: none;
  }

  .image-container--desktop {
    display: flex;
    flex-wrap: nowrap;
    /* position: relative;
    overflow-x: hidden; */
  }

  .image-container--desktop__arrow-container {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: rgb(236, 236, 236);
    border-radius: 50%;
    cursor: pointer;
  }

  .image-container--desktop__arrow-container--left {
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  .image-container--desktop__arrow-container--right {
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  /* .image-container--desktop__arrow-container--left {

  } */

  .image-container--desktop img {
    width: 100%;
  }

  .cards-container {
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
