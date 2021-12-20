import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUi from 'element-ui'
import Vuedraggable from "vuedraggable/src/vuedraggable"

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.component('vue-draggable', Vuedraggable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
