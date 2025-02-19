<script setup lang="ts">
// import Card from '@/components/custom/cards/card.vue'
</script>

<template>
  <main :class="$style['container']">
    <h1>Dar click para iniciar sesión con Google</h1>
    <aside :class="$style['google-container']">
      <img src="@/assets/images/google-icon.webp" />
      <p>Ingresar con Google</p>
    </aside>
  </main>
</template>

<style module>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px 15px;
  height: 70vh;
  gap: 27px;
}

.container h1 {
  font-weight: 600;
  margin: 0px;
  text-decoration: underline;
  text-align: center;
  font-size: 21px;
}

.google-container {
  display: flex;
  align-items: center;
  padding: 5px 20px;
  /* padding: 10px; */
  border: 1px solid #1a1a32;
  border-radius: 6px;
  cursor: pointer;
  gap: 5px;
}

.google-container img {
  width: 50px;
  height: 50px;
}

.google-container p {
  color: #1a1a32;
  font-size: 14px;
  font-weight: 600;
  margin: 0px;
}
</style>
