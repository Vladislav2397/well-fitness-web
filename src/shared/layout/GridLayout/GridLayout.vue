<template lang="pug">

.b-grid-layout(
    :style="styles"
)
    slot(
        v-for="item in list"
        :item="item"
    )

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type GridLayoutProps = PartialPick<GridLayout, 'layout' | 'list'>

@Component
export default class GridLayout extends Vue {
    @Prop() readonly layout!: [count: number, unit: `${number}fr`]
    @Prop({ default: () => [12, 12] }) readonly gap!: [
        column: number,
        row: number
    ]
    @Prop() readonly list!: any[]

    get styles() {
        const [count, unit] = this.layout
        const [column, row] = this.gap

        return {
            'grid-template-columns': `repeat(${count}, ${unit})`,
            'column-gap': `${column}px`,
            'row-gap': `${row}px`,
        }
    }
}
</script>

<!-- <style lang="scss" src="./PageBreadcrumbLayout.critical.scss" /> -->
<!-- <style lang="scss" src="./PageBreadcrumbLayout.main.scss" /> -->
