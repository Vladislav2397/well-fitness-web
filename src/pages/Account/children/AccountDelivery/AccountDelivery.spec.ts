import { shallowMount } from '@vue/test-utils'
import AccountDelivery /*, { type AccountDeliveryProps }*/ from './AccountDelivery.vue'

describe('test AccountDelivery', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountDelivery, {
            propsData: {
                //
            } /* as AccountDeliveryProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
