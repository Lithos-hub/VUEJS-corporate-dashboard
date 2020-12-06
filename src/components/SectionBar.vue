<template>
  <div>
    <v-layout>
      <v-flex>
        <v-toolbar dark prominent v-bind:src="image" width="100%" elevation="10" class="mb-5 rounded">
          <v-toolbar-title class="text-h1" id="sectionTitle">{{ sectionName }}</v-toolbar-title>
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

#sectionTitle {
  font-family: $style1 !important;
}
</style>
