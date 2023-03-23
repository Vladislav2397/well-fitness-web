import { shallowMount } from '@vue/test-utils'
import AccountOrders /*, { type AccountOrdersProps }*/ from './AccountOrders.vue'

describe('test AccountOrders', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountOrders, {
            propsData: {
                //
            } /* as AccountOrdersProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
