import Vue from 'vue'
import App from './App.vue'
import {
  Button,
  Dialog,
  Field,
  ContactCard,
  GridItem,
  Grid,
  Divider,
  CellGroup,
  NavBar
} from 'vant';
import 'vant/lib/index.css';
import router from "./router";
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(ContactCard);
Vue.use(GridItem);
Vue.use(Grid);
Vue.use(Divider);
Vue.use(CellGroup);
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
