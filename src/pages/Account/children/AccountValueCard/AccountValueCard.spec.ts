import { shallowMount } from '@vue/test-utils'
import AccountValueCard /*, { type AccountValueCardProps }*/ from './AccountValueCard.vue'

describe('test AccountValueCard', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountValueCard, {
            propsData: {
                //
            } /* as AccountValueCardProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
