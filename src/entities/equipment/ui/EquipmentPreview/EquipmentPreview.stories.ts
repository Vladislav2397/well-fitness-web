import EquipmentPreview, {
    type EquipmentPreviewProps,
} from './EquipmentPreview.vue'
import { Story } from '@storybook/vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'entities/Equipment/EquipmentPreview',
    component: EquipmentPreview,
    argTypes: defineControls({
        title: '',
        theme: ['dark', 'light', 'secondary'],
        stretch: ['vertical', 'horizontal', 'default', 'none'],
    }),
}

const Template: Story<EquipmentPreviewProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { EquipmentPreview },
    template: `<EquipmentPreview v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    theme: 'dark',
    stretch: 'horizontal',
}
