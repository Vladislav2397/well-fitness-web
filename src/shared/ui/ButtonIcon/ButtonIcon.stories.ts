import ButtonIcon from './ButtonIcon.vue'

export default {
    title: 'ButtonIcon',
    component: ButtonIcon,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {ButtonIcon},
    methods: {},
    template: '<ButtonIcon v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
