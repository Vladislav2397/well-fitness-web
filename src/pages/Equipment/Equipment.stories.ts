import { Story } from '@storybook/vue'

import Equipment, { type EquipmentProps } from './Equipment.vue'

export default {
    title: 'undefined-path/Equipment',
    component: Equipment,
    argTypes: {},
}

const Template: Story<EquipmentProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Equipment },
    methods: {},
    template: `<Equipment v-bind="$props">Equipment</Equipment>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
