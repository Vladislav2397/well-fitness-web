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

export function getCartEquipments(
    cart: Cart,
    getById: (id: EquipmentId) => Equipment
) {
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
