<template lang="pug">

.b-cart-equipment-list
    equipment-cart-row.__item(
        v-for="equipment in list"
        :equipment="equipment"
    )
        add-to-favorite-button(
            :equipment="equipment"
        )
        remove-from-cart-button(
            :equipment="equipment"
        )

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { EquipmentCartRow } from '@/entities/equipment'
import { Getter } from '@/shared/config'
import type { Equipment } from '@/shared-kernel'
import { AddToFavorite, RemoveFromCart } from '@/features/cart'

export type CartEquipmentListProps = {
    //
}

@Component({
    components: {
        'equipment-cart-row': EquipmentCartRow,
        'add-to-favorite-button': AddToFavorite,
        'remove-from-cart-button': RemoveFromCart,
    },
})
export default class CartEquipmentList extends Vue {
    @Getter('cart/list') list!: Equipment[]
}
</script>
