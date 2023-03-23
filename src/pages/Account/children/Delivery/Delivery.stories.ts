import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Delivery, { type DeliveryProps } from './Delivery.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Delivery',
    component: Delivery,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<DeliveryProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Delivery },
    methods: {
        handle: action('clicked'),
    },
    template: `<Delivery v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
