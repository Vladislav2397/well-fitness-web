import { CreateElement } from 'vue'
import { Component, VModel, Vue } from 'vue-property-decorator'
import { Select, type Option } from '@/shared/ui'

@Component
export default class ModelSelect extends Vue {
    @VModel() valueModel!: string | null

    options: Option[] = []

    async created() {
        this.options = [
            {
                id: 1,
                text: 'Беговая дорожка',
            },
        ]
    }

    render(h: CreateElement) {
        return h(Select, {
            props: {
                options: this.options,
                placeholder: 'Модель',
                label: 'Модель',
                ...this.$props,
            },
            on: {
                ...this.$listeners,
            },
        })
    }
}
