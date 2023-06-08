import { Story } from '@storybook/vue'

import EquipmentFilters, {
    type EquipmentFiltersProps,
} from './EquipmentFilters.vue'

export default {
    title: 'undefined-path/EquipmentFilters',
    component: EquipmentFilters,
    argTypes: {},
}

const Template: Story<EquipmentFiltersProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentFilters },
    methods: {},
    template: `<EquipmentFilters v-bind="$props">EquipmentFilters</EquipmentFilters>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
