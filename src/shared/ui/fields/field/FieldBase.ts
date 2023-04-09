import { CreateElement } from 'vue'
import {
    Component,
    Emit,
    Prop,
    PropSync,
    VModel,
    Vue,
} from 'vue-property-decorator'

@Component
export default class FieldBase extends Vue {
    @VModel() valueModel!: string

    @PropSync('error') errorSync!: boolean
    @Prop({ default: false, type: Boolean }) readonly disabled!: boolean
    @Prop({ default: 'm' }) readonly size!: 's' | 'm'

    @Emit('change') changeEmit(value: string) {
        console.log('change emit called with', value)
        return value
    }

    get classes() {
        return {
            'field-base': true,
            'field-base--error': this.errorSync,
            'field-base--disabled': this.disabled,
            [`field-base--size-${this.size}`]: this.size,
        }
    }

    get inputProps() {
        return {
            attrs: {
                value: this.valueModel,
                disabled: this.disabled,
            },
            on: {
                input: (event: any) => {
                    this.valueModel = event.target?.value
                },
                change: (event: any) => {
                    this.changeEmit(event.target?.value)
                },
            },
        }
    }

    field(h: CreateElement) {
        return h('input', this.inputProps)
    }

    render(h: CreateElement) {
        return h(
            'div',
            {
                class: this.classes,
            },
            [this.field(h)]
        )
    }
}
