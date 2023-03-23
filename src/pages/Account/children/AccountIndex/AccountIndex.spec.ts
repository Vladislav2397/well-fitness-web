import { shallowMount } from '@vue/test-utils'
import AccountIndex /*, { type AccountIndexProps }*/ from './AccountIndex.vue'

describe('test AccountIndex', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountIndex, {
            propsData: {
                //
            } /* as AccountIndexProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
