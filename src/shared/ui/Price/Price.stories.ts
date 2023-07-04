import { Price, type PriceProps } from './Price'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Price',
    component: Price,
    argTypes: {},
}

const Template: Story<PriceProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Price },
    methods: {},
    template: '<Price v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    isRow: false,
    classPrices: 'class',
    new: 123,
    old: '32255',
    size: 'base',
}
