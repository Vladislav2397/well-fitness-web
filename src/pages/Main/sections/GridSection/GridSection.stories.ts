import GridSection from './GridSection.vue'

export default {
    title: 'GridSection',
    component: GridSection,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { GridSection },
    methods: {},
    template: '<GridSection v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
