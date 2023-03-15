import Avatar, { type AvatarProps } from './Avatar.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Avatar',
    component: Avatar,
}

const Template: Story<AvatarProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Avatar },
    template: `<Avatar v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    src: 'path/to/image',
    alt: 'image',
}
