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
                grid-layout(
                    :layout="[3, '1fr']"
                    :list="equipments"
                )
                    template(
                        #default="{ item }"
                    )
                        equipment-card(
                            :key="item.id"
                            :equipment="item"
                        )
                            add-to-cart-button(
                                :equipment="item"
                            )
            template(
                #aside
            )
                equipment-filters

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AsideLayout } from '@/shared/layout/AsideLayout'
import { EquipmentCard } from '@/entities/equipment'
import { EquipmentFilters } from '@/widgets/equipment'
import { GridLayout } from '@/shared/layout/GridLayout'
import { AddToCart } from '@/features/cart'
import type { Equipment } from '@/shared-kernel'
import { Getter } from '@/shared/config'

export type EquipmentListProps = {
    //
}

@Component({
    components: {
        'add-to-cart-button': AddToCart,
        'grid-layout': GridLayout,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'aside-layout': AsideLayout,
        'equipment-card': EquipmentCard,
        'equipment-filters': EquipmentFilters,
    },
})
export default class EquipmentList extends Vue {
    @Getter('equipment/list') equipments!: Equipment[]

    // equipments: Equipment[] = [
    //     {
    //         id: '',
    //         image: {
    //             alt: 'alt',
    //             src: 'src',
    //         },
    //         hasShowRoom: false,
    //         info: [['soem', 'osdm']],
    //         name: 'some name',
    //         price: [124132, 124132],
    //         quantity: 3,
    //         rating: 5,
    //     },
    //     {
    //         id: '2',
    //         image: {
    //             alt: 'alt',
    //             src: 'src',
    //         },
    //         hasShowRoom: false,
    //         info: [['soem', 'osdm']],
    //         name: 'some name',
    //         price: [124132, 124132],
    //         quantity: 3,
    //         rating: 5,
    //     },
    //     {
    //         id: '3',
    //         image: {
    //             alt: 'alt',
    //             src: 'src',
    //         },
    //         hasShowRoom: false,
    //         info: [['soem', 'osdm']],
    //         name: 'some name',
    //         price: [124132, 124132],
    //         quantity: 3,
    //         rating: 5,
    //     },
    //     {
    //         id: '4',
    //         image: {
    //             alt: 'alt',
    //             src: 'src',
    //         },
    //         hasShowRoom: false,
    //         info: [['soem', 'osdm']],
    //         name: 'some name',
    //         price: [124132, 124132],
    //         quantity: 3,
    //         rating: 5,
    //     },
    //     {
    //         id: '5',
    //         image: {
    //             alt: 'alt',
    //             src: 'src',
    //         },
    //         hasShowRoom: false,
    //         info: [['soem', 'osdm']],
    //         name: 'some name',
    //         price: [124132, 124132],
    //         quantity: 3,
    //         rating: 5,
    //     },
    // ]
}
</script>

<!-- <style lang="scss" src="./EquipmentList.critical.scss" /> -->
<!-- <style lang="scss" src="./EquipmentList.main.scss" /> -->
