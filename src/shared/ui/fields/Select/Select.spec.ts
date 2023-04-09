import { shallowMount } from '@vue/test-utils'
import Select from './Select.vue'

describe('Select spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Select)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
