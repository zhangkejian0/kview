<template>
  <div id="app">
    <k-tagSlider v-model="value" :tags="['年','月','日']" class="tagSlider"/>
    <k-circleProgress
      class="circleProgress"
      :width="100"
      :radius="10"
      :progress="70"
      :delay="300"
      :duration="1000"
      :barColor="'#43B9D4'"
      :backgroundColor="'#D8D8D8'"
      :isAnimation="false"
    >
      <div>
        <p>70%</p>
        <p>自定义</p>
      </div>
    </k-circleProgress>
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
  padding: 50px;
  box-sizing: border-box;
}
*{
  margin: 0;
  padding: 0;
}
.tagSlider{
  width: 240px;
  margin: 0 auto;
}
.circleProgress{
  margin: 0 auto;
  margin-top: 20px;
}
</style>
