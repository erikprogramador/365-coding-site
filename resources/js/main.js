import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import App from './components/App.vue'
import routes from './routes'

Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
