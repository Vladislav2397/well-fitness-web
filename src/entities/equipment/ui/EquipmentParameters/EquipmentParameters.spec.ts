import { shallowMount } from '@vue/test-utils'
import { EquipmentParameters } from './EquipmentParameters'

describe('EquipmentParameters component.spec', () => {
    test('Snapshot', () => {
        const wrapper = shallowMount(EquipmentParameters, {
            propsData: {
                equipment: {
                    info: [
                        {
                            label: 'label 1',
                            value: 'value 1',
                        },
                        {
                            label: 'label 2',
                            value: 'value 2',
                        },
                        {
                            label: 'label 3',
                            value: 'value 3',
                        },
                    ],
                },
            },
        })
        expect(wrapper).toMatchSnapshot()
    })
})
