<template lang="pug">

c-card-product.b-catalog-card(
    :to="to"
)
    c-card-product-stats.__stats(
        :hasRating="true"
        :hasShowRoom="true"
        :quantity="3"
        :title="content.label"
        :rating="content.rating"
        :price="[1000, 1200]"
    )
        template(
            #action
        )
            c-button(
                theme="brand"
                @click="addToCart"
            ) В корзину

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { CardProduct } from '../CardProduct'
import { CardProductStats } from '../CardProductStats'

// import { Equipment } from '@/entities/equipment'
// import { Model } from '@/shared/config/decorators'
// import { Repository } from '@vuex-orm/core'
import Button from '@/shared/ui/Button/Button.vue'
// import { Cart, CartService } from '@/entities/cart'
// import { Maybe } from '@/shared/lib/helpers'

@Component({
    components: {
        'c-button': Button,
        'c-card-product-stats': CardProductStats,
        'c-card-product': CardProduct,
    },
})
export default class CatalogCard extends Vue {
    @Prop() readonly id!: string | number
    @Prop() readonly to!: string

    // @Model(Equipment) Equipment!: Repository<Equipment>
    // @Model(Cart) Cart!: Repository<Cart>

    get CartService() {
        return {} // new CartService(this.$store, this.Cart)
    }

    addToCart(): void {
        if (this.content) {
            // this.CartService.add(this.content)
        }
    }

    get content() {
        return undefined // this.Equipment.find(`${this.id}`)
    }
}
</script>

<style lang="scss" src="./CatalogCard.critical.scss" />
<!--<style lang="scss" src="./CatalogCard.main.scss" />-->
