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

    <!-- <section style="text-align: center">
      <h1>¡Bienvenido a la tienda de Petro! :)</h1>
      <p>Encuentra los mejores productos a los mejores precios</p>
    </section> -->

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
/* Mobile */
.mobileImageContainer {
  display: block;
}

.desktopImageContainer {
  display: none;
}

.cardsContainer {
  /* background: red; */
  display: flex;
  flex-wrap: wrap;
  /* flex-wrap: nowrap; */
  row-gap: 20px;
  column-gap: 35px;

  /* padding: 5px 25px; */
  margin-top: 30px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: center;
}

@media screen and (min-width: 750px) {
  /* Desktop */
  .mobileImageContainer {
    display: none;
  }

  .desktopImageContainer {
    display: block;
  }

  .cardsContainer {
    margin-top: 30px;
    margin-left: 10%;
    margin-right: 10%;

    /* background: green; */
    /* background: red;
    display: grid;
    grid-template-columns: repeat(4, 180px);
    flex-wrap: wrap;
    flex-wrap: nowrap;
    gap: 20px;
    padding: 5px 15%;
    margin-top: 30px;
    justify-content: center; */
  }
}
</style>
