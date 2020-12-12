import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

import {db} from '../firebase'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [],
    task: {item: '', id: ''},
    loadingTasks: false,
    searchtext: '',
    loading: false,
    loadingError: "",
    randomUser: {},
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
    loadFirebase(state, payload){
      state.loading = payload
    },
    setRandomUser(state, payload) {
      state.randomUser = payload;
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

      commit('loadFirebase', true)


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
              commit('loadFirebase', false)
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
      item: task.item
      })
    .then(() => {
  console.log("Tarea editada")

    })
   },
   addTask({commit}, taskName){
     commit('loadFirebase', true);
     db.collection("dashboard-task-list").add({
       item: taskName
     })
     .then(doc => {
       commit('loadFirebase', false);
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

      return new Promise((resolve) => {
        
        const data = axios
        .get("https://randomuser.me/api/")
        .then((resp) => {

            commit("setRandomUser", resp.data.results[0])
          
          
          })
          .catch((e) => {
            console.info(e);
            commit('loadingError', "The answer is taking too long. There may have been an error with the database. Please reload the website.")
          });
      })

    },
    getMultipleUsers({commit}) {

     
      return new Promise((resolve) => {
        
        const data = axios
        .get("https://randomuser.me/api/?results=100")
        .then((resp) => {

          
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
