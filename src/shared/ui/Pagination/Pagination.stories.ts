import Pagination from './Pagination.vue'

export default {
    title: 'Pagination',
    component: Pagination,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Pagination},
    methods: {},
    template: '<Pagination v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
