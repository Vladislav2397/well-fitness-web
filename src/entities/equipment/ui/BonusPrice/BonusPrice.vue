<template lang="pug">

.b-bonus-price
    p + {{ price }}
    .__description Бонусных рублей

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BonusPrice extends Vue {
    @Prop() readonly price!: string
}
</script>

<style lang="scss" src="./BonusPrice.critical.scss" />
