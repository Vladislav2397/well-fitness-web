import { Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'

import ArticleCard, { type ArticleCardProps } from './ArticleCard.vue'
import { defineControls } from '@/shared/lib/stories'

export default {
    title: 'entities/Article/ArticleCard',
    component: ArticleCard,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<ArticleCardProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ArticleCard },
    methods: {
        handle: action('clicked'),
    },
    template: `<ArticleCard v-bind="$props" @click="handle" />`,
})

export const Default = Template.bind({})
Default.args = {
    article: {
        image: {
            src: 'path/to/image',
            alt: 'image',
        },
        title: 'article title',
        description: 'article description',
        date: Date.now(),
    },
}
