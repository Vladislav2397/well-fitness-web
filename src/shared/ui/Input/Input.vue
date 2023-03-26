<template lang="pug">

label.b-input(
    :class="classes"
)
    .__label.typo.typo--size-p4(
        v-if="label"
    ) {{ label }}
    .__field
        .__prefix(
            v-if="$slots.prefix"
        )
            slot(
                name="prefix"
            )
        .__value
            input.typo.typo--size-p4(
                v-model.lazy="inputValue"
                :name="name"
                :disabled="disabled"
                :placeholder="placeholder"
                v-on:input="onInput"
                v-on:focus="onFocus"
                v-on:blur="onBlur"
                autocomplete="false"
            )
        .__postfix(
            v-if="$slots.postfix"
        )
            slot(
                name="postfix"
            )
    .__description(
        v-if="errorSync && errorText"
    ) {{ errorText }}

</template>

<script lang="ts">
import { Component, Prop, PropSync, VModel, Vue } from 'vue-property-decorator'

export type InputProps = Pick<
    Input,
    'textSize' | 'placeholder' | 'name' | 'label' | 'disabled' | 'errorText'
> &
    Partial<Pick<Input, 'theme' | 'size'>> & {
        value: Input['inputValue']
        error: Input['errorSync']
    }

type inputThemePropType = 'light' | 'dark' | 'transparent'

@Component
export default class Input extends Vue {
    @VModel({ type: [String, Number] }) inputValue!: string | number

    @Prop({ default: 'light' }) readonly theme!: inputThemePropType
    @Prop({ default: 'base' }) readonly size!: 'base' | 'inherit'
    @Prop() readonly textSize!: 'p3' | 'p4'
    @Prop() readonly placeholder!: string
    @Prop() readonly name!: string
    @Prop() readonly label!: string
    @Prop() readonly disabled!: boolean
    @Prop() readonly errorText!: string

    @PropSync('error') errorSync?: boolean

    isFocus = false

    get classes(): string[] {
        const classes = []

        if (this.theme) classes.push(`input--theme-${this.theme}`)
        if (this.size) classes.push(`input--size-${this.size}`)
        if (this.errorSync) classes.push('input--error')

        return classes
    }

    onFocus() {
        this.isFocus = true
    }

    onBlur() {
        this.isFocus = false
    }

    updated(): void {
        console.log('updated Input')
    }

    onInput(): void {
        if (this.errorSync) {
            this.errorSync = false
        }
    }
}
</script>

<!--<style lang="scss" src="./Input.critical.scss" />-->
