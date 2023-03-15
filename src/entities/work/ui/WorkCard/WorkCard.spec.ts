import { shallowMount } from '@vue/test-utils'
import WorkCard /*, { type WorkCardProps }*/ from './WorkCard.vue'

describe('test WorkCard', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(WorkCard, {
            propsData: {
                //
            } /* as WorkCardProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
