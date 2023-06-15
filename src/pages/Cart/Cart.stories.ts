import { Story } from '@storybook/vue'

import Cart, { type CartProps } from './Cart.vue'

export default {
    title: 'undefined-path/Cart',
    component: Cart,
    argTypes: {},
}

const Template: Story<CartProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Cart },
    methods: {},
    template: `<Cart v-bind="$props">Cart</Cart>`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
