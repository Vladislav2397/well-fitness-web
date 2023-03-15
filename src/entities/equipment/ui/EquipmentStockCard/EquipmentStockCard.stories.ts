import EquipmentStockCard from './EquipmentStockCard.vue'

export default {
    title: 'UI/EquipmentStockCard',
    component: EquipmentStockCard,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { EquipmentStockCard },
    template: `<EquipmentStockCard v-bind="$props" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
