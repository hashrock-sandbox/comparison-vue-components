<template>
  <div id="app">
    <ui-button>Hello world!</ui-button>
  </div>
</template>

<script>
import Vue from 'vue'
import 'keen-ui/src/bootstrap';
import UiButton from 'keen-ui/lib/UiButton';
//import KeenUI from 'keen-ui';

//Vue.use(KeenUI);
  
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
</style>

