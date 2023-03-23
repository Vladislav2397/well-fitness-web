import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountDiscount, { type AccountDiscountProps } from './AccountDiscount.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountDiscount',
    component: AccountDiscount,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountDiscountProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountDiscount },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountDiscount v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
