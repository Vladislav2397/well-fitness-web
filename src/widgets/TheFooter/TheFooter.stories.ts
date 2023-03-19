import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import TheFooter, { type TheFooterProps } from './TheFooter.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/TheFooter',
    component: TheFooter,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<TheFooterProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { TheFooter },
    methods: {
        handle: action('clicked'),
    },
    template: `<TheFooter v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
