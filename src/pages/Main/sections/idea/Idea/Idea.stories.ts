import Idea from './Idea.vue'

export default {
    title: 'Idea',
    component: Idea,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { Idea },
    methods: {},
    template: '<Idea v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
