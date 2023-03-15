import { shallowMount } from '@vue/test-utils'
import IdeaCard /*, { type IdeaCardProps }*/ from './IdeaCard.vue'

describe('IdeaCard', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(IdeaCard, {
            propsData: {
                idea: {
                    image: {
                        src: 'path/to/image',
                        alt: 'image',
                    },
                },
            } /* as IdeaCardProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
