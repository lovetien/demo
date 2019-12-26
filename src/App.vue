<template>
  <div id="app">
    <eletest></eletest>
    <!-- <bttest></bttest> -->
  </div>
</template>
<script>
import eletest from "./views/eletest";
import bttest from './views/bttest'
export default {
  name: 'app',
  components:{
    eletest,
    bttest
  }
}
</script>
<style>
</style>
