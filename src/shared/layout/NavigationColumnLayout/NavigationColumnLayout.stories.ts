import { Story } from '@storybook/vue'

import NavigationColumnLayout, {
    type NavigationColumnLayoutProps,
} from './NavigationColumnLayout.vue'
import { defineControls } from '@/shared/lib/stories'
import DeviceProvider from '@/shared/lib/providers/device'

export default {
    title: 'shared/NavigationColumnLayout',
    component: NavigationColumnLayout,
    argTypes: defineControls({
        //
    }),
}

const Template: Story<NavigationColumnLayoutProps> = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { NavigationColumnLayout },
    mixins: [DeviceProvider],
    template: `<NavigationColumnLayout v-bind="$props">
        <template #brand>Brand</template>
        <template #equipment>Equipment</template>
        <template #text>Text</template>
        <template #instruction>Instruction for equipment</template>
    </NavigationColumnLayout>`,
})

export const Default = Template.bind({})
Default.args = {
    navigation: [
        { key: 'brand', text: 'Brand' },
        { key: 'equipment', text: 'Equipment' },
        { key: 'text', text: 'Text' },
        { key: 'instruction', text: 'Instruction' },
    ],
}
