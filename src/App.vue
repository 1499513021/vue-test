<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <ul>
      <li> <router-link to="/one">路由页面</router-link></li>
      <li><router-link to="/computed">计算属性</router-link></li>
      <li><router-link to="/watch">监听属性</router-link></li>
      <li><router-link to="/slots">插槽</router-link></li>
      <li><router-link to="/echart">eCharts</router-link></li>
      <li>
        <router-link to="/state">状态管理</router-link>
      </li>
      <li>
        <router-link to="/promise">promise对象</router-link>
      </li>
    </ul>


    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Parent from "./components/prop/Parent";
export default {
  name: 'app',
  components: {
    // Parent,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
