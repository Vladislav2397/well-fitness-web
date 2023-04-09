import { shallowMount } from '@vue/test-utils'
import BrandSelect from './BrandSelect.vue'

describe('BrandSelect spec', () => {
    it('Snapshot', () => {
        const wrapper = shallowMount(BrandSelect)
        expect(wrapper.html()).toMatchSnapshot()
    })
})
