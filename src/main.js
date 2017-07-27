// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//公用组件导入
import Header from './components/Header'
//引入UI

//inconfont字体css
import './assets/font/iconfont.css'
//公共组件全局注册
Vue.component('v-header', Header);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
