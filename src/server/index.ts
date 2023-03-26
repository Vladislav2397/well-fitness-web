import { belongsTo, createServer, Factory, Model } from 'miragejs'
import { faker } from '@faker-js/faker'

const delay = (ms = 1000) =>
    new Promise(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve(null)
        }, ms)
    })

/**
 * Return random number from {min} to {max} with not included
 */
const randint = (min: number, max: number) => {
    return Math.min(Math.floor(Math.random() * (max - min + 1) + min), max - 1)
}

export const server = createServer({
    urlPrefix: 'http://localhost:8000',
    namespace: 'api',
    models: {
        article: Model.extend({
            //
        }),
        equipment: Model.extend({
            category: belongsTo(),
            brand: belongsTo(),
        }),
        category: Model.extend({
            //
        }),
        brand: Model.extend({
            //
        }),
    },
    routes() {
        this.get('articles', async function (schema, request) {
            const {
                page = 1,
                perPage = 10,
                type = 'blog',
            } = request.queryParams

            await delay()

            // @ts-ignore
            let { articles } = this.serialize(schema.articles.all()) as any[]

            if (type === 'news') {
                const getTimestamp = (date: Date) => date.getTime()

                console.log('type === news')

                articles = [...articles].sort(
                    (a, b) => getTimestamp(b.date) - getTimestamp(a.date)
                )
            }

            return {
                data: articles.slice((+page - 1) * +perPage, +page * +perPage),
                last_page: Math.floor(articles.length / +perPage),
            }
        })
        this.get('articles/:id', (schema, request) => {
            const { id } = request.params

            // @ts-ignore
            return schema.articles.find(id)
        })

        this.get('brands', function (schema, request) {
            const { category } = request.queryParams

            // @ts-ignore
            let { brands } = this.serialize(schema.brands.all()) as {
                brands: any[]
            }

            if (category) {
                brands = brands.filter(brand => {
                    // @ts-ignore
                    const equipment = schema.equpments.get(brand.equipmentId)

                    return equipment.categoryId === category
                })
            }

            return brands
        })
    },
    factories: {
        article: Factory.extend({
            title() {
                return faker.lorem.words(5)
            },
            description() {
                return faker.lorem.lines(2)
            },
            date() {
                return new Date(`2022-04-${randint(1, 25)}`)
            },
            image() {
                return {
                    src: faker.image.sports(640, 480, true),
                    alt: 'image',
                }
            },
        }),
        brand: Factory.extend({
            name() {
                return faker.lorem.word({ length: { min: 5, max: 10 } })
            },
            logo() {
                return faker.image.placeholder.imageUrl(320, 160)
            },
        }),
        category: Factory.extend({
            name() {
                return faker.lorem.words(randint(1, 3))
            },
        }),
        equipment: Factory.extend({
            name() {
                return faker.lorem.words(randint(1, 4))
            },
            brandId() {
                return randint(1, 14)
            },
            categoryId() {
                return randint(1, 9)
            },
        }),
    },
    seeds(server) {
        server.createList('article', 40)
        server.createList('category', 10)
        server.createList('brand', 14)
        server.createList('equipment', 50)
    },
})
