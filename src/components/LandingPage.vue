<template>
  <div>
    <md-tabs md-fixed>
      <md-tab id="security" md-label="Security">

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
      //console.log("tata")
    },
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
