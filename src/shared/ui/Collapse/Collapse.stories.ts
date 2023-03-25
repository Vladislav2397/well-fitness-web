import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Collapse, { type CollapseProps } from './Collapse.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Collapse',
    component: Collapse,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<CollapseProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Collapse },
    methods: {
        handle: action('clicked'),
    },
    template: `<Collapse v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
