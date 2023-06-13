import { storiesOf } from '@storybook/vue'
// @ts-ignore
import StoryRouter from 'storybook-vue-router'

import PageBreadcrumbLayout from './GridLayout.vue'

storiesOf('undefined-path/PageBreadcrumbLayout', module)
    .addDecorator(
        StoryRouter(
            {},
            {
                routes: [
                    {
                        path: '/',
                        name: 'index',
                        component: () => ({}),
                        meta: {
                            breadcrumbs: ['Блог'],
                            title: 'Блог',
                        },
                    },
                ],
            }
        )
    )
    .add('Default', () => ({
        components: { PageBreadcrumbLayout },
        template: `<PageBreadcrumbLayout v-bind="$props" />`,
    }))

// const Template: Story<PageBreadcrumbLayoutProps> = (args, { argTypes }) => ({
//     props: Object.keys(argTypes),
//     components: { PageBreadcrumbLayout },
//     methods: {
//         handle: action('clicked'),
//     },
//     template: `<PageBreadcrumbLayout v-bind="$props" @click="handle" />`,
// })
//
// export const Default = Template.bind({})
// Default.args = {
//     //
// }
