<template>
  <div>
    <v-layout>
      <v-flex>
        <v-toolbar
          dark
          prominent
          v-bind:src="image"
          width="100%"
          elevation="10"
          class="rounded"
          id="sectionBar"
        >
          <v-toolbar-title class="text-h1" id="sectionTitle">{{
            sectionName
          }}</v-toolbar-title>
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
    font-family: $style1 !important;
    font-size: 5em !important;
    margin-bottom: 20px;
  }
  #sectionBar {
    max-height: 75%;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #sectionTitle {
    font-family: $style1 !important;
    font-size: 8em !important;
    margin-bottom: 0px;
  }
  #sectionBar {
    max-height: 100%;
  }
}
</style>
