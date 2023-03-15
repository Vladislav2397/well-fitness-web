import Checkbox, { type CheckboxProps } from './Checkbox.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Checkbox',
    component: Checkbox,
}

const Template: Story<CheckboxProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Checkbox },
    template: `<Checkbox v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    value: false,
}
