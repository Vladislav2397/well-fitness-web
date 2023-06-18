import { type Cart, addToCart, removeFromCart } from './domain'
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
})
