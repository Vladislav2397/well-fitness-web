import { StoryFn } from '@storybook/vue'
import Quantity, { type QuantityProps } from './Quantity'

export default {
    title: 'shared/Quantity',
    component: Quantity,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        count: {
            control: {
                type: 'number',
                min: 0,
                max: 3,
            },
            description: 'Уровень количества товара на складе',
        },
    },
}

const Template: StoryFn<QuantityProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Quantity },
    methods: {},
    template: '<Quantity v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    count: 3,
}

const TemplateAll: StoryFn<QuantityProps> = (args, { argTypes }) => ({
    components: { Quantity },
    methods: {},
    template: `<div><Quantity v-for="i in 4" :count="i - 1"/></div>`,
})

export const All = TemplateAll.bind({})
TemplateAll.args = {}
