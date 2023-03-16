import { createServer, Factory, Model } from 'miragejs'

export const server = createServer({
    urlPrefix: 'http://localhost:8000',
    namespace: 'api',
    models: {
        article: Model.extend({
            //
        }),
    },
    routes() {
        this.get('articles', (schema, request) => {
            const { limit = 9, offset = 0 } = request.queryParams

            // @ts-ignore
            const articles = schema.articles.all()

            return articles.slice(+offset, +limit + +offset)
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
