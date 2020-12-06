<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-sheet height="100%" width="100%" elevation="15" class="pa-5">
      <v-row class="pa-5">
        <v-col>
          <a href="https://www.google.com/intl/es_es/drive/">
            <v-img src="../assets/img/app-drive.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://web.fuze.com/#/auth/login">
            <v-img src="../assets/img/app-fuze.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://www.microsoft.com/es-es/microsoft-365/microsoft-teams/log-in">
            <v-img src="../assets/img/app-mt.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://accounts.omnigroup.com/">
            <v-img src="../assets/img/app-omnifocus.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://c28.qbo.intuit.com/qbo28/login?webredir">
            <v-img src="../assets/img/app-qb.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://slack.com/signin#/signin">
            <v-img src="../assets/img/app-slack.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
      </v-row>
      <v-row class="pa-5">
        <v-col>
          <a href="https://trello.com/login">
            <v-img src="../assets/img/app-trello.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://my.waveapps.com/login/">
            <v-img src="../assets/img/app-wave.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://www.google.com/cloudprint/?hl=es">
            <v-img src="../assets/img/app-cloudprint.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://www.evernote.com/Login.action">
            <v-img src="../assets/img/app-evernote.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://app.timecamp.com/auth/login">
            <v-img src="../assets/img/app-timecamp.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
        <v-col>
          <a href="https://app.timecamp.com/auth/login">
            <v-img src="../assets/img/app-todoist.png" width="100" class="rounded-circle hover-icons"></v-img>
          </a>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

export default {
  name: "Apps",
  components: {
    SectionBar,
  },
  data() {
    return {
      sectionBar: {
        image: require("../assets/img/imgbar3.jpg"),
        sectionName: "Apps",
      },
    };
  },
};
</script>

<style>
.hover-icons:hover {
  transform: scale(1.2);
  transition: 0.3s;
  cursor: pointer;
}
</style>
