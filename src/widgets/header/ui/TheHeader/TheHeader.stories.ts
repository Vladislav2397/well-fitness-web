import TheHeader from './TheHeader.vue'

export default {
    title: 'TheHeader',
    component: TheHeader,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { TheHeader },
    methods: {},
    template: '<TheHeader v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
