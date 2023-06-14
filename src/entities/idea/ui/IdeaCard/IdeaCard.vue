<template lang="pug">

.b-idea-card(
    :class="classes"
)
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
    // FIXME: Remove optional operator for link
    @Prop() readonly idea!: {
        image: { src: string; alt: string }
        link?: string
    }
    @Prop({ default: 'vertical' }) readonly orientation!:
        | 'vertical'
        | 'horizontal'

    get classes() {
        return [`idea-card--${this.orientation}`]
    }
}
</script>

<!--<style lang="scss" src="./IdeaCard.critical.scss" />-->
<!--<style lang="scss" src="./IdeaCard.main.scss" />-->
