import { shallowMount } from '@vue/test-utils'
import Equipments from './Equipments.vue'

describe('Equipments spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Equipments)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
