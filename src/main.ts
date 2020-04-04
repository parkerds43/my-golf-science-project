import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
// Import the composition API plugin
import VueCompositionApi from '@vue/composition-api';

// Register the composition API
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
