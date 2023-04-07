import {
    belongsTo,
    createServer,
    Factory,
    hasMany,
    Model,
    RestSerializer,
    Serializer,
} from 'miragejs'
import { faker } from '@faker-js/faker'
// import { utils } from '@/shared/lib'
import { randint } from 'burno-utils/random'

const delay = (ms = 1000) =>
    new Promise(resolve => {
        const timeout = setTimeout(() => {
            clearTimeout(timeout)
            resolve(null)
        }, ms)
    })

const createEquipment = (server: any) => {
    const brand = server.schema.findOrCreateBy('brand', {
        id: randint(1, 14),
    })
    const category = server.schema.findOrCreateBy('category', {
        id: randint(1, 6),
    })

    brand.update({ categoryIds: [...(brand.categoryIds ?? []), category.id] })

    server.create('equipment', { brand, category })
}

export const server = createServer({
    urlPrefix: 'http://localhost:8000',
    namespace: 'api',
    models: {
        article: Model.extend({
            //
        }),
        equipment: Model.extend({
            category: belongsTo({ inverse: 'category' }),
            brand: belongsTo({ inverse: 'brand' }),
        }),
        category: Model.extend({
            brand: hasMany(),
        }),
        brand: Model.extend({
            equipment: hasMany(),
            category: hasMany({ inverse: 'category' }),
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

        this.get('categories', function (schema) {
            // @ts-ignore
            const { categories } = this.serialize(schema.categories.all())

            // @ts-ignore
            return categories.map(category => ({
                key: category.id,
                text: category.name,
            }))
        })

        this.get('brands', function (schema, request) {
            const { category } = request.queryParams

            if (category) {
                // @ts-ignore
                return schema.brands.where(brand => {
                    console.log(brand)
                    return brand.categoryIds?.includes(category)
                })
            }

            // @ts-ignore
            return this.serialize(schema.brands.all())
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
                // console.log('brandId schema', JSON.stringify(this))

                return randint(1, 14)
            },
            categoryId() {
                return randint(1, 6)
            },
        }),
    },
    fixtures: {
        categories: [
            { name: 'Беговые дорожки' },
            { name: 'Эллиптические' },
            { name: 'Велотренажеры' },
            { name: 'Cтепперы' },
            { name: 'Горнолыжные' },
            { name: 'Гребные тренажеры' },
        ],
    },
    seeds(server) {
        server.loadFixtures()

        server.createList('article', 40)
        server.createList('brand', 14)
        // server.createList('equipment', 50)

        new Array(25).fill(0).forEach(() => {
            createEquipment(server)
        })

        console.log(server.db._collections[2])
    },
    serializers: {
        equipment: RestSerializer.extend({
            embed: true,
            include: ['brand', 'category'],
        }),
        brand: Serializer.extend({
            root: false,
            embed: true,
        }),
        categories: RestSerializer.extend({
            root: true,
        }),
    },
})
