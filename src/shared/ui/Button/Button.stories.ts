import { action } from '@storybook/addon-actions'
// import { withDesign } from 'storybook-addon-designs'

import Button from './Button.vue'
import { icons } from '@/shared/ui/Icon'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'Ui/Button',
    component: Button,
    // decorators: [withDesign],
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

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { 'button-component': Button },
    methods: {
        onClick: action('clicked'),
    },
    template: `<button-component v-bind="$props" @click="onClick">Button</button-component>`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
// @ts-ignore
// Default.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/Ip0FfiirJVc4nxjyXjgene/WellFitness?node-id=4102%3A68737',
//     },
// }
