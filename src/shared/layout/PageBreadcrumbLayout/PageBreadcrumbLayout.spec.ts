import { shallowMount } from '@vue/test-utils'
import PageBreadcrumbLayout /*, { type PageBreadcrumbLayoutProps }*/ from './PageBreadcrumbLayout.vue'

describe('test PageBreadcrumbLayout', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(PageBreadcrumbLayout, {
            propsData: {
                //
            } /* as PageBreadcrumbLayoutProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
