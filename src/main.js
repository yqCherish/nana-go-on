import Vue from 'vue'
import App from './App.vue'
import { Button, Dialog, Field } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
