<template>
  <div>
    <div class="container">
      <div v-if="loadingUserData" id="loading">
        <v-progress-circular
          :size="70"
          :width="7"
          color="blue"
          indeterminate
        ></v-progress-circular>
        <h1 id="loading-text">Loading data...</h1>
        <p class="error p-5 white--text rounded my-5">{{ loadingError }}</p>
      </div>
    </div>

    <v-container height="100%" width="100%" v-if="!loading">
      <div id="accountContent">
        <h3 class="display-1" id="accounth3">Account summary</h3>
        <hr class="light-blue lighten-4 my-2" />

        <v-sheet height="100%" width="100%" elevation="10" class="pa-5">
          <v-row no-gutters>
            <v-col cols="6">
              <h2 color="blue">Account information:</h2>

              <v-list>
                <v-list-item>First name: {{ randomUser.name.first }}</v-list-item>
                <v-list-item>Last name: {{ randomUser.name.last }}</v-list-item>
                <v-list-item
                  >Registration date:
                  {{ randomUser.registered.date.slice(0, 10) }}
                </v-list-item>
                <v-list-item>Phone: {{ randomUser.phone }}</v-list-item>
              </v-list>
            </v-col>

            <v-col cols="6">
              <h2 color="blue">Company information:</h2>

              <v-list>
                <v-list-item>City: {{ randomUser.location.city }}</v-list-item>
                <v-list-item>Country: {{ randomUser.location.country }}</v-list-item>
                <v-list-item>Employee ID: {{ randomUser.id.value }} </v-list-item>
                <v-list-item>Corporate email: {{ randomUser.email }}</v-list-item>
              </v-list>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Summary",
  data() {
    return {};
  },
  computed: {
    ...mapState(["loadingUserData", "randomUser", "loadingError"]),
  },
  methods: {
    ...mapActions(["getRandomUser"]),
  },
  async created() {
    try {
      await this.$store.dispatch("getRandomUser");
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

#accounth3 {
  margin-top: 20px;
}

#accountContent {
  padding: 50px;
}

h3 {
  background: $h3;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#loading {
  text-align: center;
  margin-top: 160px;
  z-index: 99999;
}

#loading-text {
  font-family: $style1;
  font-size: 3em;
  color: #0a66c2;
}
</style>
