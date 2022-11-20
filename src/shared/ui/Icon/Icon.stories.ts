import Icon, { icons } from './Icon.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'Ui/Icon',
    component: Icon,
    argTypes: defineControls({
        size: ['s', 'm', 'l'],
        name: [...icons],
    }),
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Icon },
    template: '<Icon v-bind="$props" />',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
