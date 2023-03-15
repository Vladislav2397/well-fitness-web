import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import BrandLogo, { type BrandLogoProps } from './BrandLogo.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/BrandLogo',
    component: BrandLogo,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<BrandLogoProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BrandLogo },
    methods: {
        handle: action('clicked'),
    },
    template: `<BrandLogo v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
