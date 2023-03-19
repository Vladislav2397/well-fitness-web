import Range from './Range.vue'

export default {
    title: 'Range',
    component: Range,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Range },
    methods: {},
    template: '<Range v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
