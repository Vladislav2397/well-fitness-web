import { shallowMount } from '@vue/test-utils'
import AccountInstruction /*, { type AccountInstructionProps }*/ from './AccountInstruction.vue'

describe('test AccountInstruction', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountInstruction, {
            propsData: {
                //
            } /* as AccountInstructionProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
