import { shallowMount } from '@vue/test-utils'
import SideViewer /*, { type SideViewerProps }*/ from './SideViewer.vue'

describe('test SideViewer', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(SideViewer, {
            propsData: {
                //
            } /* as SideViewerProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
