import { reactive, ref } from 'vue'

type QueryPagination = { page: number; perPage: number; lastPage: number }
type QueryFilters = Record<string, unknown>

export type QueryFetcher = (
    params: Pick<QueryPagination, 'page' | 'perPage'> & QueryFilters
) => Promise<void | { lastPage: number }>

type QueryConfig = {
    immediate?: boolean
    initialValue?: Partial<QueryPagination & QueryFilters>
}

// TODO: move this function to utils
const omit = (obj: Record<string, unknown>, filterFields: string[]) => {
    const filteredKeys = Object.keys(obj).filter(
        key => !filterFields.includes(key)
    )

    return Object.fromEntries(filteredKeys.map(key => [key, obj[key]]))
}

export const useQuery = (fetcher: QueryFetcher, config?: QueryConfig) => {
    const isPending = ref(config?.immediate ?? false)
    const pagination = reactive<QueryPagination>({
        page: config?.initialValue?.page ?? 1,
        perPage: config?.initialValue?.perPage ?? 10,
        lastPage: config?.initialValue?.lastPage ?? 2,
    })
    const filters = ref({
        ...(config?.initialValue && {
            ...omit(config.initialValue, ['page', 'perPage', 'lastPage']),
        }),
    })

    async function nextPage() {
        await changePage(pagination.page + 1)
    }

    async function prevPage() {
        await changePage(pagination.page - 1)
    }

    async function changePage(page: number) {
        try {
            if (page < 1 || page > pagination.lastPage) return

            await fetch({ page })
            pagination.page = page
        } catch (error) {
            console.error(error)
        }
    }
    async function changePerPage(perPage: number) {
        try {
            await fetch({ perPage, page: 1 })

            pagination.page = 1
            pagination.perPage = perPage
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Change filters after call fetcher with correctly params (reset page to 1)
     */
    async function setFilter(key: string, value: unknown) {
        try {
            await fetch({ [key]: value, page: 1 })
            pagination.page = 1
            filters.value[key] = value
        } catch (error) {
            console.error(error)
        }
    }

    async function setFilters(newFilters: QueryFilters) {
        try {
            await fetch({ ...newFilters, page: 1 })
            pagination.page = 1
            filters.value = {
                ...filters.value,
                ...newFilters,
            }
        } catch (error) {
            console.error(error)
        }
    }

    /**
     * Call fetcher with new value of pagination
     */
    async function fetch(newValue: any) {
        try {
            isPending.value = true
            const { page, perPage } = pagination
            const response = await fetcher({
                ...{ page, perPage },
                ...filters.value,
                ...newValue,
            })

            if (response && response.lastPage !== pagination.lastPage) {
                pagination.lastPage = response.lastPage
            }
        } catch (error) {
            // TODO: handle error
            console.error(error)
        } finally {
            isPending.value = false
        }
    }

    if (config?.immediate) {
        fetch({}).then()
    }

    return {
        isPending,
        pagination,
        filters,
        nextPage,
        prevPage,
        changePage,
        changePerPage,
        setFilter,
        setFilters,
    }
}
