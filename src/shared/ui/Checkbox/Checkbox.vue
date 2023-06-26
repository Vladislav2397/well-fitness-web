<template lang="pug">

label.b-checkbox
    input.__box(
        type="checkbox"
        :checked="isActive"
        @input="isActive = $event"
    )
    slot


</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

export type CheckboxProps = {
    value: boolean
    id: string
}

@Component
export default class Checkbox extends Vue {
    @VModel() isActive: boolean | undefined

    @Prop() readonly id!: string
}
</script>

<!--<style lang="scss" src="./Checkbox.critical.scss"></style>-->
