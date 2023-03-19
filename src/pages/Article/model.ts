import { domain } from '@/shared/lib'
import { articleApi } from '@/entities/article'
import { ref } from 'vue'
import { useQuery } from '@/shared/lib/hooks/useQuery'

export const useArticle = (id: domain.ArticleId) => {
    const article = ref(null)

    const fetcher = async () => {
        article.value = await articleApi.getArticle(id)
    }

    const { isPending } = useQuery(fetcher, { immediate: true })

    return { article, isPending }
}
