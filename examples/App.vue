<template>
  <div id="app">
    <k-tagSlider v-model="value" :tags="['年','月','日']" class="tagSlider"/>
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
  background: #ccc;
}
.tagSlider{
  width: 240px;
  margin: 0 auto;
}
</style>
