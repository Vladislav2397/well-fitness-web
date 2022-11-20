<template lang="pug">

.b-characteristics
    template(
        v-for="characteristic in list"
    )
        p {{ characteristic.name }}:&nbsp;
            span {{ characteristic.value }}

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'

@Component
export default class Characteristics extends Vue {
    @Prop() readonly list!: {
        name: string
        value: string
    }[]
}
</script>

<style lang="scss" src="./Characteristics.critical.scss" />
