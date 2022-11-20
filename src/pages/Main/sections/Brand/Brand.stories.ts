import Brand from './Brand.vue'

export default {
    title: 'Brand',
    component: Brand,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Brand},
    methods: {},
    template: '<Brand v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
