import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import NavigationTabsLayout, { type NavigationTabsLayoutProps } from './NavigationTabsLayout.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/NavigationTabsLayout',
    component: NavigationTabsLayout,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<NavigationTabsLayoutProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { NavigationTabsLayout },
    methods: {
        handle: action('clicked'),
    },
    template: `<NavigationTabsLayout v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
