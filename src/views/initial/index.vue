<script setup lang="ts">
import { ArrowLeft01Icon, ArrowRight01Icon } from 'hugeicons-vue'

// Components
import Card from '@/components/custom/cards/card.vue'
</script>

<template>
  <main>
    <!-- Mobile Images -->
    <aside :class="$style['image-container--mobile']">
      <img src="@/assets/images/notice-5.png" width="100%" />
    </aside>

    <!-- Desktop Images -->
    <aside :class="$style['image-container--desktop']">
      <img src="@/assets/images/notice-1.png" />
      <img src="@/assets/images/notice-2.png" />
      <img src="@/assets/images/notice-3.png" />
      <img src="@/assets/images/notice-4.png" />

      <div
        :class="[
          $style['image-container--desktop__arrow-container'],
          $style['image-container--desktop__arrow-container--left'],
        ]"
      >
        <ArrowLeft01Icon width="30" height="30" color="gray" />
      </div>

      <div
        :class="[
          $style['image-container--desktop__arrow-container'],
          $style['image-container--desktop__arrow-container--right'],
        ]"
      >
        <ArrowRight01Icon width="30" height="30" color="gray" />
      </div>
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
    position: relative;
    overflow-x: hidden;
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
