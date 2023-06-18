<template lang="pug">

.b-cart
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__content
            cart-equipment-list.__list
            cart-total-info.__total
        .__guarantee
        .__addition


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'

import { AddToFavorite, RemoveFromCart } from '@/features/cart'

import { CartEquipmentList, CartTotalInfo } from '@/widgets/cart'

export type CartProps = {
    //
}

@Component({
    components: {
        'cart-total-info': CartTotalInfo,
        'cart-equipment-list': CartEquipmentList,
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'add-to-favorite-button': AddToFavorite,
        'remove-from-cart-button': RemoveFromCart,
    },
})
export default class Cart extends Vue {
    //
}
</script>

<!-- <style lang="scss" src="./Cart.critical.scss" /> -->
<!-- <style lang="scss" src="./Cart.main.scss" /> -->
