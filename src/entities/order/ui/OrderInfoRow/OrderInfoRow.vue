<template lang="pug">

.b-order-info-row
    .__date.typo.typo--size-p3 {{ order.date }}
    .__number.typo.typo--size-p3.typo--weight-bold № {{ order.number }}
    .__status.typo.typo--size-p3 {{ orderStatus }}
    .__price.typo.typo--size-p3.typo--weight-bold {{ order.price }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { orderModel } from '@/entities/order'

export type OrderInfoRowProps = Pick<OrderInfoRow, 'order'>

const orderViewMap = new Map([
    ['derived', 'success'],
    ['delivery', 'info'],
    ['payed', 'system'],
    ['not-payed', 'critical'],
])

@Component
export default class OrderInfoRow extends Vue {
    @Prop({ required: true }) readonly order!: {
        date: string
        number: number
        status: 'derived' | 'delivery' | 'payed' | 'not-payed'
        price: string
    }

    get orderView() {
        return orderViewMap.get(this.order.status)
    }

    get orderStatus() {
        return orderModel.getOrderStatus(this.order)
    }
}
</script>

<!-- <style lang="scss" src="./OrderInfoRow.critical.scss" /> -->
<!-- <style lang="scss" src="./OrderInfoRow.main.scss" /> -->
