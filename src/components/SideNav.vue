<template>
  <div>
  <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title">Menu</h2>
  </md-toolbar>

  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Waiter</h3>
      </div>
    </md-toolbar>
      <md-button class="md-raised md-primary" v-on:click="doMaps()">Maps</md-button><br>
      <md-button class="md-raised md-primary" v-on:click="doEvents()">Events</md-button><br>
      <md-button class="md-raised md-primary" v-on:click="doAccount()">Account</md-button><br>
      <md-button class="md-raised md-primary" v-on:click="doSecurity()">Security</md-button><br>
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
      that.$router.push('/Events')
    },
    doMaps: function() {
      var that = this
      that.$router.push('/Maps')
    },
    doAccount: function() {
      var that = this
      that.$router.push('/Account')
    },
    doSecurity: function() {
      var that = this
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
