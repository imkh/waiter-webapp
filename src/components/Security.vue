<template>
  <md-card-content>
    <md-input-container md-has-password>
        <label>Current password</label>
        <md-input type="password" v-model="password"></md-input>
      </md-input-container>
      <md-input-container md-has-password>
        <label>New password</label>
        <md-input type="newPassword" v-model="newPassword"></md-input>
      </md-input-container>
      <md-button class="md-raised md-primary" v-on:click="doSave()">Save</md-button>
  </md-card-content>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Security',
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
  methods: {
    doSave: function() {
      var that = this
      axios.defaults.headers.common['x-access-token'] = localStorage.getItem("token");
      axios.put('http://localhost:5000/user/' + localStorage.getItem("user") + '/password', {password: this.password, newPassword: this.newPassword}).then(function (response) {

        that.$router.push('/home')
      }).catch(function (error) {
        //that.$refs["error"].open();
      })
    }
  }
}
</script>

<style>
/*#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 300px;
  margin-right: 300px;
}*/
</style>
