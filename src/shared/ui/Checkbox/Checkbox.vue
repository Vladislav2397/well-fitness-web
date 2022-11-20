<template lang="pug">

label.b-checkbox(
    :for="id"
)
    input.__box(
        v-model="isActive"
        :id="id"
        type="checkbox"
        :checked="isActive"
    )
    slot


</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

@Component
export default class Checkbox extends Vue {
    @VModel() isActive: boolean | undefined

    @Prop() readonly id!: string
}

</script>

<style lang="scss" src="./Checkbox.critical.scss"></style>
