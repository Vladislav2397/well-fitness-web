import { RouteConfig } from 'vue-router'

const children: RouteConfig[] = [
    {
        path: '/account',
        name: 'AccountIndex',
        component: () =>
            import('@/pages/Account/children/AccountIndex/AccountIndex.vue'),
    },
    {
        path: '/account/delivery',
        name: 'AccountDelivery',
        component: () =>
            import('@/pages/Account/children/Delivery/Delivery.vue'),
    },
]

export default children
