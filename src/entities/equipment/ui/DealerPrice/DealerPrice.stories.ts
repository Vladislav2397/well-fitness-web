import DealerPrice from './DealerPrice.vue'

export default {
    title: 'DealerPrice',
    component: DealerPrice,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {DealerPrice},
    methods: {},
    template: '<DealerPrice v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
