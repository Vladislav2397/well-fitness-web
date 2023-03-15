import Pagination, { type PaginationProps } from './Pagination.vue'
import { Story } from '@storybook/vue'

export default {
    title: 'shared/Pagination',
    component: Pagination,
    argTypes: {},
}

const Template: Story<PaginationProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Pagination },
    methods: {},
    template: '<Pagination v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    quantity: 13,
    prevVisiblePages: 3,
    nextVisiblePages: 3,
}
