<template lang="pug">

section-wrapper-component.b-grid-section(
    :title="title"
    :buttonText="button"
    @click="clickEmit"
)
    vue-grid-component.__grid(
        :layout="layout"
    )
        c-equipment-preview.__card(
            v-for="(card, index) in cardList"
            :key="index"
            :title="card.title"
            :imageSrc="card.image.src"
            :imageAlt="card.image.alt"
            :theme="card.theme"
            :stretch="card.stretch"
        )

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

import { Point, VueGrid } from '@/shared/layout/VueGrid'

import { SectionWrapper } from '../SectionWrapper'
import { EquipmentPreview } from '@/entities/equipment'

export type cardType = {
    title: string
    href: string
    image: {
        src: string
        alt: string
    }
    theme: 'dark' | 'light' | 'secondary'
    stretch: 'horizontal' | 'vertical' | 'none' | 'default'
}

@Component({
    props: {
        title: String,
        button: String,
    },
    components: {
        'section-wrapper-component': SectionWrapper,
        'vue-grid-component': VueGrid,
        'c-equipment-preview': EquipmentPreview,
    },
})
export default class GridSection extends Vue {
    @Prop() readonly layout!: Point[]
    @Prop() readonly cardList!: cardType[]
    @Prop() readonly title!: string
    @Prop() readonly button!: string

    @Emit('click') clickEmit(): void {
        /**/
    }
}
</script>

<!--<style lang="scss" src="./GridSection.critical.scss" />-->
<!--<style lang="scss" src="./GridSection.main.scss" />-->
