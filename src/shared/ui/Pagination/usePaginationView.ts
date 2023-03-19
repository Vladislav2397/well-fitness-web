import { computed, ref } from 'vue'

function createRange(length: number, start = 0): number[] {
    return Array.from({ length }, (v, k) => start + k)
}

export const usePaginationView = (
    totalCount: number,
    initialPage = 1,
    initialMaxPages = 7
) => {
    const page = ref(initialPage)
    const pageCount = ref(totalCount)
    const maxItems = initialMaxPages - 1

    const ellipsis = '...'
    const pageStart = 1
    const pageEnd = pageCount.value

    const range = computed(() => {
        if (pageCount.value <= 0 || isNaN(pageCount.value)) return []

        if (maxItems <= pageStart) return [page.value]

        if (pageCount.value <= maxItems) {
            return createRange(pageCount.value, pageStart)
        }

        const even = maxItems % 2 === 0
        const middle = even ? maxItems / 2 : Math.floor(maxItems / 2)
        const left = even ? middle : middle + 1
        const right = pageCount.value - middle

        if (left - page.value >= 0) {
            return [
                ...createRange(Math.max(pageStart, maxItems - 1), pageStart),
                ellipsis,
                pageCount.value,
            ]
        } else if (page.value - right >= (even ? 1 : 0)) {
            const rangeLength = maxItems - 1
            const rangeStart = pageCount.value - rangeLength + 1
            return [
                pageStart,
                ellipsis,
                ...createRange(rangeLength, rangeStart),
            ]
        } else {
            const rangeLength = Math.max(1, maxItems - 3)
            const rangeStart =
                rangeLength === 1
                    ? page.value
                    : page.value - Math.ceil(rangeLength / 2) + 1
            return [
                pageStart,
                ellipsis,
                ...createRange(rangeLength, rangeStart),
                ellipsis,
                pageEnd,
            ]
        }
    })

    return {
        range: computed(() => range.value.map(item => `${item}`)),
        page,
    }
}

export const getPaginationArray = (
    totalCount: number,
    page = 1,
    initialMaxPages = 7
) => {
    const pageCount = totalCount
    const maxItems = initialMaxPages - 1

    const ellipsis = '...'
    const pageStart = 1
    const pageEnd = pageCount

    const range = () => {
        if (pageCount <= 0 || isNaN(pageCount)) return []

        if (maxItems <= pageStart) return [page]

        if (pageCount <= maxItems) {
            return createRange(pageCount, pageStart)
        }

        const even = maxItems % 2 === 0
        const middle = even ? maxItems / 2 : Math.floor(maxItems / 2)
        const left = even ? middle : middle + 1
        const right = pageCount - middle

        if (left - page >= 0) {
            return [
                ...createRange(Math.max(pageStart, maxItems - 1), pageStart),
                ellipsis,
                pageCount,
            ]
        } else if (page - right >= (even ? 1 : 0)) {
            const rangeLength = maxItems - 1
            const rangeStart = pageCount - rangeLength + 1
            return [
                pageStart,
                ellipsis,
                ...createRange(rangeLength, rangeStart),
            ]
        } else {
            const rangeLength = Math.max(1, maxItems - 3)
            const rangeStart =
                rangeLength === 1 ? page : page - Math.ceil(rangeLength / 2) + 1
            return [
                pageStart,
                ellipsis,
                ...createRange(rangeLength, rangeStart),
                ellipsis,
                pageEnd,
            ]
        }
    }

    return range().map(item => `${item}`)
}
