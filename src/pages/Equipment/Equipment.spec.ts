import { shallowMount } from '@vue/test-utils'
import Equipment from './Equipment.vue'

describe('Equipment spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Equipment)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
