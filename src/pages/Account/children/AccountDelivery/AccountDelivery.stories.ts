import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountDelivery, { type AccountDeliveryProps } from './AccountDelivery.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountDelivery',
    component: AccountDelivery,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountDeliveryProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountDelivery },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountDelivery v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
