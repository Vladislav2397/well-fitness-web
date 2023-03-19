import BecomePartner from './BecomePartner.vue'

export default {
    title: 'BecomePartner',
    component: BecomePartner,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { BecomePartner },
    methods: {},
    template: '<BecomePartner v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
