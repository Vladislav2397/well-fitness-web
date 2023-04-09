<template lang="pug">

c-field-decoration.b-select
    c-field-base(
        :value="showedValue"
        :placeholder="placeholder"
        @click="onClick"
        disabled
    )
        .__options(
            v-if="isOpen"
        )
            .__option(
                v-for="option in options"
                :key="option.id"
                @click.stop="onClickOption(option)"
            ) {{ option.text }}

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'
import { FieldDecoration } from '../FieldDecoration'
import { FieldBase } from '../FieldBase'

export type SelectProps = {
    //
}

export type Option = {
    id: number
    text: string
}

@Component({
    components: {
        'c-field-decoration': FieldDecoration,
        'c-field-base': FieldBase,
    },
})
export default class Select extends Vue {
    @VModel() valueModel!: number | null
    @Prop() readonly placeholder!: string
    @Prop({ required: true }) readonly options!: Option[]

    get showedValue() {
        return this.options.find(({ id }) => id === this.valueModel)?.text ?? ''
    }

    isOpen = false

    onClick() {
        this.isOpen = !this.isOpen
    }

    onClickOption({ id }: Option) {
        this.isOpen = false

        this.valueModel = id === this.valueModel ? null : id
    }
}
</script>

<!-- <style lang="scss" src="./Select.critical.scss"> -->
<!-- <style lang="scss" src="./Select.main.scss"> -->
