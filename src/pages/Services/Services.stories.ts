import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Services, { type ServicesProps } from './Services.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Services',
    component: Services,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<ServicesProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Services },
    methods: {
        handle: action('clicked'),
    },
    template: `<Services v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
