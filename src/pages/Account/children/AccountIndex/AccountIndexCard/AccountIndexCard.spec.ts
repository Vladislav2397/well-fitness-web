import { shallowMount } from '@vue/test-utils'
import AccountIndexCard /*, { type AccountIndexCardProps }*/ from './AccountIndexCard.vue'

describe('test AccountIndexCard', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountIndexCard, {
            propsData: {
                //
            } /* as AccountIndexCardProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
