// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import * as VueGoogleMaps from 'vue2-google-maps';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

import SignUp from './components/SignUp'
import Login from './components/Login'
import LandingPage from './components/LandingPage'
import SideNav from './components/SideNav'
import Maps from './components/Maps'
import Events from './components/Events'
import Account from './components/Account'
import Security from './components/Security'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAgkQY1TAWu78i1C2z22mws5zM0Dv8NHPc',
      v: '2.8.1',
      // libraries: 'places', //// If you need to use place input
    }
  });

const routes = [
  { path: '/', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/home', component: Events },
  { path: '/Maps', component: Maps },
  { path: '/Events', component: Events },
  { path: '/Account', component: Account },
  { path: '/Security', component: Security }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes
})

Vue.component('app-sidenav', SideNav)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app'
})
