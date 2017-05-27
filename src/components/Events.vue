<template>
    <ul>
      <template v-for="item in items">
        <li style="list-style:none;">
          <md-card>
          <md-card-header>
            <div class="md-title"><em>{{ item.name }}</em><br></div>
          </md-card-header>
            <md-card-content>
              {{ item.description }}
              <md-card-actions>
                <md-button class="md-primary" @click.native="openDialog('dialog3')">Request a Waiter</md-button>
              </md-card-actions>
          </md-card-content>
        </md-card>
        </li>
      </template>
    </ul>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Events',
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
/*#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 300px;
  margin-right: 300px;
  list-style-type: none;
}*/
</style>
