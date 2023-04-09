<template lang="pug">

.b-field-base(
    :class="classes"
    @click="clickEmit"
)
    input(
        v-model="valueModel"
        :placeholder="placeholder"
        :disabled="disabled"
    )
    slot
    slot(
        name="right"
    )

</template>

<script lang="ts">
import {
    Component,
    Emit,
    Prop,
    PropSync,
    VModel,
    Vue,
} from 'vue-property-decorator'

export type FieldBaseProps = {
    //
}

@Component
export default class FieldBase extends Vue {
    @VModel() readonly valueModel!: string

    @Prop() readonly disabled!: boolean
    @Prop({ default: 'm' }) readonly size!: 's' | 'm'
    @Prop() readonly placeholder?: string
    @PropSync('error') errorSync!: boolean

    @Emit('click') clickEmit() {
        //
    }

    get classes() {
        return {
            'field-base--error': this.errorSync,
            'field-base--disabled': this.disabled,
            [`field-base--size-${this.size}`]: this.size,
        }
    }
}
</script>

<!-- <style lang="scss" src="./FieldBase.critical.scss"> -->
<!-- <style lang="scss" src="./FieldBase.main.scss"> -->
