<template>
  <div id="app">
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
          <md-input placeholder="Username"></md-input>
        </md-input-container>
        <md-input-container>
          <md-input placeholder="Password"></md-input>
        </md-input-container>
        <md-button class="md-raised md-primary" v-on:click="Login()">Login</md-button>
        <md-button class="md-raised md-primary" v-on:click="SignIn()">Sign In</md-button>
      </md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'app'
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
  margin-left: 160px;
  margin-right: 160px;
}
</style>
