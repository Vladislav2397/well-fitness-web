import { Avatar, type AvatarProps } from './Avatar'
import { StoryFn } from '@storybook/vue'

export default {
    title: 'shared/Avatar',
    parameters: {
        layout: 'centered',
    },
    component: Avatar,
}

const Template: StoryFn<AvatarProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Avatar },
    template: `<Avatar v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    image: {
        src: '',
        alt: 'image',
    },
}
