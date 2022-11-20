import Avatar from './Avatar.vue'

export default {
    title: 'UI/Avatar',
    component: Avatar,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Avatar},
    template: `<Avatar v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
