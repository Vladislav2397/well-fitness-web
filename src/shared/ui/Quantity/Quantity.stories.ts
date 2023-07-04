import { Story } from '@storybook/vue'
import Quantity, { type QuantityProps } from './Quantity'

export default {
    title: 'shared/Quantity',
    component: Quantity,
}

const Template: Story<QuantityProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Quantity },
    methods: {},
    template: '<Quantity v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    count: 3,
}
