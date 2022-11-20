import GymEquipment from './GymEquipment.vue'

export default {
    title: 'GymEquipment',
    component: GymEquipment,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {GymEquipment},
    methods: {},
    template: '<GymEquipment v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
