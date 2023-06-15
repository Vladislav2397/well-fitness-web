<template lang="pug">

.b-cart
    page-breadcrumb-layout.__breadcrumb
    .__container.container
        .__list
            .__item(
                v-for="item in list"
            )
                add-to-favorite-button(
                    :equipment="item"
                )
                remove-from-cart-button(
                    :equipment="item"
                )
        .__guarantee
        .__addition


</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PageBreadcrumbLayout } from '@/shared/layout/PageBreadcrumbLayout'
import { AddToFavorite, RemoveFromCart } from '@/features/cart'

export type CartProps = {
    //
}

@Component({
    components: {
        'page-breadcrumb-layout': PageBreadcrumbLayout,
        'add-to-favorite-button': AddToFavorite,
        'remove-from-cart-button': RemoveFromCart,
    },
})
export default class Cart extends Vue {
    list = [
        {
            //
        },
        {
            //
        },
        {
            //
        },
    ]
}
</script>

<!-- <style lang="scss" src="./Cart.critical.scss" /> -->
<!-- <style lang="scss" src="./Cart.main.scss" /> -->
