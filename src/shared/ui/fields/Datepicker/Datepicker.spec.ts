import { shallowMount } from '@vue/test-utils'
import Datepicker from './Datepicker.vue'

describe('Datepicker spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(Datepicker)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
