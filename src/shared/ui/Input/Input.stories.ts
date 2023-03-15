import Input, { type InputProps } from './Input.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Input',
    component: Input,
}

const Template: Story<InputProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Input },
    template: `<Input v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
