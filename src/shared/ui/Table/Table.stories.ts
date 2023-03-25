import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Table, { type TableProps } from './Table.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Table',
    component: Table,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<TableProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Table },
    methods: {
        handle: action('clicked'),
    },
    template: `<Table v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
