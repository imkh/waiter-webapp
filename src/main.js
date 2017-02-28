// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import SignUp from './components/SignUp'
import Login from './components/Login'
import LandingPage from './components/LandingPage'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/home', component: LandingPage }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app'
})
