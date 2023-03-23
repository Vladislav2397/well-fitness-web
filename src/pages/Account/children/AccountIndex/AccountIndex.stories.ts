import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountIndex, { type AccountIndexProps } from './AccountIndex.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountIndex',
    component: AccountIndex,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountIndexProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountIndex },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountIndex v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
