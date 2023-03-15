import { shallowMount } from '@vue/test-utils'
import BrandLogo /*, { type BrandLogoProps }*/ from './BrandLogo.vue'

describe('test BrandLogo', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(BrandLogo, {
            propsData: {
                //
            } /* as BrandLogoProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
