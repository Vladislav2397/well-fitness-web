import { RouteConfig } from 'vue-router'
import { AboutUs } from './AboutUs'
import { OurMission } from './OurMission'
import { OurTeam } from './OurTeam'

export const children: RouteConfig[] = [
    {
        path: '/about/us',
        name: 'AboutUs',
        component: AboutUs,
        meta: {
            breadcrumbs: ['О компании', 'О нас'],
            title: 'О компании',
        },
    },
    {
        path: '/about/mission',
        name: 'AboutMission',
        component: OurMission,
        meta: {
            breadcrumbs: ['О компании', 'Наша миссия'],
            title: 'Наша миссия',
        },
    },
    {
        path: '/about/team',
        name: 'AboutTeam',
        component: OurTeam,
        meta: {
            breadcrumbs: ['О компании', 'Наша команда'],
            title: 'Наша команда',
        },
    },
]
