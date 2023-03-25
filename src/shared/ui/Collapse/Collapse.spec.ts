import { shallowMount } from '@vue/test-utils'
import Collapse /*, { type CollapseProps }*/ from './Collapse.vue'

describe('test Collapse', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Collapse, {
            propsData: {
                //
            } /* as CollapseProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
