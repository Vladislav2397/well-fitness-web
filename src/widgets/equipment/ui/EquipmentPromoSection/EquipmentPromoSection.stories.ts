import { Story } from '@storybook/vue'

import EquipmentPromoSection, {
    type EquipmentPromoSectionProps,
} from './EquipmentPromoSection.vue'

export default {
    title: 'undefined-path/EquipmentPromoSection',
    component: EquipmentPromoSection,
    argTypes: {},
}

const Template: Story<EquipmentPromoSectionProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentPromoSection },
    methods: {},
    template: `<EquipmentPromoSection v-bind="$props">EquipmentPromoSection</EquipmentPromoSection>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
