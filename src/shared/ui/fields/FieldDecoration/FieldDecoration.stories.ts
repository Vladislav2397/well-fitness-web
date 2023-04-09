import { Story } from '@storybook/vue'

import FieldDecoration, {
    type FieldDecorationProps,
} from './FieldDecoration.vue'

export default {
    title: 'undefined-path/FieldDecoration',
    component: FieldDecoration,
    argTypes: {},
}

const Template: Story<FieldDecorationProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FieldDecoration },
    methods: {},
    template: `<FieldDecoration v-bind="$props">FieldDecoration</FieldDecoration>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
