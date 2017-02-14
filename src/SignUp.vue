<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">
          Welcome to Waiter
        </div>
        <div class="md-suphead">
          Skip the line
        </div>
      </md-card-header>
      <md-card-content>
        <md-input-container>
          <label>Username</label>
          <md-input type="default" v-model="login"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  data () {
    return {
      password: '',
      login: ''
    }
  },
  methods: {
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    doLogin: function() {
      var that = this
      axios.post('http://localhost:5000/user/login', {password: this.password, email: this.login}).then(function (response) {
        console.log(response)
        that.$refs["success"].open();
      }).catch(function (error) {
        that.$refs["error"].open();
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
