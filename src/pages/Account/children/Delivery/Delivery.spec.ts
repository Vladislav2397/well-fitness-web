import { shallowMount } from '@vue/test-utils'
import Delivery /*, { type DeliveryProps }*/ from './Delivery.vue'

describe('test Delivery', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Delivery, {
            propsData: {
                //
            } /* as DeliveryProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
