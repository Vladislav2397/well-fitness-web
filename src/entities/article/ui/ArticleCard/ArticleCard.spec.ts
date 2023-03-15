import { shallowMount } from '@vue/test-utils'
import ArticleCard /*, { type ArticleCardProps }*/ from './ArticleCard.vue'

describe('test ArticleCard', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(ArticleCard, {
            propsData: {
                //
            } /* as ArticleCardProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
