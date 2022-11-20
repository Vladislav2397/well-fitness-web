<template lang="pug">

router-link.b-card-product(
    :to="to"
)
    .__image
        img(
            :src="imageSrc"
            :alt="imageAlt"
        )
    .__content
        slot

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class CardProduct extends Vue {
    @Prop({ default: '' }) readonly imageSrc!: string
    @Prop({ default: '' }) readonly imageAlt!: string
    @Prop({ default: '' }) readonly to!: string
}
</script>

<style lang="scss" src="./CardProduct.critical.scss"/>
<!--<style lang="scss" src="./CardProduct.main.scss"/>-->
