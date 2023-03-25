import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountValueCard, { type AccountValueCardProps } from './AccountValueCard.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountValueCard',
    component: AccountValueCard,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountValueCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountValueCard },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountValueCard v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
