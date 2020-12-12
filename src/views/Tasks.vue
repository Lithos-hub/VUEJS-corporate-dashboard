<template>
  <div>
    <!-- Section Bar -->
    <SectionBar :image="sectionBar.image" :sectionName="sectionBar.sectionName" />
    <!----------------- -->

    <v-sheet
      height="100%"
      width="100%"
      elevation="15"
      class="pa-5 blue darken-4"
      dark
      rounded=""
    >
      <!-- ADD TASK DIALOG -->
      <v-dialog v-model="addDialog" width="800" class="pa-5">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="white rounded pa-3 black--text" v-bind="attrs" v-on="on"
            >Add a new task</v-btn
          >
        </template>

        <v-card>
          <v-card-title class="headline white black--text"> Add a new task </v-card-title>

          <v-form @submit.prevent="addTask(item)">
            <div class="form-group pa-5">
              <v-text-field
                v-model="$v.item.$model"
                placeholder="Write your task"
              ></v-text-field>
              <small class="red--text" v-if="!$v.item.required">Required field</small>
              <small class="red--text d-block" v-if="!$v.item.minLength"
                >This must be 5 characters at least</small
              >
            </div>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                class="mt-5 white--text"
                color="black"
                type="submit"
                @click="addDialog = !addDialog"
                >Add task</v-btn
              >
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>

      <!-- END ADD DIALOG -->

      <!-- SEARCH BAR SYSTEM -->

      <form @submit.prevent="searchBar(searchinput)">
        <input
          type="text"
          placeholder="Search tasks"
          class="form-control border-info mt-5"
          v-model="searchinput"
          id="searchbar"
          v-on:keyup="searchBar(searchinput)"
        />
      </form>

      <!-- EEND SEARCH BAR SYSTEM -->

      <h2 class="display-1 text-center my-5">Task list</h2>
      <v-divider></v-divider>

      <!-- LOADER SPINNER -->

      <div class="container text-center mt-5" v-if="loading">
        <h4 class="display-1 error white--text rounded pa-5">
          Loading data...
          <dot-loader :loading="loading"></dot-loader>
        </h4>
      </div>

      <!-- END LOADER SPINNER -->

      <v-list rounded class="transparent">
        <div v-if="!loading">
          <v-list-item id="taskList" v-for="item of filteredArray" :key="item.id">
            <v-list-item-content>
              <v-list-item-title id="task-title">
                {{ item.item }}
              </v-list-item-title>

              <small class="font-weight-thin pa-5">Task ID: {{ item.id }}</small>
            </v-list-item-content>

            <!-- <router-link :to="{ name: 'Edit', params: { id: item.id } }">
            <v-btn large class="green rounded mr-5">Edit</v-btn>
          </router-link> -->

            <!-- EDIT DIALOG -->
            <v-dialog v-model="editdialog" max-width="800">
              <v-card>
                <v-card-title class="headline orange white--text"
                  >Edit task
                </v-card-title>
                <div class="row pa-5">
                  <div class="col">
                    <h3 class="text-white">Task Name:</h3>
                    <p class="lead">{{ task.item }}</p>
                  </div>
                  <div class="col">
                    <h3 class="text-white">Task ID:</h3>
                    <p class="lead">{{ task.id }}</p>
                  </div>
                </div>

                <v-form @submit.prevent="editTask(task)">
                  <div class="pa-5">
                    <v-text-field
                      v-model="$v.task.item.$model"
                      placeholder="Edit your task"
                    ></v-text-field>
                    <small class="red--text" v-if="!$v.item.required"
                      >Required field</small
                    >
                    <small class="red--text d-block" v-if="!$v.item.minLength"
                      >This must be 5 characters at least</small
                    >
                  </div>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      class="orange white--text"
                      type="submit"
                      id="saveBtn"
                      :disabled="$v.task.$invalid"
                      @click="editdialog = false"
                      >Save changes</v-btn
                    >
                  </v-card-actions>
                </v-form>
              </v-card>
              <template v-slot:activator="{ on, attrs }">
                <v-btn large class="orange rounded mr-5" v-bind="attrs" v-on="on"
                  >Edit</v-btn
                >
              </template>

              <!-- END EDIT DIALOG -->
            </v-dialog>

            <v-btn large class="error rounded" @click="removeTask(item.id)">Remove</v-btn>
          </v-list-item>
        </div>
      </v-list>
    </v-sheet>
  </div>
</template>

<script>
import SectionBar from "../components/SectionBar";

import { mapActions, mapState, mapGetters } from "vuex";

import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Tasks",
  components: {
    SectionBar,
  },
  data() {
    return {
      addDialog: false,
      editdialog: false,
      item: "",
      searchinput: "",
      sectionBar: {
        image: require("../assets/img/imgbar10.jpg"),
        sectionName: "Tasks",
      },
    };
  },
  methods: {
    ...mapActions([
      "getTasks",
      "removeTask",
      "searchBar",
      "addTask",
      "getTask",
      "editTask",
    ]),
  },
  validations: {
    task: {
      item: {
        required,
      },
    },
    item: {
      required,
      minLength: minLength(6),
    },
  },
  computed: {
    ...mapState(["tasks", "loading", "task", "addDialog"]),
    ...mapGetters(["filteredArray"]),
  },
  created() {
    this.getTasks();
    this.getTask(this.id);
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#taskList {
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.467);
  border-radius: 10px;
  padding-top: 10px;
}

#task-title {
  font-size: 25px;
  padding: 10px;
  letter-spacing: 2px;
  font-family: $style3;
}

.btn-success {
  text-transform: uppercase;
  font-size: 20px;
  margin-left: 10px;
  border-color: transparent !important;
  border-radius: 90px;
}

.btn-warning {
  padding: 10px;
  border-radius: 15px;
  float: right;
}

.btn-danger {
  padding: 10px;
  align-items: right;
  border-radius: 15px;
  margin-right: 20px;
  float: right;
}

#searchbar {
  background-color: transparent;
  border: 2px solid white;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  color: aqua;
  font-size: 25px;
}

#searchbar:focus {
  outline: none;
}
</style>
