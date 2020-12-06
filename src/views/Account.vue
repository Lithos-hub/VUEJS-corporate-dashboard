<template>
  <div>
    <!-- Section Bar -->
    <SectionBar
      :image="sectionBar.image"
      :sectionName="sectionBar.sectionName"
    />
    <!----------------- -->

    <v-card class="overflow-hidden">
      <v-app-bar rounded elevation="10" dark>
        <br />
        <template v-slot:extension>
          <v-tabs align-with-title>
            <v-tab @click="goSummary()">Summary</v-tab>
            <v-tab @click="goProfile()">My Profile</v-tab>
            <v-tab @click="goSecurity()">Password & Security</v-tab>
            <v-tab @click="goNotifications()">Notification Settings</v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
    </v-card>

    <v-sheet fluid color="white" elevation="18" height="100%" width="100%">
      <!-- CHANGE IMAGE COMPONENT -->
      <Summary v-if="summary" />
      <MyProfile v-if="profile" />
      <Security v-if="security" />
      <Notifications v-if="notifications" />
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

import MyProfile from "../components/MyProfile";
import Summary from "../components/Summary";
import Security from "../components/Security";
import Notifications from "../components/Notifications";

export default {
  components: {
    Summary,
    MyProfile,
    Security,
    Notifications,
    SectionBar,
  },
  data() {
    return {
      file: null,
      tempUrl: null,
      summary: true,
      profile: false,
      security: false,
      notifications: false,
      sectionBar: {
        image: require("../assets/img/imgbar2.jpg"),
        sectionName: "Account Settings",
      },
    };
  },
  methods: {
    searchImage(event) {
      console.log(event.target.files[0]);
      this.file = event.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.file);
      reader.onload = (e) => {
        // console.log(e.target.result);
        this.tempUrl = e.target.result;
      };
    },
    goSummary() {
      this.summary = true;
      this.profile = false;
      this.security = false;
      this.notifications = false;
    },
    goProfile() {
      this.summary = false;
      this.profile = true;
      this.security = false;
      this.notifications = false;
    },
    goSecurity() {
      this.summary = false;
      this.profile = false;
      this.security = true;
      this.notifications = false;
    },
    goNotifications() {
      this.summary = false;
      this.profile = false;
      this.security = false;
      this.notifications = true;
    },
  },
};
</script>

<style>
#imagesMenu {
  bottom: 150px;
  margin: 0 auto;
  position: fixed;
}
</style>
