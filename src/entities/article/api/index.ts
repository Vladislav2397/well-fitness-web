export const getArticles = async (params?: {
    page?: number
    perPage?: number
    type?: 'blog' | 'news'
}) => {
    const { page = 1, perPage = 10, type = 'blog' } = params ?? {}

    const response = await fetch(
        `http://localhost:8000/api/articles?page=${page}&perPage=${perPage}&type=${type}`,
        {
            method: 'GET',
        }
    )

    const { data: articles, last_page } = await response.json()

    return { articles, last_page }
}

export const getArticle = async (id: number) => {
    const response = await fetch(`http://localhost:8000/api/articles/${id}`, {
        method: 'GET',
    })

    const { article } = await response.json()

    return article
}
