<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { CreateElement, VNode } from 'vue'

export type Point = [x: number, y: number, sizeX: number, sizeY: number]

const converted = (cls: string) => `vue-grid__${cls}`
const classes = {
    first: converted('first'),
    middle: converted('middle'),
    last: converted('last'),
    single: converted('single'),
}

@Component
export default class VueGrid extends Vue {
    @Prop() readonly layout!: Point[]

    get rows(): Set<number> {
        return new Set(this.layout.map(item => item[1]))
    }

    get cols(): Set<number> {
        return new Set(this.layout.map(item => item[0]))
    }

    get correctList(): VNode[] {
        return (
            this?.$slots?.default?.filter(item => item.tag !== undefined) ?? []
        )
    }

    render(h: CreateElement): VNode {
        const tbody = h('tbody', {}, [])

        let i = 0

        for (const row of this.rows) {
            const rowChildren = []

            const currentRows = this.layout.filter(item => item[1] === +row)

            for (const col of currentRows) {
                const slotChildren =
                    this.$slots.default && this.$slots.default[i]

                const isFirst = col[0] === 0
                const isLast = col[0] === Math.max(...this.cols)
                const isSingle = isFirst && currentRows.length === 1

                rowChildren.push(
                    h(
                        'td',
                        {
                            class: isSingle
                                ? classes.single
                                : [
                                      isFirst && classes.first,
                                      !isFirst && !isLast && classes.middle,
                                      isLast && classes.last,
                                  ],
                            style: {
                                width: `${100 / this.cols.size}%`,
                            },
                            attrs: {
                                colspan: col[2],
                                rowspan: col[3],
                            },
                        },
                        [slotChildren]
                    )
                )
                i++
            }
            tbody.children?.push(h('tr', {}, rowChildren))
        }

        const children = [tbody]

        return h(
            'table',
            {
                class: 'vue-grid',
            },
            children
        )
    }
}
</script>

<style lang="scss" src="./VueGrid.critical.scss" />
<!--<style lang="scss" src="./VueGrid.main.scss" />-->
