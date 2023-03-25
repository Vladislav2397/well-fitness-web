import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import OrderInfoRow, { type OrderInfoRowProps } from './OrderInfoRow.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/OrderInfoRow',
    component: OrderInfoRow,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<OrderInfoRowProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { OrderInfoRow },
    methods: {
        handle: action('clicked'),
    },
    template: `<OrderInfoRow v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
