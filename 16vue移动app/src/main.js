import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'mint-ui/lib/style.css'
import "./assets/css/style.css";
import MintUI from 'mint-ui'
Vue.use(MintUI)

// 引入swiper
import '../node_modules/swiper/dist/css/swiper.min.css'
import '../node_modules/swiper/dist/js/swiper.min.js'
import "swiper/dist/css/swiper.css";
//引入vant
import 'vant/lib/button/style';
import { Button } from 'vant';
Vue.use(Button);

//引入vant字体图标
import { Icon } from 'vant';
import 'vant/lib/icon/local.css';
Vue.use(Icon);
//引入ali字体图标
import './assets/iconfont/iconfont.css'

//引入mui组件样式
import './assets/mui/css/mui.min.css'
import './assets/css/1.css'
import "./assets/mui/css/mui.css";

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//引入jsonp
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

//引入部分组件 mint-ui
import { TabItem,Swipe,SwipeItem,Tabbar} from 'mint-ui';
Vue.use(TabItem).use(Swipe).use(SwipeItem ).use(Tabbar);

//引入vant组件
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,Toast,Checkbox, CheckboxGroup,Stepper,SubmitBar, TabbarItem,Search,
  Card
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton).use(Toast).use(Checkbox).use(CheckboxGroup).use(Stepper ).use(SubmitBar )
  .use(TabbarItem).use(Search ).use(Card);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
