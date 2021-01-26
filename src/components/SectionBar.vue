<template>
  <div>
    <v-layout>
      <v-flex>
        <v-toolbar
          dark
          v-bind:src="image"
          width="100%"
          elevation="10"
          class="rounded"
          id="sectionBar"
        >
          <v-toolbar-title id="sectionTitle">{{ sectionName }}</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "SectionBar",
  props: ["image", "sectionName"],
};
</script>

<style lang="scss">
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #sectionTitle {
    position: absolute;
    top: 0px;
    font-family: $style1 !important;
    font-size: 3em !important;
    text-shadow: none;
    text-transform: uppercase;
  }
  #sectionBar {
    position: relative;
    height: 100px;
    margin-bottom: 20px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #sectionTitle {
    position: absolute;
    top: 0px;
    font-family: $style1 !important;
    font-size: 3em !important;
    text-shadow: none;
    text-transform: uppercase;
  }
  #sectionBar {
    position: relative;
    height: 100px;
    margin-bottom: 20px;
  }
}
</style>
