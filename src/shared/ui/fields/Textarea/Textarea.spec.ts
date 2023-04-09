import { shallowMount } from '@vue/test-utils'
import Textarea from './Textarea.vue'

describe('Textarea spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Textarea)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
