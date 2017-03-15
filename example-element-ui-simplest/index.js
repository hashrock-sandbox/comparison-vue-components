import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import locale from 'element-ui/lib/locale/lang/ja'
Vue.use(ElementUI, { locale })
new Vue({
  el: '#app',
  render: h => h(App)
})