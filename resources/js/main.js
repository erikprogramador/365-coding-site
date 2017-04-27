import Vue from 'vue'
import VueMaterial from 'vue-material'
import App from './components/App.vue'

Vue.use(VueMaterial)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
