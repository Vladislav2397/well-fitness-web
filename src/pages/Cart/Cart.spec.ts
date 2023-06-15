import { shallowMount } from '@vue/test-utils'
import Cart from './Cart.vue'

describe('Cart spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Cart)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
