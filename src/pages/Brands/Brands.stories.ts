import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import Brands, { type BrandsProps } from './Brands.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/Brands',
    component: Brands,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<BrandsProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Brands },
    methods: {
        handle: action('clicked'),
    },
    template: `<Brands v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
