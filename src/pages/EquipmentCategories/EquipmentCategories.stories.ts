import { Story } from '@storybook/vue'

import EquipmentCategories, {
    type EquipmentCategoriesProps,
} from './EquipmentCategories.vue'

export default {
    title: 'undefined-path/EquipmentCategories',
    component: EquipmentCategories,
    argTypes: {},
}

const Template: Story<EquipmentCategoriesProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentCategories },
    methods: {},
    template: `<EquipmentCategories v-bind="$props">EquipmentCategories</EquipmentCategories>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
