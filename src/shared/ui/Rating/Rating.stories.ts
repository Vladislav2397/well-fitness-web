import Rating, { type RatingProps } from './Rating.vue'
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
    //
}
