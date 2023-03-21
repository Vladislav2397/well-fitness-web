import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Project, { type ProjectProps } from './Project.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Project',
    component: Project,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<ProjectProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Project },
    methods: {
        handle: action('clicked'),
    },
    template: `<Project v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
