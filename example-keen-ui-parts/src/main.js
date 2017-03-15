import Vue from 'vue'
import App from './App.vue'
import KeenUI from 'keen-ui';
import 'keen-ui/dist/keen-ui.css';

Vue.use(KeenUI);
new Vue({
  el: '#app',
  render: h => h(App)
})
