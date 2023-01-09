<template>
   <!-- <head>
    <meta charset="UTF-8">
    <title>兔兔小窝~</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
    </head> -->
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- 应该是所有路由都在这个logo下面 -->
    <header></header>
    <router-view/>
  </div>
</template>

<script>
import header from './components/header.vue'
export default {
  name: 'App',
  components: {
    header
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
