import { Story } from '@storybook/vue'

import Textarea, { type TextareaProps } from './Textarea.vue'

export default {
    title: 'undefined-path/Textarea',
    component: Textarea,
    argTypes: {},
}

const Template: Story<TextareaProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Textarea },
    methods: {},
    template: `<Textarea v-bind="$props">Textarea</Textarea>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
