import { shallowMount } from '@vue/test-utils'
import Project /*, { type ProjectProps }*/ from './Project.vue'

describe('test Project', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Project, {
            propsData: {
                //
            } /* as ProjectProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
