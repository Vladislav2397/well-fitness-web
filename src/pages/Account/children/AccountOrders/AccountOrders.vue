<template lang="pug">

.b-account-orders
    c-collapse
        template(
            #header
        )
            order-info-row(
                :order="orders[0]"
            )
        p information about order

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import OrderInfoRow from '@/entities/order/ui/OrderInfoRow/OrderInfoRow.vue'
import { OrderInfoRowProps } from '@/entities/order/ui/OrderInfoRow'
import Collapse from '@/shared/ui/Collapse/Collapse.vue'

export type AccountOrdersProps = {
    //
}

@Component({
    components: {
        'c-collapse': Collapse,
        'order-info-row': OrderInfoRow,
    },
})
export default class AccountOrders extends Vue {
    get orders(): OrderInfoRowProps['order'][] {
        return [
            {
                date: '12.12.2020',
                number: 123456789,
                status: 'not-payed',
                price: '1 120 000 ₽',
            },
        ]
    }
}
</script>

<!-- <style lang="scss" src="./AccountOrders.critical.scss" /> -->
<!-- <style lang="scss" src="./AccountOrders.main.scss" /> -->
