<template lang="pug">

c-card-product.b-equipment-family-card(
    :imageSrc="imageUrl(content.image)"
    imageAlt="equipmentFamily.image.alt"
    :to="`${$route.params.group}/${id}`"
)
    c-product-counter-list(
        :title="content.name"
        :list="list"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { CardProduct } from '../CardProduct'
import { ProductCounterList } from '../ProductCounterList'
// import {Model} from "@/shared/config/decorators"
// import {EquipmentFamily} from "@/entities/equipment"
// import {Repository} from "@vuex-orm/core"
// import {MEDIA_HOST} from "@/shared/config/env"

const imageUrl = (image: string) => `${'MEDIA_HOST'}/${image}`

@Component({
    components: {
        'c-product-counter-list': ProductCounterList,
        'c-card-product': CardProduct,
    },
})
export default class EquipmentFamilyCard extends Vue {
    @Prop() readonly id!: number | string

    // @Model(EquipmentFamily) EquipmentFamily!: Repository<EquipmentFamily>

    imageUrl = imageUrl

    get content() {
        return {} /* this.EquipmentFamily
            .query()
            .with('categories')
            .find(`${this.id}`) */
    }

    get list() {
        // @ts-ignore
        return this.content.categories.map(category => [
            category.name,
            category.count,
        ])
    }
}
</script>

<style lang="scss" src="./equipment-family-card--critical.scss" />
