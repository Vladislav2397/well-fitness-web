import { shallowMount } from '@vue/test-utils'
import AccountProfile /*, { type AccountProfileProps }*/ from './AccountProfile.vue'

describe('test AccountProfile', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountProfile, {
            propsData: {
                //
            } /* as AccountProfileProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
