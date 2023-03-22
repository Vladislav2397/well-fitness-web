import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import AsideLayout, { type AsideLayoutProps } from './AsideLayout.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/AsideLayout',
    component: AsideLayout,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<AsideLayoutProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { AsideLayout },
    methods: {
        handle: action('clicked'),
    },
    template: `<AsideLayout v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
