<script lang="ts">
import { CreateElement } from 'vue'
import { Component, VModel, Vue } from 'vue-property-decorator'
import { Select } from '@/shared/ui'

export type BrandSelectProps = {
    //
}

@Component
export default class BrandSelect extends Vue {
    @VModel() valueModel!: string

    options: unknown[] = []

    async created() {
        this.options = [
            {
                id: 1,
                text: 'Bowflex',
            },
            {
                id: 2,
                text: 'BowflexPro',
            },
        ]
    }

    render(h: CreateElement) {
        return h(Select, {
            props: {
                label: 'Бренд',
                placeholder: 'Бренд',
                name: 'brand',
                options: this.options,
                ...this.$props,
            },
            on: {
                ...this.$listeners,
            },
        })
    }
}
</script>

<!-- <style lang="scss" src="./BrandSelect.critical.scss"> -->
<!-- <style lang="scss" src="./BrandSelect.main.scss"> -->
