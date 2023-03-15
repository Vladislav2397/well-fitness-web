<template lang="pug">

.b-equipment-preview(
    :class="classes"
)
    .__title(
        v-html="title"
    )
    .__image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type EquipmentPreviewProps = Pick<
    EquipmentPreview,
    'stretch' | 'theme' | 'title' | 'imageSrc' | 'imageAlt'
>

@Component
export default class EquipmentPreview extends Vue {
    @Prop({ default: 'none' }) readonly stretch!:
        | 'vertical'
        | 'horizontal'
        | 'default'
        | 'none'
    @Prop({ default: 'light' }) readonly theme!: 'dark' | 'light' | 'secondary'
    @Prop() readonly title!: string
    @Prop() readonly imageSrc!: string
    @Prop() readonly imageAlt!: string

    get classes() {
        const classes = []

        if (this.stretch)
            classes.push(`equipment-preview--stretch-${this.stretch}`)

        if (this.theme) classes.push(`equipment-preview--theme-${this.theme}`)

        return classes
    }
}
</script>

<!--<style lang="scss" src="./equipment-preview&#45;&#45;critical.scss" />-->
