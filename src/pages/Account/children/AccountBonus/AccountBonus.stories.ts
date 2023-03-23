import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AccountBonus, { type AccountBonusProps } from './AccountBonus.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AccountBonus',
    component: AccountBonus,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AccountBonusProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AccountBonus },
    methods: {
        handle: action('clicked'),
    },
    template: `<AccountBonus v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
