<template lang="pug">

.b-pagination
    .__item(
        v-for="(item, index) in range"
        :key="index"
        :class="{ 'active': item === active }"
        v-on="handlers(item)"
    ) {{ item }}

</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, Watch } from 'vue-property-decorator'
import { getPaginationArray } from './usePaginationView'

export type PaginationProps = Partial<
    Pick<Pagination, 'page' | 'total' | 'maxItems'>
>

/* FIXME: Поправить пагинацию, так как сейчас изменение сделано костыльно
    через watch
*/

@Component
export default class Pagination extends Vue {
    @Prop({ default: 1 }) page!: number
    @Prop({ default: 10 }) readonly total!: number
    @Prop({ default: 7 }) readonly maxItems!: number

    @Emit('changePage') changePageEmit(page: string) {
        return page
    }

    handlers(item: string) {
        if (Number.isNaN(+item)) return {}

        return {
            click: () => this.changePage(item),
        }
    }

    changePage(page: string) {
        this.active = page
        this.changePageEmit(page)
    }

    active = '1'

    get range() {
        return getPaginationArray(this.total, +this.active, this.maxItems)
    }

    @Watch('page')
    onChangePage(value: number) {
        this.active = `${value}`
    }
}
</script>

<!--<style lang="scss" src="./Pagination.critical.scss" />-->
