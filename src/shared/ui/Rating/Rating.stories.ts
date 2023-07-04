import { Rating, type RatingProps } from './Rating'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Rating',
    component: Rating,
    argTypes: {},
}

const Template: Story<RatingProps> = (args, { argTypes }) => ({
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
