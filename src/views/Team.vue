<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <!-- ************************** LEFT SIDEBAR ************************** -->
    <v-row>
      <v-col id="left-col">
        <v-card class="mx-auto" height="100%" width="300">
          <v-navigation-drawer absolute color="blue" dark width="100%" permanent>
            <v-list>
              <v-list-item v-for="([icon, text], i) in items" :key="i" link>
                <v-list-item-icon>
                  <v-icon>{{ icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title>{{ text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <h4 class="ml-5 mt-5 font-weight-light">Teams menu</h4>

              <v-expansion-panels class="mt-5">
                <v-expansion-panel class="red">
                  <v-list-item link>
                    <v-expansion-panel-header expand-icon="">
                      <v-list-item-icon><v-icon>mdi-magnify </v-icon></v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Search</v-list-item-title>
                      </v-list-item-content>
                    </v-expansion-panel-header>
                  </v-list-item>
                  <v-expansion-panel-content>
                    <v-list-item-title>
                      <form @submit.prevent="searchBar(searchinput)">
                        <v-text-field
                          type="text"
                          placeholder="Search an user"
                          class="white--text"
                          v-model="searchinput"
                          v-on:keyup="searchBar(searchinput)"
                        ></v-text-field>
                      </form>
                    </v-list-item-title>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>

              <v-expansion-panels>
                <v-expansion-panel class="green">
                  <v-list-item link>
                    <v-expansion-panel-header expand-icon="">
                      <v-list-item-icon><v-icon>mdi-filter </v-icon></v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>Filter</v-list-item-title>
                      </v-list-item-content>
                    </v-expansion-panel-header>
                  </v-list-item>

                  <v-expansion-panel-content>
                    <v-list-item-title>
                      <v-container>
                        <v-col class="d-flex" cols="12">
                          <v-select :items="selectItems"></v-select>
                        </v-col>
                      </v-container>
                    </v-list-item-title>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>
      <!-- ************************** EMPLOYEES LIST ************************** -->
      <v-col id="right-col">
        <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="1000">
          <v-row>
            <v-row justify="center">
              <v-list-item
                v-for="(item, i) in teamUsers"
                :key="i"
                link
                id="teamList"
                @click="showEmployeeInfo(item)"
              >
                <v-list-item-content>
                  <v-avatar height="80px" width="80px">
                    <img :src="item.img" />
                  </v-avatar>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">{{
                    item.position
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-row>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- ************************** DIALOG ************************** -->
    <div v-for="(item, i) in teamUsers" :key="i">
      <v-dialog
        v-model="dialog"
        persistent
        max-width="500px"
        max-height="800"
        v-if="dialog"
      >
        <v-card>
          <v-card-title>
            <span class="headline">{{ employeeName }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-sheet height="100%" width="100%" elevation="10" class="pa-5">
                <v-row>
                  <h2 class="blue--text text-center my-5">Company information:</h2>
                  <v-list>
                    <v-list-item>Employee ID: {{ employeeID }} </v-list-item>
                    <v-list-item>Position: {{ employeePosition }} </v-list-item>
                    <v-list-item>City: {{ employeeCity }}</v-list-item>
                    <v-list-item>Country: {{ employeeCountry }} </v-list-item>
                    <v-list-item>Corporate email: {{ employeeMail }} </v-list-item>
                    <v-list-item-icon link>
                      <v-icon color="green" id="mail-user-dialog">mdi-message</v-icon>
                      <v-list-item-content class="ml-5"
                        >Send a message</v-list-item-content
                      >
                    </v-list-item-icon>
                  </v-list>
                </v-row>
              </v-sheet>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
    <!-- END DIALOG-->
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SectionBar from "../components/SectionBar";

export default {
  name: "Team",
  components: {
    SectionBar,
  },
  data() {
    return {
      employeeName: "",
      employeeID: "",
      employeePosition: "",
      employeeCity: "",
      employeeCountry: "",
      employeeMail: "",
      dialog: false,
      selectItems: [
        "Names asc.",
        "Names desc.",
        "Men",
        "Women",
        "Position asc.",
        "Posicion desc.",
      ],
      sectionBar: {
        image: require("../assets/img/imgbar11.jpg"),
        sectionName: "Team",
      },
      teamUsers: [
        {
          img: "https://randomuser.me/api/portraits/men/53.jpg",
          name: "Francesco Cullen",
          position: "Front-end Engineer",
          id: "324262",
          country: "UK",
          city: "Manchester",
          mail: "francesco@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/men/38.jpg",
          name: "Jaeden Crowther",
          position: "Full-stack Developer",
          id: "2456",
          country: "India",
          city: "Mumbai",
          mail: "jaeden@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/men/37.jpg",
          name: "Marvin Warner",
          position: "QA Engineer",
          id: "2458824",
          country: "France",
          city: "Paris",
          mail: "marvin@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/35.jpg",
          name: "Cai Wall",
          position: "DevOps Engineer",
          id: "6245886",
          country: "UK",
          city: "Liverpool",
          mail: "cai@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/34.jpg",
          name: "Jade Hess",
          position: "Researcher",
          id: "24578567",
          country: "Spain",
          city: "Madrid",
          mail: "jade@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/33.jpg",
          name: "Kornelia Melia",
          position: "Technical lead",
          id: "3578245",
          country: "Spain",
          city: "Barcelona",
          mail: "kornelia@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/men/35.jpg",
          name: "Jolyon Vang",
          position: "Scrum Master",
          id: "2458754",
          country: "Japan",
          city: "Tokyo",
          mail: "jolyon@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/men/34.jpg",
          name: "Jay Richardson",
          position: "Product Owner",
          id: "24587741",
          country: "United States",
          city: "New York",
          mail: "jay@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/men/33.jpg",
          name: "Oskar Bassett",
          position: "Proyect Sales",
          id: "1345575",
          country: "Germany",
          city: "Berlin",
          mail: "oskar@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/33.jpg",
          name: "Elaine Kent",
          position: "HR Manager",
          id: "1345",
          country: "Poland",
          city: "Varsovia",
          mail: "elaine@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/32.jpg",
          name: "Kymani Esquivel",
          position: "Marketing Specialist",
          id: "4534497652",
          country: "Norway",
          city: "Oslo",
          mail: "kymani@example.com",
        },
        {
          img: "https://randomuser.me/api/portraits/women/31.jpg",
          name: "Vera Parker",
          position: "Director",
          id: "4642562457",
          country: "UK",
          city: "London",
          mail: "vera.parker@example.com",
        },
      ],
    };
  },
  methods: {
    showEmployeeInfo(item) {
      this.dialog = true;
      this.employeeName = item.name;
      this.employeeID = item.id;
      this.employeePosition = item.position;
      this.employeeCity = item.city;
      this.employeeCountry = item.country;
      this.employeeMail = item.mail;
    },
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

  #teamList {
    margin-left: 0px;
  }

  #teamListFiltered {
    margin-left: 0px;
  }

  #teamList:hover {
    background-color: #307ea52f !important;
  }

  #teamListFiltered:hover {
    background-color: #307ea52f !important;
  }

  #mail-user-dialog:hover {
    cursor: pointer;
    transform: scale(1.2);
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
  #teamList {
    margin-left: -150px;
  }

  #teamListFiltered {
    margin-left: -150px;
  }

  #teamList:hover {
    background-color: #307ea52f !important;
  }

  #teamListFiltered:hover {
    background-color: #307ea52f !important;
  }

  #mail-user-dialog:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
}
</style>
