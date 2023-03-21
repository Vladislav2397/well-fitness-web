import { RouteConfig } from 'vue-router'
import officeChildren from '@/pages/Office/children'

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
        meta: {
            breadcrumbs: ['Сервис', 'Оставить заявку на сервис'],
            title: 'Оставить заявку на сервис',
        },
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
]

export default routes
