<template>
  <div>
    <!-- // SUPERIOR NAVBAR // -->

    <v-app-bar app dark src="../assets/img/navbar.jpg" id="navbar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="d-flex align-center">
        <v-toolbar-title>iDash</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <div class="lead">{{ randomUser.name.first }} {{ randomUser.name.last }}</div>

      <v-spacer></v-spacer>

      <span id="clock" class="mr-5 cyan--text">{{
        new Date() | moment("D/M/YYYY")
      }}</span>
      <span id="clock" class="mr-5 white--text">{{ this.now.format("HH:mm:ss") }}</span>

      <!-- // NOTIFICATIONS DIALOG // -->

      <div class="text-center">
        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed color="dark" class="mr-5" v-bind="attrs" v-on="on">
              <v-badge dot overlap color="red">
                <v-icon>mdi-bell</v-icon>
              </v-badge>
            </v-btn>
          </template>

          <v-subheader class="white--text primary font-weight-bold"
            >Notifications</v-subheader
          >

          <v-list three-line>
            <template v-for="(item, index) in itemsDialog">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-bottom-sheet>
      </div>

      <!-- // END NOTIFICATION DIALOG // -->

      <v-btn color="dark" to="/" class="mr-5">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn outlined depressed color="green" to="/about" text class="mr-5">
        <span class="mr-2">About</span>
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
      <v-btn outlined depressed color="error" target="_blank" text>
        <span class="mr-2">Sign Out</span>
        <v-icon>mdi-account-cancel</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- // END SUPERIOR NAVBAR // -->

    <v-navigation-drawer v-model="drawer" dark src="../assets/img/sidebar.jpg" app>
      <v-layout column align-center class="mt-5">
        <v-flex>
          <v-avatar height="100px" width="100px" id="avatar">
            <img :src="randomUser.picture.medium" />
          </v-avatar>
        </v-flex>

        <v-flex>
          <h3 class="cyan--text mt-5 text-center" id="user-nick">
            @{{ randomUser.name.first }}_{{ randomUser.name.last }}
          </h3>
          <v-list-item to="/account" active-class="cyan--text">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-flex>
      </v-layout>

      <!-- SIDE MENU -->
      <v-list-item
        v-for="(item, index) in itemsMenu"
        :key="index"
        link
        :to="item.to"
        active-class="white--text"
      >
        <v-list-item-icon>
          <v-icon id="side-icon">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title id="side-text">{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- VERSION -->

      <div id="version-count">
        <v-divider></v-divider>
        <p class="pt-5 ml-5 white--text mx-auto">
          Version: {{ major }}.{{ minor }}.{{patch}}
          <a
            href="https://github.com/Lithos-hub/VUEJS-corporate-dashboard"
            style="text-decoration: none"
          >
            <v-btn icon class="mr-5 mb-3 m-auto float-right">
              <v-icon>mdi-github</v-icon>
            </v-btn>
          </a>
        </p>
        <router-link to="/changelog" style="text-decoration: none;">
        <v-btn width="100%" tile color="red darken-2">Changelog</v-btn>
        </router-link>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import * as moment from "moment/moment";

import { mapActions, mapState } from "vuex";

export default {
  name: "Navbar",

  data() {
    return {
      major: 1,
      minor: 1,
      patch: 2,
      now: moment(),
      sheet: false,
      tiles: [
        {
          img: "userPicture",
          title: "Notification 1",
        },
      ],
      drawer: true,
      itemsMenu: [
        {
          icon: "mdi-email",
          text: "Mailbox",
          to: {
            name: "Mailbox",
          },
        },
        {
          icon: "mdi-account-supervisor-circle",
          text: "Team",
          to: {
            name: "Team",
          },
        },
        {
          icon: "mdi-folder",
          text: "My documents",
          to: {
            name: "Documents",
          },
        },
        {
          icon: "mdi-chart-bar",
          text: "Statistics",
          to: {
            name: "Statistics",
          },
        },
        {
          icon: "mdi-apps",
          text: "Apps",
          to: {
            name: "Apps",
          },
        },
        {
          icon: "mdi-grid",
          text: "Tables",
          to: {
            name: "Tables",
          },
        },
        {
          icon: "mdi-calendar",
          text: "Calendar",
          to: {
            name: "Calendar",
          },
        },
        {
          icon: "mdi-pencil",
          text: "Tasks",
          to: {
            name: "Tasks",
          },
        },
      ],
      itemsDialog: [
        { header: "Today" },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "I need the report for today's meeting.",
          subtitle: `<span class="text--primary">Dani Martínez</span> &mdash; Technical Leader`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Could we have the interview tomorrow at 9:00?",
          subtitle: `<span class="text--primary">Raúl Navas</span> &mdash; Candidate`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "The services are again operational. Check your inbox!",
          subtitle:
            '<span class="text--primary">Sandra Alonso</span> &mdash; DevOps Engineer',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title:
            "Julián says that we could go to the event at the IFEMA on Friday afternoon. Does that sound good?",
          subtitle:
            '<span class="text--primary">Sara Martín</span> &mdash; Front-end developer',
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title:
            "Please send me the GitHub projects as soon as you can, I need to check a few things.",
          subtitle:
            '<span class="text--primary">Marina García</span> &mdash; Front-end developer',
        },
      ],
    };
  },
  computed: {
    ...mapState(["loading", "randomUser"]),
  },
  methods: {
    ...mapActions(["getRandomUser"]),
  },
  mounted() {
    setInterval(() => {
      this.now = moment();
    }, 1000);
  },
  async created() {
    try {
      await this.$store.dispatch("getRandomUser");
      console.log("NAVBAR");
      console.log(randomUser);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: transparent;
}

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #avatar {
    width: 90% !important;
    height: 90% !important;
  }

  #user-nick {
    font-size: 15px;
  }

  #version-count {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    font-weight: 100;
  }
  #side-icon {
    font-size: 15px;
  }
  #side-text {
    font-size: 12px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #avatar {
    width: 120% !important;
    height: 120% !important;
  }

  #user-nick {
    font-size: 20px;
  }
  #version-count {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    font-weight: 100;
  }
  #side-icon {
    font-size: 20px;
  }
  #side-text {
    font-size: 20px;
  }
}
</style>
