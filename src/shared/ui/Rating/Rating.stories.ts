import { Rating, type RatingProps } from './Rating'
import { StoryFn } from '@storybook/vue'

export default {
    title: 'shared/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        count: {
            control: {
                type: 'number',
                min: 0,
                max: 5,
            },
            description: 'Уровень рейтинга',
            name: 'count*',
        },
        hasLabel: {
            control: 'boolean',
            description: 'Показать лейбл',
        },
        isBold: {
            control: 'boolean',
            description: 'Сделать лейбл жирным',
        },
    },
}

const Template: StoryFn<RatingProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Rating },
    methods: {},
    template: '<Rating v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    count: 0,
    hasLabel: false,
    isBold: false,
}
