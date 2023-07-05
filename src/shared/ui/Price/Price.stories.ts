import { Price, type PriceProps } from './Price'
import { StoryFn } from '@storybook/vue'

export default {
    title: 'shared/Price',
    component: Price,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        isRow: {
            control: 'boolean',
            description: 'View price rowed',
        },
        new: {
            control: 'number',
            description: 'New price',
        },
        old: {
            control: 'number',
            description: 'Old price',
        },
        size: {
            control: 'select',
            options: ['base', 'inherit'],
            description: 'Old price',
        },
    },
}

const Template: StoryFn<PriceProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Price },
    methods: {},
    template: '<Price v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    isRow: false,
    new: 123,
    old: 32255,
    size: 'base',
}

export const WithoutOld = Template.bind({})
WithoutOld.args = {
    isRow: false,
    new: 123,
    size: 'base',
}
