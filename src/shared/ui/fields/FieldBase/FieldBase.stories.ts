import { Story } from '@storybook/vue'

import FieldBase, { type FieldBaseProps } from './FieldBase.vue'

export default {
    title: 'undefined-path/FieldBase',
    component: FieldBase,
    argTypes: {},
}

const Template: Story<FieldBaseProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FieldBase },
    methods: {},
    template: `<FieldBase v-bind="$props">FieldBase</FieldBase>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
