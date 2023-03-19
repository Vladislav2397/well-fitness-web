import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/Main/Index.vue'),
    },
    {
        path: '/articles',
        name: 'Articles',
        component: () => import('@/pages/Articles/Articles.vue'),
        meta: {
            breadcrumbs: ['Блог'],
            title: 'Блог',
        },
    },
    {
        path: '/articles/:id',
        name: 'Article',
        component: () => import('@/pages/Article/Article.vue'),
    },
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes,
})

export default router
