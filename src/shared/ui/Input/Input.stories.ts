import Input from './Input.vue'

export default {
    title: 'UI/Input',
    component: Input,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Input},
    template: `<Input v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
