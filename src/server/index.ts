import { createServer, Factory, Model } from 'miragejs'

const delay = (ms = 1000) =>
    new Promise(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve(null)
        }, ms)
    })

export const server = createServer({
    urlPrefix: 'http://localhost:8000',
    namespace: 'api',
    models: {
        article: Model.extend({
            //
        }),
    },
    routes() {
        this.get('articles', async function (schema, request) {
            const { page = 1, perPage = 10 } = request.queryParams

            await delay()

            // @ts-ignore
            const { articles } = this.serialize(schema.articles.all()) as any[]

            return {
                // @ts-ignore
                data: articles.slice((+page - 1) * +perPage, +page * +perPage),
                last_page: Math.floor(articles.length / +perPage),
            }
        })
        this.get('articles/:id', (schema, request) => {
            const { id } = request.params

            // @ts-ignore
            return schema.articles.find(id)
        })
    },
    factories: {
        article: Factory.extend({
            title(i) {
                return `article title ${i + 1}`
            },
            description(i) {
                return `article description ${i + 1}`
            },
            date() {
                return '12.12.2020'
            },
            image() {
                return {
                    src: 'images/carousel/1.png',
                    alt: 'image',
                }
            },
        }),
    },
    seeds(server) {
        server.createList('article', 40)
    },
})
