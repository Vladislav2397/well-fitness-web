<template lang="pug">

.b-card-product-stats
    .__top
        quantity-component.__quantity(
            v-if="equipment.quantity !== undefined"
            :count="equipment.quantity"
        )
        link-component.__link(
            v-if="equipment.hasShowRoom !== undefined"
            tag="router-link"
            href="/"
        ) {{ equipment.hasShowRoom ? 'Есть в шоу-руме' : 'Скоро ожидается' }}
    .__title {{ equipment.name }}
    .__info(
        v-if="equipment.info"
    )
        p(
            v-for="(line, index) in equipment.info"
            :key="index"
        ) {{ `${line[0]}: ${line[1]}` }}
    rating-component.__rating(
        v-if="hasRating"
        :count="equipment.rating"
        :hasLabel="isRatingLabel"
    )
    .__bottom(
        v-if="equipment.price && equipment.price.length"
    )
        .__price(
            :class="{ 'card-product-stats__price--row' : isPriceRow }"
        )
            span {{ equipment.price[0].toLocaleString() }}
            del(
                v-if="equipment.price.length > 1"
            ) {{ equipment.price[1].toLocaleString() }}
        .__action(
            v-if="$slots.action"
        )
            slot(
                name="action"
            )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { domain } from '@/shared/lib'

import { Quantity } from '@/shared/ui/Quantity'
import { Rating } from '@/shared/ui/Rating'
import { Link } from '@/shared/ui/Link'

export type CardProductStatsProps = Pick<
    CardProductStats,
    'equipment' | 'isTitleBold' | 'isRatingLabel' | 'isPriceRow' | 'hasRating'
>

@Component({
    components: {
        'rating-component': Rating,
        'quantity-component': Quantity,
        'link-component': Link,
    },
})
export default class CardProductStats extends Vue {
    @Prop() readonly equipment!: Pick<
        domain.Equipment,
        'name' | 'hasShowRoom' | 'price' | 'quantity' | 'rating' | 'info'
    >

    // @Prop() readonly quantity!: string | number
    // @Prop() readonly hasShowRoom!: boolean // ProductCardType['hasShowRoom']
    // @Prop() readonly info!: [key: string, value: string][]
    // @Prop() readonly title!: string // ProductCardType['title']
    // @Prop() readonly rating!: number // ProductCardType['rating']
    // @Prop() readonly price!: string[] // ProductCardType['price']

    @Prop({ default: false }) readonly isTitleBold!: boolean
    @Prop({ default: true }) readonly isRatingLabel!: boolean
    @Prop({ default: false }) readonly isPriceRow!: boolean
    @Prop({ default: true }) readonly hasRating!: boolean
}
</script>

<!--<style lang="scss" src="./CardProductStats.critical.scss"/>-->
<!--<style lang="scss" src="./CardProductStats.main.scss"/>-->
