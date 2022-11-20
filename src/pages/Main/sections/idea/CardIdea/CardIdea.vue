<template lang="pug">

.b-card-idea(
    :class="classes"
)
    img(
        v-bind="imageAttributes"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardIdea extends Vue {
    @Prop() readonly src!: string
    @Prop() readonly alt!: string
    @Prop() readonly size!: string

    get imageAttributes (): Record<string, string> {
        return {
            src: this.src,
            alt: this.alt
        }
    }

    get classes (): string[] {
        const classes = []

        if (this.size) classes.push(`card-idea--size-${this.size}`)

        return classes
    }
}

</script>

<style lang="scss" src="./CardIdea.critical.scss" />
<!--<style lang="scss" src="./CardIdea.main.scss" />-->
