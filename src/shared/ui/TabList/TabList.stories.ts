import { Story } from '@storybook/vue'
import { useArgs } from '@storybook/client-api'
import TabList, { type TabListProps } from './TabList.vue'

export default {
    title: 'shared/TabList',
    component: TabList,
    argTypes: {
        list: [],
    },
}

const Template: Story<TabListProps> = (args, { argTypes }) => {
    const [, updateArgs] = useArgs()

    return {
        props: Object.keys(argTypes),
        components: { TabList },
        methods: {
            handle(value) {
                updateArgs({ ...args, value })
            },
        },
        template: '<TabList v-bind="$props" @input="handle"/>',
    }
}

export const Default = Template.bind({})
Default.args = {
    list: ['active tab', 'inactive tab'],
    value: 0,
}
