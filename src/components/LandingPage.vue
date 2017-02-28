<template>
  <div>
    <md-tabs md-fixed>
      <md-tab id="map" md-label="Maps">
        <Maps></Maps>
      </md-tab>

      <md-tab id="event" md-label="Events">
        <Events></Events>
      </md-tab>

      <md-tab id="account" md-label="Account">
        <Account></Account>
      </md-tab>

      <md-tab id="security" md-label="Security">
        <md-input-container md-has-password>
          <label>Current password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>New password</label>
          <md-input type="newPassword" v-model="newPassword"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary" v-on:click="doSave()">Save</md-button>
      </md-tab>
    </md-tabs>
    <md-card>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'
import Events from './Events'
import Account from './Account'
import Maps from './Maps'
export default {
  name: 'LandingPage',
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
      console.log("tata")
    },
    doUpdate: function() {
      var that = this
      axios.put('http://localhost:5000/user/:id/password', {firstname: this.password, lastname: this.newPassword, email: this.email}).then(function (response) {
        console.log(response)
        //that.$router.push('/home')
      }).catch(function (error) {
        that.$refs["error"].open();
      })
    },
    doSave: function() {
      var that = this
      axios.put('http://localhost:5000/user/:id/password', {password: this.password, newPassword: this.newPassword}).then(function (response) {
        console.log(response)
        that.$router.push('/home')
      }).catch(function (error) {
        //that.$refs["error"].open();
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 300px;
  margin-right: 300px;
}
</style>
