import { shallowMount } from '@vue/test-utils'
import { Quantity } from './Quantity'

describe('Quantity component.spec', () => {
    test.each([0, 1, 2, 3])('Snapshots for count=%s', count => {
        const wrapper = shallowMount(Quantity, {
            propsData: {
                count,
            },
        })
        expect(wrapper).toMatchSnapshot()
    })
})
