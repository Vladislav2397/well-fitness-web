<template lang="pug">

.b-equipments
    page-breadcrumb-layout.__breadcrumb(
        :breadcrumbs="breadcrumbs"
        :title="title"
    )
    .__container.container
        grid-layout(
            :layout="[4, '1fr']"
            :list="equipments"
        )
            template(
                #default="{ item }"
            )
                equipment-family-card.__item(
                    :key="item.id"
                    :equipmentFamily="item"
                )
    idea-promo-section
    equipment-promo-section

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'

import { EquipmentFamilyCard } from '@/entities/equipment'
import { GridLayout } from '@/shared/layout/GridLayout'
import { IdeaPromoSection } from '@/widgets/idea'
import { EquipmentPromoSection } from '@/widgets/equipment/ui/EquipmentPromoSection'

export type EquipmentsProps = {
    //
}

const titleMap = new Map([
    ['home', 'Для дома'],
    ['gym', 'Для фитнес клуба'],
])

@Component({
    components: {
        'idea-promo-section': IdeaPromoSection,
        'equipment-promo-section': EquipmentPromoSection,
        'grid-layout': GridLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'equipment-family-card': EquipmentFamilyCard,
    },
})
export default class Equipments extends Vue {
    // FIXME: Add types
    equipments = [
        {
            id: 1,
            name: 'Кардио',
            image: {
                src: '/img/logo.png',
                alt: 'alt',
            },
            categories: [
                ['Runners', 12],
                ['Jumpers', 24],
            ],
        },
        {
            id: 2,
            name: 'Силовые',
            image: {
                src: '/img/logo.png',
                alt: 'alt',
            },
            categories: [
                ['Griph', 12],
                ['Stronghold', 24],
            ],
        },
        {
            id: 3,
            name: 'Кардио',
            image: {
                src: '/img/logo.png',
                alt: 'alt',
            },
            categories: [
                ['Runners', 12],
                ['Jumpers', 24],
            ],
        },
        {
            id: 4,
            name: 'Силовые',
            image: {
                src: '/img/logo.png',
                alt: 'alt',
            },
            categories: [
                ['Griph', 12],
                ['Stronghold', 24],
            ],
        },
        {
            id: 5,
            name: 'Силовые',
            image: {
                src: '/img/logo.png',
                alt: 'alt',
            },
            categories: [
                ['Griph', 12],
                ['Stronghold', 24],
            ],
        },
    ]

    get breadcrumbs() {
        return [this.title]
    }

    get title() {
        return titleMap.get(this.$route.params.type)
    }
}
</script>

<!-- <style lang="scss" src="./Equipments.critical.scss"> -->
<!-- <style lang="scss" src="./Equipments.main.scss"> -->
