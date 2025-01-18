<script setup lang="ts">
import Cards from '@/components/custom/cards/Cards.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

//312B2F
</script>

<template>
  <main>
    <!-- Mobile Images -->
    <aside :class="$style.mobileImageContainer">
      <img src="@/assets/images/notice-5.png" width="100%" />
    </aside>
    <!-- ///////////////////////////// -->

    <!-- Desktop Images -->
    <aside :class="$style.desktopImageContainer">
      <img src="@/assets/images/notice-1.png" width="100%" />
    </aside>
    <!-- ///////////////////////////// -->

    <section>
      <h1>¡Bienvenido a la tienda de Petro! :)</h1>
      <p>Encuentra los mejores productos a los mejores precios</p>
    </section>

    <section :class="$style.cardsContainer">
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </section>
  </main>
</template>

<style module>
.mobileImageContainer {
  display: block;
}

.desktopImageContainer {
  display: none;
}

.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
  gap: 15px;
  padding: 5px 15px;
  justify-content: center;
}

@media screen and (min-width: 700px) {
  .mobileImageContainer {
    display: none;
  }

  .desktopImageContainer {
    display: block;
  }
}
</style>
