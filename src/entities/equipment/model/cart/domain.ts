import type { Equipment, EquipmentId } from '@/shared-kernel'

export type Cart = {
    equipments: EquipmentId[]
}

const array = {
    push<T>(array: T[], item: T): T[] {
        return [...array, item]
    },
}

export function addToCart(cart: Cart, equipment: Equipment): Cart {
    const { equipments } = cart

    return {
        equipments: array.push(equipments, equipment.id),
    }
}

export function removeFromCart(cart: Cart, equipment: Equipment): Cart {
    const { equipments } = cart

    return {
        equipments: equipments.filter(id => id !== equipment.id),
    }
}

type GetEquipmentById = (id: EquipmentId) => Equipment

export function getCartEquipments(cart: Cart, getById: GetEquipmentById) {
    return cart.equipments.map(getById)
}

export function getCartLength(cart: Cart): number {
    const { equipments } = cart

    return equipments.length
}

export function hasEquipment(cart: Cart, equipment: Equipment): boolean {
    const { equipments } = cart

    return equipments.includes(equipment.id)
}

export function hasInStock(cart: Cart, equipment: Equipment): boolean {
    return equipment.quantity > 0
}

function getEquipmentPrice(equipment: Equipment) {
    const [current, old] = equipment.price

    return { current, old }
}

function getEquipmentStock(equipment: Equipment) {
    const [current, old] = equipment.price

    return old - current
}

export function getTotalPrice(cart: Cart, getById: GetEquipmentById) {
    const { equipments } = cart

    return equipments.map(getById).reduce(
        ({ price, stock, total }, equipment) => {
            const { current, old } = getEquipmentPrice(equipment)
            const newStock = getEquipmentStock(equipment)

            return {
                price: price + old,
                stock: stock + newStock,
                total: total + current,
            }
        },
        {
            price: 0,
            stock: 0,
            total: 0,
        }
    )
}
