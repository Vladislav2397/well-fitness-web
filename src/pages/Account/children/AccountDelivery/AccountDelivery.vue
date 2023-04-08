<template lang="pug">

.b-account-delivery
    c-collapse(
        v-for="(order, index) in orders"
        :key="index"
    )
        template(
            #header
        )
            order-info-row.__order(
                :order="order"
            )
        p information about order

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Collapse } from '@/shared/ui/Collapse'
import {
    OrderInfoRow,
    type OrderInfoRowProps,
} from '@/entities/order/ui/OrderInfoRow'

export type AccountDeliveryProps = {
    //
}

@Component({
    components: {
        'c-collapse': Collapse,
        'order-info-row': OrderInfoRow,
    },
})
export default class AccountDelivery extends Vue {
    get orders(): OrderInfoRowProps['order'][] {
        return [
            {
                date: '12.12.2020',
                number: 123456789,
                status: 'delivery',
                price: '20 000 ₽',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountDelivery.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountDelivery.main.scss" /> -->
