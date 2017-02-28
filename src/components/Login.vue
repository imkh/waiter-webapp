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
          <label>Email address</label>
          <md-input type="default" v-model="login"></md-input>
        </md-input-container>
        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary" v-on:click="doLogin()">Login</md-button>
        <md-button class="md-raised md-primary" v-on:click="SignUp()">Sign Up</md-button>
      </md-card-content>
    </md-card>
    <md-progress md-theme="purple" md-indeterminate></md-progress>
    <md-dialog md-open-from="#Login" md-close-to="#Login" ref="error">
      <md-dialog-title>Connexion failed</md-dialog-title>
      <md-dialog-content>Wrong username or password</md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('error')">Ok</md-button>
    </md-dialog-actions>
  </md-dialog>
  <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      password: '',
      login: '',
    }
  },
  methods: {
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    doLogin: function() {
      var that = this
      axios.post('http://localhost:5000/user/login', {password: this.password, email: this.login}).then(function (response) {
        console.log(response.data.data.token)
        that.$router.push('/home')
      }).catch(function (error) {
        that.$refs["error"].open();
      })
    },
    SignUp: function() {
      this.$router.push('/signup')
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
