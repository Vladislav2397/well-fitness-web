import Addition from './Addition.vue'

export default {
    title: 'Addition',
    component: Addition,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Addition },
    methods: {},
    template: '<Addition v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
