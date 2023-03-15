import Logo, { type LogoProps } from './Logo.vue'
import { defineControls } from '@/shared/lib/stories'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Logo',
    component: Logo,
    argTypes: defineControls({
        size: ['s', 'm', 'l'],
    }),
}

const Template: Story<LogoProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        Logo,
    },
    template: '<Logo v-bind="$props" />',
})

export const Default = Template.bind({})
Default.args = {
    size: 'm',
}
