import { shallowMount } from '@vue/test-utils'
import FieldDecoration from './FieldDecoration.vue'

describe('FieldDecoration spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(FieldDecoration)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
