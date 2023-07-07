import {
    EquipmentParameters,
    type EquipmentParametersProps,
} from './EquipmentParameters'
import { StoryFn } from '@storybook/vue'

export default {
    title: 'entities/Equipment/EquipmentParameters',
    component: EquipmentParameters,
    argTypes: {},
}

const Template: StoryFn<EquipmentParametersProps> = (_, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentParameters },
    template: `<EquipmentParameters v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    equipment: {
        info: [
            {
                label: 'label 1',
                value: 'value 1',
            },
            {
                label: 'label 2',
                value: 'value 2',
            },
            {
                label: 'label 3',
                value: 'value 3',
            },
        ],
    },
}
