<template>
  <div id="app">
    <k-tagSlider v-model="value" class="aa"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      value: 0
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.aa{
  width: 192px;
}
</style>
