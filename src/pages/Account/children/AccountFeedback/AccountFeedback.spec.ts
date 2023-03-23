import { shallowMount } from '@vue/test-utils'
import AccountFeedback /*, { type AccountFeedbackProps }*/ from './AccountFeedback.vue'

describe('test AccountFeedback', () => {
    test('snapshot', () => {
        const wrapper = shallowMount(AccountFeedback, {
            propsData: {
                //
            } /* as AccountFeedbackProps*/,
        })
        expect(wrapper).toMatchSnapshot()
    })
})
