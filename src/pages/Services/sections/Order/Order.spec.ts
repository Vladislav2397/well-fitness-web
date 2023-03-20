import { shallowMount } from '@vue/test-utils'
import Order /*, { type OrderProps }*/ from './Order.vue'

describe('test Order', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Order, {
            propsData: {
                //
            } /* as OrderProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
