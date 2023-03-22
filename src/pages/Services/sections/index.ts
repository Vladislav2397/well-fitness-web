import { RouteConfig } from 'vue-router'

const children: RouteConfig[] = [
    {
        path: '/services/order',
        name: 'ServicesOrder',
        component: () => import('@/pages/Services/sections/Order/Order.vue'),
    },
    {
        path: '/services/service',
        name: 'ServicesService',
        component: () =>
            import('@/pages/Services/sections/Service/Service.vue'),
    },
]

export default children
