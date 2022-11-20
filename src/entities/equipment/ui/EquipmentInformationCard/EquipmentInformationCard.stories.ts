import EquipmentInformationCard from './EquipmentInformationCard.vue'

export default {
    title: 'EquipmentInformationCard',
    component: EquipmentInformationCard,
    argTypes: {},
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {EquipmentInformationCard},
    methods: {},
    template: '<EquipmentInformationCard v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
