import { shallowMount } from '@vue/test-utils'
import Services /*, { type ServicesProps }*/ from './Services.vue'

describe('test Services', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Services, {
            propsData: {
                //
            } /* as ServicesProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
