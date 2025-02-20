<script setup lang="ts">
import { ref } from 'vue'

import { ArrowDown01Icon } from 'hugeicons-vue'

const showAdditionalInfo = ref(true)

const toggleAdditionalInfo = () => {
  showAdditionalInfo.value = !showAdditionalInfo.value
}
</script>

<template>
  <main :class="$style['additional-info']">
    <aside :class="$style['additional-info__slider']">
      <h4>Additional info</h4>

      <ArrowDown01Icon
        width="40"
        height="40"
        cursor="pointer"
        :class="showAdditionalInfo ? $style.rotatedUp : $style.rotatedDown"
        v-on:click="toggleAdditionalInfo"
      />
    </aside>

    <aside v-show="showAdditionalInfo" :class="$style['additional-info__content']">
      <div :class="$style['additional-info__content__section']">
        <strong :class="$style['additional-info__content__section__title']">Descripcin</strong>
        <p :class="$style['additional-info__content__section__text']">
          Producto de origen escocés, elaborado con cebada malteada y envejecido en barricas de
          roble
        </p>
        <hr />
      </div>

      <div :class="$style['additional-info__content__section']">
        <strong :class="$style['additional-info__content__section__title']">Referencia</strong>
        <p :class="$style['additional-info__content__section__text']">
          Whisky Single Malt 100% ( 750 ML )
        </p>
        <hr />
      </div>

      <div :class="$style['additional-info__content__section']">
        <strong :class="$style['additional-info__content__section__title']">País de Origen</strong>
        <p :class="$style['additional-info__content__section__text']">
          Whisky Single Malt 100% ( 750 ML )
        </p>
        <hr />
      </div>

      <div :class="$style['additional-info__content__section']">
        <strong :class="$style['additional-info__content__section__title']"
          >Porcentaje o grado alcohólico</strong
        >
        <p :class="$style['additional-info__content__section__text']">
          Whisky Single Malt 100% ( 750 ML )
        </p>
        <hr />
      </div>
    </aside>
  </main>
</template>

<style lang="css" module>
.additional-info {
  margin-top: 35px;
}

.additional-info__slider {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f4f4f4;
  padding: 10px 15px;
  margin-top: 25px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top: 1px solid rgb(189, 188, 188);
  border-left: 1px solid rgb(189, 188, 188);
  border-right: 1px solid rgb(189, 188, 188);
  border-bottom: 1px solid rgb(189, 188, 188);
}

.additional-info__slider h4 {
  margin: 0;
}

.additional-info__content {
  background: #f4f4f4;
  font-size: 12px;
  padding-top: 13px;
  border-left: 1px solid rgb(189, 188, 188);
  border-right: 1px solid rgb(189, 188, 188);
}

.additional-info__content__section {
  padding: 0 0px;
}

.additional-info__content__section__title {
  margin: 0px;
  padding: 0px 15px;
}

.additional-info__content__section__text {
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 0px 15px;
}

.rotatedUp {
  transition: transform 0.2s;
  transform: rotate(180deg);
}

.rotatedDown {
  transition: transform 0.2s;
  transform: rotate(0deg);
}

@media (min-width: 900px) {
}
</style>
