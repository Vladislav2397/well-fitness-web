import Blog from './Blog.vue'

export default {
    title: 'UI/Blog',
    component: Blog,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Blog },
    template: `<Blog v-bind="" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
