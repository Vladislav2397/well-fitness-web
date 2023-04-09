import { Story } from '@storybook/vue'

import Datepicker, { type DatepickerProps } from './Datepicker.vue'

export default {
    title: 'undefined-path/Datepicker',
    component: Datepicker,
    argTypes: {},
}

const Template: Story<DatepickerProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Datepicker },
    methods: {},
    template: `<Datepicker v-bind="$props">Datepicker</Datepicker>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
