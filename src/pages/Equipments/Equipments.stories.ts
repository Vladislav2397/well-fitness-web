import { Story } from '@storybook/vue'

import Equipments, { type EquipmentsProps } from './Equipments.vue'

export default {
    title: 'undefined-path/Equipments',
    component: Equipments,
    argTypes: {},
}

const Template: Story<EquipmentsProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Equipments },
    methods: {},
    template: `<Equipments v-bind="$props">Equipments</Equipments>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
