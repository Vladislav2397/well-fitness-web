<template lang="pug">

c-card-product.b-equipment-stock-card
    c-card-product-stats.__stats(
        :quantity="content.quantity || 3"
        :hasShowRoom="content.hasShowRoom"
        :title="content.name"
        :rating="content.rating"
        :price="content.price || [ 1000, 2000 ]"
        :is-price-row="device.size.mobile"
    )
        template(
            #action
        )
            c-button(
                v-if="!device.size.mobile"
                :iconLeft="true"
                icon="cart"
            ) Купить

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'

import {CardProduct} from '../CardProduct'
import { CardProductStats } from '../CardProductStats'
import { Button } from '@/shared/ui/Button'

// import { Equipment } from '@/entities/equipment'
// import { Model } from '@/shared/config/decorators'
// import { Repository } from '@vuex-orm/core'
import DeviceProvider from '@/shared/lib/providers/device'

@Component({
    components: {
        'c-button': Button,
        'c-card-product': CardProduct,
        'c-card-product-stats': CardProductStats,
    },
})
export default class EquipmentStockCard extends Vue {
    @Prop() readonly id!: number | string

    @Inject('$device') device!: DeviceProvider['device']

    // @Model(Equipment)
    // Equipment!: Repository<Equipment>

    get content() {
        return this.$store.getters['equipment/getById'](this.id)
    }
}
</script>

<style lang="scss" src="./equipment-stock-card--critical.scss" />
