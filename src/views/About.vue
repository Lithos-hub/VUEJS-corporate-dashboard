<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-sheet height="100%" width="100%" elevation="15" class="pa-5">
      <p class="font-weight-light" id="about-text">
        My intention with this project was to create a SPA (Single Page Application). A functional dashboard (within my capabilities), using Vue.js. To do this, I divided the application into a series of components: <br /><br />

        <ul type="square">
          <li>
            The navigation navbar that extends in the upper area of the screen and to the left with a "navigation drawer" that can be activated or deactivated. Dynamically and using vuex and the store, I placed a time and date marker; the user's first and last name; their profile picture and their user name. All this
            user data is provided by the RandomUser API: https://randomuser.me
          </li>

          <li>Using the Navbar, you can also navigate to the different views of the application: The user account view; inbox view; documents; graphics and statistics; calendar, etc.</li>
          <li>In each of these views, there are also some components with the large title bars or submenus of the account settings view.</li>
          <li>In the future, I will expand the posibilities of this app with new functionalities and bug fixes.</li>
        </ul>
      </p>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

export default {
  name: "About",
  components: {
    SectionBar,
  },
  data() {
    return {
      sectionBar: {
        image: require("../assets/img/imgbar1.jpg"),
        sectionName: "About",
      },
    };
  },
};
</script>

<style>
#about-text {
  font-size: 24px;
}
</style>
