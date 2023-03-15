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
        this.get('articles', schema => {
            // @ts-ignore
            return schema.articles.all()
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
                return `article title ${i}`
            },
            description(i) {
                return `article description ${i}`
            },
            date() {
                return '12.12.2020'
            },
        }),
    },
    seeds(server) {
        server.createList('article', 40)
    },
})
