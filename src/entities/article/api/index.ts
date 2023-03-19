export const getArticles = async (params?: {
    page?: number
    perPage?: number
}) => {
    const { page = 1, perPage = 10 } = params ?? {}

    const response = await fetch(
        `http://localhost:8000/api/articles?page=${page}&perPage=${perPage}`,
        {
            method: 'GET',
        }
    )

    const { data: articles, last_page } = await response.json()

    return { articles, last_page }
}
