import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JsonSchemaEditor from 'vue-json-schema-editor-visual';
import Logger from '@/plugins/logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import cfbgcPermissions from 'cfbgc-permissions';
import App from './App.vue';
import './utils/rem.js';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Logger, { debug: process.env.NODE !== 'production' });
Vue.use(JsonSchemaEditor);
Vue.use(ElementUI);
Vue.use(cfbgcPermissions);
Vue.$log.info('vue-eslint launch...');

new Vue({
  router,
  store,
  render: h => h(App),
  async mounted() {
    this.$log.info('vue-eslint ready...');
  }
}).$mount('#app');
