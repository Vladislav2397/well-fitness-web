import { ref } from 'vue'
import { articleApi } from '@/entities/article'

import { type domain } from '@/shared/lib'
import { type QueryFetcher, useQuery } from '@/shared/lib/hooks/useQuery'

type Article = Pick<
    domain.Article,
    'id' | 'title' | 'description' | 'date' | 'image'
>

export const useArticles = () => {
    const list = ref<Article[]>([])

    const fetcher: QueryFetcher = async params => {
        const { articles, last_page } = await articleApi.getArticles(params)

        list.value = articles

        return {
            lastPage: last_page,
        }
    }

    const { pagination, isPending, changePage } = useQuery(fetcher, {
        immediate: true,
        initialValue: {
            perPage: 9,
        },
    })

    return {
        list,
        isPending,
        pagination,
        changePage,
    }
}
