import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

import {db} from '../firebase'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {item: '', id: ''},
    loadingTasks: false,
    searchtext: '',
    loadingFirebase: false,
    loadingUserData: false,
    loadingError: "",
    randomUser: {},
    randomUserAlt: {},
    multipleUsers: {},
    teamUsers: {image: '', name: '', position: ''},
  },
  mutations: {
    setTasks(state, payload){
      state.tasks = payload;
    },
    setTask(state, payload){
      state.task = payload;
    },
    setRemoveTask(state, payload){
      const filteredTasks = state.tasks.filter(item => item.id !== payload)
      state.tasks = filteredTasks
    },
    loadingFirebase(state, payload){
      state.loadingFirebase = payload
    },
    loadingUserData(state, payload){
      state.loadingUserData = payload
    },
    setRandomUser(state, payload) {
      state.randomUser = payload;
    },
    setALTRandomUser(state, payload) {
      state.randomUserAlt = payload;
    },
    setMultipleUsers(state, payload) {
      state.multipleUsers = payload;
    },
    loadingError(state, payload) {
      state.loadingError = payload
    }
  },
  actions: {
    searchBar({commit, state}, payload){

      console.log(payload)
      state.searchtext = payload.toLowerCase();
    },
    getTasks({commit}){

      commit('loadingFirebase', true)


        const tasks = [];

        db.collection('dashboard-task-list').get()
          .then(resp => {
          resp.forEach(doc => {
            console.log(doc.id)
            console.log(doc.data())
            let task = doc.data()
            task.id = doc.id
            tasks.push(task)

            setTimeout(() => {
              commit('loadingFirebase', false)
            },)
          })
          commit('setTasks', tasks);
        })
    },
    getTask({commit}, idTask){
      db.collection('dashboard-task-list').doc(idTask).get()
        .then(doc => {
        console.log(doc.id),
        console.log(doc.data())
        let task = doc.data()
        task.id = doc.id
        commit('setTask', task)
      })
  },
  editTask({commit}, task){
  db.collection('dashboard-task-list').doc(task.id).update({
      item: taskName
      })
    .then(() => {
  console.log("Tarea editada");
    })
   },
   addTask({commit}, taskName){
     commit('loadingFirebase', true);
     db.collection("dashboard-task-list").add({
       item: taskName
     })
     .then(doc => {
       commit('loadingFirebase', false);
       dispatch('getTasks')
     })
   },
   removeTask({commit, dispatch}, taskId){
     db.collection('dashboard-task-list').doc(taskId).delete()
     .then( () => {
       console.log("tarea eliminada")
       dispatch('getTasks')
       commit('setRemoveTask', taskId)
     })
   },
    getRandomUser({commit}) {
        commit('loadingUserData', true);

        axios
        .get("https://randomuser.me/api/")
        .then((resp) => {
          commit('loadingUserData', false);
            commit("setRandomUser", resp.data.results[0])
          })
          .catch((e) => {
            const altrandom =  { "results": [
              {
                "gender": "male",
                "name": {
                  "title": "Monsieur",
                  "first": "Silas",
                  "last": "Berger"
                },
                "location": {
                  "street": {
                    "number": 9364,
                    "name": "Rue Dubois"
                  },
                  "city": "Davos",
                  "state": "Neuchâtel",
                  "country": "Switzerland",
                  "postcode": 3694,
                  "coordinates": {
                    "latitude": "-55.8853",
                    "longitude": "-112.9939"
                  },
                  "timezone": {
                    "offset": "+11:00",
                    "description": "Magadan, Solomon Islands, New Caledonia"
                  }
                },
                "email": "silas.berger@example.com",
                "login": {
                  "uuid": "e0fed378-ef1a-48e2-9887-03df470df056",
                  "username": "orangekoala126",
                  "password": "little",
                  "salt": "69hNF5h2",
                  "md5": "4a1fe1e6b4af1e11f32e991cfd4a4999",
                  "sha1": "992c2fdac4b9929a05cc095b59c5922fbca94018",
                  "sha256": "2f13c4f50e32c4dd567068caa136fd96da643547925d85a49986050d81585f32"
                },
                "dob": {
                  "date": "1955-05-15T18:37:01.684Z",
                  "age": 66
                },
                "registered": {
                  "date": "2017-05-02T00:03:39.158Z",
                  "age": 4
                },
                "phone": "077 089 03 36",
                "cell": "075 187 27 59",
                "id": {
                  "name": "AVS",
                  "value": "756.1344.5069.73"
                },
                "picture": {
                  "large": "https://randomuser.me/api/portraits/men/96.jpg",
                  "medium": "https://randomuser.me/api/portraits/med/men/96.jpg",
                  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/96.jpg"
                },
                "nat": "CH"
              }
            ],
            "info": {
              "seed": "55ff35494748806c",
              "results": 1,
              "page": 1,
              "version": "1.3"
            }
          }
            commit("setRandomUser", altrandom.results[0])
            
            console.info(e);
            // commit('loadingError', "The answer is taking too long. There may have been an error with the database. Please reload the website.")
          });
      

    },
    getMultipleUsers({commit}) {

     
      return new Promise((resolve) => {
        commit('loadingUserData', true);
        const data = axios
        .get("https://randomuser.me/api/?results=100")
        .then((resp) => {
          commit('loadingUserData', false);
          
            commit("setMultipleUsers", resp.data.results)
            console.log("From vuex")
            console.log(resp.data.results)
            resolve();
          
          
          })
          .catch((e) => {
            console.info(e);
           
          });
      })



    }
  },
  getters:{
    filteredArray(state){
      let filteredArray = [];
      for(let taskname of state.tasks){
        let name = taskname.item.toLowerCase();
        if(name.indexOf(state.searchtext) >= 0) {
          filteredArray.push(taskname)
        }
      }

      return filteredArray;;

    },
  },
  modules: {
  }
})
