import { shallowMount } from '@vue/test-utils'
import Button from './Button.vue'

const href = 'https://google.com'
const to = '/'

describe('Button', () => {
    it('default snapshot', () => {
        const wrapper = shallowMount(Button)
        expect(wrapper.html()).toMatchSnapshot()
    })
    it.each([
        { tag: 'button' },
        { tag: 'div' },
        { tag: 'a', href },
        { tag: 'router-link', to },
    ])('with tag', ({ tag, href, to }) => {
        const wrapper = shallowMount(Button, {
            propsData: {
                tag,
                href,
                to,
            },
            stubs: ['router-link'],
            slots: {
                default: 'Button',
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
    it('as link', () => {
        const wrapper = shallowMount(Button, {
            propsData: {
                tag: 'a',
                href,
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
})
