<script setup lang="ts">
import { ref } from 'vue'

import { ArrowDown01Icon } from 'hugeicons-vue'

const showAdditionalInfo = ref(true)

const toggleAdditionalInfo = () => {
  showAdditionalInfo.value = !showAdditionalInfo.value
}
</script>

<template>
  <main style="margin-bottom: 35px">
    <aside
      style="
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
      "
    >
      <h3 style="margin: 0px">Additional info</h3>
      <ArrowDown01Icon
        width="40"
        height="40"
        cursor="pointer"
        :class="showAdditionalInfo ? $style.rotatedUp : $style.rotatedDown"
        v-on:click="toggleAdditionalInfo"
      />
    </aside>

    <aside v-show="showAdditionalInfo" :class="$style.additionalInfo">
      <div :class="$style.additionalInfoSection">
        <strong :class="$style.detailInfoTitle">Referencia</strong>
        <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
        <hr />
      </div>

      <div :class="$style.additionalInfoSection">
        <strong :class="$style.detailInfoTitle">Referencia</strong>
        <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
        <hr />
      </div>

      <div :class="$style.additionalInfoSection">
        <strong :class="$style.detailInfoTitle">Referencia</strong>
        <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
        <hr />
      </div>

      <div :class="$style.additionalInfoSection">
        <strong :class="$style.detailInfoTitle">Referencia</strong>
        <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
        <hr />
      </div>

      <div :class="$style.additionalInfoSection">
        <strong :class="$style.detailInfoTitle">Referencia</strong>
        <p :class="$style.detailInfoText">Whisky Single Malt 100% ( 750 ML )</p>
        <hr />
      </div>
    </aside>
  </main>
</template>

<style lang="css" module>
.additionalInfo {
  background: #f4f4f4;
  font-size: 12px;
  padding-top: 13px;
  border-left: 1px solid rgb(189, 188, 188);
  border-right: 1px solid rgb(189, 188, 188);
}

.additionalInfoSection {
  padding: 0 0px;
}

.detailInfoTitle {
  margin: 0px;
  padding: 0px 15px;
}

.detailInfoText {
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
