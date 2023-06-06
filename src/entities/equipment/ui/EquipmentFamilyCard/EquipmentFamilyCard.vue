<template lang="pug">

c-card-product.b-equipment-family-card(
    :imageSrc="equipmentFamily.image.src"
    :imageAlt="equipmentFamily.image.alt"
    :to="`${$route.params.type}/${equipmentFamily.id}`"
)
    c-product-counter-list(
        :title="equipmentFamily.name"
        :list="equipmentFamily.categories"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { CardProduct } from '../CardProduct'
import {
    ProductCounterList,
    type ProductCounterListType,
} from '../ProductCounterList'

// FIXME: Change url into template (to argument) on correctly

const imageUrl = (image: string) => `${'MEDIA_HOST'}/${image}`

type EquipmentFamily = {
    id: number
    image: ImageView
    name: string
    categories: ProductCounterListType[]
}

@Component({
    components: {
        'c-product-counter-list': ProductCounterList,
        'c-card-product': CardProduct,
    },
})
export default class EquipmentFamilyCard extends Vue {
    @Prop() readonly equipmentFamily!: EquipmentFamily

    imageUrl = imageUrl

    get content() {
        return {}
    }

    get list() {
        return []
    }
}
</script>

<!-- <style lang="scss" src="./EquipmentFamilyCard.critical.scss" /> -->
