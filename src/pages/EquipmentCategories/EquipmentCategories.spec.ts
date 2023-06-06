import { shallowMount } from '@vue/test-utils'
import EquipmentCategories from './EquipmentCategories.vue'

describe('EquipmentCategories spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(EquipmentCategories)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
