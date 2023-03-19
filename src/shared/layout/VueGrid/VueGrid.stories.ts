import VueGrid from './VueGrid.vue'

export default {
    title: 'VueGrid',
    component: VueGrid,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { VueGrid },
    methods: {},
    template: '<VueGrid v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
