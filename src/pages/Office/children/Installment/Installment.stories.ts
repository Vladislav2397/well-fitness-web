import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Installment, { type InstallmentProps } from './Installment.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Installment',
    component: Installment,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<InstallmentProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Installment },
    methods: {
        handle: action('clicked'),
    },
    template: `<Installment v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
