<template>
  <md-card-content>
      <md-input-container>
        <label>First name</label>
        <md-input type="default" v-model="firstname"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Last name</label>
        <md-input type="default" v-model="lastname"></md-input>
      </md-input-container>
      <md-input-container>
        <label>Email address</label>
        <md-input type="default" v-model="email"></md-input>
      </md-input-container>
      <md-button class="md-raised md-primary" v-on:click="Save()">Save</md-button>
  </md-card-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LandingPage',
  data () {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      newPassword: '',
      items: []
    }
  },
  mounted: function() {
    var that = this
    axios.get('http://localhost:5000/event/').then(function(response) {
      that.items = response.data.data
      console.log(response.data)
    })
  },
  Save: function() {
    var that = this
    axios.put('http://localhost:5000/user/:id/password', {password: this.password, newPassword: this.newPassword}).then(function (response) {
      console.log(response)
      that.$router.push('/home')
    }).catch(function (error) {
      //that.$refs["error"].open();
    })
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
