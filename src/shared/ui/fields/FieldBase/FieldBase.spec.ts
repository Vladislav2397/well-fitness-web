import { shallowMount } from '@vue/test-utils'
import FieldBase from './FieldBase.vue'

describe('FieldBase spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(FieldBase)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
