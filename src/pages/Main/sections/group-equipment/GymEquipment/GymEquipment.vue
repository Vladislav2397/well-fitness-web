<template lang="pug">

.b-gym-equipment
    .__container.container
        grid-section-component.__grid(
            title="Тренажеры для фитнес клуба"
            button="Все категории"
            :layout="layout"
            :cardList="cardList"
            @click="onClick"
        )

</template>

<script lang="ts">
import { Component, Inject, Vue } from 'vue-property-decorator'

import { GridSection, cardType } from '../../GridSection'
import type { Point } from '@/shared/layout/VueGrid'
import DeviceProvider from '@/shared/lib/providers/device'

@Component({
    components: {
        'grid-section-component': GridSection,
    },
})
export default class GymEquipment extends Vue {
    @Inject('$device') device!: DeviceProvider['device']

    layoutMobile: Point[] = [
        [0, 0, 2, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 1, 1],
        [0, 3, 1, 1],
        [1, 3, 1, 1],
    ]

    layoutTablet: Point[] = [
        [0, 0, 2, 1],
        [2, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [0, 2, 1, 1],
        [1, 2, 2, 1],
    ]

    layoutDesktop: Point[] = [
        [0, 0, 2, 1],
        [2, 0, 1, 1],
        [3, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [2, 1, 1, 1],
        [3, 1, 1, 1],
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
                title: 'Профессиональные<br />кардиотренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'dark',
                stretch: 'horizontal',
            },
            {
                title: 'Грузоблочные<br />тренажеры',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'secondary',
                stretch: 'default',
            },
            {
                title: 'Тренажеры<br />на свободных<br />весах',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Функциональный<br />тренинг',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'secondary',
                stretch: 'default',
            },
            {
                title: 'Wellness,<br />СПА, Массаж',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Спортивная медицина<br />и реабилитация',
                href: '#',
                image: {
                    src: '',
                    alt: '',
                },
                theme: 'light',
                stretch: 'default',
            },
            {
                title: 'Свободные<br />веса',
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
        this.$router.push('/equipment/gym')
    }
}
</script>
