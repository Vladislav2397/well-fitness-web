import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import SideViewer, { type SideViewerProps } from './SideViewer.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/SideViewer',
    component: SideViewer,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<SideViewerProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SideViewer },
    methods: {
        handle: action('clicked'),
    },
    template: `<SideViewer v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
