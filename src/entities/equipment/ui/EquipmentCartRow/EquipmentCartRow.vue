<template lang="pug">

.b-equipment-cart-row
    .__image
        img(
            :src="equipment.image.src"
            :alt="equipment.image.alt"
        )
    .__content
        .__section
            .__left
                h3.__title.typo.typo--size-h3 {{ equipment.name }}
                c-rating.__rating.typo.typo--size-p3(
                    :count="equipment.rating"
                    hasLabel
                )
                c-quantity.__quantity(
                    :count="equipment.quantity"
                )
                span.__link {{ equipment.hasShowRoom ? 'Есть в шоу-руме' : 'Скоро ожидается' }}
            .__right
                .__counter - 1 +
                .__price
                    del.typo.typo--size-p4 {{ prices.old }}
                    p.typo.typo--size-h4  {{ prices.current }}
        .__section
            .__variety
                p цвет
                p Черный
            .__variety
                p Размер, см
                p 1500 x 2000
        .__actions
            slot

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { type Equipment } from '@/shared-kernel'
import { Rating } from '@/shared/ui/Rating'
import { Quantity } from '@/shared/ui/Quantity'

export type EquipmentCartRowProps = Pick<EquipmentCartRow, 'equipment'>

@Component({
    components: { 'c-quantity': Quantity, 'c-rating': Rating },
})
export default class EquipmentCartRow extends Vue {
    @Prop({ required: true }) readonly equipment!: Equipment

    get prices() {
        const [old = '12000', current = '10000'] = this.equipment.price ?? []

        return { old, current }
    }
}
</script>

<style lang="scss" src="./EquipmentCartRow.critical.scss" />
