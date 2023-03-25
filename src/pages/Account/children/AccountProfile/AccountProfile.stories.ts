import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountProfile, { type AccountProfileProps } from './AccountProfile.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountProfile',
    component: AccountProfile,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountProfileProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountProfile },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountProfile v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
