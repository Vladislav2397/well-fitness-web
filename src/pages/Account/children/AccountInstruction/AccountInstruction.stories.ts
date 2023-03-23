import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountInstruction, { type AccountInstructionProps } from './AccountInstruction.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountInstruction',
    component: AccountInstruction,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountInstructionProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountInstruction },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountInstruction v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
