import { shallowMount } from '@vue/test-utils'
import Brands /*, { type BrandsProps }*/ from './Brands.vue'

describe('test Brands', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Brands, {
            propsData: {
                //
            } /* as BrandsProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
