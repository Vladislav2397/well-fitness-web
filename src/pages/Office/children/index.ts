import { RouteConfig } from 'vue-router'

const children: RouteConfig[] = [
    {
        path: '/offices/project',
        name: 'OfficeProject',
        component: () => import('@/pages/Office/children/Project/Project.vue'),
    },
    {
        path: '/offices/installment',
        name: 'OfficeInstallment',
        component: () =>
            import('@/pages/Office/children/Installment/Installment.vue'),
    },
]

export default children
