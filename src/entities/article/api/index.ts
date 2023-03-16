export const getArticles = async (params?: {
    offset?: string | number
    limit?: string | number
}) => {
    const { offset = 0, limit = 10 } = params ?? {}

    const response = await fetch(
        `http://localhost:8000/api/articles?offset${offset}&limit=${limit}`,
        {
            method: 'GET',
        }
    )

    const { articles } = await response.json()

    return articles
}
