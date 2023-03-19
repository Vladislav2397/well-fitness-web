import PaginationWrapper from './PaginationWrapper.vue'

export default {
    title: 'PaginationWrapper',
    component: PaginationWrapper,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { PaginationWrapper },
    methods: {},
    template: '<PaginationWrapper v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
