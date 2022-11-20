<template lang="pug">

.price(
    :class="classes"
)
    span(
        :class="classPrices"
    ) {{ correctPrice[0] }}
    del(
        :class="classPrices"
    )(
        v-if="correctPrice.length > 1"
    ) {{ correctPrice[1] }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Price extends Vue {
    @Prop() readonly isRow!: boolean
    @Prop() readonly new!: string | number
    @Prop() readonly old!: string | number
    @Prop() readonly classPrices!: string
    @Prop({ default: 'base' }) readonly size!: 'base' | 'inherit'

    get classes() {
        const classes = []

        if (this.isRow) classes.push('price--row')

        if (this.size) classes.push(`price--size-${this.size}`)

        return classes
    }

    get correctPrice() {
        const newPrice = `${this.new}`.toLocaleString()
        const oldPrice = `${this.old}`.toLocaleString()

        return this.old ? [
            newPrice, oldPrice
        ] : [
            newPrice
        ]
    }
}

</script>

<style lang="scss">
.price {
    span,
    del {
        display: block;
    }

    &--row {
        span,
        del {
            display: inline-block;
        }
    }

    &--size {
        &-base {
            span {
                @include fontSize(p2, medium);
            }

            del {
                @include fontSize(p3);
            }
        }
    }

    span {
        color: $dark;
        font-weight: 600;
    }

    del {
        color: $secondary;
        margin-left: toRem(12);
    }
}
</style>
