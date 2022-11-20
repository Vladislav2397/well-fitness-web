import EquipmentFamilyCard from './EquipmentFamilyCard.vue'

export default {
    title: 'UI/EquipmentFamilyCard',
    component: EquipmentFamilyCard,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { EquipmentFamilyCard },
    template: `<EquipmentFamilyCard v-bind="$props" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
