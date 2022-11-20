import SectionWrapper from './SectionWrapper.vue'

export default {
    title: 'SectionWrapper',
    component: SectionWrapper,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {SectionWrapper},
    methods: {},
    template: '<SectionWrapper v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
