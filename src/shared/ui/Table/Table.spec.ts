import { shallowMount } from '@vue/test-utils'
import Table /*, { type TableProps }*/ from './Table.vue'

describe('test Table', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Table, {
            propsData: {
                //
            } /* as TableProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
