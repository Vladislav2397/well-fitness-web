import { shallowMount } from '@vue/test-utils'
import Office /*, { type OfficeProps }*/ from './Office.vue'

describe('test Office', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Office, {
            propsData: {
                //
            } /* as OfficeProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
