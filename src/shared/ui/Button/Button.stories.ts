import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Button from './Button.vue'
import { icons } from '@/shared/ui/Icon'
import { defineControls } from '@/shared/lib/stories'
import { ButtonProps } from '@/shared/ui/Button/Button.vue'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: defineControls({
        tag: ['button', 'a', 'div', 'router-link'],
        size: ['m', 's'],
        theme: ['brand', 'ghost-brand', 'ghost', 'secondary'],
        icon: ['', ...icons],
        iconSize: ['s', 'm', 'l'],
        href: '',
        iconLeft: false,
    }),
}

const Template: Story<ButtonProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { 'button-component': Button },
    methods: {
        handle: action('clicked'),
    },
    template: `<button-component v-bind="$props" @click="handle">Button</button-component>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
