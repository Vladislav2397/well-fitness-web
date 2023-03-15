import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import WorkCard, { type WorkCardProps } from './WorkCard.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/WorkCard',
    component: WorkCard,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<WorkCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { WorkCard },
    methods: {
        handle: action('clicked'),
    },
    template: `<WorkCard v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
