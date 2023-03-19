import Pagination, { type PaginationProps } from './Pagination.vue'
import { Story } from '@storybook/vue'
import { useArgs } from '@storybook/client-api'
import { action } from '@storybook/addon-actions'
import { numberControl } from '@/shared/lib/stories'

export default {
    title: 'shared/Pagination',
    component: Pagination,
    argTypes: {
        page: numberControl(),
        maxItems: numberControl(),
        total: numberControl(),
    },
}

const Template: Story<PaginationProps> = (args, { argTypes }) => {
    const [, updateArgs] = useArgs()

    return {
        props: Object.keys(argTypes),
        components: { Pagination },
        methods: {
            handle(page) {
                action('page changed to')
                updateArgs({ ...args, page })
            },
        },
        template: '<Pagination v-bind="$props" @changePage="handle"/>',
    }
}

export const Default = Template.bind({})
Default.args = {
    page: 1,
    maxItems: 9,
    total: 15,
}
