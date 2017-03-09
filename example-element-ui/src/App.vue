<template>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
    <el-color-picker v-model="color3" show-alpha></el-color-picker>

  </div>
</template>

<script>

import Vue from 'vue'
import ElementUI from 'element-ui'
//import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/ja'

Vue.use(ElementUI, { locale })
//Vue.use(ElementUI)

export default {
  name: 'app',
  data () {
    return {
      visible: false,
      msg: 'Welcome to Your Vue.js App',
      color3: 'rgba(19, 206, 102, 0.8)',
    }
  }
}
</script>

<style>

</style>
