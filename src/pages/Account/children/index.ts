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
            import(
                '@/pages/Account/children/AccountDelivery/AccountDelivery.vue'
            ),
    },
    {
        path: '/account/orders',
        name: 'AccountOrder',
        component: () =>
            import('@/pages/Account/children/AccountOrders/AccountOrders.vue'),
    },
    {
        path: '/account/discount',
        name: 'AccountDiscount',
        component: () =>
            import(
                '@/pages/Account/children/AccountDiscount/AccountDiscount.vue'
            ),
    },
    {
        path: '/account/bonus',
        name: 'AccountBonus',
        component: () =>
            import('@/pages/Account/children/AccountBonus/AccountBonus.vue'),
    },
    {
        path: '/account/instruction',
        name: 'AccountInstruction',
        component: () =>
            import(
                '@/pages/Account/children/AccountInstruction/AccountInstruction.vue'
            ),
    },
    {
        path: '/account/feedback',
        name: 'AccountFeedback',
        component: () =>
            import(
                '@/pages/Account/children/AccountFeedback/AccountFeedback.vue'
            ),
    },
]

export default children
