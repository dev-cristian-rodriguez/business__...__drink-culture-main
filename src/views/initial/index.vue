<script setup lang="ts">
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
      <img src="@/assets/images/notice-1.png" width="100%" />
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
    display: block;
  }

  .cards-container {
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>
