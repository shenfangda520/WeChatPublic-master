// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//公用组件导入
import Header from './components/Header'
import FormOne from './components/FormOne'
import FormTowo from './components/FormTowo'
//引入MintUI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//inconfont字体css
import './assets/font/iconfont.css'
//公共组件全局注册
Vue.component('v-header', Header);
Vue.component('v-formo', FormOne);
Vue.component('v-formt', FormTowo);
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
