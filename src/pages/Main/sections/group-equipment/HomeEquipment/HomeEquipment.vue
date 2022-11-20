<template lang="pug">

.b-home-equipment
    .__container.container
        grid-section-component.__grid(
            title="Тренажеры для дома"
            button="Все категории"
            :layout="layout"
            :cardList="cardList"
            @click="onClick"
        )

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import { Point } from '@/shared/layout/VueGrid'

import { GridSection, cardType } from '../../GridSection'

// import { RouteNames } from '@/app/router/helpers'
import DeviceProvider from '@/shared/lib/providers/device'

@Component({
    components: {
        'grid-section-component': GridSection,
    }
})
export default class HomeEquipmentPage extends Vue {
    @Inject('$device') device!: DeviceProvider['device']

    layoutMobile: Point[] = [
        [0, 0, 2, 1],
        [0, 1, 2, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
        [0, 4, 1, 1],
        [1, 4, 1, 1],
        [0, 5, 1, 1],
        [1, 5, 1, 1],
    ]

    layoutTablet: Point[] = [
        [0, 0, 1, 2],
        [1, 0, 1, 2],
        [2, 0, 1, 1],
        [2, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [2, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
        [2, 3, 1, 1],
    ]

    layoutTabletLate: Point[] = [
        [0, 0, 1, 2],
        [1, 0, 1, 2],
        [2, 0, 1, 1],
        [2, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [2, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
        [2, 3, 1, 1],
    ]

    layoutDesktop: Point[] = [
        [0, 0, 1, 2],
        [1, 0, 1, 2],
        [2, 0, 1, 1],
        [3, 0, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [2, 2, 1, 1],
        [3, 2, 1, 1],
    ]

    get layout(): Point[] {
        if (this.device.size.tabletLate) return this.layoutDesktop
        if (this.device.size.tablet) return this.layoutTablet
        if (this.device.size.mobile) return this.layoutMobile
        return this.layoutDesktop
    }

    get cardList(): cardType[] {
        return [
            {
                title: 'Беговые<br />дорожки',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'dark',
                stretch: this.device.size.mobile ? 'horizontal' : 'vertical',
            },
            {
                title: 'Эллиптические<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'secondary',
                stretch: this.device.size.mobile ? 'horizontal' : 'vertical',
            },
            {
                title: 'Велотренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet || this.device.size.desktop ? 'none' : 'default',
            },
            {
                title: 'Горнолыжные<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet || this.device.size.desktop ? 'none' : 'default',
            },
            {
                title: 'Силовые<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet && !this.device.size.tabletLate ? 'default' : 'none',
            },
            {
                title: 'Гребные<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: this.device.size.tablet && !this.device.size.tabletLate ? 'default' : 'none',
            },
            {
                title: 'Батуты',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Игровые<br />столы',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Массажные<br />кресла',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Фитнес<br />аксессуары',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
        ]
    }

    onClick(): void {
        this.$router.push({
            name: 'EquipmentGroup', // RouteNames.EQUIPMENT_GROUP,
            params: {
                group: 'home'
            }
        }).catch(error => console.error(error))
    }
}

</script>
