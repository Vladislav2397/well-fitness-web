import { shallowMount } from '@vue/test-utils'
import TheFooter /*, { type TheFooterProps }*/ from './TheFooter.vue'

describe('test TheFooter', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(TheFooter, {
            propsData: {
                //
            } /* as TheFooterProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
