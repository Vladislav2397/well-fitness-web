import { Component, Prop, Vue } from 'vue-property-decorator'
import { Button } from '@/shared/ui'
import type { Equipment } from '@/shared-kernel'

@Component
export default class AddToCart extends Vue {
    @Prop() equipment!: Equipment

    get hasIntoCart() {
        return this.$store.getters['cart/hasEquipment'](this.equipment)
    }

    get hasInStock() {
        return this.$store.getters['cart/hasInStock'](this.equipment)
    }

    toCart() {
        if (this.hasIntoCart) return

        this.$store.commit('cart/addToCart', this.equipment)
    }

    render() {
        return (
            <Button
                isDisable={!this.hasInStock}
                theme={this.hasIntoCart ? 'secondary' : 'brand'}
                vOn:click={this.toCart}>
                {this.hasIntoCart ? 'В корзине' : 'В корзину'}
            </Button>
        )
    }
}
