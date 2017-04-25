<template>
  <md-card-content>
    <ul>
      <template v-for="item in items">
        <li style="list-style:none;">
          <md-card>
            <md-card-content>
              <em>{{ item.name }}</em><br>
              {{ item.description }}
          </md-card-content>
        </md-card>
        </li>
      </template>
    </ul>
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
  list-style-type: none;
}
</style>
