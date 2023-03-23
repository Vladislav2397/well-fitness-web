import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountFeedback, { type AccountFeedbackProps } from './AccountFeedback.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountFeedback',
    component: AccountFeedback,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountFeedbackProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountFeedback },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountFeedback v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
