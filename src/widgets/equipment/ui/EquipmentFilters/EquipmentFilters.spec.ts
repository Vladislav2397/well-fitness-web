import { shallowMount } from '@vue/test-utils'
import EquipmentFilters from './EquipmentFilters.vue'

describe('EquipmentFilters spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(EquipmentFilters)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
