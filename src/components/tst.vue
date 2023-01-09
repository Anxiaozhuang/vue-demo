<template>
    <div class="hello">
        <Header></Header>
      <h1>{{ msg }}</h1>
    </div>
  </template>

<script>
import Header from '@/components/header.vue'
export default {
  name: 'test',
  components: {
    Header
  },
  data () {
    return {
      msg: 'Hello, crystal.'
    }
  }
}
</script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
