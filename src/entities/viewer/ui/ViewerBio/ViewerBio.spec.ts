import { shallowMount } from '@vue/test-utils'
import ViewerBio /*, { type ViewerBioProps }*/ from './ViewerBio.vue'

describe('test ViewerBio', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(ViewerBio, {
            propsData: {
                //
            } /* as ViewerBioProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
