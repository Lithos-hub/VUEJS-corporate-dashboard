import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/about',
    name: 'About',

    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/mailbox',
    name: 'Mailbox',

    component: () => import(/* webpackChunkName: "about" */ '../views/Mailbox.vue')
  },
  {
    path: '/team',
    name: 'Team',

    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  },
  {
    path: '/mydocuments',
    name: 'Documents',

    component: () => import(/* webpackChunkName: "about" */ '../views/Documents.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',

    component: () => import(/* webpackChunkName: "about" */ '../views/Statistics.vue')
  },
  {
    path: '/apps',
    name: 'Apps',

    component: () => import(/* webpackChunkName: "about" */ '../views/Apps.vue')
  },
  {
    path: '/tables',
    name: 'Tables',

    component: () => import(/* webpackChunkName: "about" */ '../views/Tables.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',

    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue')
  },
  {
    path: '/account',
    name: 'Account',

    component: () => import(/* webpackChunkName: "about" */ '../views/Account.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',

    component: () => import(/* webpackChunkName: "about" */ '../views/Tasks.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
