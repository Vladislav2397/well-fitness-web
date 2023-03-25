import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ViewerBio, { type ViewerBioProps } from './ViewerBio.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/ViewerBio',
    component: ViewerBio,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<ViewerBioProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ViewerBio },
    methods: {
        handle: action('clicked'),
    },
    template: `<ViewerBio v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
