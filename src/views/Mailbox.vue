<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-row>
      <v-col id="left-col">
        <v-card class="mx-auto" height="100%" width="100%">
          <v-navigation-drawer
            absolute
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
            width="100%"
            permanent
          >
            <v-list>
              <v-list-item v-for="([icon, text], i) in items" :key="'A' + i" link>
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider></v-divider>
              <h4 class="ml-5 mt-5 font-weight-light">Meetings</h4>

              <v-list-item link>
                <v-list-item-icon><v-icon>mdi-video </v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>New Meet</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-icon><v-icon>mdi-keyboard </v-icon></v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Enjoy a Meet</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>

      <v-col id="right-col">
        <v-sheet height="100%" width="100%" elevation="15" class="py-5" color="primary">
          <v-sheet
            id="scrolling-techniques-3"
            class="overflow-y-auto"
            max-height="100%"
            width="100%"
          >
            <v-container>
              <v-layout id="main-contain">
                <v-row>
                  <v-list-item v-for="(item, i) in items" :key="'B' + i" link>
                    <v-col cols="1">
                      <v-checkbox> </v-checkbox>
                    </v-col>
                    <v-col> From </v-col>
                    <v-col cols="7"> Email subject </v-col>
                  </v-list-item>
                  <v-list-item v-for="(item, i) in items" :key="'C' + i">
                    <v-col cols="1">
                      <v-checkbox> </v-checkbox>
                    </v-col>
                    <v-col> From </v-col>
                    <v-col cols="7"> Email subject </v-col>
                  </v-list-item>
                </v-row>
              </v-layout>
            </v-container>
          </v-sheet>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

export default {
  name: "Mailbox",
  components: {
    SectionBar,
  },
  data() {
    return {
      sectionBar: {
        image: require("../assets/img/imgbar7.jpg"),
        sectionName: "Mailbox",
      },
      items: [
        ["mdi-inbox-arrow-down", "Inbox"],
        ["mdi-star", "Starred"],
        ["mdi-alarm", "Snoozed"],
        ["mdi-send", "Sent"],
        ["mdi-file", "Drafts"],
        ["mdi-delete", "Spam"],
      ],
    };
  },
};
</script>

<style lang="scss">
// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #left-col {
    max-width: 250px !important;
  }

  #right-col {
    max-width: 100%;
  }
  #main-contain {
    bottom: 0px;
    margin: 50px;
  }

  #spacer {
    padding-bottom: 500px;
  }

  #mailboxMenu {
    height: 1000px;
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #left-col {
    max-width: 250px !important;
  }

  #right-col {
    max-width: 100%;
  }
  #main-contain {
    bottom: 0px;
    margin: 50px;
  }

  #spacer {
    padding-bottom: 500px;
  }

  #mailboxMenu {
    height: 1000px;
  }
}
</style>
