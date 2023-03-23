import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountOrders, { type AccountOrdersProps } from './AccountOrders.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountOrders',
    component: AccountOrders,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountOrdersProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountOrders },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountOrders v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
