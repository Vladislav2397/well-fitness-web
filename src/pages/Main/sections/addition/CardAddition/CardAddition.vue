<template lang="pug">

.b-card-addition(
    :class="{ 'card-addition--active': isActive }"
)
    .__logo(
        v-if="isActive"
    )
        img(
            src="src"
            alt="alt"
        )
    .__image
        img(
            :src="image.src"
            :alt="image.alt"
        )
    .__title {{ title }}
    .__description {{ description }}
    link-component.__link(
        :href="linkHref"
        tag="router-link"
        :theme="isActive ? 'white' : 'primary'"
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
    @Prop() readonly image!: ImageView
    @Prop() readonly title!: string
    @Prop() readonly description!: string
    @Prop() readonly linkText!: string
    @Prop() readonly linkHref!: string
    @Prop(Boolean) isActive!: boolean
}
</script>

<!--<style lang="scss" src="./CardAddition.critical.scss" />-->
<!--<style lang="scss" src="./CardAddition.main.scss" />-->
