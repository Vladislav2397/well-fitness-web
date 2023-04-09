<template lang="pug">

label.b-field-decoration
    .__label(
        v-if="label"
    ) {{ label }}
    slot
    .__descirption(
        v-if="description"
    ) {{ description }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type FieldDecorationProps = Pick<
    FieldDecoration,
    'label' | 'description'
>

@Component
export default class FieldDecoration extends Vue {
    @Prop() readonly label!: string
    @Prop() readonly description!: string
}
</script>

<!-- <style lang="scss" src="./FieldDecoration.critical.scss"> -->
<!-- <style lang="scss" src="./FieldDecoration.main.scss"> -->
