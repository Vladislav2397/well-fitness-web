import CardProductStats, {
    type CardProductStatsProps,
} from './CardProductStats.vue'
import { Story } from '@storybook/vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'entities/Equipment/CardProductStats',
    component: CardProductStats,
    argTypes: defineControls({
        isTitleBold: false,
        isRatingLabel: false,
        isPriceRow: false,
        hasRating: false,
    }),
}

const Template: Story<CardProductStatsProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CardProductStats },
    template: `<CardProductStats v-bind="$props" />`,
})

export const Default = Template.bind({})
Default.args = {
    equipment: {
        name: 'equipment name',
        price: [12345, 12355],
        info: [['key', 'value']],
        rating: 3,
        quantity: 3,
        hasShowRoom: true,
    },
    isTitleBold: false,
    isRatingLabel: false,
    isPriceRow: false,
    hasRating: false,
}
