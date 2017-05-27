<template>
  <div>
    <md-toolbar>
      <md-button class="md-icon-button" @click="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">Waiter</h2>

      <!-- <md-input-container md-inline>
        <label>Search</label>
        <md-input></md-input>
      </md-input-container> -->
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title">Waiter</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item v-on:click="doMaps()">
          <md-icon>map</md-icon> <span>Maps</span>
        </md-list-item>

        <md-list-item v-on:click="doEvents()">
          <md-icon>event</md-icon> <span>Events</span>
        </md-list-item>

        <md-list-item v-on:click="doAccount()">
          <md-icon>account_circle</md-icon> <span>Account</span>
        </md-list-item>

        <md-list-item v-on:click="doSecurity()">
          <md-icon>security</md-icon> <span>Security</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
import axios from 'axios'
import Events from './Events'
import Account from './Account'
import Maps from './Maps'
import Security from './Security'

export default {
  name: 'SideNav',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      newPassword: '',
    }
  },
  components: {
    Events,
    Account,
    Maps
  },
  methods: {
    addEvent: function() {
      //console.log("tata")
    },
    doEvents: function() {
      var that = this
      this.$refs.leftSidenav.close();
      that.$router.push('/Events')
    },
    doMaps: function() {
      var that = this
      this.$refs.leftSidenav.close();
      that.$router.push('/Maps')
    },
    doAccount: function() {
      var that = this
      this.$refs.leftSidenav.close();
      that.$router.push('/Account')
    },
    doSecurity: function() {
      var that = this
      this.$refs.leftSidenav.close();
      that.$router.push('/Security')
    },
    doSave: function() {
      var that = this
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem("token");
      axios.put('http://localhost:5000/user/' + localStorage.getItem("user") + '/password', {password: this.password, newPassword: this.newPassword}).then(function (response) {

        that.$router.push('/home')
      }).catch(function (error) {
        //that.$refs["error"].open();
      })
    },
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    closeLeftSidenav() {
      this.$refs.leftSidenav.close();
    },
    toggleRightSidenav() {
      this.$refs.rightSidenav.toggle();
    },
    closeRightSidenav() {
      this.$refs.rightSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
}
</script>
