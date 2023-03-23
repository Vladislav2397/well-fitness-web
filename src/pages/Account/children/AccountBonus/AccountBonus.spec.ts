import { shallowMount } from '@vue/test-utils'
import AccountBonus /*, { type AccountBonusProps }*/ from './AccountBonus.vue'

describe('test AccountBonus', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountBonus, {
            propsData: {
                //
            } /* as AccountBonusProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
