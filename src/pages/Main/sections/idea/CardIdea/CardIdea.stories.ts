import CardIdea from './CardIdea.vue'

export default {
    title: 'CardIdea',
    component: CardIdea,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {CardIdea},
    methods: {},
    template: '<CardIdea v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
