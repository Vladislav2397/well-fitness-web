import { shallowMount } from '@vue/test-utils'
import OrderInfoRow /*, { type OrderInfoRowProps }*/ from './OrderInfoRow.vue'

describe('test OrderInfoRow', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(OrderInfoRow, {
            propsData: {
                //
            } /* as OrderInfoRowProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
