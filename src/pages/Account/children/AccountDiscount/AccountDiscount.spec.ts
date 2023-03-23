import { shallowMount } from '@vue/test-utils'
import AccountDiscount /*, { type AccountDiscountProps }*/ from './AccountDiscount.vue'

describe('test AccountDiscount', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountDiscount, {
            propsData: {
                //
            } /* as AccountDiscountProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
