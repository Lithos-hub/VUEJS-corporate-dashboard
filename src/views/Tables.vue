<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-sheet height="100%" width="100%" elevation="15" class="pa-5">
      <h1 class="font-weight-light text-center primary white--text pa-5">Global Employees</h1>
      <v-list class="text-center">
        <v-list-item>
          <v-col>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Employee Name </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Employee email </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Employee ID </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Corporative phone </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold"> Country </v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-list-item>
      </v-list>
      <v-list rounded class="text-center">
        <v-list-item v-for="(item, index) in 100" :key="index" link>
          <v-col>
            <v-list-item-content>
              <v-list-item-title> {{ multipleUsers[index].name.first }} {{ multipleUsers[index].name.last }} </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title> {{ multipleUsers[index].email }} </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title> {{ multipleUsers[index].login.uuid }} </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title> {{ multipleUsers[index].phone }} </v-list-item-title>
            </v-list-item-content>
          </v-col>
          <v-col>
            <v-list-item-content>
              <v-list-item-title> {{ multipleUsers[index].location.country }} </v-list-item-title>
            </v-list-item-content>
          </v-col>
        </v-list-item>
      </v-list>
    </v-sheet>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import SectionBar from "../components/SectionBar";

export default {
  name: "Tables",
  components: {
    SectionBar,
  },
  data() {
    return {
      sectionBar: {
        image: require("../assets/img/imgbar9.jpg"),
        sectionName: "Tables",
      },
    };
  },
  computed: {
    ...mapState(["multipleUsers"]),
  },
  methods: {
    ...mapActions(["getMultipleUsers"]),
  },
  async created() {
    try {
      console.log("From tables");
      await this.$store.dispatch("getMultipleUsers");
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style></style>
