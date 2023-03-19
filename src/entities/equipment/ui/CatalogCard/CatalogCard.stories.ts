import CatalogCard from './CatalogCard.vue'

export default {
    title: 'CatalogCard',
    component: CatalogCard,
    argTypes: {},
}

const Template = (args: any, { argTypes }: any) => ({
    props: Object.keys(argTypes),
    components: { CatalogCard },
    methods: {},
    template: '<CatalogCard v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
