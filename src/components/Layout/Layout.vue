<script setup lang="ts">
import { RouterView } from 'vue-router'

// Components
import Navbar from '@/components/Layout/inc/Navbar.vue'
// import Footer from '@/components/Layout/inc/Footer.vue'
</script>

<template>
  <Navbar />

  <RouterLink :class="$style.navItem" to="/">Home</RouterLink>
  <RouterLink :class="$style.navItem" to="/about">About</RouterLink>

  <RouterView />
</template>

<style module>
.navContent {
  display: flex;
  border-top: 1px solid rgb(47, 47, 166);
  margin-top: 15px;
  gap: 10px;
}

.navItem {
  color: rgb(47, 47, 166);
  text-decoration: underline;
}
</style>
