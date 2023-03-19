import About from './About.vue'

export default {
    title: 'About',
    component: About,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { About },
    methods: {},
    template: '<About v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
