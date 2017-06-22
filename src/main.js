// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import login from './components/login.vue'
import principal from './components/principal.vue'

import VueRouter from 'vue-router'
import VueResouce from 'vue-resource'

Vue.use(VueResouce)
Vue.use(VueRouter)

Vue.http.options.credentials = true;
const router = new VueRouter({
  routes:[
    {
      name:'LogIn',
      path:'/',
      component: login
    },
    {
      name:'principal',
      path:'/principal',
      component: principal
    }
  ]
});

new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');
