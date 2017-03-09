<template>
  <div>
    <mdl-button>Button</mdl-button>
    <mdl-button class="mdl-js-ripple-effect">Ripple Effect</mdl-button>
    <mdl-button disabled>Disabled</mdl-button>
    <mdl-button icon="star"></mdl-button>
    <mdl-textfield floating-label="Name" textarea rows="4"></mdl-textfield>
  </div>

</template>

<script>
  import VueMdl from 'vue-mdl'
  import Vue from 'vue'

  Vue.use(VueMdl)
  export default {
    data(){
      return {
        checked: false
      }
    }
  }
</script>

<style>
</style>
