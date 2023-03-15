import Link, { type LinkProps } from './Link.vue'
import { icons } from '@/shared/ui/Icon'
import { defineControls } from '@/shared/lib/stories'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Link',
    component: Link,
    argTypes: defineControls({
        tag: ['router-link', 'a', 'span', 'div'],
        iconSize: ['s', 'm', 'l'],
        theme: ['primary', 'secondary'],
        href: '',
        icon: ['', ...icons],
        iconLeft: false,
    }),
}

const Template: Story<LinkProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: {
        Link,
    },
    template: '<Link v-bind="$props">Link</Link>',
})

export const Default = Template.bind({})
Default.args = {
    tag: 'a',
    icon: 'plus',
    iconLeft: false,
    href: '',
    theme: 'dark',
    iconSize: 'm',
}
