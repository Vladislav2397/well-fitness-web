import { type Cart, addToCart, removeFromCart, getTotalPrice } from './domain'
import { Equipment } from '@/shared-kernel'

const equipment: Equipment = {
    id: '1',
    quantity: 2,
    name: 'name',
    info: [['key', 'value']],
    hasShowRoom: false,
    rating: 3,
    price: [10000, 12000],
    image: { src: 'src', alt: 'alt' },
}

const pool: Record<string, Equipment> = {
    '1': {
        id: '1',
        quantity: 2,
        name: 'name 1',
        info: [['key', 'value']],
        hasShowRoom: false,
        rating: 3,
        price: [10000, 12000],
        image: { src: 'src', alt: 'alt' },
    },
    '2': {
        id: '2',
        quantity: 0,
        name: 'name 2',
        info: [['key', 'value']],
        hasShowRoom: true,
        rating: 1,
        price: [20000, 25000],
        image: { src: 'src', alt: 'alt' },
    },
}

const getById = (id: string) => pool[id]

describe('Test Cart domain entity', () => {
    let cart: Cart
    let emptyCart: Cart

    beforeEach(() => {
        cart = {
            equipments: ['1'],
        }
        emptyCart = {
            equipments: [],
        }
    })

    test('should add item to cart', () => {
        expect(addToCart(emptyCart, equipment)).toStrictEqual(cart)
    })
    test('should remove item from cart', () => {
        expect(removeFromCart(cart, equipment)).toStrictEqual(emptyCart)
    })
    test.each([
        [
            { equipments: ['1', '2'] },
            {
                price: 37000,
                stock: 7000,
                total: 30000,
            },
        ],
        [
            {
                equipments: ['2'],
            },
            {
                price: 25000,
                stock: 5000,
                total: 20000,
            },
        ],
        [
            {
                equipments: [],
            },
            {
                price: 0,
                stock: 0,
                total: 0,
            },
        ],
    ])('should be correct output cart info', (enter, result) => {
        expect(getTotalPrice(enter, getById)).toStrictEqual(result)
    })
})
