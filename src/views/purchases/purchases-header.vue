<script lang="ts" setup>
import { QuillWrite01Icon } from 'hugeicons-vue'
</script>

<template>
  <main>
    <aside :class="$style['header']">
      <div :class="$style['header__input-container']" for="search">
        <QuillWrite01Icon width="22" height="22" color="#1a1a32" />

        <input type="text" placeholder="Buscar producto" id="search" name="search" />
      </div>

      <p :class="$style['header__total-purchases']">13 Compras</p>
    </aside>
  </main>
</template>

<style module>
/* Mobile */
.header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__input-container {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 6px 15px;
  background-color: transparent;
  border-radius: 15px;
  border: 2px solid #ccc;
}

.header__input-container input {
  color: #1a1a32;
  padding-left: 10px;
  width: 100%;
  background: transparent;
  border-right: none;
  border-top: none;
  border-bottom: none;
  border-left: 2px solid #ccc;
  outline: none;
  font-family: 'Inter', sans-serif;
}

.header__total-purchases {
  font-size: 13px;
  margin: 0px;
  font-weight: 600;
  color: #1a1a32;
}

@media screen and (min-width: 750px) {
  /* Desktop */

  .header__input-container input {
    width: 350px;
  }
}
</style>
