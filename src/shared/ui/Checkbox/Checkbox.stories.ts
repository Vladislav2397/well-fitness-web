import Checkbox from './Checkbox.vue'

export default {
    title: 'UI/Checkbox',
    component: Checkbox,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Checkbox},
    template: `<Checkbox v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
