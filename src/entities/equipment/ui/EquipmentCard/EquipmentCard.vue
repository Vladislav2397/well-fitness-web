<template lang="pug">

card-product-component.b-equipment-card
    card-product-stats-component.__content(
        :has-show-room="true"
        :price="price"
        :quantity="3"
        :title="equipmentCard.name"
        :rating="4"
        :info="device.size.desktop ? [['key', 'value']] : []"
        :isRatingLabel="!device.size.mobile"
        :isPriceRow="device.size.tablet"
    )
        c-button(
            icon="cart"
            size="m"
            @click="addToCart"
        ) В корзину
        c-button(
            icon="heart"
            size="m"
            @click="addToFavorite"
        ) В избранное

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'

import {CardProduct} from '../CardProduct'
import { CardProductStats } from '../CardProductStats'

import Button from '@/shared/ui/Button/Button.vue'
import DeviceProvider from '@/shared/lib/providers/device'
// import { Model } from '@/shared/config/decorators'
// import { Equipment } from '@/entities/equipment'
// import { Item, Repository } from '@vuex-orm/core'

@Component({
    components: {
        'c-button': Button,
        'card-product-component': CardProduct,
        'card-product-stats-component': CardProductStats,
    },
})
export default class EquipmentCard extends Vue {
    @Prop() readonly equipmentCard!: any
    @Prop() readonly id!: number

    // @Model(Equipment) Equipment!: Repository<Equipment>

    @Inject('$device') device!: DeviceProvider['device']

    addToCart(): void {
        if (this.equipment) {
            console.log('add to cart', this.equipment)
            // CartService.add(this.equipment)
        }
    }

    addToFavorite(): void {
        if (this.equipment) {
            console.log('add to favorite', this.equipment)
            // FavoriteService.add(this.equipment)
        }
    }

    get equipment() {
        return null // this.Equipment.find(this.id)
    }

    get price(): CardProductStats['price'] {
        return [
            this.equipmentCard?.price?.current ?? '0',
            this.equipmentCard?.price?.old ?? '0',
        ]
    }
}
</script>

<style lang="scss" src="./equipment-card--critical.scss"></style>
