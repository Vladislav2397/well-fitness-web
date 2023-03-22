import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Account, { type AccountProps } from './Account.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Account',
    component: Account,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Account },
    methods: {
        handle: action('clicked'),
    },
    template: `<Account v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
