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
        <md-input-container md-has-password>
          <label>Password</label>
          <md-input type="password" v-model="password"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary" v-on:click="doCreate()">Create account</md-button>
      <md-dialog md-open-from="#Create account" md-close-to="#Create account" ref="error">
        <md-dialog-title>Can not create account</md-dialog-title>
        <md-dialog-content>Complete all the fields to proceed</md-dialog-content>
        <md-dialog-actions>
          <md-button class="md-primary" @click.native="closeDialog('error')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>
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
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    doCreate: function() {
      var that = this
      axios.post('http://localhost:5000/user', {firstname: this.firstname, lastname: this.lastname, email: this.email, password: this.password}).then(function (response) {
        console.log(response)
        that.$router.push('/home')
      }).catch(function (error) {
        that.$refs["error"].open();
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
