import EquipmentPreview from './EquipmentPreview.vue'

export default {
    title: 'UI/EquipmentPreview',
    component: EquipmentPreview,
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { EquipmentPreview },
    template: `<EquipmentPreview v-bind="$props" />`,
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    //
}
