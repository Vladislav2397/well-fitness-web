import type { Module } from 'vuex'
import type { Equipment } from '@/shared-kernel'

import {
    type Cart,
    addToCart,
    removeFromCart,
    getCartEquipments,
    getCartLength,
    hasEquipment,
    hasInStock,
} from './domain'

type CartState = {
    cart: Cart
}

export const cartModule: Module<CartState, any> = {
    namespaced: true,
    state: () => ({
        cart: {
            equipments: [],
        },
    }),
    mutations: {
        addToCart(state, equipment: Equipment) {
            const { cart } = state

            state.cart = addToCart(cart, equipment)
        },
        removeFromCart(state, equipment: Equipment) {
            const { cart } = state

            state.cart = removeFromCart(cart, equipment)
        },
    },
    getters: {
        list({ cart }, _, __, rootGetters) {
            const getById = rootGetters['equipment/getById']

            return getCartEquipments(cart, getById)
        },
        length({ cart }) {
            return getCartLength(cart)
        },
        hasEquipment({ cart }) {
            return (equipment: Equipment) => hasEquipment(cart, equipment)
        },
        hasInStock({ cart }) {
            return (equipment: Equipment) => hasInStock(cart, equipment)
        },
    },
}
