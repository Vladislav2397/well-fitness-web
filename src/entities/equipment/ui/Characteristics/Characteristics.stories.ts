import Characteristics from './Characteristics.vue'

export default {
    title: 'Characteristics',
    component: Characteristics,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Characteristics },
    methods: {},
    template: '<Characteristics v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
