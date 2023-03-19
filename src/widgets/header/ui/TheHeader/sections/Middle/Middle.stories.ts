import Middle from './Middle.vue'

export default {
    title: 'Middle',
    component: Middle,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Middle },
    methods: {},
    template: '<Middle v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
