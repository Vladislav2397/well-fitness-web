import { type Story } from '@storybook/vue'
import { useArgs } from '@storybook/client-api'
import { action } from '@storybook/addon-actions'

import Input from '../field/InputField'
import { type InputProps } from './Input.vue'
import DeviceProvider from '@/shared/lib/providers/device'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'Shared/Form/Input',
    component: Input,
    argTypes: defineControls({
        error: false,
        disabled: false,
        placeholder: '',
    }),
}

const Template: Story<InputProps> = (args, { argTypes }) => {
    const [, updateArgs] = useArgs()

    return {
        props: Object.keys(argTypes),
        components: { Input },
        mixins: [DeviceProvider],
        computed: {
            listeners() {
                return {
                    input: (value: string) => {
                        action('input emit')(value)
                    },
                    change: (value: string) => {
                        action('change emit')(value)
                        updateArgs({ ...args, value })
                    },
                }
            },
        },
        methods: {
            handler(value) {
                updateArgs({ ...args, value })
            },
        },
        template: `<Input v-bind="$props" v-on="listeners" />`,
    }
}

export const Default = Template.bind({})
Default.args = {
    value: '',
}
