import { Story } from '@storybook/vue'

import BrandSelect, { type BrandSelectProps } from './BrandSelect.vue'

export default {
    title: 'undefined-path/BrandSelect',
    component: BrandSelect,
    argTypes: {},
}

const Template: Story<BrandSelectProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BrandSelect },
    methods: {},
    template: `<BrandSelect v-bind="$props">BrandSelect</BrandSelect>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
