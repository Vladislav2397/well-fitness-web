import { RouteConfig } from 'vue-router'
import officeChildren from '@/pages/Office/children'
import servicesChildren from '@/pages/Services/sections'

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
    {
        path: '/services',
        name: 'Services',
        component: () => import('@/pages/Services/Services.vue'),
        redirect: '/services/order',
        children: servicesChildren,
    },
    {
        path: '/offices',
        name: 'Offices',
        component: () => import('@/pages/Office/Office.vue'),
        redirect: '/offices/project',
        children: officeChildren,
    },
    {
        path: '/delivery',
        name: 'Delivery',
        component: () => import('@/pages/Delivery/Delivery.vue'),
    },
    {
        path: '/account',
        name: 'Account',
        component: () => import('@/pages/Account/Account.vue'),
    },
]

export default routes
