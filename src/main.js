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
  NavBar,
  Popup,
  Image
} from 'vant';
import 'vant/lib/index.css';
import router from "./router";
import "./styles/base.css";
Vue.use(Button);
Vue.use(Dialog);
Vue.use(Field);
Vue.use(ContactCard);
Vue.use(GridItem);
Vue.use(Grid);
Vue.use(Divider);
Vue.use(CellGroup);
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Image);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
