<!--<template lang="pug">-->

<!--.b-cart-header-icon-->
<!--c-icon.__action(-->
<!--size="m"-->
<!--name="cart"-->
<!--@click="toRoute('/cart')"-->
<!--)-->

<!--</template>-->

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator'
import { Icon } from '@/shared/ui/Icon'
import { Getter } from '@/shared/config'

@Component
export default class CartHeaderIcon extends Vue {
    toCart() {
        if (this.$route.name === 'Cart') return

        return this.$router.push('/cart')
    }

    @Getter('cart/length') length!: number

    render() {
        return (
            <div class={['cart-header-icon']}>
                {this.length > 0 && (
                    <div class="cart-header-icon__badge">{this.length}</div>
                )}
                <Icon
                    class="cart-header-icon__icon"
                    name="cart"
                    vOn:click={this.toCart}
                />
            </div>
        )
    }
}
</script>
