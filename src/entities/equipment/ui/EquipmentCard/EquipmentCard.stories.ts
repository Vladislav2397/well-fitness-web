import EquipmentCard, { type EquipmentCardProps } from './EquipmentCard.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'entities/Equipment/EquipmentCard',
    component: EquipmentCard,
}

const Template: Story<EquipmentCardProps> = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { EquipmentCard },
    provide: {
        $device: {
            size: {
                mobile: false,
                tablet: false,
                desktop: true,
            },
        },
    },
    template: `<EquipmentCard v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    equipment: {
        name: 'equipment name',
        info: [['key', 'value']],
        image: {
            src: 'path/to/image',
            alt: 'image',
        },
        hasShowRoom: false,
        quantity: 3,
        rating: 5,
        price: [12345, 12355],
    },
}
