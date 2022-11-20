import Tab from './Tab.vue'

export default {
    title: 'UI/Tab',
    component: Tab,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {Tab},
    template: `<Tab v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
