import { shallowMount } from '@vue/test-utils'
import EquipmentPromoSection from './EquipmentPromoSection.vue'

describe('EquipmentPromoSection spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(EquipmentPromoSection)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
