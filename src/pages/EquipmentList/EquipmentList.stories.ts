import { Story } from '@storybook/vue'

import EquipmentList, { type EquipmentListProps } from './EquipmentList.vue'

export default {
    title: 'undefined-path/EquipmentList',
    component: EquipmentList,
    argTypes: {},
}

const Template: Story<EquipmentListProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentList },
    methods: {},
    template: `<EquipmentList v-bind="$props">EquipmentList</EquipmentList>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
