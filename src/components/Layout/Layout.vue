<script setup lang="ts">
import { RouterView } from 'vue-router'

// Components
import Navbar from './inc/Navbar/index.vue'
// import Footer from '@/components/Layout/inc/Footer.vue'
</script>

<template>
  <Navbar />

  <!-- Content -->
  <main :class="$style.childrenComponent">
    <RouterView />
  </main>
</template>

<style module>
.childrenComponent {
  /* background: red; */
  margin-top: 65px;
}

@media screen and (min-width: 1000px) {
  .childrenComponent {
    margin-top: 0px;
  }
}
</style>
