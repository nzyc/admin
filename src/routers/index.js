import Vue from "vue"
import VueRouter from "vue-router"
import home from "@/pages/home.vue"
import writer from "@/pages/writer.vue"
import c from "@/components/c.vue"
import d from "@/components/d.vue"

Vue.use(VueRouter);

const routers = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home,meta:{index:0} },
        { path: '/writer', component: writer,meta:{index:1} },
        { path: '/calendar', component: c,meta:{index:2} },
        { path: '/about', component: d ,meta:{index:3}}
    ]
});

export default routers
