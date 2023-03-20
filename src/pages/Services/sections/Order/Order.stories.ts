import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Order, { type OrderProps } from './Order.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Order',
    component: Order,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<OrderProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Order },
    methods: {
        handle: action('clicked'),
    },
    template: `<Order v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
