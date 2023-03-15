import ButtonIcon, { type ButtonIconProps } from './ButtonIcon.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/ButtonIcon',
    component: ButtonIcon,
    argTypes: {},
}

const Template: Story<ButtonIconProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ButtonIcon },
    methods: {},
    template: '<ButtonIcon v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    //
}
