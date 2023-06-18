<template lang="pug">

card-product-component.b-equipment-card(
    :image-src="equipment.image.src"
    :image-alt="equipment.image.alt"
    @click="toEquipment"
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

</template>

<script lang="ts">
import { Component, Inject, Prop, Vue } from 'vue-property-decorator'

import { CardProduct } from '../CardProduct'
import { CardProductStats } from '../CardProductStats'

import { Button } from '@/shared/ui/Button'
import DeviceProvider from '@/shared/lib/providers/device'

import { Equipment } from '@/shared-kernel'

export type EquipmentCardProps = Pick<EquipmentCard, 'equipment'>

@Component({
    components: {
        'c-button': Button,
        'card-product-component': CardProduct,
        'card-product-stats-component': CardProductStats,
    },
})
export default class EquipmentCard extends Vue {
    @Prop({ required: true })
    readonly equipment!: Equipment

    @Inject('$device') device!: DeviceProvider['device']

    toEquipment() {
        return this.$router.push(`/equipments/${this.equipment.id}`)
    }
}
</script>

<!--<style lang="scss" src="./EquipmentCard.critical.scss"></style>-->
