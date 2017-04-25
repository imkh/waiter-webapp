<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgkQY1TAWu78i1C2z22mws5zM0Dv8NHPc&callback=initMap" async defer></script>

<template>
  <md-card-content>
    <template>
      <gmap-map
        :center="center"
        :zoom="17"
        style="width: 1100px; height: 800px"
      >
      </gmap-map>
    </template>
  </md-card-content>
</template>

<script>

export default {
  name: 'LandingPage',
  data () {
    return {
      center: {lat: 48.8151239, lng: 2.3631254},
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
}
</style>
