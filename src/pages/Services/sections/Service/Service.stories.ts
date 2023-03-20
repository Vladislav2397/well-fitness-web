import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Service, { type ServiceProps } from './Service.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Service',
    component: Service,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<ServiceProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Service },
    methods: {
        handle: action('clicked'),
    },
    template: `<Service v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
