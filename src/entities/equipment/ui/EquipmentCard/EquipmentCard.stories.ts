import EquipmentCard from './EquipmentCard.vue'

export default {
    title: 'UI/EquipmentCard',
    component: EquipmentCard,
}

const Template = (args: any, {argTypes}: any) => ({
    props: Object.keys(argTypes),
    components: {EquipmentCard},
    template: `<EquipmentCard v-bind="" />`
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
