import { shallowMount } from '@vue/test-utils'
import Article /*, { type ArticleProps }*/ from './Article.vue'

describe('test Article', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(Article, {
            propsData: {
                //
            } /* as ArticleProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
