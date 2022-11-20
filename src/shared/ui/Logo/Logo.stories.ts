import Logo from './Logo.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'Ui/Logo',
    component: Logo,
    argTypes: defineControls({
        size: ['s', 'm', 'l'],
    }),
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        Logo,
    },
    template: '<Logo v-bind="$props" />',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
