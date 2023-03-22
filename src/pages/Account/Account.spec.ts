import { shallowMount } from '@vue/test-utils'
import Account /*, { type AccountProps }*/ from './Account.vue'

describe('test Account', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Account, {
            propsData: {
                //
            } /* as AccountProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
