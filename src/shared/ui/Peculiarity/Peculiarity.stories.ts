import { Story } from '@storybook/vue'
import Peculiarity, { type PeculiarityProps } from './Peculiarity.vue'

export default {
    title: 'shared/Peculiarity',
    component: Peculiarity,
    argTypes: {
        list: [],
    },
}

const Template: Story<PeculiarityProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Peculiarity },
    methods: {},
    template: '<Peculiarity v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    title: 'title',
    list: [
        ['key', 'value'],
        ['key', 'value'],
        ['key', 'value'],
    ],
}
