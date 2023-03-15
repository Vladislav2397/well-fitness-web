import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import IndexPage from '@/pages/Main/Index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: IndexPage,
    },
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})

export default router
