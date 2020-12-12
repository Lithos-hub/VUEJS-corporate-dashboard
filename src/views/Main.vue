<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->
    <v-sheet height="100%" width="100%" elevation="15" class="pa-5">
      <h1 id="hello-user">
        Hi {{ randomUser.name.first }}! today is {{ new Date() | moment("dddd Do") }}
      </h1>

      <v-divider></v-divider>

      <v-row>
        <v-col id="left-col">
          <v-card class="mx-auto my-5" width="100%" color="primary" dark>
            <v-card-title>
              <v-icon large left> mdi-pencil </v-icon>
              <span class="title font-weight-light">You have unfinished business!</span>
            </v-card-title>

            <v-row>
              <v-list-item>
                <v-col cols="1">
                  <v-checkbox> </v-checkbox>
                </v-col>
                <v-col> Review the documentation for the April 24th meeting. </v-col>
              </v-list-item>
              <v-list-item>
                <v-col cols="1">
                  <v-checkbox> </v-checkbox>
                </v-col>
                <v-col> Send mail to Kraken IT Solutions and Global Tech. </v-col>
              </v-list-item>
              <v-list-item>
                <v-col cols="1">
                  <v-checkbox> </v-checkbox>
                </v-col>
                <v-col> Call Jane Smith to postpone Friday's interview. </v-col>
              </v-list-item>
            </v-row>
          </v-card>

          <div class="py-5"></div>

          <v-card class="mx-auto" width="100%" color="error" dark id="new-hire">
            <v-card-title>
              <v-icon large left id="hire-star"> mdi-star </v-icon>
              <span class="title font-weight-light"
                >New hire! Say hello to John Doe
              </span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              Hi! I'm John! I love music, videogames... and coding, of course!
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>John Doe</v-list-item-title>
                </v-list-item-content>

                <v-row align="center" justify="end">
                  <v-icon class="mr-1"> mdi-message </v-icon>
                </v-row>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>

        <!-- RIGHT CALENDAR ******************************** -->

        <v-col id="right-col">
          <v-sheet width="100%" height="100%" elevation="15" class="pa-5">
            <v-row class="fill-height">
              <v-col>
                <v-sheet
                  height="64"
                  width="100%"
                  color="teal"
                  class="text-center pa-5 mb-5"
                  dark
                  rounded
                >
                  <v-toolbar-title v-if="$refs.calendar">
                    {{ new Date() | moment("MMMM YYYY") }}
                  </v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-sheet>

                <v-sheet height="600">
                  <v-calendar
                    ref="calendar"
                    v-model="focus"
                    color="primary"
                    :events="events"
                    :event-color="getEventColor"
                    :weekdays="weekday"
                    :type="type"
                    @change="updateRange"
                  ></v-calendar>
                </v-sheet>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

import * as moment from "moment/moment";

import { mapActions, mapState } from "vuex";

export default {
  name: "Main",
  components: {
    SectionBar,
  },
  data() {
    return {
      focus: "",
      type: "month",
      weekday: [1, 2, 3, 4, 5, 6, 0],
      events: [],
      colors: ["blue", "orange", "green", "red"],
      names: ["Meeting", "Event", "Birthday", "Conference"],
      sectionBar: {
        image: require("../assets/img/imgbar8.jpg"),
        sectionName: "Main site",
      },
    };
  },
  computed: {
    ...mapState(["loading", "randomUser", "loadingError"]),
  },
  methods: {
    ...mapActions(["getRandomUser"]),

    //  CALENDAR METHODS

    getEventColor(event) {
      return event.color;
    },
    setToday() {
      this.focus = "";
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
    updateRange({ start, end }) {
      const events = [];

      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);

      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);

        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          color: this.colors[this.rnd(0, this.colors.length - 1)],
          timed: !allDay,
        });
      }

      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
  },
  async created() {
    try {
      await this.$store.dispatch("getRandomUser");
    } catch (error) {
      console.error(error);
    }
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

// ******* MOBILE RESPONSIVE ******* //
@media only screen and (min-width: 360px) {
}
// ******* LAPTOP RESPONSIVE ******* //
@media only screen and (min-width: 767px) {
  #left-col {
    width: 100%;
  }
  #right-col {
    max-width: 800px;
  }
  #new-hire {
    position: relative;
    top: 0px;
  }

  #hello-user {
    font-family: $style3;
    color: rgb(51, 144, 214);
    margin-bottom: 0px;
  }

  #hire-star {
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

// ******* DESKTOP RESPONSIVE ******* //
@media only screen and (min-width: 1370px) {
  #left-col {
    width: 100%;
  }
  #right-col {
    max-width: 600px;
  }
  #new-hire {
    position: relative;
    top: 140px;
  }

  #hello-user {
    font-family: $style3;
    color: rgb(51, 144, 214);
    margin-bottom: 20px;
  }

  #hire-star {
    animation: spin 4s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
