<template lang="pug">

card-product-component.b-equipment-card(
    :image-src="equipment.image.src"
    :image-alt="equipment.image.alt"
)
    card-product-stats-component.__content(
        :equipment="equipment"

        :isRatingLabel="!device.size.mobile"
        :isPriceRow="device.size.tablet"
    )
        template(
            #action
        )
            slot
        //c-button(
        //    icon="cart"
        //    size="m"
        //    @click="addToCart"
        //) В корзину
        //c-button(
        //    icon="heart"
        //    size="m"
        //    @click="addToFavorite"
        //) В избранное

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'

import { CardProduct } from '../CardProduct'
import { CardProductStats } from '../CardProductStats'

import { Button } from '@/shared/ui/Button'
import DeviceProvider from '@/shared/lib/providers/device'

import { domain } from '@/shared/lib'

export type EquipmentCardProps = Pick<EquipmentCard, 'equipment'>
export type EquipmentType = CardProductStats['equipment'] &
    Pick<domain.Equipment, 'image'>

@Component({
    components: {
        'c-button': Button,
        'card-product-component': CardProduct,
        'card-product-stats-component': CardProductStats,
    },
})
export default class EquipmentCard extends Vue {
    // @Prop() readonly equipmentCard!: domain.Equipment
    // @Prop() readonly id!: number

    @Prop({ required: true })
    readonly equipment!: EquipmentType

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
}
</script>

<!--<style lang="scss" src="./EquipmentCard.critical.scss"></style>-->
