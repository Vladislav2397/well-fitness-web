import Tab, { type TabProps } from './Tab.vue'
import { Story } from '@storybook/vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'shared/Tab',
    component: Tab,
    argTypes: defineControls({
        value: false,
    }),
}

const Template: Story<TabProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Tab },
    template: `<Tab v-bind="$props">tab content</Tab>`,
})

export const Default = Template.bind({})
Default.args = {
    value: false,
}
