import { Rating, type RatingProps } from './Rating'
import { StoryFn } from '@storybook/vue'

export default {
    title: 'shared/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        count: {
            control: {
                type: 'number',
                min: 0,
                max: 5,
            },
            description: 'Уровень рейтинга',
            table: {
                defaultValue: {
                    summary: '0',
                },
            },
        },
        hasLabel: {
            control: 'boolean',
            description: 'Показать лейбл',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
        isBold: {
            control: 'boolean',
            description: 'Сделать лейбл жирным',
            table: {
                defaultValue: {
                    summary: 'false',
                },
            },
        },
    },
}

const Template: StoryFn<RatingProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Rating },
    methods: {},
    template: '<Rating v-bind="$props"/>',
})

export const Default = Template.bind({})
Default.args = {
    count: 0,
    hasLabel: false,
    isBold: false,
}

const TemplateAll: StoryFn<RatingProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { Rating },
    methods: {},
    template: `<div>
        <Rating v-for="i in 6" :key="i" :count="i - 1"/>
    </div>`,
})

export const All = TemplateAll.bind({})
All.args = {}

export const Label = Template.bind({})
Label.args = {
    count: 3,
    hasLabel: true,
    isBold: false,
}

export const BoldLabel = Template.bind({})
BoldLabel.args = {
    count: 3,
    hasLabel: true,
    isBold: true,
}
