import Link from './Link.vue'
import { icons } from '@/shared/ui/Icon'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'Ui/Link',
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

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: {
        Link,
    },
    template: '<Link v-bind="$props">Link</Link>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
