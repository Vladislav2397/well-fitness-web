import { shallowMount } from '@vue/test-utils'
import { Rating } from './Rating'

describe('Rating component.spec', () => {
    test.each([0, 1, 2, 3, 4, 5])('Snapshots for count=%s', count => {
        const wrapper = shallowMount(Rating, {
            propsData: {
                count,
            },
        })
        expect(wrapper).toMatchSnapshot()
    })
})
