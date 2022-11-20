import { shallowMount } from '@vue/test-utils'
import Button from '../Button.vue'

describe('Button', () => {
    test('has data', () => {
        const wrapper = shallowMount(Button)
        expect(wrapper.vm.tag).toEqual('button')
    })
})
