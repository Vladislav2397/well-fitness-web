<template lang="pug">

.b-idea-card
    img(
        :src="idea.image.src"
        :alt="idea.image.alt"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type IdeaCardProps = Pick<IdeaCard, 'idea'> &
    Partial<Pick<IdeaCard, 'orientation'>>

@Component
export default class IdeaCard extends Vue {
    @Prop() readonly idea!: { image: { src: string; alt: string } }
    @Prop({ default: 'vertical' }) readonly orientation!:
        | 'vertical'
        | 'horizontal'
}
</script>

<!--<style lang="scss" src="./IdeaCard.critical.scss" />-->
<!--<style lang="scss" src="./IdeaCard.main.scss" />-->
