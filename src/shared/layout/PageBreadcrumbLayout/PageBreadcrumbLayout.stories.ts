import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import PageBreadcrumbLayout, { type PageBreadcrumbLayoutProps } from './PageBreadcrumbLayout.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/PageBreadcrumbLayout',
    component: PageBreadcrumbLayout,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<PageBreadcrumbLayoutProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { PageBreadcrumbLayout },
    methods: {
        handle: action('clicked'),
    },
    template: `<PageBreadcrumbLayout v-bind="" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
