<template lang="pug">

.b-pagination
    ._item(
        v-for="(item, index) in pagination"
        :key="index"
        :class="{ 'active': +(item) === +(currentValue) }"
        @click="currentValue = +(item)"
    ) {{ item }}

</template>

<script lang="ts">
import { Component, Prop, VModel, Vue } from 'vue-property-decorator'

function* range(start: number, end: number, step = 1): Generator<number> {
    for (let i = start; i < end; i += step) {
        yield i
    }
}

@Component
export default class Pagination extends Vue {
    @VModel() currentValue!: number

    @Prop({ default: 10 }) readonly quantity!: number
    @Prop({ default: 1 }) readonly prevVisiblePages!: number
    @Prop({ default: 1 }) readonly nextVisiblePages!: number

    maxPageCount = 6

    get index(): number {
        return this.range.indexOf(`${this.currentValue}`)
    }

    get prevAndNextIndexes(): [prev: number, next: number] {
        return [
            this.index - this.prevVisiblePages,
            this.index + this.nextVisiblePages,
        ]
    }

    get range(): string[] {
        return Array.from(range(1, 17)).map(item => `${item}`)
    }

    get currentRange(): string[] {
        let currentRange: string[] = []

        const [prevIndex, nextIndex] = this.prevAndNextIndexes

        if (this.index <= this.prevVisiblePages) {
            currentRange.push(
                ...this.range.slice(0, this.index + 1 + this.nextVisiblePages)
            )
        } else if (this.index >= this.quantity - this.nextVisiblePages - 1) {
            currentRange.push(
                ...this.range.slice(prevIndex, nextIndex + this.nextVisiblePages)
            )
        } else if (this.index > this.prevVisiblePages && this.index < this.range.length - 2) {
            currentRange.push(
                ...this.range.slice(prevIndex, nextIndex + 1)
            )
        }

        return currentRange
    }

    get pagination(): (string | number)[] {
        const [prevIndex, nextIndex] = this.prevAndNextIndexes

        let result: (string | number | undefined)[] = [
            '1', '...', `${this.quantity}`
        ]

        if (this.index < 2 || this.index > this.quantity - 2) {
            result = [
                ...this.range.slice(0, Math.round(this.maxPageCount / 2)),
                '...',
                ...this.range.slice(
                    this.quantity - this.maxPageCount / 2, this.quantity
                )
            ]
        } else {
            if (prevIndex < 1) {
                result.splice(0, 2, ...this.currentRange, '...')
            } else if (prevIndex < 2) {
                result.splice(1, 1, ...this.currentRange, '...')
            } else if (nextIndex > this.quantity - 2) {
                result.splice(1, 2, '...', ...this.currentRange)
            } else if (nextIndex > this.quantity - 3) {
                result.splice(1, 1, '...', ...this.currentRange)
            } else {
                result.splice(1, 1, '...', ...this.currentRange, '...')
            }
        }

        return result.map(item => `${item}`)
    }
}

</script>

<!--<style lang="scss" src="./Pagination.critical.scss" />-->
