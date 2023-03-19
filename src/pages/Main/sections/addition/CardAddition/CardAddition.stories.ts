import CardAddition from './CardAddition.vue'

export default {
    title: 'CardAddition',
    component: CardAddition,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CardAddition },
    methods: {},
    template: '<CardAddition v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
