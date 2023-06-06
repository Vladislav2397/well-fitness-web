import { shallowMount } from '@vue/test-utils'
import EquipmentList from './EquipmentList.vue'

describe('EquipmentList spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(EquipmentList)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
