import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入elementUI组件样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入css初始化样式
import "./style/resate.css"
//挂载elementUI
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
