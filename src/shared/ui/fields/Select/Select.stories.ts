import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { useArgs } from '@storybook/client-api'

import Select, { type SelectProps } from './Select.vue'

export default {
    title: 'Shared/Form/Select',
    component: Select,
    argTypes: {},
}

// const optionClicked = action('option clicked')

const Template: Story<SelectProps> = (args, { argTypes }) => {
    const [, updateArgs] = useArgs()

    return {
        props: Object.keys(argTypes),
        components: { Select },
        computed: {
            listeners() {
                return {
                    input: (value: string | null) => {
                        updateArgs({ ...args, value })
                        action('option clicked')(value)
                    },
                }
            },
        },
        template: `<Select v-bind="$props" v-on="listeners" />`,
    }
}

export const Default = Template.bind({})
Default.args = {
    value: null,
    options: [
        {
            id: 1,
            text: 'Item 1',
        },
        {
            id: 2,
            text: 'Item 2',
        },
        {
            id: 3,
            text: 'Item 3',
        },
    ],
}
