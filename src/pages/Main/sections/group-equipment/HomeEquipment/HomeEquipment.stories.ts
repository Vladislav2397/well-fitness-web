import HomeEquipment from './HomeEquipment.vue'

export default {
    title: 'HomeEquipment',
    component: HomeEquipment,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { HomeEquipment },
    methods: {},
    template: '<HomeEquipment v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
