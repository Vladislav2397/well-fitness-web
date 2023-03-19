<template lang="pug">

.b-dealer-price
    p {{ price }} ₽
    .__description Цена для диллера

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DealerPrice extends Vue {
    @Prop() readonly price!: string
}
</script>

<style lang="scss" src="./DealerPrice.critical.scss" />
