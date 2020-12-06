<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-sheet height="100%" width="100%" elevation="15" class="pa-5">
      <v-container fluid>
        <v-data-iterator :items="items" :items-per-page.sync="itemsPerPage" :page="page" :search="search" :sort-by="sortBy.toLowerCase()" :sort-desc="sortDesc" hide-default-footer>
          <template v-slot:header>
            <v-toolbar dark color="blue darken-3" class="mb-1">
              <v-text-field v-model="search" clearable flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search"></v-text-field>
              <template v-if="$vuetify.breakpoint.mdAndUp">
                <v-spacer></v-spacer>
                <v-select v-model="sortBy" flat solo-inverted hide-details :items="keys" prepend-inner-icon="mdi-magnify" label="Sort by"></v-select>
                <v-spacer></v-spacer>
                <v-btn-toggle v-model="sortDesc" mandatory>
                  <v-btn large depressed color="blue" :value="false">
                    <v-icon>mdi-arrow-up</v-icon>
                  </v-btn>
                  <v-btn large depressed color="blue" :value="true">
                    <v-icon>mdi-arrow-down</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </template>
            </v-toolbar>
          </template>

          <template v-slot:default="props">
            <v-row>
              <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
                <v-card>
                  <v-card-title class="subheading font-weight-bold">
                    {{ item.name }}
                  </v-card-title>

                  <v-divider></v-divider>

                  <v-list>
                    <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                      <v-list-item-content :class="{ 'blue--text': sortBy === key }"> {{ key }}: </v-list-item-content>
                      <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">
                        {{ item[key.toLowerCase()] }}
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </template>

          <template v-slot:footer>
            <v-row class="mt-2" align="center" justify="center">
              <span class="grey--text">Items per page</span>
              <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn dark text color="primary" class="ml-2" v-bind="attrs" v-on="on">
                    {{ itemsPerPage }}
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" @click="updateItemsPerPage(number)">
                    <v-list-item-title>{{ number }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-spacer></v-spacer>

              <span class="mr-4 grey--text"> Page {{ page }} of {{ numberOfPages }} </span>
              <v-btn fab dark color="blue darken-3" class="mr-1" @click="formerPage">
                <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-row>
          </template>
        </v-data-iterator>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

export default {
  name: "Statistics",
  components: {
    SectionBar,
  },
  data() {
    return {
      sectionBar: {
        image: require("../assets/img/imgbar5.jpg"),
        sectionName: "Statistics",
      },
      itemsPerPageArray: [4, 8, 12],
      search: "",
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 4,
      sortBy: "name",
      keys: ["Name", "Position", "Salary", "Achieves", "Project"],
      items: [
        {
          name: "Francesco Cullen",
          position: "Front-end Engineer",
          salary: 42043,
          achieves: 12,
          project: "AI Natural Language Processing",
          teamleader: "Kornelia Melia",
          entrydate: "27/07/2012",
        },
        {
          name: "Jay Richardson",
          position: "Product Owner",
          salary: 22340,
          achieves: 7,
          project: "The Ninja Proyect",
          teamleader: "Sarah Mayer",
          entrydate: "12/01/2019",
        },
        {
          name: "Kornelia Melia",
          position: "Technical Lead",
          salary: 32043,
          achieves: 23,
          project: "AI Natural Language Processing",
          teamleader: "Vera Parker",
          entrydate: "05/09/2014",
        },
        {
          name: "Oskar Bassett",
          position: "Proyect Sales",
          salary: 32024,
          achieves: 41,
          project: "Europe sales",
          teamleader: "Tim Fung",
          entrydate: "02/03/2003",
        },
        {
          name: "Marvin Warner",
          position: "QA Engineer",
          salary: 24593,
          achieves: 16,
          project: "Testing AI",
          teamleader: "Kornelia Melia",
          entrydate: "19/12/2018",
        },
        {
          name: "Cai Wall",
          position: "DevOps Engineer",
          salary: 43393,
          achieves: 23,
          project: "Cloud App #1",
          teamleader: "Jay Richardson",
          entrydate: "13/03/2014",
        },
        {
          name: "Jaeden Crowther",
          position: "Full-stack Developer",
          salary: 31035,
          achieves: 53,
          project: "Desktop App #5",
          teamleader: "Kornelia Melia",
          entrydate: "21/05/2013",
        },
        {
          name: "Elaine Kent",
          position: "HR Manager",
          salary: 52542,
          achieves: 87,
          project: "Europe HR Managment",
          teamleader: "Vera Parker",
          entrydate: "07/09/2009",
        },
        {
          name: "Jolyon Vang",
          position: "Scrum Master",
          salary: 29340,
          achieves: 51,
          project: "Desktop App #1",
          teamleader: "Vera Parker",
          entrydate: "22/08/2016",
        },
        {
          name: "Jade Hess",
          position: "Researcher",
          salary: 22048,
          achieves: 65,
          project: "AI Natural Language Processing",
          teamleader: "Jaeden Crowther",
          entrydate: "12/01/2020",
        },
      ],
    };
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== "Name");
    },
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number;
    },
  },
};
</script>

<style></style>
