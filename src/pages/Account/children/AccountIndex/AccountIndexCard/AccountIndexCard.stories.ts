import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountIndexCard, { type AccountIndexCardProps } from './AccountIndexCard.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountIndexCard',
    component: AccountIndexCard,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountIndexCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountIndexCard },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountIndexCard v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
