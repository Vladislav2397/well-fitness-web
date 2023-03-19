import BonusPrice from './BonusPrice.vue'

export default {
    title: 'BonusPrice',
    component: BonusPrice,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { BonusPrice },
    methods: {},
    template: '<BonusPrice v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
