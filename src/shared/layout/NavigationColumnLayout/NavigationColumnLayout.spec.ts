import { shallowMount } from '@vue/test-utils'
import NavigationColumnLayout /*, { type NavigationColumnLayoutProps }*/ from './NavigationColumnLayout.vue'

describe('test NavigationColumnLayout', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(NavigationColumnLayout, {
            propsData: {
                //
            } /* as NavigationColumnLayoutProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
