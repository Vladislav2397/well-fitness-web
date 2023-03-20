import { shallowMount } from '@vue/test-utils'
import Service /*, { type ServiceProps }*/ from './Service.vue'

describe('test Service', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Service, {
            propsData: {
                //
            } /* as ServiceProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
