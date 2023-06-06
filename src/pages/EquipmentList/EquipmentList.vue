<template lang="pug">

.b-equipment-list
    page-breadcrumb-layout(
        title="Кардио"
        :breadcrumbs="['Для дома', 'Кардио']"
    )
    .__container.container
        .__banner
        .__filters
        aside-layout
            template(
                #default
            )
                equipment-card(
                    v-for="equipment in equipments"
                    :key="equipment.id"
                    :equipment="equipment"
                )
            template(
                #aside
            )
                //- equipment-filters

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AsideLayout } from '@/shared/layout/AsideLayout'
import { EquipmentCard } from '@/entities/equipment'
import { type EquipmentType } from '@/entities/equipment/ui/EquipmentCard/EquipmentCard.vue'

// TODO: Create GridLayout with list props and setup by slot

export type EquipmentListProps = {
    //
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'aside-layout': AsideLayout,
        'equipment-card': EquipmentCard,
    },
})
export default class EquipmentList extends Vue {
    equipments: (EquipmentType & { id: number })[] = [
        {
            id: 1,
            image: {
                alt: 'alt',
                src: 'src',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: 2,
            image: {
                alt: 'alt',
                src: 'src',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: 3,
            image: {
                alt: 'alt',
                src: 'src',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: 4,
            image: {
                alt: 'alt',
                src: 'src',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
        {
            id: 5,
            image: {
                alt: 'alt',
                src: 'src',
            },
            hasShowRoom: false,
            info: [['soem', 'osdm']],
            name: 'some name',
            price: [124132, 124132],
            quantity: 3,
            rating: 5,
        },
    ]
}
</script>

<!-- <style lang="scss" src="./EquipmentList.critical.scss" /> -->
<!-- <style lang="scss" src="./EquipmentList.main.scss" /> -->
