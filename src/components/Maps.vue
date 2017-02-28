<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAm2gJJ15zXN5UduJYp_Wgrlf7kITVU9ak" async defer></script>

<template>
  <md-card-content>
      <map
      :center="center"
      :zoom="7"
    >
      <marker
        v-for="m in markers"
        :position.sync="m.position"
        :clickable="true"
        :draggable="true"
        @g-click="center=m.position"
      ></marker>
    </map>
  </md-card-content>
</template>

<script>

export default {
  name: 'LandingPage',
  data () {
    return {
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
  list-style-type: none;
  #map {
      height: 400px;
      width: 100%;
  }
}
</style>
