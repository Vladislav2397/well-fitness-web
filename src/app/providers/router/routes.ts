import { RouteConfig } from 'vue-router'
import officeChildren from '@/pages/Office/children'
import servicesChildren from '@/pages/Services/sections'
import accountChildren from '@/pages/Account/children'
import { children as aboutChildren } from '@/pages/About/sections'

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'index',
        component: () => import('@/pages/Main/Index.vue'),
    },
    {
        path: '/equipment-categories/:type(gym|home)',
        name: 'EquipmentCategories',
        component: () =>
            import('@/pages/EquipmentCategories/EquipmentCategories.vue'),
    },
    {
        path: '/equipments/:type',
        name: 'Equipments',
        component: () => import('@/pages/Equipments/Equipments.vue'),
    },
    {
        path: '/equipments/:type/:family',
        name: 'EquipmentFamily',
        component: () => import('@/pages/EquipmentList/EquipmentList.vue'),
    },
    {
        path: '/equipments/:type/:family/:id',
        name: 'Equipment',
        component: () => import('@/pages/Equipment/Equipment.vue'),
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
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About/About.vue'),
        children: aboutChildren,
        redirect: '/about/us',
    },
    {
        path: '/brands',
        name: 'Brands',
        component: () => import('@/pages/Brands/Brands.vue'),
        meta: {
            breadcrumbs: ['Бренды'],
            title: 'Бренды',
        },
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/pages/Cart/Cart.vue'),
        meta: {
            title: 'Моя корзина',
        },
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
        children: accountChildren,
    },
]

export default routes
