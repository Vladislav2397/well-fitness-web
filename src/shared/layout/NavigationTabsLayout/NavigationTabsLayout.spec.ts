import { shallowMount } from '@vue/test-utils'
import NavigationTabsLayout /*, { type NavigationTabsLayoutProps }*/ from './NavigationTabsLayout.vue'

describe('test NavigationTabsLayout', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(NavigationTabsLayout, {
            propsData: {
                //
            } /* as NavigationTabsLayoutProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
