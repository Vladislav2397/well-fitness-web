<template lang="pug">

.b-card-product-stats
    .__top
        quantity-component.__quantity(
            v-if="quantity !== undefined"
            :count="quantity"
        )
        link-component.__link(
            v-if="hasShowRoom !== undefined"
            tag="router-link"
            href="/"
        ) {{ hasShowRoom ? 'Есть в шоу-руме' : 'Скоро ожидается' }}
    .__title {{ title }}
    .__info(
        v-if="info"
    )
        p(
            v-for="(line, index) in info"
            :key="index"
        ) {{ `${line[0]}: ${line[1]}` }}
    rating-component.__rating(
        v-if="hasRating"
        :count="rating"
        :hasLabel="isRatingLabel"
    )
    .__bottom(
        v-if="price && price.length"
    )
        .__price(
            :class="{ 'card-product-stats__price--row' : isPriceRow }"
        )
            span {{ price[0].toLocaleString() }}
            del(
                v-if="price.length > 1"
            ) {{ price[1].toLocaleString() }}
        .__action(
            v-if="$slots.action"
        )
            slot(
                name="action"
            )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Quantity } from '@/shared/ui/Quantity'
import { Rating } from '@/shared/ui/Rating'

// import { ProductCardType } from '@/entities/equipment'

@Component({
    components: {
        'rating-component': Rating,
        'quantity-component': Quantity,
    },
})
export default class CardProductStats extends Vue {
    @Prop() readonly quantity!: string | number
    @Prop() readonly hasShowRoom!: boolean // ProductCardType['hasShowRoom']
    @Prop() readonly info!: [key: string, value: string][]
    @Prop() readonly title!: string // ProductCardType['title']
    @Prop() readonly rating!: number // ProductCardType['rating']
    @Prop() readonly price!: string[] // ProductCardType['price']

    @Prop({ default: false }) readonly isTitleBold!: boolean
    @Prop({ default: true }) readonly isRatingLabel!: boolean
    @Prop({ default: false }) readonly isPriceRow!: boolean
    @Prop({ default: true }) readonly hasRating!: boolean
}
</script>

<style lang="scss" src="./CardProductStats.critical.scss"/>
<!--<style lang="scss" src="./CardProductStats.main.scss"/>-->
