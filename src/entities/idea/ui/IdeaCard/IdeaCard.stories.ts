import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import IdeaCard, { type IdeaCardProps } from './IdeaCard.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'undefined-path/IdeaCard',
    component: IdeaCard,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<IdeaCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { IdeaCard },
    methods: {
        handle: action('clicked'),
    },
    template: `<IdeaCard v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    //
}
