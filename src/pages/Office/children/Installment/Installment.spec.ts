import { shallowMount } from '@vue/test-utils'
import Installment /*, { type InstallmentProps }*/ from './Installment.vue'

describe('test Installment', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Installment, {
            propsData: {
                //
            } /* as InstallmentProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
