import Vue from 'vue';
import App from '@/App.vue';
import router from '@/routers';
import "element-ui/lib/theme-chalk/index.css";
import '@/plugins/element-ui'

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
