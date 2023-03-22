import { shallowMount } from '@vue/test-utils'
import AsideLayout /*, { type AsideLayoutProps }*/ from './AsideLayout.vue'

describe('test AsideLayout', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AsideLayout, {
            propsData: {
                //
            } /* as AsideLayoutProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
