<template lang="pug">

.b-card-addition
    .__image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    .__title {{ title }}
    .__description {{ description }}
    link-component.__link(
        :href="linkHref"
        tag="router-link"
        theme="primary"
        icon="arrow"
        iconSize="s"
    ) {{ linkText }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Link } from '@/shared/ui/Link'

@Component({
    components: {
        'link-component': Link,
    },
})
export default class CardAddition extends Vue {
    @Prop() readonly imageSrc!: string
    @Prop() readonly imageAlt!: string
    @Prop() readonly title!: string
    @Prop() readonly description!: string
    @Prop() readonly linkText!: string
    @Prop() readonly linkHref!: string
}
</script>

<!--<style lang="scss" src="./CardAddition.critical.scss" />-->
<!--<style lang="scss" src="./CardAddition.main.scss" />-->
