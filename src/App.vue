<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({}),
};
</script>

<style>
.text-h1 {
  text-shadow: 0px 0px 20px rgb(0, 0, 0);
  text-transform: uppercase;
}

/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #272727;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1976d2;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(213, 213, 213);
}
</style>
