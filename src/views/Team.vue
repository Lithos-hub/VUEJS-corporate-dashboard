<template>
<div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->


     <v-row>
      <v-col cols="2">
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
        <v-text-field type="text" placeholder="Search an user" class="white--text" v-model="searchinput" v-on:keyup="searchBar(searchinput)"></v-text-field>
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
        <v-col
        class="d-flex"
        cols="12"
      >
        <v-select :items="selectItems"></v-select>
      </v-col>
         
         </v-container>
          
          </v-list-item-title>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

  
              </v-list>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-col>

      <v-col cols="10">
        <v-sheet id="scrolling-techniques-3" class="overflow-y-auto" max-height="1000">
     
             <v-row>

<!-- DIALOG -->
   <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      max-height="800">
      <template v-slot:activator="{ on, attrs }">


                <v-list-item v-for="([userImage, userName, userPosition], i) in teamUsers" :key="i" link id="teamList" v-bind="attrs"
          v-on="on">
                <v-list-item-content>
                       <v-avatar height="80px" width="80px">
                <img :src="userImage" />
                 </v-avatar>
               
                </v-list-item-content>

                <v-list-item-content>
                  <v-list-item-title>{{userName}}</v-list-item-title>
                </v-list-item-content>
             
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold">{{userPosition}}</v-list-item-title>
                </v-list-item-content>

                </v-list-item>


             
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">USER NAME</span>
        </v-card-title>
        <v-card-text>
          <v-container>


            <v-sheet height="100%" width="100%" elevation="10" class="pa-5">
          <v-row>
    

              <h2 class="blue--text text-center my-5">Company information:</h2>
              <v-list>
              
                <v-list-item>Employee ID: USER ID </v-list-item>
                <v-list-item>Position: USER POSITION </v-list-item>
                <v-list-item>City: USER CITY</v-list-item>
                <v-list-item>Country: USER COUNTRY </v-list-item>
                <v-list-item>Corporate email: USER EMAIL </v-list-item>
                <v-list-item-icon link>
                <v-icon color="green" id="mail-user-dialog">mdi-message</v-icon>
                <v-list-item-content class="ml-5">Send a message</v-list-item-content>

                </v-list-item-icon>
              </v-list>
        
          </v-row>
        </v-sheet>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</v-row>
<!-- END DIALOG-->


                
        </v-sheet>
      </v-col>
    </v-row>

</div>
</template>

<script>
import { mapActions } from 'vuex'
import SectionBar from '../components/SectionBar'

export default {
    name: "Team",
    components: {
        SectionBar
    },
    data() {
        return {
          selectItems: ["Names asc.", "Names desc.", "Men", "Women", "Position asc.", "Posicion desc."],
            dialog: false,
            sectionBar: {
                image: require('../assets/img/imgbar11.jpg'),
                sectionName: 'Team'
            },
            teamUsers: [
                ["https://randomuser.me/api/portraits/men/53.jpg", "Francesco Cullen", "Front-end Engineer"],
                ["https://randomuser.me/api/portraits/men/38.jpg", "Jaeden Crowther", "Full-stack Developer"],
                ["https://randomuser.me/api/portraits/men/37.jpg", "Marvin Warner", "QA Engineer"],
                ["https://randomuser.me/api/portraits/women/35.jpg", "Cai Wall", "DevOps Engineer"],
                ["https://randomuser.me/api/portraits/women/34.jpg", "Jade Hess", "Researcher"],
                ["https://randomuser.me/api/portraits/women/33.jpg", "Kornelia Melia", "Technical lead"],
                ["https://randomuser.me/api/portraits/men/35.jpg", "Jolyon Vang", "Scrum Master"],
                ["https://randomuser.me/api/portraits/men/34.jpg", "Jay Richardson", "Product Owner"],
                ["https://randomuser.me/api/portraits/men/33.jpg", "Oskar Bassett", "Proyect Sales"],
                ["https://randomuser.me/api/portraits/women/33.jpg", "Elaine Kent", "HR Manager"],
                ["https://randomuser.me/api/portraits/women/32.jpg", "Kymani Esquivel", "Marketing Specialist"],
                ["https://randomuser.me/api/portraits/women/31.jpg", "Vera Parker", "Director"],
            ]
        }
    },
}
</script>

<style>

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

</style>
